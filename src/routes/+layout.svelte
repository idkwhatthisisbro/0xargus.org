<script>
	import '../app.pcss';
	import Modal from 'svelte-simple-modal';

	let styleWindow = { backgroundColor: '#0a0a0a' };
	let styleCloseButton = { backgroundColor: '#a855f7', color: '#ffffff', stroke: '#ffffff', opacity: '0.4' };
</script>

<Modal {styleWindow} {styleCloseButton} classWindow="p-2 bg-neutral-950 rounded-3xl">
	<slot />
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
