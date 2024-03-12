<script>
	import '../app.pcss';
	import Modal from 'svelte-simple-modal';

	$: styleWindow = { backgroundColor: '#0a0a0a' };
	$: styleCloseButton = { backgroundColor: '#a855f7', color: '#ffffff', stroke: '#ffffff', opacity: '0.4' };
	// $: styleCloseButton = { backgroundColor: '#0a0a0a', color: '#ffffff', stroke: '#ffffff' };
</script>

<Modal {styleWindow} {styleCloseButton} classWindow="p-2 bg-neutral-950 rounded-3xl">
	<div class="relative bg-neutral-950 font-outfit">
		<slot />
	</div>
</Modal>

<style>
	::selection {
		background: #ff4500; /* Or any other color */
		color: white;
	}
	::-moz-selection {
		background: #ff4500; /* Or any other color */
		color: white;
	}
</style>
