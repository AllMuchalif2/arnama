<template>
  <section id="stack" class="py-16 px-4 max-w-6xl mx-auto">
    <SectionHeader label="Tech Stack" title="Techs That I Use" />
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
      <div
        v-for="tech in data?.techStack"
        :key="tech.name"
        class="group flex flex-col items-center gap-3 p-5 bg-[var(--white)] border-4 border-[var(--border-color)] shadow-[6px_6px_0px_0px_var(--border-color)] hover:shadow-[3px_3px_0px_0px_var(--border-color)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 cursor-default"
      >
        <div
          class="w-12 h-12 flex items-center justify-center border-2 border-[var(--border-color)]"
          :style="{ backgroundColor: tech.color + '22' }"
        >
          <component :is="getIcon(tech.icon)" class="w-7 h-7" :style="{ color: tech.color }" />
        </div>
        <span class="font-black uppercase text-sm tracking-wide text-[var(--text-color)] text-center">{{ tech.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue'
import {
  Braces, Layers, Code2, Wind, Coffee, Database, Figma, GitBranch,
  Zap, Server, Container
} from 'lucide-vue-next'

const props = defineProps({
  data: Object
})

const iconMap = {
  Braces, Layers, Code2, Wind, Coffee, Database, Figma, GitBranch,
  Zap, Server, Container
}

const getIcon = (name) => iconMap[name] || Code2
</script>
