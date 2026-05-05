<template>
  <section id="experience" class="py-16 px-4 max-w-6xl mx-auto">
    <SectionHeader label="Experience & Education" title="Where I've Been" />
    <div class="mt-10 relative">
      <div class="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-[var(--text-color)] hidden md:block"></div>
      <div class="flex flex-col gap-6">
        <div
          v-for="(item, idx) in data?.timeline"
          :key="item.id"
          class="relative flex flex-col md:flex-row gap-4"
          :class="idx % 2 === 0 ? 'md:flex-row-reverse' : ''"
        >
          <div class="md:w-[calc(50%-2rem)] bg-[var(--white)] border-4 border-[var(--border-color)] shadow-[6px_6px_0px_0px_var(--border-color)] hover:shadow-[3px_3px_0px_0px_var(--border-color)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 p-5">
            <div class="flex items-start gap-3 mb-2">
              <div
                class="shrink-0 w-9 h-9 flex items-center justify-center border-2 border-[var(--border-color)]"
                :class="item.type === 'experience' ? 'bg-[var(--primary-color)] text-[var(--white)]' : 'bg-[var(--text-color)] text-[var(--white)]'"
              >
                <component :is="getIcon(item.icon)" class="w-5 h-5" />
              </div>
              <div>
                <h3 class="font-black uppercase text-sm tracking-wide text-[var(--text-color)] leading-tight">{{ item.title }}</h3>
                <p class="font-black text-[var(--primary-color)] text-xs uppercase tracking-wider">{{ item.organization }}</p>
              </div>
            </div>
            <div class="inline-block bg-[var(--text-color)] text-[var(--white)] text-xs font-black uppercase tracking-widest px-2 py-0.5 mb-3">
              {{ item.period }}
            </div>
            <p class="text-sm font-medium text-[var(--text-color)] text-opacity-70 leading-relaxed">{{ item.description }}</p>
          </div>
          <div class="hidden md:flex items-start justify-center w-16 pt-5 shrink-0">
            <div class="w-5 h-5 bg-[var(--primary-color)] border-4 border-[var(--border-color)] rounded-full"></div>
          </div>
          <div class="md:w-[calc(50%-2rem)] hidden md:block"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue'
import { Briefcase, GraduationCap, BookOpen } from 'lucide-vue-next'

const props = defineProps({
  data: Object
})

const iconMap = {
  Briefcase, GraduationCap, BookOpen
}
const getIcon = (name) => iconMap[name] || Briefcase
</script>
