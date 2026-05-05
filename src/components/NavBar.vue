<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-color)] border-b-4 border-[var(--border-color)]">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#home" class="text-xl font-black tracking-tighter text-[var(--text-color)] uppercase">
        {{ data?.identity?.name?.split(' ').pop() }}
      </a>
      <div class="hidden md:flex items-center gap-2">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="px-4 py-2 font-black uppercase text-sm tracking-wider text-[var(--text-color)] border-2 border-transparent hover:border-[var(--border-color)] hover:bg-[var(--white)] hover:shadow-[4px_4px_0px_0px_var(--border-color)] transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          {{ item.label }}
        </a>
        <a
          href="#contact"
          class="px-5 py-2 font-black uppercase text-sm tracking-wider bg-[var(--primary-color)] text-[var(--white)] border-2 border-[var(--border-color)] shadow-[4px_4px_0px_0px_var(--border-color)] hover:shadow-[2px_2px_0px_0px_var(--border-color)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Contact
        </a>
      </div>
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden p-2 border-2 border-[var(--border-color)] bg-[var(--white)] shadow-[3px_3px_0px_0px_var(--border-color)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
      >
        <component :is="mobileMenuOpen ? XIcon : MenuIcon" class="w-5 h-5" />
      </button>
    </div>
    <div
      v-show="mobileMenuOpen"
      class="md:hidden border-t-4 border-[var(--border-color)] bg-[var(--bg-color)] px-4 py-4 flex flex-col gap-2"
    >
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        @click="mobileMenuOpen = false"
        class="px-4 py-3 font-black uppercase text-sm tracking-wider border-2 border-[var(--border-color)] bg-[var(--white)] shadow-[3px_3px_0px_0px_var(--border-color)] hover:bg-[var(--primary-color)] hover:text-[var(--white)] transition-all"
      >
        {{ item.label }}
      </a>
      <a
        href="#contact"
        @click="mobileMenuOpen = false"
        class="px-4 py-3 font-black uppercase text-sm tracking-wider border-2 border-[var(--border-color)] bg-[var(--primary-color)] text-[var(--white)] shadow-[3px_3px_0px_0px_var(--border-color)] transition-all text-center"
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
