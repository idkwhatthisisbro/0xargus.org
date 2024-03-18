<script lang="ts">
	import SuperDebug from 'sveltekit-superforms';
	import WhitelistForm from '$lib/components/WhitelistForm.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<WhitelistForm data={data.form} id="whitelist-hero" />
<WhitelistForm data={data.form} id="whitelist-footer" />
