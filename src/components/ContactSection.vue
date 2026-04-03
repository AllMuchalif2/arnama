<template>
  <section id="contact" class="py-16 px-4 max-w-6xl mx-auto">
    <SectionHeader label="Contact" title="Let's Work Together" />
    <p class="mt-4 text-base font-medium text-black/70 max-w-xl">
      Got a project? A wild idea? Just want to talk shop? Hit any of the buttons below. I respond fast.
    </p>
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a
        v-for="social in data?.socials"
        :key="social.label"
        :href="social.url"
        target="_blank"
        class="group flex items-center gap-4 p-5 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 hover:bg-[#3b82f6] hover:text-white"
      >
        <div class="w-12 h-12 flex items-center justify-center bg-black text-white border-2 border-black group-hover:bg-white group-hover:text-black transition-colors shrink-0">
          <component :is="getIcon(social.icon)" class="w-6 h-6" />
        </div>
        <div>
          <p class="font-black uppercase text-base tracking-wide">{{ social.label }}</p>
          <p class="font-medium text-sm text-black/60 group-hover:text-white/80 transition-colors">{{ social.username }}</p>
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
