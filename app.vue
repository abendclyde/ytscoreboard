<template>
  <div class="max-h-dvh h-dvh max-w-dvw w-dvw">
    <UApp>
      <UNavigationMenu class="h-1/20 w-full justify-center" :items="items"/>
      <NuxtPage class="max-h-19/20 p-8"/>
    </UApp>
  </div>
</template>

<script lang="ts" setup>
import type {NavigationMenuItem} from '@nuxt/ui';

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