<script>
	import '../app.pcss';
	import Modal from 'svelte-simple-modal';

	const styles = {
		styleWindow: { backgroundColor: '#06000f', 'border-radius': '1rem', padding: '1rem' },
		styleCloseButton: { backgroundColor: '#fff !important', color: '#fff !important', stroke: '#ffffff !important', opacity: '0.4' }
	};
</script>

<Modal {...styles} classWindow="p-2 bg-neutral-950 rounded-3xl">
	<div class="relative overflow-hidden bg-neutral-950 font-outfit">
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
