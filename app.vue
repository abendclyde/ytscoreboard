<template>
	<div class="max-w-dvw h-dvh max-h-dvh w-dvw">
		<UApp>
			<div class="max-h-1/20 flex items-center justify-between py-2">
				<UNavigationMenu
					class="ml-4 justify-center"
					:items="items"
				/>
				<div class="flex items-center">
					<UDropdownMenu :items="dropdownItems">
						<UTooltip
							:text="user?.name"
							class="mr-4"
						>
							<UAvatar
								:src="user?.picture"
								:alt="user?.name"
								icon="i-mingcute-user-3-line"
							/>
						</UTooltip>
					</UDropdownMenu>
				</div>
			</div>
			<NuxtPage class="max-h-19/20 p-8" />
		</UApp>
	</div>
</template>

<script lang="ts" setup>
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'

interface User {
	name: string
	picture: string
}

const { error, data: user } = await useFetch<User>('/api/me')
if (error.value) {
	navigateTo('/auth/login')
}

const items = ref<NavigationMenuItem[]>([
	{
		label: 'Fish13',
		icon: 'i-lucide-fish',
	},
	{
		label: 'Trek Trendy',
		icon: 'i-lucide-plane-takeoff',
	},
	{
		label: 'Nuke\'s Top 5',
		icon: 'i-lucide-ghost',
		slot: 'components',
	},
])

const dropdownItems = ref<DropdownMenuItem[][]>([
	[
		{
			label: user.value?.name,
			icon: 'i-mingcute-user-3-line',
			type: 'label',
		},
	],
	[
		{
			label: 'Logout',
			icon: 'i-mingcute-exit-line',
			onSelect: async () => {
				await navigateTo('/auth/logout', { external: true })
			},
		},
	],
])
</script>
