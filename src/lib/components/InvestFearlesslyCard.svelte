<script lang="ts">
	import {
		GlowingStarsBackgroundCard,
		GlowingStarsDescription,
		GlowingStarsTitle
	} from '$lib/components/ui/GlowingStars/';
	import { MoveRightIcon } from 'lucide-svelte';
	import { BASE_URL } from '../../constants';

	let className: string;
	export { className as class };
</script>

<a aria-label="presale" href="https://docs.0xargus.org" class="group cursor-pointer {className}">
	<GlowingStarsBackgroundCard>
		<GlowingStarsTitle>Invest Fearlessly</GlowingStarsTitle>
		<div class="flex items-end justify-between">
			<GlowingStarsDescription
				>Feel safe investing in small coins. Seamlessly integrate rugpull protection into all your
				favorite exchanges.</GlowingStarsDescription>
			<div
				class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 p-2 duration-200 ease-in-out group-hover:bg-neutral-900">
				<a
					role="button"
					tabindex="0"
					aria-label="presale"
					on:click={() => window.open(BASE_URL + '/presale', '_blank')}
					on:keydown={(event) => {
						if (event.key === 'Enter') window.open(BASE_URL + '/presale', '_blank');
					}}
					href="https://docs.0xargus.org"
					target="_blank"
					class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 p-2 duration-200 ease-in-out group-hover:bg-neutral-900">
					<MoveRightIcon
						class="h-4 w-4 stroke-2 text-white transition duration-200 group-hover:translate-x-0.5" />
				</a>
				<MoveRightIcon
					class="h-4 w-4 stroke-2 text-white transition duration-200 group-hover:translate-x-0.5" />
			</div>
		</div>
	</GlowingStarsBackgroundCard>
</a>
