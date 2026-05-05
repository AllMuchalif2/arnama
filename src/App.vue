<script setup>
import { ref, onMounted } from 'vue'

import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import TechStack from './components/TechStack.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

import portfolioData from './data.json'

const data = ref(null)
onMounted(() => { data.value = portfolioData })
</script>

<template>
  <div id="app" class="min-h-screen font-black-han overflow-x-hidden">
    <NavBar :data="data" />
    <HeroSection v-animate :data="data" />
    <TechStack v-animate :data="data" />
    <ProjectsSection v-animate :data="data" />
    <ExperienceSection v-animate :data="data" />
    <ContactSection v-animate :data="data" />
    <SiteFooter v-animate :data="data" />
  </div>
</template>
