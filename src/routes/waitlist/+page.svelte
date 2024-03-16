<script lang="ts">
<<<<<<< HEAD
   import { supabase, signUp } from "$lib/supabase/supabase";


   signUp('joneltmp+qruco@gmail.com').then(async (res) => {
      const { data, error } = res;

      if (error) {
         console.error(error);
      } else {
         console.log(data);
      }
   });

// register - send email confirmation

// if user already signed up but didn't confirm, email confirmation is resent (default behaviour)

// if user already signed up and confirmed, modal status changes to "confirmed"
</script>

=======
	import { supabase, signUp } from '$lib/supabase/supabase';

	const email = 'jocktmp+vlqrf@gmail.com';
   // signUp(email)

	async function findUserByEmail(email: string) {
		try {
			const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .select('*')

			if (error) throw error;

			return data;
		} catch (error) {
			console.error('Error finding user by email:', error.message);
			throw error;
		}
	}

	async function userExists(email: string) {
		try {
			const { data, error } = await supabase
            .from('users')
            .select('count(*)', { count: 'exact' })
            .eq('email', email);

			if (error) throw error;

			return data && data.length > 0
		} catch (error) {
			console.error('Error checking if user exists:', error.message);
			throw error;
		}
	}

	userExists(email).then((data) => {
		console.log(data);
	});

</script>
>>>>>>> ed0a20cbbd33bbcc18a048621dde15fd00f0ea7c
