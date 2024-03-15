<script lang="ts">
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

