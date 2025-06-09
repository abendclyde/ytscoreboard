<template>
	<div class="min-h-[calc(100vh-4rem)] flex justify-center p-4 pt-8">
		<div
			v-if="isLoading"
			class="flex items-center justify-center"
		>
			<div class="text-xl">
				Lade Bingo-Daten...
			</div>
		</div>
		<div
			v-else
			class="flex gap-16 justify-center items-start mt-12"
		>
			<!-- Bingo Grid Card -->
			<UCard class="bingo-grid-container flex-shrink-0">
				<div
					:key="gridKey"
					class="bingo-grid"
				>
					<div
						v-for="(cell, index) in bingoGrid"
						:key="`cell-${gridKey}-${index}-${cell.text}`"
						class="bingo-cell"
						:class="getRarityBackgroundClass(cell.text)"
						@click="toggleCell(index)"
					>
						<!-- Cell Content -->
						<div class="h-full flex flex-col items-center justify-center text-center">
							<span class="text-sm font-medium break-words">{{ cell.text }}</span>                            <UBadge
								v-if="rarities[cell.text]"
								:class="[
									'mt-1 px-1 py-0.5 text-xs rounded text-white',
									rarities[cell.text].label === 'Common' && 'bg-gray-400 dark:bg-gray-600',
									rarities[cell.text].label === 'Rare' && 'bg-blue-400 dark:bg-blue-600',
									rarities[cell.text].label === 'Epic' && 'bg-purple-400 dark:bg-purple-600',
									rarities[cell.text].label === 'Legendary' && 'bg-orange-400 dark:bg-orange-600',
									rarities[cell.text].label === 'Mythical' && 'bg-gradient-to-r',
								]"
							>
								{{ rarities[cell.text].label }}
							</UBadge>
						</div>
						<!-- Red Cross Overlay -->
						<div
							v-if="cell.marked"
							class="absolute inset-0 flex items-center justify-center bg-red-500 bg-opacity-20 rounded-lg"
						>
							<svg
								class="w-16 h-16 text-red-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="3"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
					</div>
				</div>
			</UCard>

			<!-- Info Panel -->
			<UCard class="info-panel min-w-80 flex flex-col flex-shrink-0">
				<template #header>
					<h2 class="text-2xl font-bold flex items-center gap-2">
						<span>✈️</span>
						<span>Trek Trendy Bingo</span>
					</h2>
				</template>

				<!-- Fixed Content (Stats, Progress, Buttons) -->
				<div class="space-y-6 flex-shrink-0">
					<!-- Stats -->
					<div class="text-center">
						<div class="text-6xl mb-2">
							🎯
						</div>
						<div class="text-xl font-semibold">
							{{ markedCount }} / 16 markiert
						</div>
					</div>

					<!-- Bingo Status -->
					<div
						v-if="hasBingo"
						class="text-center"
					>
						<div class="text-4xl mb-2">
							🎉
						</div>
						<div class="text-2xl font-bold text-green-600">
							BINGO!{{ bingoCount > 1 ? ` x${bingoCount}` : '' }}
						</div>
					</div>                    <!-- Progress Bar (only show if no Bingo achieved) -->
					<div
						v-if="!hasBingo"
						class="w-full"
					>
						<div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
							<span>Bingo-Fortschritt</span>
							<span>{{ bingoProgress }} / 4 Felder</span>
						</div>
						<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
							<div
								class="bg-green-600 dark:bg-green-500 h-3 rounded-full transition-all duration-300"
								:style="{ width: `${(bingoProgress / 4) * 100}%` }"
							/>
						</div>
					</div>                    <!-- Control Buttons -->
					<div class="flex gap-3 justify-center">
						<UButton
							variant="outline"
							class="control-button reset-button w-16 h-16 flex items-center justify-center bg-red-100 dark:bg-red-900 border-red-200 dark:border-red-700 hover:bg-red-200 dark:hover:bg-red-800"
							@click="resetGrid"
						>
							<span class="text-xl">🔃</span>
						</UButton>
						<UButton
							variant="outline"
							class="control-button generate-button w-16 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-800"
							@click="generateNewGrid"
						>
							<span class="text-xl">🆕</span>
						</UButton>
					</div>
				</div>                <!-- Scrollable Marked Items List -->
				<h3 class="font-semibold mb-2 mt-4">
					Markierte Felder:
				</h3>
				<div class="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
					<div class="space-y-1 pr-1">
						<div
							v-for="item in markedItems"
							:key="item"
							class="text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded flex items-center gap-2"
						>
							<span class="text-green-600 dark:text-green-400">✓</span>
							<span class="flex-1">{{ item }}</span>
							<UBadge
								v-if="rarities[item]"
								:class="[
									'px-1 py-0.5 text-xs rounded text-white',
									rarities[item].label === 'Common' && 'bg-gray-400 dark:bg-gray-600',
									rarities[item].label === 'Rare' && 'bg-blue-400 dark:bg-blue-600',
									rarities[item].label === 'Epic' && 'bg-purple-400 dark:bg-purple-600',
									rarities[item].label === 'Legendary' && 'bg-orange-400 dark:bg-orange-600',
									rarities[item].label === 'Mythical' && 'bg-gradient-to-r',
								]"
							>
								{{ rarities[item].label }}
							</UBadge>
						</div>
					</div>
				</div>
			</UCard>
		</div>
	</div>
</template>

<script lang="ts" setup>
// Trek Trendy Bingo mit dem neuen Composable
const {
	bingoGrid,
	gridKey,
	isLoading,
	rarities,
	generateNewGrid,
	toggleCell,
	resetGrid,
	getRarityBackgroundClass,
	markedCount,
	markedItems,
	hasBingo,
	bingoProgress,
	bingoCount,
} = useBingo('trek-trendy')

// Seitentitel
useHead({
	title: 'Trek Trendy Bingo - Reise Abenteuer',
	meta: [
		{ name: 'description', content: 'Spiele Bingo mit Trek Trendys Reise-Abenteuern und Erlebnissen' },
	],
})
</script>

<style scoped>
/* Spezifische Styles für Trek Trendy Bingo können hier hinzugefügt werden */
</style>
