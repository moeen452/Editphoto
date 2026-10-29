<template>
  <div class="min-h-screen bg-slate-50 font-cairo" dir="rtl">
    
    <header class="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between flex-row-reverse">
        
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-wand-magic-sparkles text-amber-400 text-xl"></i>
          <h1 class="text-lg font-bold tracking-wide">محرر الصور الذكي</h1>
        </div>

        <nav class="flex items-center gap-3 flex-row-reverse">
          <RouterLink 
            to="/" 
            class="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-all hover:bg-slate-800"
            active-class="bg-indigo-600 text-white"
          >
            <i class="fa-solid fa-chart-pie"></i>
            <span>لوحة التحكم</span>
          </RouterLink>

          <RouterLink 
            to="/editor" 
            class="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-all hover:bg-slate-800"
            active-class="bg-indigo-600 text-white"
          >
            <i class="fa-solid fa-sliders"></i>
            <span>استوديو التعديل</span>
          </RouterLink>

          <RouterLink 
            to="/settings" 
            class="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-all hover:bg-slate-800"
            active-class="bg-indigo-600 text-white"
          >
            <i class="fa-solid fa-gear"></i>
            <span>الإعدادات</span>
          </RouterLink>
        </nav>

      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <RouterView />
    </main>

  </div>
</template>