<template>
    <div class="min-h-[calc(100vh-4rem)] flex justify-center p-4 pt-8">        <div class="flex gap-16 justify-center items-start mt-12">
            <!-- Bingo Grid Card -->
            <UCard class="bingo-grid-container flex-shrink-0">
                <div class="bingo-grid" :key="gridKey">
                    <div v-for="(cell, index) in bingoGrid" :key="`cell-${gridKey}-${index}-${cell.text}`"
                        class="bingo-cell" :class="getRarityBackgroundClass(cell.text)" @click="toggleCell(index)">
                        <!-- Cell Content -->
                        <div class="h-full flex flex-col items-center justify-center text-center">
                            <span class="text-sm font-medium break-words">{{ cell.text }}</span>
                            <UBadge v-if="rarities[cell.text]" :class="[
                                'mt-1 px-1 py-0.5 text-xs rounded text-white',
                                rarities[cell.text].label === 'Common' && 'bg-gray-400',
                                rarities[cell.text].label === 'Rare' && 'bg-blue-400',
                                rarities[cell.text].label === 'Epic' && 'bg-purple-400',
                                rarities[cell.text].label === 'Legendary' && 'bg-orange-400',
                                rarities[cell.text].label === 'Mythical' && 'bg-gradient-to-r',
                            ]">
                                {{ rarities[cell.text].label }}
                            </UBadge>
                        </div> <!-- Red Cross Overlay -->
                        <div v-if="cell.marked"
                            class="absolute inset-0 flex items-center justify-center bg-red-500 bg-opacity-20 rounded-lg">
                            <svg class="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>            </UCard> <!-- Info Panel -->
            <UCard class="info-panel min-w-80 flex flex-col flex-shrink-0">
                <template #header>
                    <h2 class="text-2xl font-bold">Bingo</h2>
                </template>

                <!-- Fixed Content (Stats, Progress, Buttons) -->
                <div class="space-y-6 flex-shrink-0">
                    <!-- Stats -->
                    <div class="text-center">
                        <div class="text-6xl mb-2">🎯</div>
                        <div class="text-xl font-semibold">
                            {{ markedCount }} / 16 markiert
                        </div>
                    </div> <!-- Bingo Status -->
                    <div v-if="hasBingo" class="text-center">
                        <div class="text-4xl mb-2">🎉</div>
                        <div class="text-2xl font-bold text-green-600">
                            BINGO!{{ bingoCount > 1 ? ` x${bingoCount}` : '' }}
                        </div>
                    </div>

                    <!-- Progress Bar (only show if no Bingo achieved) -->
                    <div v-if="!hasBingo" class="w-full">
                        <div class="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Bingo-Fortschritt</span>
                            <span>{{ bingoProgress }} / 4 Felder</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div class="bg-blue-600 h-3 rounded-full transition-all duration-300"
                                :style="{ width: `${(bingoProgress / 4) * 100}%` }"></div>
                        </div>
                    </div>                    <!-- Control Buttons -->
                    <div class="flex gap-3 justify-center">
                        <UButton variant="outline" class="control-button reset-button w-16 h-16 flex items-center justify-center bg-red-100 border-red-200 hover:bg-red-200"
                            @click="resetGrid">
                            <span class="text-xl">🔃</span>
                        </UButton>
                        <UButton variant="outline" class="control-button generate-button w-16 h-16 flex items-center justify-center bg-green-100 border-green-200 hover:bg-green-200"
                            @click="generateNewGrid">
                            <span class="text-xl">🆕</span>
                        </UButton>
                    </div>
                </div> <!-- Scrollable Marked Items List -->
                <h3 class="font-semibold mb-2 mt-4">Markierte Felder:</h3>
                <div class="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div class="space-y-1 pr-1">
                        <div v-for="item in markedItems" :key="item"
                            class="text-sm p-2 bg-gray-50 rounded flex items-center gap-2">
                            <span class="text-green-600">✓</span>
                            <span class="flex-1">{{ item }}</span>
                            <UBadge v-if="rarities[item]" :class="[
                                'px-1 py-0.5 text-xs rounded text-white',
                                rarities[item].label === 'Common' && 'bg-gray-400',
                                rarities[item].label === 'Rare' && 'bg-blue-400',
                                rarities[item].label === 'Epic' && 'bg-purple-400',
                                rarities[item].label === 'Legendary' && 'bg-orange-400',
                                rarities[item].label === 'Mythical' && 'bg-gradient-to-r',
                            ]">
                                {{ rarities[item].label }}
                            </UBadge>
                        </div>
                    </div>
                </div>
            </UCard>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'

