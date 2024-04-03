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

<AccordionPrimitive.Content class={cn('overflow-hidden text-2xl text-neutral-300', className)} {transition} {transitionConfig} {...$$restProps}>
	<div class="pb-4 pt-0">
		<slot />
	</div>
</AccordionPrimitive.Content>
