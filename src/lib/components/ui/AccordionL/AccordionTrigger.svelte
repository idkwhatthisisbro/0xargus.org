<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import { ChevronDown } from 'lucide-svelte';

	type $$Props = AccordionPrimitive.TriggerProps;
	type $$Events = AccordionPrimitive.TriggerEvents;

	export let level: AccordionPrimitive.HeaderProps['level'] = 3;
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		class={cn('flex flex-1 items-center justify-between py-4 text-lg font-medium transition-all hover:underline sm:text-2xl [&[data-state=open]>svg]:rotate-180', className)}
		{...$$restProps}
		on:click>
		<slot />
		<ChevronDown class="text-muted-foreground h-6 w-6 shrink-0 transition-transform duration-200" />
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
