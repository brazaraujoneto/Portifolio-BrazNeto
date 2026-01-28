<script setup>
import { inject, computed } from 'vue'
import { translations, personalData } from '../../i18n/translations.js'

const currentLang = inject('currentLang')
const t = computed(() => translations[currentLang.value])
</script>

<template>
  <section id="home" class="min-h-screen flex items-center pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 w-full">
      
      <!-- Desktop: Split Layout -->
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <!-- Texto (Left) -->
        <div class="flex-1 text-center lg:text-left">
          
          <!-- Badge -->
          <span class="inline-block px-4 py-2 rounded-full text-sm font-medium text-[var(--accent)] border border-[var(--accent)] mb-6 animate-fade-in-up">
            {{ t.hero.badge }}
          </span>
          
          <!-- Nome -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
            {{ t.hero.name }}
          </h1>
          
          <!-- Bio -->
          <p class="text-lg text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up delay-200">
            {{ t.hero.bio }}
          </p>
          
          <!-- Botões CTA -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up delay-300">
            <a href="#projects" class="btn-primary flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {{ t.hero.viewProjects }}
            </a>
            <a href="#" class="btn-outline flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {{ t.hero.resume }}
            </a>
          </div>
          
          <!-- Expertise Tags -->
          <div class="animate-fade-in-up delay-400">
            <p class="text-xs text-[var(--text-muted)] tracking-widest mb-3">{{ t.hero.expertise }}</p>
            <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span 
                v-for="skill in personalData.expertise" 
                :key="skill"
                class="tag"
              >
                <span class="text-[var(--accent)]">#</span>
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Foto (Right) -->
        <div class="flex-shrink-0">
          <div class="relative">
            <!-- Glow Effect -->
            <div class="absolute inset-0 rounded-full bg-[var(--accent)] opacity-20 blur-3xl scale-110" />
            
            <!-- Ring -->
            <div class="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-[var(--accent)]/30 p-2">
              <img
                :src="personalData.profileImage"
                :alt="personalData.name"
                class="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>
