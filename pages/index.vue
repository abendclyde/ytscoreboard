<template>
  <div class="flex gap-4">
    <!-- Linke Spalte -->
    <UContainer class="flex w-2/5 flex-col overflow-auto">
      <UCard
        v-for="(point, index) in points"
        :key="index"
        variant="subtle"
        class="mt-2 flex items-center justify-between"
      >
        <div class="flex items-center gap-2">
          <UCheckbox
            v-model="checkedPoints[index]"
            size="xl"
            :label="point"
          />
          <UBadge
            v-if="rarities[point]"
            :class="[
              'rounded px-2 py-1 text-white',
              rarities[point].label === 'Common' && 'bg-gray-400',
              rarities[point].label === 'Rare' && 'bg-blue-400',
              rarities[point].label === 'Epic' && 'bg-purple-400',
              rarities[point].label === 'Legendary' && 'bg-orange-400',
              rarities[point].label === 'Mythical' && 'bg-gradient-to-r',
            ]"
          >
            {{ rarities[point].label }}
          </UBadge>
        </div>
      </UCard>
    </UContainer>

    <!-- Rechte Spalte -->
    <UContainer class="flex w-2/5 flex-col gap-4">
      <!-- Video-Karte -->
      <UCard
        variant="subtle"
        class="mb-4"
      >
        <template #header>
          <span class="text-2xl">Video</span>
        </template>
        <div class="flex flex-col gap-2">
          <input
            v-model="videoUrl"
            type="text"
            placeholder="YouTube URL eingeben"
            class="w-full rounded border border-gray-300 p-2"
            @input="loadVideo"
          >
          <div
            v-if="videoThumbnail"
            class="flex flex-col items-center"
          >
            <img
              :src="videoThumbnail"
              alt="Video Thumbnail"
              class="w-128 mt-4 h-72 object-cover"
            >
            <p class="mt-2 text-center text-lg font-bold">
              {{ videoTitle }}
            </p>
          </div>
        </div>
      </UCard>

      <!-- Rating-Karte -->
      <UCard
        variant="subtle"
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
        variant="subtle"
        class="mb-4"
      >
        <template #header>
          <span class="text-2xl">Save</span>
        </template>
        <div class="flex items-center justify-center">
          <button class="rounded bg-blue-500 px-4 py-2 text-white">
            Save
          </button>
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

const rarities: Record<string, { label: string, color: string }> = {
  'Hurensohn TV oder Bastard Beamer': { label: 'Legendary', color: 'orange' },
  'E-Pumpe': { label: 'Rare', color: 'blue' },
  '50 KW Heizleistung': { label: 'Epic', color: 'purple' },
  'Penispumpe': { label: 'Mythical', color: 'rainbow' },
  'Headset': { label: 'Common', color: 'gray' },
  'Sinnloses Gadget': { label: 'Common', color: 'gray' },
  'Propellör': { label: 'Rare', color: 'blue' },
  'Place to Keul': { label: 'Epic', color: 'purple' },
  'Einparkhilfe': { label: 'Common', color: 'gray' },
  'Halbe Küche': { label: 'Rare', color: 'blue' },
  'Abendkaffee': { label: 'Common', color: 'gray' },
  'Wecker': { label: 'Common', color: 'gray' },
  'Sonne': { label: 'Common', color: 'gray' },
  'Regen': { label: 'Rare', color: 'blue' },
  'Schnee': { label: 'Epic', color: 'purple' },
  'Funny Moment': { label: 'Legendary', color: 'orange' },
  'Gericht mit 30 Zutaten': { label: 'Epic', color: 'purple' },
  'Fast verbrannt': { label: 'Rare', color: 'blue' },
  'Alki Moment': { label: 'Common', color: 'gray' },
  'Teleskop-Lampe': { label: 'Rare', color: 'blue' },
  'Unstable Construction': { label: 'Epic', color: 'purple' },
  'Raumspritzer': { label: 'Legendary', color: 'orange' },
  '80° Essen': { label: 'Mythical', color: 'rainbow' },
  'Cute Moment': { label: 'Epic', color: 'purple' },
  'Alle Fenster auf': { label: 'Common', color: 'gray' },
  'Fettsack': { label: 'Rare', color: 'blue' },
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
  background: linear-gradient(90deg, rgba(255, 154, 158, 0.6), rgba(168, 213, 242, 0.6), rgba(168, 242, 200, 0.6));
  padding: 2px 8px;
  border-radius: 4px;
  color: white;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
