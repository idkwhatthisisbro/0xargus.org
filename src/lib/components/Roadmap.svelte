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

<div class="container mx-auto px-4 py-16">
	<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
		{#each data as { title, objective, details, status, date, cardBg }, i}
			{#if i < 6}
				<div
					class="group relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
					style="background: linear-gradient(135deg, rgba(6,0,15,0.7), rgba(10,0,21,0.7)); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1);">
					<div
						class="absolute inset-0 bg-gradient-to-br opacity-30"
						style="background-image: url({cardBg}); background-size: cover; background-position: center;">
					</div>
					<div class="relative z-10 flex h-full flex-col justify-between p-8">
						<div>
							<div
								class={`inline-block rounded-full px-4 py-1 text-sm font-semibold backdrop-blur-sm ${
									status === 'COMING SOON'
										? 'bg-violet-500/30 text-violet-100'
										: status === 'IN PROGRESS'
											? 'bg-indigo-500/30 text-indigo-100'
											: 'bg-green-500/30 text-green-100'
								}`}>
								{status}
							</div>
							<h2 class="mt-4 text-3xl font-bold text-white">{title}</h2>
							<p class="mt-2 text-sm text-gray-300">{date}</p>
						</div>
						<div class="mt-8">
							<h3 class="text-xl font-semibold text-white">Objective</h3>
							<p class="mt-2 text-gray-300">{objective}</p>
						</div>
						<div class="mt-8 overflow-hidden">
							<h3 class="text-xl font-semibold text-white">Details</h3>
							<ul class="mt-2 space-y-2">
								{#each details as detail}
									<li class="text-gray-300">
										<span class="font-medium text-white">{detail.split(':')[0]}:</span>
										{detail.split(':')[1]}
									</li>
								{/each}
							</ul>
						</div>
					</div>
					<div
						class={`absolute bottom-0 left-0 h-1 w-full ${
							status === 'COMING SOON'
								? 'bg-violet-500'
								: status === 'IN PROGRESS'
									? 'bg-indigo-500'
									: 'bg-green-500'
						}`}>
					</div>
					<div
						class="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500 opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-30">
					</div>
					<div
						class="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-indigo-500 opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-30">
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
