import { z } from 'zod';

export const whitelistSchema = z.object({
	email: z.string().email().default('tseuq.test@inbox.testmail.app'),
	password: z.string().default('teCghv7xWMryQMAxCxfC')
});
