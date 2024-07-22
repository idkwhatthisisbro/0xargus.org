<script lang="ts">
	export let data: {
		title: string;
		objective: string;
		details: string;
		status: 'COMING SOON' | 'IN PROGRESS' | 'COMPLETED';
		date: string;
		cardBg: string;
	}[] = [];
</script>

<div class="flex w-full max-w-full flex-col gap-16">
	<div class="flex w-full max-w-full snap-x snap-mandatory overflow-x-auto scroll-smooth">
		{#each data as { title, objective, details, status, date }, i}
			{#if i < 6}
				<div
					class={`relative flex min-w-[500px] snap-start snap-always flex-col gap-12 bg-[url('$lib/assets/subtle-prism.svg')] bg-cover bg-center p-8 text-white`}>
					<div
						class="absolute inset-0 bg-black"
						class:opacity-90={status === 'COMING SOON'}
						class:opacity-40={status === 'IN PROGRESS'}
						class:opacity-80={status === 'COMPLETED'}>
					</div>
					<!-- STATUS -->
					<div
						class="z-10 px-4 text-3xl"
						class:text-yellow-600={status === 'IN PROGRESS'}
						class:text-fuchsia-600={status === 'COMING SOON'}
						class:text-green-600={status === 'COMPLETED'}>
						<h2 class="font-semibold">{status}</h2>
						<h2 class="font-thin">{date}</h2>
					</div>

					<div
						class="z-10 flex h-full flex-col gap-2 rounded-lg border-2 bg-[#0E0C15] bg-opacity-70 p-4"
						class:border-yellow-600={status === 'IN PROGRESS'}
						class:border-fuchsia-600={status === 'COMING SOON'}
						class:border-green-600={status === 'COMPLETED'}>
						<!-- TITLE -->
						<h2 class="text-2xl font-bold uppercase text-white">{title}</h2>

						<!-- OBJECTIVE -->
						<div class="mt-4 flex flex-col gap-1">
							<h3
								class="text-xl font-bold"
								class:text-yellow-600={status === 'IN PROGRESS'}
								class:text-fuchsia-600={status === 'COMING SOON'}
								class:text-green-600={status === 'COMPLETED'}>
								OBJECTIVE
							</h3>

							<p>
								{objective}
							</p>
						</div>

						<!-- DETAILS -->
						<div class="mt-2 flex flex-col gap-1">
							<h3
								class="text-xl font-bold"
								class:text-yellow-600={status === 'IN PROGRESS'}
								class:text-fuchsia-600={status === 'COMING SOON'}
								class:text-green-600={status === 'COMPLETED'}>
								DETAILS
							</h3>

							<ul>
								{#each details as detail}
									<li class="mb-4">
										<strong class="uppercase underline">{detail.split(':')[0]}:</strong><br />
										{detail.split(':')[1]}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
