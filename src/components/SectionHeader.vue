<template>
  <div class="space-y-2">
    <span class="inline-block font-black text-xs uppercase tracking-[0.25em] px-3 py-1 bg-[#3b82f6] text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
      {{ label }}
    </span>
    <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none">
      {{ title }}
    </h2>
    <div class="w-16 h-1.5 bg-black mt-1"></div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  title: String
})
</script>
