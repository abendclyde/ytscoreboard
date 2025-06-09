<template>
	<div class="flex flex-wrap-reverse gap-4">
		<!-- Linke Spalte -->
		<UContainer class="max-w-2/5 min-w-fit flex flex-col max-h-[calc(100dvh-8rem)] overflow-auto">
			<!-- Suchleiste -->
			<UCard
				variant="subtle"
				class="my-2 flex justify-between items-center"
			>
				<div class="flex items-center gap-2 w-full">
					<UInput
						v-model="searchTerm"
						placeholder="Punkte durchsuchen..."
						icon="i-lucide-search"
						class="flex-1"
						size="xl"
					/>
					<UButton
						icon="i-lucide-x"
						color="gray"
						variant="soft"
						size="xl"
						@click="searchTerm = ''"
						:disabled="!searchTerm"
					/>
				</div>
			</UCard>
			
			<UCard
				v-for="(point, index) in filteredPointsWithIndex"
				:key="index"
				variant="subtle"
				class="my-2 flex justify-between items-center"
			>
				<div class="flex items-center gap-2">
					<UCheckbox
						v-model="checkedPoints[point.originalIndex]"
						size="xl"
						:label="point.name"
						color="primary"
					/>
					<UBadge
						v-if="rarities[point.name]"
						:class="[
							'px-2 py-1 rounded text-white',
							rarities[point.name].label === 'Common' && 'bg-gray-400',
							rarities[point.name].label === 'Rare' && 'bg-blue-400',
							rarities[point.name].label === 'Epic' && 'bg-purple-400',
							rarities[point.name].label === 'Legendary' && 'bg-orange-400',
							rarities[point.name].label === 'Mythical' && 'bg-gradient-to-r',
						]"
					>
						{{ rarities[point.name].label }}
					</UBadge>
				</div>
			</UCard>
		</UContainer>

		<!-- Rechte Spalte -->
		<UContainer class="max-w-3/5 min-w-fit w-auto flex flex-col gap-4">
			<!-- Video-Karte -->
			<UCard
				variant="outline"
				class="mb-4"
			>
				<template #header>
					<span class="text-2xl">Video</span>
				</template>
				<div class="flex flex-col gap-2">
					<UInput
						v-model="videoUrl"
						placeholder="YouTube-URL"
						@update:model-value="loadVideo"
					/>
					<div
						v-if="videoThumbnail"
						class="flex flex-col items-center"
					>
						<NuxtImg
							:src="videoThumbnail"
							alt="Video Thumbnail"
							class="w-128 h-72 object-cover mt-4 rounded-lg"
						/>
						<p class="text-lg font-bold mt-2 text-center">
							{{ videoTitle }}
						</p>
					</div>
				</div>
			</UCard>

			<!-- Rating-Karte -->
			<UCard
				variant="outline"
				class="mb-4"
			>
				<template #header>
					<span class="text-2xl">Rating</span>
				</template>
				<div class="flex items-center justify-center">
					<span class="text-7xl">⭐ {{ rating }} / 10</span>
				</div>
			</UCard>

			<!-- Save-Karte -->
			<UCard
				variant="outline"
				class="mb-4"
			>
				<template #header>
					<span class="text-2xl">Save</span>
				</template>
				<div class="flex items-center justify-center">
					<UButton
						label="Speichern"
						color="primary"
					/>
				</div>
			</UCard>
		</UContainer>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

// Liste der Punkte für TrekTrendy
const points = ['Trend Analyse', 'Fashion Statement', 'Tech Review', 'Lifestyle Tipp', 'Social Media Hack', 
	'Viral Challenge', 'Beauty Tutorial', 'Fitness Trend', 'Food Trend', 'Travel Destination',
	'Celebrity Gossip', 'Influencer Drama', 'Brand Collaboration', 'Product Placement', 'Unboxing Video',
	'Morning Routine', 'Night Routine', 'Room Tour', 'Shopping Haul', 'Outfit of the Day',
	'Throwback Thursday', 'Motivation Monday', 'Weekend Vibes', 'Self Care Sunday', 'Trendy Filter',
	'Aesthetic Content', 'Minimalist Approach', 'Sustainable Living', 'Mental Health Awareness', 'Body Positivity']

// Checkbox-Status
const checkedPoints = ref(Array(points.length).fill(false))

// Suchfunktion
const searchTerm = ref('')

const filteredPointsWithIndex = computed(() => {
	if (!searchTerm.value.trim()) {
		return points.map((point, index) => ({ name: point, originalIndex: index }))
	}
	
	return points
		.map((point, index) => ({ name: point, originalIndex: index }))
		.filter(point => 
			point.name.toLowerCase().includes(searchTerm.value.toLowerCase())
		)
})

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
	'Trend Analyse': { label: 'Epic' },
	'Fashion Statement': { label: 'Rare' },
	'Tech Review': { label: 'Common' },
	'Lifestyle Tipp': { label: 'Common' },
	'Social Media Hack': { label: 'Rare' },
	'Viral Challenge': { label: 'Legendary' },
	'Beauty Tutorial': { label: 'Common' },
	'Fitness Trend': { label: 'Rare' },
	'Food Trend': { label: 'Rare' },
	'Travel Destination': { label: 'Epic' },
	'Celebrity Gossip': { label: 'Common' },
	'Influencer Drama': { label: 'Rare' },
	'Brand Collaboration': { label: 'Epic' },
	'Product Placement': { label: 'Common' },
	'Unboxing Video': { label: 'Common' },
	'Morning Routine': { label: 'Common' },
	'Night Routine': { label: 'Common' },
	'Room Tour': { label: 'Rare' },
	'Shopping Haul': { label: 'Common' },
	'Outfit of the Day': { label: 'Common' },
	'Throwback Thursday': { label: 'Common' },
	'Motivation Monday': { label: 'Common' },
	'Weekend Vibes': { label: 'Common' },
	'Self Care Sunday': { label: 'Rare' },
	'Trendy Filter': { label: 'Common' },
	'Aesthetic Content': { label: 'Epic' },
	'Minimalist Approach': { label: 'Rare' },
	'Sustainable Living': { label: 'Epic' },
	'Mental Health Awareness': { label: 'Legendary' },
	'Body Positivity': { label: 'Legendary' },
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
