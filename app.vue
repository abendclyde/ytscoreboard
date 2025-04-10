<template>
	<div class="max-h-dvh h-dvh max-w-dvw w-dvw">
		<UApp>
			<div class="flex items-center justify-between h-1/20 w-full px-4 border-b border-gray-200 dark:border-gray-800">
				<!-- Linker Button Bereich -->
				<div>
					<UModal
						:ui="{ footer: 'justify-end' }"
						title="Eintrag hinzufügen"
					>
						<UButton
							icon="i-lucide-plus"
							color="primary"
							variant="subtle"
							label="Hinzufügen"
						/>
						<template #body>
							<div class="flex flex-col items-center">
								<UInput
									placeholder="Titel"
									class="w-96 mb-2"
								/>
								<UInputMenu
									:items="badges"
									placeholder="Gewichtung"
									class="w-96 mb-2"
								/>
								<UInputMenu
									:items="dropdownOptions"
									placeholder="YouTuber wählen"
									class="w-96"
								/>
							</div>
						</template>
						<template #footer>
							<UButton
								label="Abbrechen"
								color="error"
								variant="outline"
							/>
							<UButton
								label="Hinzufügen"
								color="primary"
							/>
						</template>
					</UModal>
				</div>

				<!-- Mittlere Buttons -->
				<div class="flex justify-center flex-grow">
					<UNavigationMenu :items="items" />
				</div>

				<!-- Rechter Avatar -->
				<UDropdownMenu :items="items">
					<UTooltip
						class="mr-4"
					>
						<UAvatar
							icon="i-mingcute-user-3-line"
						/>
					</UTooltip>
				</UDropdownMenu>
			</div>
			<NuxtPage class="max-h-19/20 p-8" />
		</UApp>
	</div>
</template>

<script lang="ts" setup>
import type { InputMenuItem, NavigationMenuItem } from '@nuxt/ui'

// Beispiel-Optionen für das Dropdown
const dropdownOptions = ['Fish13', 'TrekTrendy', 'NukesTop5']

const items: NavigationMenuItem[] = [
	{
		label: 'Fish13',
		icon: 'i-lucide-fish',
		active: true,
	},
	{
		label: 'Trek Trendy',
		icon: 'i-lucide-plane-takeoff',
	},
	{
		label: 'Nuke\'s Top 5',
		icon: 'i-lucide-ghost',
	},
]

const badges = ref<InputMenuItem[]>([
	{
		label: 'Common',
		chip: {
			color: 'common',
		},
	},
	{
		label: 'Uncommon',
		chip: {
			color: 'uncommon',
		},
	},
	{
		label: 'Rare',
		chip: {
			color: 'rare',
		},
	},
	{
		label: 'Epic',
		chip: {
			color: 'epic',
		},
	},
	{
		label: 'Legendary',
		chip: {
			color: 'legendary',
		},
	},
	{
		label: 'Mythical',
		chip: {
			color: 'mythical',
		},
	},
])
</script>
