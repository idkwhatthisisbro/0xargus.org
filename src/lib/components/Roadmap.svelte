<script lang="ts">
	export let data: {
		title: string;
		objective: string;
		details: string;
		status: 'IN PROGRESS' | 'COMING SOON' | 'COMPLETED';
		date: string;
		cardBg: string;
	}[] = [];
</script>

<div class="flex w-full max-w-full flex-col gap-16">
	<div class="flex w-full max-w-full snap-x snap-mandatory overflow-x-auto scroll-smooth">
		{#each data as { title, objective, details, status, date, cardBg }, i}
			{#if i < 6}
				<div
					class={`flex h-[800px] min-w-[500px] snap-start snap-always flex-col gap-8 p-14 text-white ${cardBg}`}>
					{#if i === 0}
						<div class="w-full text-start">
							<h1
								class="text-4xl font-medium text-white underline decoration-fuchsia-600 underline-offset-8 [text-decoration-thickness:8px]">
								ROADMAP
							</h1>
						</div>
					{/if}

					<!-- CONTENT -->
					<div class="mt-auto flex h-[85%] flex-col gap-4">
						<!-- TITLE -->
						<h2 class="text-2xl font-bold uppercase text-white">{title}</h2>

						<!-- STATUS -->
						<div
							class="text-3xl"
							class:text-yellow-600={status === 'IN PROGRESS'}
							class:text-fuchsia-600={status === 'COMING SOON'}
							class:text-green-600={status === 'COMPLETED'}>
							<h2 class="font-semibold">{status}</h2>
							<h2 class="font-thin">{date}</h2>
						</div>

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
									<li class="mb-2">
										<strong class="uppercase">{detail.split(':')[0]}:</strong><br />
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
