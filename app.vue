<template>
  <div class="max-h-dvh h-dvh max-w-dvw w-dvw">
    <UApp>
      <div class="flex items-center justify-between h-1/20 w-full px-4 border-b border-gray-200 dark:border-gray-800">
        <!-- Linker Button Bereich -->
        <div>
          <UModal :ui="{ footer: 'justify-end' }">
            <UButton icon="i-lucide-plus" color="info" variant="subtle" label="Hinzufügen" />
            <template #content>
              <UInput placeholder="Titel" />
              <UInput type="number" placeholder="Gewichtung" />
              <USelect :options={dropdownOptions} placeholder="Kategorie wählen" />
            </template>
            <template #footer>
              <UButton label="Abbrechen" color="error" variant="outline" />
              <UButton label="Hinzufügen" color="info" />
            </template>
          </UModal>
        </div>


        <!-- Mittlere Buttons -->
        <div class="flex justify-center flex-grow">
          <UNavigationMenu :items="items" />
        </div>

        <!-- Rechter Avatar -->
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
      </div>
      <NuxtPage class="max-h-19/20 p-8" />
    </UApp>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { NavigationMenuItem } from '@nuxt/ui';



// Refs für die Eingabefelder und das Dropdown
const newItemName = ref('');
const selectedOption = ref('');
const itemValue = ref<number | null>(null);

// Beispiel-Optionen für das Dropdown
const dropdownOptions = ['Fish13', 'TrekTrendy', 'NukesTop5'];

// Funktion zum Zurücksetzen des Formulars
function resetForm() {
  newItemName.value = '';
  selectedOption.value = '';
  itemValue.value = null;
}

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
    icon: 'i-lucide-ghost'
  }
]
</script>