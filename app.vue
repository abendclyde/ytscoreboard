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
    label: 'Fish13',
    icon: 'i-lucide-fish'

  },
  {
    label: 'Trek Trendy',
    icon: 'i-lucide-plane-takeoff'

  },
  {
    label: 'Nuke\'s Top 5',
    icon: 'i-lucide-ghost',
    slot: 'components'
  }
]
</script>