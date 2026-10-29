<script setup>
import { useEditorStore } from '../stores/editor'
import { RouterLink } from 'vue-router'

const store = useEditorStore()

function deleteImage(id) {
  store.savedImages = store.savedImages.filter(img => img.id !== id)
}
</script>

<template>
  <div class="space-y-8">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
      <div>
        <h2 class="text-2xl font-bold flex items-center gap-2">
          <i class="fa-solid fa-chart-pie text-[var(--color-brand-primary)]"></i>
          لوحة التحكم والمعرض
        </h2>
        <p class="text-slate-500 text-sm mt-1">عرض الصور المُعَدَّلة والإحصائيات السريعة</p>
      </div>

      <RouterLink 
        to="/editor" 
        class="inline-flex items-center gap-2 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-hover)] text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm w-fit"
      >
        <i class="fa-solid fa-plus"></i>
        تعديل صورة جديدة
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-indigo-50 text-[var(--color-brand-primary)] flex items-center justify-center text-xl">
          <i class="fa-solid fa-images"></i>
        </div>
        <div>
          <span class="text-slate-500 text-xs font-semibold block">إجمالي الصور المحفوظة</span>
          <span class="text-2xl font-bold">{{ store.savedImages.length }}</span>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-sky-50 text-[var(--color-brand-secondary)] flex items-center justify-center text-xl">
          <i class="fa-solid fa-sliders"></i>
        </div>
        <div>
          <span class="text-slate-500 text-xs font-semibold block">حالة الفلاتر</span>
          <span class="text-2xl font-bold">مُفَعَّلة</span>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-amber-50 text-[var(--color-brand-accent)] flex items-center justify-center text-xl">
          <i class="fa-solid fa-hard-drive"></i>
        </div>
        <div>
          <span class="text-slate-500 text-xs font-semibold block">المساحة</span>
          <span class="text-2xl font-bold">Local</span>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <h3 class="text-lg font-bold flex items-center gap-2">
        <i class="fa-solid fa-photo-film text-slate-600"></i>
        معرض الصور المعدلة
      </h3>

      <div v-if="store.savedImages.length === 0" class="bg-white rounded-2xl p-12 text-center border border-slate-100">
        <i class="fa-regular fa-image text-5xl text-slate-300 mb-3 block"></i>
        <p class="text-slate-500 font-medium">لا توجد صور محفوظة بعد.</p>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div 
          v-for="img in store.savedImages" 
          :key="img.id" 
          class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div class="relative aspect-video bg-slate-900 overflow-hidden">
            <img 
              :src="img.src" 
              :style="{ filter: `brightness(${img.filters.brightness}%) contrast(${img.filters.contrast}%) grayscale(${img.filters.grayscale}%) blur(${img.filters.blur}px)` }" 
              class="w-full h-full object-contain"
            />
            <button 
              @click="deleteImage(img.id)"
              class="absolute top-3 left-3 bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <i class="fa-solid fa-trash text-xs"></i>
            </button>
          </div>
          <div class="p-4 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>تاريخ الحفظ: {{ img.date }}</span>
            <span class="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md">مُعَدَّلة</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>