<template>
	<div class="flex justify-center">
		<UCard>
			<template #header>
				Login
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
