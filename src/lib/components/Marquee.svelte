<script>
	import { Marquee } from 'flowbite-svelte';
	// ICONS
	import IconMetamask from '$lib/assets/metamask.svg?component';
	import IconUniswap from '$lib/assets/uniswap.svg?component';
	import IconSafePal from '$lib/assets/safepal.svg?component';
	import Icon1inch from '$lib/assets/1inch.svg?component';
</script>

<div class="mx-auto overflow-hidden rounded-xl border-dashed border-white/[0.2] py-24">
	<Marquee class="my-auto flex items-center justify-center py-12">
		<Icon1inch class="h-[40px] saturate-0" />
		<IconMetamask class=" h-[40px] saturate-0" />
		<IconUniswap class="h-[40px] saturate-0" />
		<IconSafePal class="h-[40px] saturate-0" />
	</Marquee>
</div>
