<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-[#f0f0f0] border-b-4 border-black">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <span class="text-xl font-black tracking-tighter text-black uppercase">
        {{ data?.identity?.name?.split(' ').pop() }}
      </span>
      <div class="hidden md:flex items-center gap-2">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="px-4 py-2 font-black uppercase text-sm tracking-wider text-black border-2 border-transparent hover:border-black hover:bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          {{ item.label }}
        </a>
        <a
          href="#contact"
          class="px-5 py-2 font-black uppercase text-sm tracking-wider bg-[#3b82f6] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Contact
        </a>
      </div>
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden p-2 border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
      >
        <component :is="mobileMenuOpen ? XIcon : MenuIcon" class="w-5 h-5" />
      </button>
    </div>
    <div
      v-show="mobileMenuOpen"
      class="md:hidden border-t-4 border-black bg-[#f0f0f0] px-4 py-4 flex flex-col gap-2"
    >
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        @click="mobileMenuOpen = false"
        class="px-4 py-3 font-black uppercase text-sm tracking-wider border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#3b82f6] hover:text-white transition-all"
      >
        {{ item.label }}
      </a>
      <a
        href="#contact"
        @click="mobileMenuOpen = false"
        class="px-4 py-3 font-black uppercase text-sm tracking-wider border-2 border-black bg-[#3b82f6] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all text-center"
      >
        Contact
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const props = defineProps({
  data: Object
})

const mobileMenuOpen = ref(false)
const navItems = [
  { label: 'Home',       href: '#home' },
  { label: 'Stack',      href: '#stack' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

const MenuIcon = Menu
const XIcon = X
</script>
