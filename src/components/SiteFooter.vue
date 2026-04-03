<template>
  <footer class="border-t-4 border-black bg-black text-white py-8 px-4">
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <span class="text-xl font-black tracking-tighter uppercase">
        {{ data?.identity?.name?.split(" ").pop() }}
      </span>
      <p class="font-black text-sm uppercase tracking-widest text-white/50">
        Built with Vue.js + Tailwind CSS
      </p>
      <p class="font-black text-sm text-white/50">
        © {{ new Date().getFullYear() }} All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>
