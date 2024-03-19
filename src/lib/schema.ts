import { z } from 'zod';

export const whitelistSchema = z.object({
	email: z.string().email(),
	password: z.string().default('teCghv7xWMryQMAxCxfC'),
	id: z.string(),
	email_confirmed_at: z.string().nullable()
});

export type WhitelistSchema = typeof whitelistSchema;