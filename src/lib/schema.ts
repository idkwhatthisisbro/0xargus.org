import { z } from 'zod';

export const whitelistSchema = z.object({
	id: z.string(),
	email: z.string().email(),
	name: z.string().nullable(),
	phone: z.object({
		countryCode: z.string().nullable(),
		number: z.string().nullable(),
		otp: z.string().nullable()
	}),

	_step: z.number().default(0)
});

export type WhitelistSchema = typeof whitelistSchema;
