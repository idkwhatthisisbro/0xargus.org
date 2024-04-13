import { z } from 'zod';
import parsePhoneNumberFromString from 'libphonenumber-js';

const number = z.string().transform((arg, ctx) => {
	const phone = parsePhoneNumberFromString(arg, {
		// set this to use a default country when the phone number omits country code
		// defaultCountry: 'NG',

		// set to false to require that the whole string is exactly a phone number,
		// otherwise, it will search for a phone number anywhere within the string
		extract: false
	});

	// when it's good
	if (phone && phone.isValid()) {
		return phone.number;
	}

	// when it's not
	ctx.addIssue({
		code: z.ZodIssueCode.custom,
		message: 'Invalid phone number'
	});
	return z.NEVER;
});

export const whitelistSchema = z.object({
	name: z.string().min(6).default('aaaaaa'),
	email: z.string().email().default('s@s.com'),
	phone: z.object({
		number,
		otp: z.string()
	}),

	step: z.number().default(0)
});

export type WhitelistSchema = typeof whitelistSchema;
