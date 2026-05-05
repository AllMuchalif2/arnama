<template>
  <section id="home" class="pt-28 pb-16 px-4 max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="order-2 md:order-1">
        <div class="inline-block bg-[var(--primary-color)] text-[var(--white)] font-black text-xs uppercase tracking-widest px-3 py-1 border-2 border-[var(--border-color)] shadow-[3px_3px_0px_0px_var(--border-color)] mb-4">
          Available for work
        </div>
        <h1 class="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter text-[var(--text-color)] mb-4">
          {{ data?.identity?.name?.includes(' - ') ? data?.identity?.name?.split(' ').slice(0, -1).join(' ') : data?.identity?.name?.split(' ')[0] }}<br>
          <span class="text-[var(--primary-color)] inline-block border-b-4 border-[var(--border-color)]">{{ data?.identity?.name?.includes(' - ') ? data?.identity?.name?.split(' ').pop() : data?.identity?.name?.split(' ').slice(1).join(' ') }}</span>
        </h1>
        <p class="text-lg font-black uppercase tracking-wide text-[var(--text-color)] border-l-4 border-[var(--primary-color)] pl-4 mb-4">
          {{ data?.identity?.title }}
        </p>
        <p class="text-base font-medium text-[var(--text-color)] text-opacity-80 mb-8 max-w-md leading-relaxed">
          {{ data?.identity?.bio }}
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            href="#projects"
            class="px-6 py-3 font-black uppercase tracking-wider bg-[var(--text-color)] text-[var(--white)] border-2 border-[var(--border-color)] shadow-[6px_6px_0px_0px_var(--primary-color)] hover:shadow-[3px_3px_0px_0px_var(--primary-color)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 active:translate-x-1.5 active:translate-y-1.5 active:shadow-none"
          >
            View Projects
          </a>
          <a
            :href="data?.identity?.resumeUrl"
            target="_blank"
            class="px-6 py-3 font-black uppercase tracking-wider bg-[var(--bg-color)] text-[var(--text-color)] border-2 border-[var(--border-color)] shadow-[6px_6px_0px_0px_var(--border-color)] hover:shadow-[3px_3px_0px_0px_var(--border-color)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 active:translate-x-1.5 active:translate-y-1.5 active:shadow-none"
          >
            Resume ↓
          </a>
        </div>
      </div>
      <div class="order-1 md:order-2 flex justify-center md:justify-end">
        <div class="relative">
          <div class="absolute inset-0 translate-x-4 translate-y-4 bg-[var(--primary-color)] border-4 border-[var(--border-color)] rounded-none"></div>
          <div class="relative w-64 h-64 md:w-80 md:h-80 border-4 border-[var(--border-color)] bg-[var(--white)] overflow-hidden">
            <img
              :src="avatarImg"
              :alt="data?.identity?.name"
              class="w-full h-full object-cover"
            />
          <div class="absolute bottom-0 left-0 right-0 bg-[var(--text-color)] text-[var(--white)] font-black uppercase text-xs tracking-widest py-2 px-3">
              {{ data?.identity?.tagline }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 border-y-4 border-[var(--border-color)] bg-[var(--primary-color)] overflow-hidden py-3">
      <div class="flex gap-8 animate-marquee whitespace-nowrap">
        <span v-for="i in 8" :key="i" class="text-[var(--white)] font-black uppercase text-sm tracking-widest shrink-0">
          {{ data?.techStack?.map(t => t.name).join(' ✦ ') }} ✦ Open to Work ✦&nbsp;
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import avatarImg from '../assets/avatar.jpg'

defineProps({
  data: Object
})
</script>
