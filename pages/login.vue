<template>
	<div class="flex flex-col items-center gap-16">
		<div class="flex flex-col items-center gap-4">
			<NuxtPicture
				format="webp"
				src="/icon.png"
				preload
				class="w-48"
			/>
			<span class="text-6xl font-bold">
				YT-Scoreboard
			</span>
		</div>
		<UCard>
			<template
				#header
			>
				<span class="text-xl font-semibold">
					Login
				</span>
			</template>
			<UButton
				size="xl"
				trailing-icon="i-lucide-arrow-right"
				class=""
				@click="login"
			>
				Login with Sopth
			</UButton>
		</UCard>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'login',
})

const { login } = useAuth()
</script>
