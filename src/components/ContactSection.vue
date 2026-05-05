<template>
  <section id="contact" class="py-16 px-4 max-w-6xl mx-auto">
    <SectionHeader label="Contact" title="Let's Work Together" />
    <p class="mt-4 text-base font-medium text-[var(--text-color)] text-opacity-70 max-w-xl">
      Got a project? A wild idea? Just want to talk shop? Hit any of the buttons below. I respond fast.
    </p>
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a
        v-for="social in data?.socials"
        :key="social.label"
        :href="social.url"
        target="_blank"
        class="group flex items-center gap-4 p-5 bg-[var(--white)] border-4 border-[var(--border-color)] shadow-[8px_8px_0px_0px_var(--border-color)] hover:shadow-[4px_4px_0px_0px_var(--border-color)] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 hover:bg-[var(--primary-color)] hover:text-[var(--white)]"
      >
        <div class="w-12 h-12 flex items-center justify-center bg-[var(--text-color)] text-[var(--white)] border-2 border-[var(--border-color)] group-hover:bg-[var(--white)] group-hover:text-[var(--text-color)] transition-colors shrink-0">
          <component :is="getIcon(social.icon)" class="w-6 h-6" />
        </div>
        <div>
          <p class="font-black uppercase text-base tracking-wide">{{ social.label }}</p>
          <p class="font-medium text-sm text-[var(--text-color)] text-opacity-60 group-hover:text-[var(--white)] text-opacity-80 transition-colors">{{ social.username }}</p>
        </div>
        <ArrowUpRightIcon class="w-5 h-5 ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
      </a>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue'
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUpRight } from 'lucide-vue-next'

const props = defineProps({
  data: Object
})

const iconMap = {
  Github, Linkedin, Twitter, Instagram, Mail
}

const getIcon = (name) => iconMap[name] || Mail
const ArrowUpRightIcon = ArrowUpRight
</script>
