<template>
  <UApp class="h-dvh w-dvw relative">
    <UNavigationMenu class="w-full justify-center mb-10 mt-4" :items="items"/>
    <NuxtPage />
  </UApp>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';

const items: NavigationMenuItem[] = [
  {
    label: 'Guide',
    icon: 'i-lucide-book-open'

  },
  {
    label: 'Composables',
    icon: 'i-lucide-database'

  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    slot: 'components'
  }
]
</script>