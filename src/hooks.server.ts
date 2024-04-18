import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const url = event.request.url;
	if (url.includes('/verification')) {
		return Response.redirect(`https://verification.0xargus.org`, 301);
	}

	return resolve(event);
};
