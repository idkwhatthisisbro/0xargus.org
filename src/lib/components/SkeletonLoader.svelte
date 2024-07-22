<div
	class="relative h-[900px] w-full animate-pulse space-y-4 rounded-xl bg-neutral-800 px-12 py-24 pb-32">
	<div class="group flex w-full items-center justify-center gap-x-4">
		{#each Array(3) as _, i}
			<!-- <div class="relative flex items-center justify-center rounded-full border border-white/[0.3] p-1"> -->
			<div class={`inset-0 h-12 w-12 rounded-full bg-neutral-900`}></div>
			<!-- </div> -->
			{#if i !== 2}
				<!-- content here -->
				<hr class="w-12 border-neutral-900" />
			{/if}
		{/each}
	</div>
	<br />
	<br />
	<br />

	<!-- <div class="mt-24 h-12 rounded-xl bg-neutral-900"></div>
	<div class="h-6 rounded-md bg-neutral-900"></div>
	<div class="h-6 rounded-md bg-neutral-900"></div> -->

	<br />
	<br />
	<br />
	<div class="h-6 w-1/4 rounded-md bg-neutral-900"></div>
	<div class="h-12 rounded-xl bg-neutral-900"></div>
	<br />
	<br />
	<br />
	<div class="h-6 w-1/4 rounded-md bg-neutral-900"></div>
	<div class="mt-24 h-12 rounded-xl bg-neutral-900"></div>
	<div class="absolute inset-x-0 bottom-12 m-12 h-16 rounded-md bg-neutral-900"></div>
</div>

<style>
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
</style>
