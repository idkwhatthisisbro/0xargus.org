<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { TelInput, normalizedCountries, isSelected, clickOutsideAction } from 'svelte-tel-input';
	import 'svelte-tel-input/styles/flags.css';

	let selectedCountry: any = null;
	onMount(async () => {
		const req = await fetch('https://api.country.is/');

		const resp = await req.json();

		selectedCountry = (resp && resp?.country) || 'US';
	});

	export let clickOutside = true;
	export let closeOnClick = true;
	export let disabled = false;
	export let value = '';
	export let searchPlaceholder = 'Search';

	let searchText = '';
	let isOpen = false;
	export let valid = true;
	export let options = { invalidateOnCountryChange: true };

	$: selectedCountryDialCode = normalizedCountries.find((el) => el.iso2 === selectedCountry)?.dialCode || '';

	const toggleDropDown = (e) => {
		e?.preventDefault();
		if (disabled) return;
		isOpen = !isOpen;
	};

	const closeDropdown = (e) => {
		if (isOpen) {
			e?.preventDefault();
			isOpen = false;
			searchText = '';
		}
	};

	const selectClick = () => {
		if (closeOnClick) closeDropdown();
	};

	const closeOnClickOutside = () => {
		if (clickOutside) {
			closeDropdown();
		}
	};

	const sortCountries = (countries, text) => {
		const normalizedText = text.trim().toLowerCase();
		if (!normalizedText) {
			return countries.sort((a, b) => a.label.localeCompare(b.label));
		}
		return countries.sort((a, b) => {
			const aNameLower = a.name.toLowerCase();
			const bNameLower = b.name.toLowerCase();
			const aStartsWith = aNameLower.startsWith(normalizedText);
			const bStartsWith = bNameLower.startsWith(normalizedText);
			if (aStartsWith && !bStartsWith) return -1;
			if (!aStartsWith && bStartsWith) return 1;
			const aIndex = aNameLower.indexOf(normalizedText);
			const bIndex = bNameLower.indexOf(normalizedText);
			if (aIndex === -1 && bIndex === -1) return a.id.localeCompare(b.id);
			if (aIndex === -1) return 1;
			if (bIndex === -1) return -1;
			const aWeight = aIndex + (aStartsWith ? 0 : 1);
			const bWeight = bIndex + (bStartsWith ? 0 : 1);
			return aWeight - bWeight;
		});
	};

	const handleSelect = (val, e?) => {
		if (disabled) return;
		e?.preventDefault();
		if (selectedCountry === undefined || selectedCountry === null || (typeof selectedCountry === typeof val && selectedCountry !== val)) {
			selectedCountry = val;
			onChange(val);
			selectClick();
		} else {
			dispatch('same', { option: val });
			selectClick();
		}
	};

	const dispatch = createEventDispatcher();

	const onChange = (selectedCountry) => {
		dispatch('change', { option: selectedCountry });
	};
</script>

{#if selectedCountry}
	<div class="relative flex rounded-lg duration-200 ease-in-out {!valid ? `ring-2 ring-red-500 focus-within:ring-offset-red-500/50 focus:outline-none ` : ``}">
		<div class="flex" use:clickOutsideAction={closeOnClickOutside}>
			<button
				id="states-button"
				data-dropdown-toggle="dropdown-states"
				class="-border relative z-10 inline-flex flex-shrink-0 items-center overflow-hidden whitespace-nowrap rounded-l-lg border-r border-neutral-900/30 bg-neutral-700 px-4 py-2.5 text-center text-lg font-medium text-neutral-100 duration-200 ease-in-out hover:bg-neutral-600 focus:outline-none"
				type="button"
				role="combobox"
				aria-controls="dropdown-countries"
				aria-expanded="false"
				aria-haspopup="false"
				on:click={toggleDropDown}>
				{#if selectedCountry && selectedCountry !== null}
					<div class="inline-flex items-center text-left">
						<span class="flag flag-{selectedCountry.toLowerCase()} mr-3 flex-shrink-0" />
						<span class="text-neutral-300">+{selectedCountryDialCode}</span>
					</div>
				{:else}
					Please select
				{/if}
				<svg aria-hidden="true" class="ml-1 h-4 w-4 {isOpen ? 'rotate-180' : ''}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
				</svg>
			</button>
			{#if isOpen}
				<div
					id="dropdown-countries"
					class="absolute z-10 max-w-fit translate-y-11 divide-y divide-neutral-100 overflow-hidden rounded bg-neutral-800 shadow"
					data-popper-reference-hidden=""
					data-popper-escaped=""
					data-popper-placement="bottom"
					aria-orientation="vertical"
					aria-labelledby="country-button"
					tabindex="-1">
					<div class="max-h-48 overflow-y-auto text-lg text-neutral-300" aria-labelledby="countries-button" role="listbox">
						<input
							aria-autocomplete="list"
							type="text"
							class="text-neutral-30 0 sticky top-0 w-full bg-neutral-800 px-4 py-4 placeholder-neutral-300 focus:outline-none"
							bind:value={searchText}
							placeholder={searchPlaceholder} />
						{#each sortCountries(normalizedCountries, searchText) as country (country.id)}
							{@const isActive = isSelected(country.iso2, selectedCountry)}
							<div id="country-{country.iso2}" role="option" aria-selected={isActive}>
								<button
									value={country.iso2}
									type="button"
									class="inline-flex w-full overflow-hidden px-4 py-2 text-lg
                             hover:bg-neutral-600 active:bg-neutral-600
                            {isActive ? 'bg-neutral-600 text-neutral-200' : 'text-neutral-300 hover:text-white'}"
									on:click={(e) => {
										handleSelect(country.iso2, e);
									}}>
									<div class="inline-flex items-center text-left">
										<span class="flag flag-{country.iso2.toLowerCase()} mr-3 flex-shrink-0" />
										<span class="mr-2">{country.name}</span>
										<span class="text-neutral-400">+{country.dialCode}</span>
									</div>
								</button>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<TelInput
			id="tel-input"
			bind:country={selectedCountry}
			bind:value
			bind:valid
			{options}
			required={true}
			class="s  -border-neutral-600 -border-l-white/[0.2] block w-full rounded-r-lg bg-neutral-700 p-6 text-lg text-neutral-300
        placeholder-neutral-400 outline-none focus:outline-none" />
	</div>
{/if}
