<script setup>
import { ref, provide, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import SpotlightBackground from './components/SpotlightBackground.vue'
import MobileBottomNav from './components/MobileBottomNav.vue'

// ========================================
// ESTADO GLOBAL - Theme & Language
// ========================================

const isDark = ref(true)
const currentLang = ref('pt') // 'pt' ou 'en'

// Toggle tema
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// Toggle idioma
const toggleLang = (lang) => {
  currentLang.value = lang
  localStorage.setItem('lang', lang)
}

// Inicializa tema e idioma do localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const savedLang = localStorage.getItem('lang')
  
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
    document.documentElement.classList.toggle('dark', isDark.value)
  } else {
    document.documentElement.classList.add('dark')
  }
  
  if (savedLang) {
    currentLang.value = savedLang
  }
})

// Provide para componentes filhos
provide('isDark', isDark)
provide('currentLang', currentLang)
provide('toggleTheme', toggleTheme)
provide('toggleLang', toggleLang)
</script>

<template>
  <div class="min-h-screen relative">
    <!-- Background com efeito spotlight -->
    <SpotlightBackground />
    
    <!-- Navbar fixa -->
    <Navbar />
    
    <!-- Conteúdo principal -->
    <main>
      <HeroSection id="home" />
      <ExperienceSection id="experience" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
    </main>
    
    <!-- Navegação mobile (bottom) -->
    <MobileBottomNav />
  </div>
</template>