// Fish13 Punkte (gleiche wie in der Hauptseite)
const fish13Points = [
    'Hurensohn TV oder Bastard Beamer', 'E-Pumpe', '50 KW Heizleistung', 'Penispumpe',
    'Headset', 'Sinnloses Gadget', 'Propellör', 'Place to Keul', 'Einparkhilfe',
    'Halbe Küche', 'Abendkaffee', 'Wecker', 'Sonne', 'Regen', 'Schnee', 'Funny Moment',
    'Gericht mit 30 Zutaten', 'Fast verbrannt', 'Alki Moment', 'Teleskop-Lampe',
    'Unstable Construction', 'Raumspritzer', '80° Essen', 'Cute Moment',
    'Alle Fenster auf', 'Fettsack'
]

// Rarities (gleiche wie in der Hauptseite)
const rarities: Record<string, { label: string }> = {
    'Hurensohn TV oder Bastard Beamer': { label: 'Legendary' },
    'E-Pumpe': { label: 'Rare' },
    '50 KW Heizleistung': { label: 'Epic' },
    'Penispumpe': { label: 'Mythical' },
    'Headset': { label: 'Common' },
    'Sinnloses Gadget': { label: 'Common' },
    'Propellör': { label: 'Rare' },
    'Place to Keul': { label: 'Epic' },
    'Einparkhilfe': { label: 'Common' },
    'Halbe Küche': { label: 'Rare' },
    'Abendkaffee': { label: 'Common' },
    'Wecker': { label: 'Common' },
    'Sonne': { label: 'Common' },
    'Regen': { label: 'Rare' },
    'Schnee': { label: 'Epic' },
    'Funny Moment': { label: 'Legendary' },
    'Gericht mit 30 Zutaten': { label: 'Epic' },
    'Fast verbrannt': { label: 'Rare' },
    'Alki Moment': { label: 'Common' },
    'Teleskop-Lampe': { label: 'Rare' },
    'Unstable Construction': { label: 'Epic' },
    'Raumspritzer': { label: 'Legendary' },
    '80° Essen': { label: 'Mythical' },
    'Cute Moment': { label: 'Epic' },
    'Alle Fenster auf': { label: 'Common' },
    'Fettsack': { label: 'Rare' },
}

// Bingo Grid State
interface BingoCell {
    text: string
    marked: boolean
}

const bingoGrid = ref<BingoCell[]>([])
const gridKey = ref(0) // Key to force re-render when grid changes

// Helper function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

// Generate new random grid
function generateNewGrid() {
    const shuffledPoints = shuffleArray(fish13Points)
    const selectedPoints = shuffledPoints.slice(0, 16) // Take first 16 items

    bingoGrid.value = selectedPoints.map(point => ({
        text: point,
        marked: false
    }))

    // Increment grid key to force re-render
    gridKey.value++
}

// Toggle cell marked state
function toggleCell(index: number) {
    bingoGrid.value[index].marked = !bingoGrid.value[index].marked
}

// Reset all marks
function resetGrid() {
    bingoGrid.value.forEach(cell => {
        cell.marked = false
    })
}

// Computed properties
const markedCount = computed(() => {
    return bingoGrid.value.filter(cell => cell.marked).length
})

const markedItems = computed(() => {
    return bingoGrid.value
        .filter(cell => cell.marked)
        .map(cell => cell.text)
})

