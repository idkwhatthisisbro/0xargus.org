<script>
	import '../app.pcss';
	import Modal from 'svelte-simple-modal';

	$: styleWindow = { backgroundColor: '#0a0a0a' };
	$: styleCloseButton = { backgroundColor: '#a855f7', color: '#ffffff', stroke: '#ffffff', opacity: '0.4' };
	// $: styleCloseButton = { backgroundColor: '#0a0a0a', color: '#ffffff', stroke: '#ffffff' };
</script>

<div class="relative flex flex-col bg-neutral-950">
	<Modal {styleWindow} {styleCloseButton} classWindow="p-2 bg-neutral-950 rounded-3xl">
		<slot />
	</Modal>
</div>
