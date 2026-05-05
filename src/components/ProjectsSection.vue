<template>
  <section id="projects" class="py-16 px-4 max-w-6xl mx-auto">
    <SectionHeader label="Projects" title="Things I've Shipped" />
    <div class="grid md:grid-cols-2 gap-6 mt-10">
      <div
        v-for="project in data?.projects"
        :key="project.id"
        class="group relative flex flex-col bg-[var(--white)] border-4 border-[var(--border-color)] shadow-[8px_8px_0px_0px_var(--border-color)] hover:shadow-[4px_4px_0px_0px_var(--border-color)] hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
      >
        <div v-if="project.featured" class="absolute -top-3 -right-3 bg-[var(--primary-color)] text-[var(--white)] text-xs font-black uppercase tracking-widest px-2 py-1 border-2 border-[var(--border-color)]">
          Featured
        </div>
        <div class="p-6 flex-1">
          <div class="flex items-start justify-between mb-3">
            <h3 class="text-xl font-black uppercase tracking-tight text-[var(--text-color)]">{{ project.title }}</h3>
            <span class="text-xs font-black text-[var(--text-color)] text-opacity-40 uppercase tracking-widest mt-1 shrink-0">{{ project.year }}</span>
          </div>
          <p class="text-sm font-medium text-[var(--text-color)] text-opacity-70 mb-4 leading-relaxed">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs font-black uppercase tracking-wider px-2 py-1 bg-[var(--primary-light)] bg-opacity-20 border border-[var(--border-color)] text-[var(--text-color)]"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="border-t-4 border-[var(--border-color)] flex">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            class="flex-1 flex items-center justify-center gap-2 py-3 font-black uppercase text-sm tracking-wider text-[var(--white)] bg-[var(--primary-color)] border-r-2 border-[var(--border-color)] hover:bg-[var(--primary-hover)] transition-colors"
          >
            <ExternalLinkIcon class="w-4 h-4" /> Live
          </a>
          <a
            :href="project.repoUrl"
            class="flex-1 flex items-center justify-center gap-2 py-3 font-black uppercase text-sm tracking-wider text-[var(--text-color)] bg-[var(--white)] hover:bg-[var(--bg-color)] transition-colors"
          >
            <GithubIcon class="w-4 h-4" /> Code
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue'
import { ExternalLink, Github } from 'lucide-vue-next'

const props = defineProps({
  data: Object
})

const ExternalLinkIcon = ExternalLink
const GithubIcon = Github
</script>
