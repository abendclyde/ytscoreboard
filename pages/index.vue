<template>
  <div>
    <UContainer class="relative w-3/7 flex flex-col gap-2">
      <UCard class="w-full" variant="subtle" v-for="point in points">
        <UCheckbox size="xl" :label="point" />
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