// Check if we have a Bingo (4 in a row, column, or diagonal)
const hasBingo = computed(() => {
    if (bingoGrid.value.length !== 16) return false

    // Helper function to check if all cells in given indices are marked
    const checkIndices = (indices: number[]) => {
        return indices.every(index => bingoGrid.value[index]?.marked)
    }

    // Check rows (0-3, 4-7, 8-11, 12-15)
    for (let row = 0; row < 4; row++) {
        const rowIndices = [row * 4, row * 4 + 1, row * 4 + 2, row * 4 + 3]
        if (checkIndices(rowIndices)) return true
    }

    // Check columns (0,4,8,12 | 1,5,9,13 | 2,6,10,14 | 3,7,11,15)
    for (let col = 0; col < 4; col++) {
        const colIndices = [col, col + 4, col + 8, col + 12]
        if (checkIndices(colIndices)) return true
    }

    // Check diagonal top-left to bottom-right (0,5,10,15)
    if (checkIndices([0, 5, 10, 15])) return true
    // Check diagonal top-right to bottom-left (3,6,9,12)
    if (checkIndices([3, 6, 9, 12])) return true

    return false
})

// Calculate Bingo progress (best line progress as percentage)
const bingoProgress = computed(() => {
    if (bingoGrid.value.length !== 16) return 0

    let maxProgress = 0

    // Helper function to count marked cells in given indices
    const countMarked = (indices: number[]) => {
        return indices.filter(index => bingoGrid.value[index]?.marked).length
    }

    // Check all possible lines and find the best progress
    const allLines = [
        // Rows (0-3, 4-7, 8-11, 12-15)
        [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
        // Columns (0,4,8,12 | 1,5,9,13 | 2,6,10,14 | 3,7,11,15)
        [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
        // Diagonals
        [0, 5, 10, 15], [3, 6, 9, 12]
    ]

    // Find the line with the most marked cells
    for (const line of allLines) {
        const markedInLine = countMarked(line)
        maxProgress = Math.max(maxProgress, markedInLine)

        // If we found a complete line (4/4), we can stop
        if (maxProgress === 4) break
    }
    return maxProgress
})

// Count total number of completed bingo lines
const bingoCount = computed(() => {
    if (bingoGrid.value.length !== 16) return 0

    let completedLines = 0

    // Helper function to check if all cells in given indices are marked
    const checkIndices = (indices: number[]) => {
        return indices.every(index => bingoGrid.value[index]?.marked)
    }

    // Check all possible lines
    const allLines = [
        // Rows (0-3, 4-7, 8-11, 12-15)
        [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
        // Columns (0,4,8,12 | 1,5,9,13 | 2,6,10,14 | 3,7,11,15)
        [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
        // Diagonals
        [0, 5, 10, 15], [3, 6, 9, 12]
    ]

    for (const line of allLines) {
        if (checkIndices(line)) completedLines++
    }

    return completedLines
})

// Get rarity background class for subtle coloring
function getRarityBackgroundClass(text: string) {
    const rarity = rarities[text]?.label
    switch (rarity) {
        case 'Common': return 'bg-gray-200'
        case 'Rare': return 'bg-blue-200'
        case 'Epic': return 'bg-purple-200'
        case 'Legendary': return 'bg-orange-200'
        case 'Mythical': return 'bg-gradient-mythical'
        default: return 'bg-white'
    }
}

// Initialize grid on component mount
onMounted(() => {
    generateNewGrid()
})
</script>

<style scoped>
.bg-gradient-to-r {
    background: linear-gradient(45deg, rgb(33, 230, 148), rgb(97, 14, 230), rgb(252, 61, 226));
}

.bg-gradient-mythical {
    background: linear-gradient(45deg, rgba(33, 230, 148, 0.4), rgba(97, 14, 230, 0.4), rgba(252, 61, 226, 0.4));
}

.bingo-grid-container {
    background-color: #f8fafc;
    padding: 1rem;
    border: 1px solid #d1d5db !important;
    width: 648px;
    height: 648px;
    flex-shrink: 0;
}

.bingo-grid-container :deep(.u-card) {
    border: 1px solid #d1d5db !important;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.bingo-grid-container :deep(.u-card-body) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    overflow: hidden;
}

.bingo-grid-container :deep(.u-card-header) {
    border-bottom: 1px solid #e5e7eb !important;
}

.bingo-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    width: 100%;
    height: 100%;
    max-width: 560px;
    max-height: 560px;
}

.info-panel {
    width: 320px;
    height: 648px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #d1d5db !important;
}

.info-panel :deep(.u-card) {
    border: 1px solid #d1d5db !important;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.info-panel :deep(.u-card-body) {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

/* Override UButton borders and focus states for all buttons */
:deep(.u-button) {
    border: 1px solid #d1d5db !important;
}

:deep(.u-button:focus) {
    border: 1px solid #9ca3af !important;
    box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.2) !important;
}

:deep(.u-button:focus-visible) {
    border: 1px solid #9ca3af !important;
    box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.2) !important;
}

:deep(.u-button:hover) {
    border: 1px solid #9ca3af !important;
}

/* Aggressive override for control buttons to remove purple border */
:deep(.control-button.u-button),
:deep(.control-button),
.control-button {
    border: 1px solid #d1d5db !important;
    box-shadow: none !important;
    outline: none !important;
}

:deep(.control-button.u-button:focus),
:deep(.control-button:focus),
.control-button:focus,
:deep(.control-button.u-button:focus-visible),
:deep(.control-button:focus-visible),
.control-button:focus-visible,
:deep(.control-button.u-button:active),
:deep(.control-button:active),
.control-button:active {
    border: 1px solid #9ca3af !important;
    box-shadow: none !important;
    outline: none !important;
}

/* Reset button specific styles */
:deep(.reset-button.u-button),
:deep(.reset-button),
.reset-button {
    border: 1px solid #fecaca !important;
    box-shadow: none !important;
}

:deep(.reset-button.u-button:hover),
:deep(.reset-button:hover),
.reset-button:hover {
    border: 1px solid #fca5a5 !important;
    box-shadow: none !important;
}

:deep(.reset-button.u-button:focus),
:deep(.reset-button:focus),
.reset-button:focus,
:deep(.reset-button.u-button:focus-visible),
:deep(.reset-button:focus-visible),
.reset-button:focus-visible,
:deep(.reset-button.u-button:active),
:deep(.reset-button:active),
.reset-button:active {
    border: 1px solid #fca5a5 !important;
    box-shadow: none !important;
    outline: none !important;
}

/* Generate button specific styles */
:deep(.generate-button.u-button),
:deep(.generate-button),
.generate-button {
    border: 1px solid #bbf7d0 !important;
    box-shadow: none !important;
}

:deep(.generate-button.u-button:hover),
:deep(.generate-button:hover),
.generate-button:hover {
    border: 1px solid #86efac !important;
    box-shadow: none !important;
}

:deep(.generate-button.u-button:focus),
:deep(.generate-button:focus),
.generate-button:focus,
:deep(.generate-button.u-button:focus-visible),
:deep(.generate-button:focus-visible),
.generate-button:focus-visible,
:deep(.generate-button.u-button:active),
:deep(.generate-button:active),
.generate-button:active {
    border: 1px solid #86efac !important;
    box-shadow: none !important;
    outline: none !important;
}

/* Ensure the UCard content area has proper flex behavior */
.info-panel :deep(.u-card-body) {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
    /* Prevent overflow in the card body */
}

/* Custom scrollbar styles */
.scrollbar-thin {
    scrollbar-width: thin;
}

.scrollbar-thin::-webkit-scrollbar {
    width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
}

.bingo-cell {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border: 2px solid #d1d5db;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 0;
    overflow: hidden;
}

.bingo-cell:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1200px) {
    .flex.gap-16 {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .bingo-grid-container {
        width: 100%;
        max-width: 600px;
    }

    .info-panel {
        width: 100%;
        max-width: 600px;
        height: auto !important;
        max-height: none;
    }
}

@media (max-width: 768px) {
    .bingo-grid-container {
        width: 100%;
        max-width: 450px;
        height: 450px;
        padding: 0.5rem;
    }

    .bingo-grid {
        max-width: 400px;
        max-height: 400px;
        gap: 0.5rem;
    }

    .bingo-cell {
        padding: 0.25rem;
    }

    .info-panel {
        width: 100%;
        max-width: 450px;
        height: auto !important;
        max-height: none;
    }
}
</style>
