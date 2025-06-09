import { ref, computed, readonly, onMounted } from 'vue'

// Composable für Bingo-Daten Management
export interface BingoItem {
	name: string
	rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythical'
}

export interface BingoCell {
	text: string
	marked: boolean
}

// Bingo-Daten für verschiedene YouTuber
const bingoData = {
	'fish13': () => import('~/data/fish13-bingo.json'),
	'trek-trendy': () => import('~/data/trek-trendy-bingo.json'),
	'nukes-top5': () => import('~/data/nukes-top5-bingo.json'),
} as const

export type BingoType = keyof typeof bingoData

export const useBingo = (type: BingoType) => {
	const bingoItems = ref<BingoItem[]>([])
	const bingoGrid = ref<BingoCell[]>([])
	const gridKey = ref(0)
	const isLoading = ref(true)

	// Lade Bingo-Daten für den spezifischen YouTuber
	const loadBingoData = async () => {
		try {
			isLoading.value = true
			const module = await bingoData[type]()
			bingoItems.value = module.default as BingoItem[]
		}
		catch (error) {
			console.error(`Fehler beim Laden der Bingo-Daten für ${type}:`, error)
			bingoItems.value = []
		}
		finally {
			isLoading.value = false
		}
	}

	// Erstelle Rarities-Objekt aus den geladenen Daten
	const rarities = computed(() => {
		const result: Record<string, { label: string }> = {}
		bingoItems.value.forEach((item) => {
			result[item.name] = { label: item.rarity }
		})
		return result
	})

	// Array mischen
	const shuffleArray = <T>(array: T[]): T[] => {
		const shuffled = [...array]
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
		}
		return shuffled
	}

	// Neues Bingo-Grid generieren
	const generateNewGrid = () => {
		if (bingoItems.value.length === 0) return

		const shuffledItems = shuffleArray(bingoItems.value)
		const selectedItems = shuffledItems.slice(0, 16)

		bingoGrid.value = selectedItems.map(item => ({
			text: item.name,
			marked: false,
		}))

		gridKey.value++
	}

	// Zelle umschalten
	const toggleCell = (index: number) => {
		if (bingoGrid.value[index]) {
			bingoGrid.value[index].marked = !bingoGrid.value[index].marked
		}
	}

	// Grid zurücksetzen (alle Markierungen entfernen)
	const resetGrid = () => {
		bingoGrid.value.forEach((cell) => {
			cell.marked = false
		})
	}

	// Computed Properties
	const markedCount = computed(() => {
		return bingoGrid.value.filter(cell => cell.marked).length
	})

	const markedItems = computed(() => {
		return bingoGrid.value
			.filter(cell => cell.marked)
			.map(cell => cell.text)
	})

	// Bingo-Prüfung (4 in einer Reihe, Spalte oder Diagonal)
	const hasBingo = computed(() => {
		if (bingoGrid.value.length !== 16) return false

		const checkIndices = (indices: number[]) => {
			return indices.every(index => bingoGrid.value[index]?.marked)
		}

		// Reihen prüfen
		for (let row = 0; row < 4; row++) {
			const rowIndices = [row * 4, row * 4 + 1, row * 4 + 2, row * 4 + 3]
			if (checkIndices(rowIndices)) return true
		}

		// Spalten prüfen
		for (let col = 0; col < 4; col++) {
			const colIndices = [col, col + 4, col + 8, col + 12]
			if (checkIndices(colIndices)) return true
		}

		// Diagonalen prüfen
		if (checkIndices([0, 5, 10, 15])) return true
		if (checkIndices([3, 6, 9, 12])) return true

		return false
	})

	// Bingo-Fortschritt berechnen
	const bingoProgress = computed(() => {
		if (bingoGrid.value.length !== 16) return 0

		let maxProgress = 0

		const countMarked = (indices: number[]) => {
			return indices.filter(index => bingoGrid.value[index]?.marked).length
		}

		const allLines = [
			// Reihen
			[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
			// Spalten
			[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
			// Diagonalen
			[0, 5, 10, 15], [3, 6, 9, 12],
		]

		for (const line of allLines) {
			const markedInLine = countMarked(line)
			maxProgress = Math.max(maxProgress, markedInLine)
			if (maxProgress === 4) break
		}

		return maxProgress
	})

	// Anzahl vollständiger Bingo-Linien
	const bingoCount = computed(() => {
		if (bingoGrid.value.length !== 16) return 0

		let completedLines = 0

		const checkIndices = (indices: number[]) => {
			return indices.every(index => bingoGrid.value[index]?.marked)
		}

		const allLines = [
			[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
			[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
			[0, 5, 10, 15], [3, 6, 9, 12],
		]

		for (const line of allLines) {
			if (checkIndices(line)) completedLines++
		}

		return completedLines
	}) // Rarity-Hintergrundklasse
	const getRarityBackgroundClass = (text: string) => {
		const rarity = rarities.value[text]?.label
		switch (rarity) {
			case 'Common': return 'bg-gray-200 dark:bg-gray-700'
			case 'Rare': return 'bg-blue-200 dark:bg-blue-800'
			case 'Epic': return 'bg-purple-200 dark:bg-purple-800'
			case 'Legendary': return 'bg-orange-200 dark:bg-orange-800'
			case 'Mythical': return 'bg-gradient-mythical dark:bg-gradient-mythical-dark'
			default: return 'bg-white dark:bg-gray-800'
		}
	}

	// Initialize on mount
	onMounted(async () => {
		await loadBingoData()
		if (bingoItems.value.length > 0) {
			generateNewGrid()
		}
	})

	return {
		// State
		bingoItems: readonly(bingoItems),
		bingoGrid,
		gridKey: readonly(gridKey),
		isLoading: readonly(isLoading),
		rarities,

		// Actions
		generateNewGrid,
		toggleCell,
		resetGrid,
		getRarityBackgroundClass,

		// Computed
		markedCount,
		markedItems,
		hasBingo,
		bingoProgress,
		bingoCount,
	}
}
