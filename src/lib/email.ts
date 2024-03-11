import { supabase } from './supabaseClient';
import { env } from '$env/dynamic/private';
const accountSid = env.TWILIO_ACCOUNT_SID;
const authToken = env.TWILIO_AUTH_TOKEN;

import twilio from 'twilio';

const client = twilio(accountSid, authToken);

const messageType = {
	alreadyVerified: 'Email already verified',
	invalidEmail: 'Invalid email',
	success: 'Email successfully sent for verification',
	error: 'An error occurred while verifying the email. If the problem persists - Please contact support: help@0xargus.org.'
};

type MessageTypeValue = (typeof messageType)[keyof typeof messageType];

export async function userSignUp(email: string): Promise<MessageTypeValue> {
	// Validate the email format using a simple regex pattern
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		throw new Error(messageType.invalidEmail);
	}

	// Check if the email is already verified in the database
	const { data, error } = await supabase.from('users').select('email_verified').eq('email', email).single();
	if (error && !(error?.code === 'PGRST116')) {
		console.log(error);
		throw new Error(messageType.error);
	}

	// If the user is found and the email is already verified, return alreadyVerified
	if (data && data.email_verified) {
		throw new Error(messageType.alreadyVerified);
	} else if (data && !data.email_verified) {
		await sendVerificationEmail(email);
		return messageType.success;
	}

	// If the user is not found, insert the email as a new user and set verified to false
	if (!data) {
		const { data, error } = await supabase.from('users').insert([{ email, verified: false }]);
		await sendVerificationEmail(email);
		return messageType.success;
	}

	// If the user is found but the email is not verified, return error
	console.log('here');
	return messageType.error;
}

async function sendVerificationEmail(email: string) {
	const response = await client.verify.v2.services('SK329ea925a4178bf7bb48534e09bea499').verifications.create({ to: email, channel: 'email' });
	console.log(response);
	// If error report to Sentry

	// If success, return true - check for successful send
}

// Poll this function to check if the email has been verified
async function emailverificationCheck(email: string) {
	const verificationCheck = await client.verify.v2.services('SK329ea925a4178bf7bb48534e09bea499').verificationChecks.create({ to: email });
	if (verificationCheck.status === 'approved') {
		supabase.from('users').update({ verified: true }).eq('email', email);
		return true;
	}
	return false;
}
// ?TODO: Create event listener for email verification
