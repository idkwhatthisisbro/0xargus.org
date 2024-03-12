<script>
	import '../app.pcss';
	import Modal from 'svelte-simple-modal';

	$: styleWindow = { backgroundColor: '#0a0a0a' };
	$: styleCloseButton = { backgroundColor: '#a855f7', color: '#ffffff', stroke: '#ffffff', opacity: '0.4' };
	// $: styleCloseButton = { backgroundColor: '#0a0a0a', color: '#ffffff', stroke: '#ffffff' };
</script>

<div class="gradient-text select relative flex flex-col bg-neutral-950 font-outfit">
	<Modal {styleWindow} {styleCloseButton} classWindow="p-2 bg-neutral-950 rounded-3xl">
		<slot />
	</Modal>
</div>

<style>
	.gradient-text::selection {
		background: linear-gradient(to right, red, blue);
		-webkit-background-clip: text;
		color: transparent;
	}
	.gradient-text::-moz-selection {
		background: linear-gradient(to right, red, blue);
		-webkit-background-clip: text;
		color: transparent;
	}

	    ::selection {
        background: #ff4500; /* Or any other color */
        color: white;
    }
    ::-moz-selection {
        background: #ff4500; /* Or any other color */
        color: white;
    }
</style>
