<template>
	<div class="min-h-[80vh] flex flex-col items-center justify-center">
		<!-- YouTuber Bingo Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
			<!-- Fish13 Bingo Card -->
			<UCard class="hover:shadow-lg transition-shadow cursor-pointer group">
				<NuxtLink to="/fish13-bingo">
					<div class="text-center p-6">
						<div class="text-6xl mb-4">🐟</div>
						<h3 class="text-2xl font-bold mb-2">Fish13</h3>
						<p class="text-gray-600 mb-4">mit dem Drecksköter</p>
						<UButton
							color="primary"
							size="lg"
							class="w-full group-hover:scale-105 transition-transform"
							icon="i-lucide-grid-3x3"
						>
							Bingo spielen
						</UButton>
					</div>
				</NuxtLink>
			</UCard>

			<!-- TrekTrendy Bingo Card -->
			<UCard class="hover:shadow-lg transition-shadow cursor-pointer group">
				<NuxtLink to="/trek-trendy-bingo">
					<div class="text-center p-6">
						<div class="text-6xl mb-4">✈️</div>
						<h3 class="text-2xl font-bold mb-2">Trek Trendy</h3>
						<p class="text-gray-600 mb-4">TODAY...</p>
						<UButton
							color="success"
							size="lg"
							class="w-full group-hover:scale-105 transition-transform"
							icon="i-lucide-grid-3x3"
						>
							Bingo spielen
						</UButton>
					</div>
				</NuxtLink>
			</UCard>

			<!-- Nuke's Top 5 Bingo Card -->
			<UCard class="hover:shadow-lg transition-shadow cursor-pointer group">
				<NuxtLink to="/nukes-top5-bingo">
					<div class="text-center p-6">
						<div class="text-6xl mb-4">👻</div>
						<h3 class="text-2xl font-bold mb-2">Nuke's Top 5</h3>
						<p class="text-gray-600 mb-4">Did you see it?</p>
						<UButton
							color="neutral"
							size="lg"
							class="w-full group-hover:scale-105 transition-transform"
							icon="i-lucide-grid-3x3"
						>
							Bingo spielen
						</UButton>
					</div>
				</NuxtLink>
			</UCard>
		</div>
	</div>
</template>

<script setup lang="ts">
// Landing page metadata
useHead({
	title: 'YT Bingo - Spiele Bingo mit deinen Lieblings-YouTubern',
	meta: [
		{ name: 'description', content: 'Spiele Bingo mit den Inhalten deiner Lieblings-YouTuber: Fish13, Trek Trendy und Nuke\'s Top 5' },
	],
})
</script>

<style scoped>
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}
</style>
