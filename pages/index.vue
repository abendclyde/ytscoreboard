<template>
  <div class="flex">
    <UContainer class="w-3/7 flex flex-col overflow-auto">
      <UCard variant="subtle" class="mt-2 flex justify-between items-center" v-for="(point, index) in points" :key="index">
        <div class="flex items-center gap-2">
          <UCheckbox size="xl" :label="point" v-model="checkedPoints[index]"/>
          <UBadge
            v-if="rarities[point]"
            :class="getBadgeClass(rarities[point].label)"
          >
            {{ rarities[point].label }}
          </UBadge>
        </div>
      </UCard>
    </UContainer>
    <UContainer class="w-2/7">
      <UCard variant="subtle">
        <template #header>
          <span class="text-2xl">Rating</span>
        </template>

        <span class="text-7xl">⭐ {{ rating }} / 10</span>
      </UCard>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// Liste der Punkte
const points = ["Hurensohn TV oder Bastard Beamer", "E-Pumpe", "50 KW Heizleistung", "Penispumpe", "Headset", "Sinnloses Gadget", "Propellör", "Place to Keul",
  "Einparkhilfe", "Halbe Küche", "Abendkaffee", "Wecker", "Sonne", "Regen", "Schnee", "Funny Moment", "Gericht mit 30 Zutaten", "Fast verbrannt", "Alki Moment",
  "Teleskop-Lampe", "Unstable Construction", "Raumspritzer", "80° Essen", "Cute Moment", "Alle Fenster auf", "Fettsack"];

// Checkbox-Status
const checkedPoints = ref(Array(points.length).fill(false));

// Gewichtung der Rarities
const rarityWeights: Record<string, number> = {
  "Common": 1,
  "Uncommon": 2,
  "Rare": 3,
  "Epic": 5,
  "Legendary": 7,
  "Mythical": 10
};

// Manuelle Zuweisung der Rarities
const rarities: Record<string, { label: string; color: string }> = {
  "Hurensohn TV oder Bastard Beamer": { label: "Legendary", color: "orange" },
  "E-Pumpe": { label: "Rare", color: "blue" },
  "50 KW Heizleistung": { label: "Epic", color: "purple" },
  "Penispumpe": { label: "Mythical", color: "rainbow" },
  "Headset": { label: "Common", color: "gray" },
  "Sinnloses Gadget": { label: "Common", color: "gray" },
  "Propellör": { label: "Rare", color: "blue" },
  "Place to Keul": { label: "Epic", color: "purple" },
  "Einparkhilfe": { label: "Common", color: "gray" },
  "Halbe Küche": { label: "Rare", color: "blue" },
  "Abendkaffee": { label: "Common", color: "gray" },
  "Wecker": { label: "Common", color: "gray" },
  "Sonne": { label: "Common", color: "gray" },
  "Regen": { label: "Rare", color: "blue" },
  "Schnee": { label: "Epic", color: "purple" },
  "Funny Moment": { label: "Legendary", color: "orange" },
  "Gericht mit 30 Zutaten": { label: "Epic", color: "purple" },
  "Fast verbrannt": { label: "Rare", color: "blue" },
  "Alki Moment": { label: "Common", color: "gray" },
  "Teleskop-Lampe": { label: "Rare", color: "blue" },
  "Unstable Construction": { label: "Epic", color: "purple" },
  "Raumspritzer": { label: "Legendary", color: "orange" },
  "80° Essen": { label: "Mythical", color: "rainbow" },
  "Cute Moment": { label: "Epic", color: "purple" },
  "Alle Fenster auf": { label: "Common", color: "gray" },
  "Fettsack": { label: "Rare", color: "blue" }
};

// Berechnung des maximalen Gewichts
const maxWeight = Object.keys(rarities).reduce((sum, point) => {
  const rarity = rarities[point].label;
  return sum + rarityWeights[rarity];
}, 0);

// Berechnung des aktuellen Ratings
const rating = computed(() => {
  const currentWeight = points.reduce((sum, point, index) => {
    if (checkedPoints.value[index]) {
      const rarity = rarities[point].label;
      return sum + rarityWeights[rarity];
    }
    return sum;
  }, 0);

  return ((currentWeight / maxWeight) * 10).toFixed(1);
});

// Methode zur Bestimmung der Badge-Klasse
function getBadgeClass(label: string) {
  switch (label) {
    case "Common":
      return "bg-gray-500 text-white";
    case "Uncommon":
      return "bg-green-500 text-white";
    case "Rare":
      return "bg-blue-500 text-white";
    case "Epic":
      return "bg-purple-500 text-white";
    case "Legendary":
      return "bg-orange-500 text-white";
    case "Mythical":
      return "bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white";
    default:
      return "";
  }
}
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