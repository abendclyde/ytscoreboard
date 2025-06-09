<template>
    <div class="min-h-[80vh] flex flex-col items-center justify-center">
        <!-- YouTuber Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            <!-- Fish13 Card -->
            <UCard class="hover:shadow-lg transition-shadow cursor-pointer group">
                <div class="text-center p-6">                    <div class="text-6xl mb-4">🐟</div>
                    <h3 class="text-2xl font-bold mb-2">Fish13</h3>
                    <p class="text-gray-600 mb-4">Scoreboard und Bingo-Spiel</p>
                    <div class="flex flex-col gap-2">
                        <NuxtLink to="/fish13">
                            <UButton 
                                color="primary" 
                                size="lg" 
                                class="w-full"
                                icon="i-lucide-trophy"
                            >
                                Scoreboard
                            </UButton>
                        </NuxtLink>
                        <NuxtLink to="/bingo">
                            <UButton 
                                color="secondary" 
                                variant="outline" 
                                size="lg" 
                                class="w-full"
                                icon="i-lucide-grid-3x3"
                            >
                                Bingo
                            </UButton>
                        </NuxtLink>
                    </div>
                </div>
            </UCard>

            <!-- TrekTrendy Card -->
            <UCard class="hover:shadow-lg transition-shadow cursor-pointer group">
                <NuxtLink to="/trek-trendy">
                    <div class="text-center p-6">                        <div class="text-6xl mb-4">✈️</div>
                        <h3 class="text-2xl font-bold mb-2">Trek Trendy</h3>
                        <p class="text-gray-600 mb-4">Reise-Adventures und Punkte</p>
                        <UButton
                            color="success" 
                            size="lg" 
                            class="w-full group-hover:scale-105 transition-transform"
                            icon="i-lucide-plane-takeoff"
                        >
                            Scoreboard öffnen
                        </UButton>
                    </div>
                </NuxtLink>
            </UCard>

            <!-- Nuke's Top 5 Card -->
            <UCard class="hover:shadow-lg transition-shadow cursor-pointer group">
                <NuxtLink to="/nukes-top5">
                    <div class="text-center p-6">                        <div class="text-6xl mb-4">👻</div>
                        <h3 class="text-2xl font-bold mb-2">Nuke's Top 5</h3>
                        <p class="text-gray-600 mb-4">Mysteriöse Listen und Punkte</p>
                        <UButton
                            color="neutral" 
                            size="lg" 
                            class="w-full group-hover:scale-105 transition-transform"
                            icon="i-lucide-ghost"
                        >
                            Scoreboard öffnen
                        </UButton>
                    </div>
                </NuxtLink>            </UCard>
        </div>
    </div>
</template>

<script setup lang="ts">
// Landing page metadata
useHead({
    title: 'YT Scoreboard - Verfolge deine Lieblings-YouTuber',
    meta: [
        { name: 'description', content: 'Verfolge die Punkte und Aktivitäten deiner Lieblings-YouTuber in einem übersichtlichen Dashboard' }
    ]
})
</script>

<style scoped>
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}
</style>
