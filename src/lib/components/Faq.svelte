<script lang="ts">
	import Section from '$lib/layouts/Section.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import * as AccordionL from '$lib/components/ui/AccordionL';

	export let data: { trigger: string; content: string }[] = [];
</script>

<Section id="faq">
	<SectionHeader title="Frequently Asked Questions" coloredPart="Frequently" subtitle="Get answers to the most common questions about 0xArgus" />
	<div class="flex items-center justify-center px-12 text-white sm:px-0">
		<AccordionL.Root class="w-full lg:max-w-[80%]">
			{#each data as item, index (item.trigger)}
				<AccordionL.Item value={`item-${index + 1}`}>
					<AccordionL.Trigger>{item.trigger}</AccordionL.Trigger>
					<AccordionL.Content>{item.content}</AccordionL.Content>
				</AccordionL.Item>
			{/each}
		</AccordionL.Root>
	</div>
</Section>
