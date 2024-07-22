<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { slide } from 'svelte/transition';
	import { cn } from '$lib/utils/cn';

	type $$Props = AccordionPrimitive.ContentProps;

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = slide;
	export let transitionConfig: $$Props['transitionConfig'] = {
		duration: 200
	};

	export { className as class };
</script>

<AccordionPrimitive.Content
	class={cn('text:lg overflow-hidden text-neutral-300 sm:text-2xl', className)}
	{transition}
	{transitionConfig}
	{...$$restProps}>
	<div class="pb-4 pt-0">
		<slot />
	</div>
</AccordionPrimitive.Content>
