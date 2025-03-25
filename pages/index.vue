<template>
  <div class="flex relative h-full">
    <UContainer class="w-3/7 flex flex-col max-h-8/12 h-full overflow-auto">
      <UCard variant="subtle" class="mt-2" v-for="point in points">
        <UCheckbox size="xl" :label="point" />
      </UCard>
    </UContainer>
	<UContainer class="w-2/7">
		<UCard variant="subtle">
			<template #header>
				<span class="text-2xl">Rating</span>
			</template>

			<span class="text-7xl">⭐ 8,9 / 10</span>
			
		</UCard>
	</UContainer>
  </div>
</template>

<script lang="ts" setup>
const points = [  	"Hurensohn TV oder Bastard Beamer", "E-Pumpe", "50 KW Heizleistung", "Penispumpe", "Headset", "Sinnloses Gadget", "Propellör", "Place to Keul", 
					"Einparkhilfe", "Halbe Küche", "Abendkaffee", "Wecker", "Sonne", "Regen", "Schnee", "Funny Moment", "Gericht mit 30 Zutaten", "Fast verbrannt", "Alki Moment", 
                  	"Teleskop-Lampe", "Unstable Construction", "Raumspritzer", "80° Essen", "Cute Moment", "Alle Fenster auf", "Fettsack"]
</script>

<style></style>