<script lang="ts">
	import Circles from '$lib/assets/circles@2x.png?enhanced';
	import SupportCardImage from '$lib/assets/SupportCardImage.png?enhanced';

	let className: string;
	export { className as class };
</script>

<div
	class="{className} relative grid min-h-64 w-full grid-rows-2 items-center justify-center gap-y-8 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600/50 via-indigo-600/60 to-indigo-600/40 px-4 py-12 shadow-xl sm:min-h-96 md:grid-cols-2 md:grid-rows-1 md:py-24">
	<div class="absolute">
		<enhanced:img src={Circles} alt="bg radial" />
	</div>

	<div class="z-20 h-full space-y-6 px-4 text-white sm:px-12">
		<p class="text-2xl font-semibold">Here, whenever - wherever</p>

		<p class="text-xl leading-normal text-indigo-50">
			Access Argus anywhere, from our webapp across all devices. With browser extensions for every major browser, and bots for telegram and discord. Argus is always with you.

			<br />
			<br />

			Get started with the Argus Beta today. Access our documentation to learn more about how Argus can protect your assets.
		</p>

		<a
			aria-label="learn more"
			href="docs.0xargus.org"
			class="flex h-14 w-36 items-center justify-center rounded-xl bg-neutral-950/[0.25] text-indigo-50 duration-200 ease-in-out hover:bg-neutral-950/30">
			<p class="text-lg font-medium">Learn more</p>
		</a>
	</div>

	<enhanced:img src={SupportCardImage} loading="lazy" class="rounded-xl opacity-90 shadow-lg" alt="support" />
</div>
