import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEditorStore = defineStore('editor', () => {
  const currentImage = ref(null)
  
  const savedImages = ref([])

  const filters = ref({
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    blur: 0
  })

  function resetFilters() {
    filters.value = {
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      blur: 0
    }
  }

  return {
    currentImage,
    savedImages,
    filters,
    resetFilters
  }
})