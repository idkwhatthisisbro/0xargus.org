<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { supabase, findUserByEmail, signUp } from '$lib/supabase/supabase';
	import { writable } from 'svelte/store';

	const emailAddress = 'tseuq.test@inbox.testmail.app';

	let ui = writable<{ id: string | null; email: string | null; email_confirmed_at: string | null }>({ id: null, email: null, email_confirmed_at: null });

	const testing = async (email: string) => {
		console.log('here' + email);
		let publicUsers = await findUserByEmail(email);

		// if user is not found, sign them up
		if (publicUsers.length === 0) {
			const authUser = await signUp(email);
			if (!authUser) return;

			$ui.id = authUser.id;
			$ui.email = authUser.email;
		}
		// if user is found
		if (publicUsers.length === 1) {
			$ui.id = publicUsers[0].id;
			$ui.email = publicUsers[0].email;

			// if user has confirmed email
			if (publicUsers[0].email_confirmed_at) {
				$ui.email_confirmed_at = publicUsers[0].email_confirmed_at;
			}
			// if user has not yet confirmed email
			if (publicUsers[0].email_confirmed_at === null) {
				// resend confirmation email and prompt user to check email
				const authUser = await signUp(email);
			}
		}
	};

	const channel = supabase
		.channel('schema-db-changes')
		.on(
			'postgres_changes',
			{
				event: 'UPDATE',
				schema: 'public'
			},
			(payload) => {
				if (payload.new.id === $ui.id) {
					$ui.email_confirmed_at = payload.new.email_confirmed_at;
				}
			}
		)
		.subscribe();
</script>

<div class="flex flex-col items-center justify-center gap-10 py-20">
	<button on:click={() => testing('tseuq.test@inbox.testmail.app')} class="rouned-md border-2 border-white px-2 py-1 text-white">REGISTER</button>

	{#if $ui.id}
		<div class="flex flex-col gap-5 text-lg text-white">
			<span>
				ID: {$ui.id}
			</span>
			<span>
				EMAIL: {$ui.email}
			</span>
			<span>
				EMAIL_CONFIRMED_AT: {$ui.email_confirmed_at}
			</span>
		</div>
	{/if}
</div>
