<template>
  <div class="relative w-3/7 flex gap-4" v-for="point in points">
      <UCard class="w-full" variant="subtle">
        <UCheckbox size="xl" :label="point"/>
      </UCard>
  </div>
</template>

<script lang="ts" setup>
  const points = ["Hurensohn TV","E-Pumpe","50 KW Heizleistung", "Penispumpe"]
</script>

<style></style>