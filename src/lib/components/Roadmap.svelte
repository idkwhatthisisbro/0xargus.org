<script>
	export let data = [];
</script>

<div
	class="flex w-5 w-full max-w-full flex-col gap-16">
	<div>
		<h1 class="text-6xl font-bold text-white">
			ROADMAP
		</h1>
	</div>

	<div
		class="flex w-full max-w-full snap-x snap-mandatory gap-[30px] overflow-x-auto scroll-smooth">
		{#each data as { title, objective, details, completed, current, color }, i}
			{#if i < 6}
				<div
					class="flex h-full min-h-[800px] min-w-[600px] snap-start snap-always flex-col items-center justify-center gap-8 text-white {color}">
					<div
						class="relative flex items-center justify-center">
						<div
							class="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-2xl">
							{i + 1}
						</div>

						<div
							class="absolute h-8 w-8 rounded-full bg-red-700"
							class:animate-slowerPing={current}>
						</div>
					</div>

					<div>
						<h2 class="text-xl text-white">
							{title}
						</h2>
						<p>
							<strong
								>{objective.split(
									':'
								)[0]}:</strong>
							{objective.split(':')[1]}
						</p>
						<p>
							<strong>Details:</strong>
						</p>
						<ul>
							{#each details as detail}
								<li>
									<strong
										>{detail.split(
											':'
										)[0]}:</strong>
									{detail.split(':')[1]}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
