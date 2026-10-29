<script setup>
import { ref, computed } from 'vue'
import { useEditorStore } from '../stores/editor'

const store = useEditorStore()
const imageSrc = ref(null)

function handleImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imageSrc.value = e.target.result
      store.currentImage = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const filterStyle = computed(() => {
  return {
    filter: `brightness(${store.filters.brightness}%) contrast(${store.filters.contrast}%) grayscale(${store.filters.grayscale}%) blur(${store.filters.blur}px)`
  }
})

function saveToGallery() {
  if (imageSrc.value) {
    store.savedImages.push({
      id: Date.now(),
      src: imageSrc.value,
      filters: { ...store.filters },
      date: new Date().toLocaleDateString('ar-EG')
    })
    alert('تم حفظ الصورة بنجاح في لوحة التحكم! 📸')
  }
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b pb-4 border-slate-200">
      <h2 class="text-2xl font-bold flex items-center gap-2">
        <i class="fa-solid fa-sliders text-[var(--color-brand-primary)]"></i>
        استوديو تعديل الصور
      </h2>
    </div>

    <div v-if="!imageSrc" class="border-2 border-dashed border-slate-300 bg-white rounded-2xl p-8 sm:p-12 text-center hover:border-indigo-500 transition-colors">
      <div class="max-w-md mx-auto space-y-4">
        <i class="fa-solid fa-cloud-arrow-up text-5xl text-[var(--color-brand-primary)]"></i>
        <h3 class="text-lg font-semibold">اختر صورة للبدء في التعديل</h3>
        <p class="text-sm text-slate-500">يدعم صيغ PNG, JPG, WEBP</p>
        <label class="inline-flex items-center gap-2 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-hover)] text-white px-6 py-3 rounded-xl cursor-pointer font-bold shadow-md transition-all">
          <i class="fa-solid fa-folder-open"></i>
          رفع صورة من جهازك
          <input type="file" accept="image/*" @change="handleImageUpload" class="hidden" />
        </label>
      </div>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <div class="lg:col-span-2 bg-slate-900 rounded-2xl p-4 flex items-center justify-center min-h-[350px] shadow-inner">
        <img :src="imageSrc" :style="filterStyle" alt="المعاينة" class="max-h-[450px] w-auto rounded-lg object-contain shadow-2xl transition-all" />
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6">
        <h3 class="text-lg font-bold flex items-center gap-2 border-b pb-3">
          <i class="fa-solid fa-sliders text-[var(--color-brand-secondary)]"></i>
          أدوات التعديل
        </h3>

        <div class="space-y-4">
          <div>
            <div class="flex justify-between text-sm font-semibold mb-1">
              <span><i class="fa-solid fa-sun ml-1 text-amber-500"></i> السطوع</span>
              <span>{{ store.filters.brightness }}%</span>
            </div>
            <input type="range" min="0" max="200" v-model="store.filters.brightness" class="w-full accent-indigo-600" />
          </div>

          <div>
            <div class="flex justify-between text-sm font-semibold mb-1">
              <span><i class="fa-solid fa-circle-half-stroke ml-1 text-indigo-500"></i> التباين</span>
              <span>{{ store.filters.contrast }}%</span>
            </div>
            <input type="range" min="0" max="200" v-model="store.filters.contrast" class="w-full accent-indigo-600" />
          </div>

          <div>
            <div class="flex justify-between text-sm font-semibold mb-1">
              <span><i class="fa-solid fa-droplet-slash ml-1 text-slate-500"></i> رمادي</span>
              <span>{{ store.filters.grayscale }}%</span>
            </div>
            <input type="range" min="0" max="100" v-model="store.filters.grayscale" class="w-full accent-indigo-600" />
          </div>

          <div>
            <div class="flex justify-between text-sm font-semibold mb-1">
              <span><i class="fa-solid fa-eye-low-vision ml-1 text-sky-500"></i> ضبابية</span>
              <span>{{ store.filters.blur }}px</span>
            </div>
            <input type="range" min="0" max="10" v-model="store.filters.blur" class="w-full accent-indigo-600" />
          </div>
        </div>

        <div class="flex gap-3 pt-4 border-t border-slate-100">
          <button @click="store.resetFilters" class="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
            <i class="fa-solid fa-rotate-right"></i> إعادة ضبط
          </button>
          <button @click="saveToGallery" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-semibold shadow-sm transition-colors flex items-center justify-center gap-2">
            <i class="fa-solid fa-floppy-disk"></i> حفظ
          </button>
        </div>
      </div>

    </div>
  </div>
</template>