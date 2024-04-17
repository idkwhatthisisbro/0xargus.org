<script lang="ts">
	import { Menu } from 'lucide-svelte';
	import { Motion } from 'svelte-motion';

	const transition = {
		type: 'spring',
		mass: 0.5,
		damping: 11.5,
		stiffness: 100,
		restDelta: 0.001,
		restSpeed: 0.001
	};

	export let active: string | null;
	export let item: string;

	import Hamburger from '$lib/components/Hamburger.svelte';
</script>

<div on:mouseenter={() => (active = item)} on:mouseleave={() => (active = null)} class="relative z-50 text-white">
	<Motion let:motion transition={{ duration: 0.3 }}>
		<!-- <p use:motion class="text-whte cursor-pointer hover:opacity-[0.9]">
			<Menu class="min-h-12 min-w-12 rounded-full p-2 text-neutral-100 duration-500  ease-in-out hover:bg-white/10 hover:text-indigo-500" />
		</p> -->
		<Hamburger bind:open={active} />
	</Motion>
	{#if active !== null}
		<Motion let:motion initial={{ opacity: 0, scale: 0.85, y: 0 }} animate={{ opacity: 1, scale: 1, y: 0 }} {transition}>
			<div use:motion>
				{#if active === item}
					<div class="absolute left-1/2 -translate-x-1/2 transform pt-4">
						<Motion let:motion {transition} layoutId="active">
							<div use:motion class="overflow-hidden rounded-2xl border border-white/[0.2] bg-neutral-900 shadow-xl backdrop-blur-sm">
								<Motion let:motion layout>
									<div use:motion class="h-full w-max p-4">
										<slot />
									</div>
								</Motion>
							</div>
						</Motion>
					</div>
				{/if}
			</div>
		</Motion>
	{/if}
</div>
