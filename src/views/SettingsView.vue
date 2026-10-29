<template>
  <div class="max-w-2xl space-y-6">
    <div class="border-b border-slate-200 pb-4">
      <h2 class="text-2xl font-bold flex items-center gap-2">
        <i class="fa-solid fa-gear text-[var(--color-brand-primary)]"></i>
        إعدادات التطبيق
      </h2>
      <p class="text-slate-500 text-sm mt-1">التحكم في تفضيلات الجودة والتخزين المحلي</p>
    </div>

    <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
      <div class="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h4 class="font-bold text-sm">جودة تصدير الصور</h4>
          <p class="text-xs text-slate-500">تحديد صيغة حفظ الصور الحالية</p>
        </div>
        <select class="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-700">
          <option>عالية (PNG)</option>
          <option>متوسطة (JPG)</option>
        </select>
      </div>

      <div class="flex items-center justify-between">
        <div>
          <h4 class="font-bold text-sm">حفظ التعديلات تلقائياً</h4>
          <p class="text-xs text-slate-500">مزامنة البيانات فور تطبيق الفلاتر</p>
        </div>
        <input type="checkbox" checked class="w-4 h-4 accent-indigo-600" />
      </div>
    </div>
  </div>
</template>