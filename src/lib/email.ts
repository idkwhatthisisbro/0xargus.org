import { supabase } from './supabaseClient';

const messageType = {
	alreadyVerified: 'Email already verified',
	invalidEmail: 'Invalid email',
	success: 'Email successfully sent for verification',
	error: 'An error occurred while verifying the email. If the problem persists - Please contact support: help@0xargus.org.'
};

type MessageTypeValue = (typeof messageType)[keyof typeof messageType];

async function userSignUp(email: string): Promise<MessageTypeValue> {
	// Validate the email format using a simple regex pattern
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		throw new Error(messageType.invalidEmail);
	}

	// Check if the email is already verified in the database
	const { data, error } = await supabase.from('users').select('verified').eq('email', email).single();
	if (error) {
		throw new Error(messageType.error);
	}

	// If the user is found and the email is already verified, return alreadyVerified
	if (data && data.verified) {
		return messageType.alreadyVerified;
	} else if (data && !data.verified) {
		await sendVerificationEmail(email);
		return messageType.success;
	}

	// If the user is not found, insert the email as a new user and set verified to false
	if (!data) {
		await sendVerificationEmail(email);
		return messageType.success;
	}

	// If the user is found but the email is not verified, return error
	return messageType.error;
}

async function sendVerificationEmail(email: string) {
	const { data, error } = await supabase.auth.signInWithOtp({
		email
	});
}
