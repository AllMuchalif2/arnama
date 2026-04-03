<template>
  <div id="app" class="bg-[#f0f0f0] min-h-screen font-black-han">
    <NavBar :data="data" />
    <HeroSection :data="data" />
    <TechStack :data="data" />
    <ProjectsSection :data="data" />
    <ExperienceSection :data="data" />
    <ContactSection :data="data" />
    <SiteFooter :data="data" />
  </div>
</template>

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

<style>
* { box-sizing: border-box; }

body {
  font-family: 'Space Grotesk', 'Arial Black', sans-serif;
}

h1, h2, h3, .font-black-han {
  font-family: 'Space Grotesk', 'Arial Black', Impact, sans-serif;
}

@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 20s linear infinite;
  width: max-content;
}

html { scroll-behavior: smooth; }

::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: #f0f0f0; border-left: 2px solid black; }
::-webkit-scrollbar-thumb { background: #3b82f6; border: 2px solid black; }
</style>
