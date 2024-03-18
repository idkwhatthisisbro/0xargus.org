import { z } from 'zod';

export const whitelistSchema = z.object({
	email: z.string().email(),
	password: z.string().default('teCghv7xWMryQMAxCxfC'),
	id: z.string().optional(),
	email_confirmed_at: z.string().optional()
});

export type WhitelistSchema = typeof whitelistSchema;
