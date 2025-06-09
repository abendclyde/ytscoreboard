<template>
	<div class="flex flex-wrap-reverse gap-4">
		<!-- Linke Spalte -->
		<UContainer class="max-w-2/5 min-w-fit flex flex-col max-h-[calc(100dvh-8rem)] overflow-auto">
			<!-- Suchfeld -->
			<UCard variant="subtle" class="mb-4 mt-4">
				<div class="flex gap-2">
					<UInput v-model="searchTerm" placeholder="Punkte durchsuchen..." class="flex-1" />
					<UButton icon="i-heroicons-x-mark" color="gray" variant="outline" @click="clearSearch" />
				</div>
			</UCard>

			<UCard v-for="(point, index) in filteredPoints" :key="index" variant="subtle"
				class="my-2 flex justify-between items-center">
				<div class="flex items-center gap-2">
					<UCheckbox v-model="checkedPoints[point.originalIndex]" size="xl" :label="point.name"
						color="primary" />
					<UBadge v-if="rarities[point.name]" :class="[
						'px-2 py-1 rounded text-white',
						rarities[point.name].label === 'Common' && 'bg-gray-400',
						rarities[point.name].label === 'Rare' && 'bg-blue-400',
						rarities[point.name].label === 'Epic' && 'bg-purple-400',
						rarities[point.name].label === 'Legendary' && 'bg-orange-400',
						rarities[point.name].label === 'Mythical' && 'bg-gradient-to-r',
					]">
						{{ rarities[point.name].label }}
					</UBadge>
				</div>
			</UCard>
		</UContainer>

		<!-- Rechte Spalte -->
		<UContainer class="max-w-3/5 min-w-fit w-auto flex flex-col gap-4">
			<!-- Video-Karte -->
			<UCard variant="outline" class="mb-4">
				<template #header>
					<span class="text-2xl">Video</span>
				</template>
				<div class="flex flex-col gap-2">
					<UInput v-model="videoUrl" placeholder="YouTube-URL" @update:model-value="loadVideo" />
					<div v-if="videoThumbnail" class="flex flex-col items-center">
						<NuxtImg :src="videoThumbnail" alt="Video Thumbnail"
							class="w-128 h-72 object-cover mt-4 rounded-lg" />
						<p class="text-lg font-bold mt-2 text-center">
							{{ videoTitle }}
						</p>
					</div>
				</div>
			</UCard>

			<!-- Rating-Karte -->
			<UCard variant="outline" class="mb-4">
				<template #header>
					<span class="text-2xl">Rating</span>
				</template>
				<div class="flex items-center justify-center">
					<span class="text-7xl">⭐ {{ rating }} / 10</span>
				</div>
			</UCard>

			<!-- Save-Karte -->
			<UCard variant="outline" class="mb-4">
				<template #header>
					<span class="text-2xl">Save</span>
				</template>
				<div class="flex items-center justify-center">
					<UButton label="Speichern" color="primary" />
				</div>
			</UCard>
		</UContainer>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

// Liste der Punkte
const points = ['Hurensohn TV oder Bastard Beamer', 'E-Pumpe', '50 KW Heizleistung', 'Penispumpe', 'Headset', 'Sinnloses Gadget', 'Propellör', 'Place to Keul',
	'Einparkhilfe', 'Halbe Küche', 'Abendkaffee', 'Wecker', 'Sonne', 'Regen', 'Schnee', 'Funny Moment', 'Gericht mit 30 Zutaten', 'Fast verbrannt', 'Alki Moment',
	'Teleskop-Lampe', 'Unstable Construction', 'Raumspritzer', '80° Essen', 'Cute Moment', 'Alle Fenster auf', 'Fettsack']

// Checkbox-Status
const checkedPoints = ref(Array(points.length).fill(false))

// Suchfunktionalität
const searchTerm = ref('')

const filteredPoints = computed(() => {
	if (!searchTerm.value) {
		return points.map((point, index) => ({ name: point, originalIndex: index }))
	}
	return points
		.map((point, index) => ({ name: point, originalIndex: index }))
		.filter(point => point.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
})

function clearSearch() {
	searchTerm.value = ''
}

// Video-Logik
const videoUrl = ref('')
const videoThumbnail = ref('')
const videoTitle = ref('')

function loadVideo() {
	const videoId = extractYouTubeId(videoUrl.value)
	if (videoId) {
		videoThumbnail.value = `https://img.youtube.com/vi/${videoId}/0.jpg`
		fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`)
			.then(response => response.json())
			.then((data) => {
				videoTitle.value = data.title
			})
			.catch(() => {
				videoTitle.value = 'Unbekannter Titel'
			})
	}
	else {
		videoThumbnail.value = ''
		videoTitle.value = ''
	}
}

function extractYouTubeId(url: string): string | null {
	const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)|youtu\.be\/([^?&]+)/)
	return match ? match[1] || match[2] : null
}

// Rating-Logik
const rarityWeights: Record<string, number> = {
	Common: 1,
	Uncommon: 2,
	Rare: 3,
	Epic: 5,
	Legendary: 7,
	Mythical: 10,
}

const rarities: Record<string, { label: string }> = {
	'Hurensohn TV oder Bastard Beamer': { label: 'Legendary' },
	'E-Pumpe': { label: 'Rare' },
	'50 KW Heizleistung': { label: 'Epic' },
	'Penispumpe': { label: 'Mythical' },
	'Headset': { label: 'Common' },
	'Sinnloses Gadget': { label: 'Common' },
	'Propellör': { label: 'Rare' },
	'Place to Keul': { label: 'Epic' },
	'Einparkhilfe': { label: 'Common' },
	'Halbe Küche': { label: 'Rare' },
	'Abendkaffee': { label: 'Common' },
	'Wecker': { label: 'Common' },
	'Sonne': { label: 'Common' },
	'Regen': { label: 'Rare' },
	'Schnee': { label: 'Epic' },
	'Funny Moment': { label: 'Legendary' },
	'Gericht mit 30 Zutaten': { label: 'Epic' },
	'Fast verbrannt': { label: 'Rare' },
	'Alki Moment': { label: 'Common' },
	'Teleskop-Lampe': { label: 'Rare' },
	'Unstable Construction': { label: 'Epic' },
	'Raumspritzer': { label: 'Legendary' },
	'80° Essen': { label: 'Mythical' },
	'Cute Moment': { label: 'Epic' },
	'Alle Fenster auf': { label: 'Common' },
	'Fettsack': { label: 'Rare' },
}

const maxWeight = Object.keys(rarities).reduce((sum, point) => {
	const rarity = rarities[point].label
	return sum + rarityWeights[rarity]
}, 0)

const rating = computed(() => {
	const currentWeight = points.reduce((sum, point, index) => {
		if (checkedPoints.value[index]) {
			const rarity = rarities[point].label
			return sum + rarityWeights[rarity]
		}
		return sum
	}, 0)

	return ((currentWeight / maxWeight) * 10).toFixed(1)
})
</script>

<style>
.bg-gradient-to-r {
	background: linear-gradient(45deg, rgb(33, 230, 148), rgb(97, 14, 230), rgb(252, 61, 226));
}
</style>
