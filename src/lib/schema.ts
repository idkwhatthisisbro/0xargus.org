import { z } from 'zod';
export const whitelistSchema = z.object({ email: z.string().email('Invalidators') });
