<script setup>
import { inject, computed } from 'vue'
import { translations, experienceData, educationData, skillsData } from '../../i18n/translations.js'

const currentLang = inject('currentLang')
const t = computed(() => translations[currentLang.value])

// Helper para pegar texto traduzido
const getText = (obj) => obj[currentLang.value] || obj.pt || obj
</script>

<template>
  <section id="experience" class="py-20 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t.experience.title }}</h2>
        <p class="text-[var(--text-secondary)]">{{ t.experience.subtitle }}</p>
      </div>
      
      <!-- Desktop: Side by Side Layout -->
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
        
        <!-- Left: Timeline -->
        <div>
          <h3 class="flex items-center gap-2 text-xl font-semibold mb-6">
            <svg class="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {{ t.experience.experienceTitle }}
          </h3>
          
          <!-- Timeline -->
          <div class="relative">
            <!-- Line -->
            <div class="absolute left-5 top-0 bottom-0 w-0.5 bg-[var(--border-color)]" />
            
            <!-- Items -->
            <div 
              v-for="(exp, index) in experienceData" 
              :key="index"
              class="relative pl-14 pb-8 last:pb-0"
            >
              <!-- Dot -->
              <div class="absolute left-3 w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              <!-- Card -->
              <div class="glass-card p-5 glow-hover">
                <div class="flex items-start justify-between mb-2">
                  <h4 class="font-semibold">{{ getText(exp.title) }}</h4>
                  <span 
                    v-if="exp.isCurrent" 
                    class="text-xs px-2 py-1 rounded bg-[var(--accent)]/20 text-[var(--accent)]"
                  >
                    {{ t.experience.present }}
                  </span>
                </div>
                <p class="text-[var(--accent)] text-sm mb-1">@ {{ exp.company }}</p>
                <p class="text-[var(--text-muted)] text-sm mb-3">{{ getText(exp.period) }}</p>
                <ul class="space-y-1">
                  <li 
                    v-for="(item, i) in getText(exp.description)" 
                    :key="i"
                    class="text-sm text-[var(--text-secondary)] flex items-start gap-2"
                  >
                    <span class="text-[var(--accent)] mt-1">•</span>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right: Education + Skills -->
        <div class="space-y-8">
          
          <!-- Education -->
          <div>
            <h3 class="flex items-center gap-2 text-xl font-semibold mb-6">
              <svg class="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              {{ t.experience.educationTitle }}
            </h3>
            
            <div class="space-y-4">
              <div 
                v-for="(edu, index) in educationData" 
                :key="index"
                class="glass-card p-4 glow-hover flex items-center gap-4"
              >
                <div v-if="edu.image" class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img :src="edu.image" :alt="edu.institution" class="w-full h-full object-cover" />
                </div>
                <div v-else class="w-16 h-16 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold">{{ getText(edu.title) }}</h4>
                  <p class="text-sm text-[var(--text-secondary)]">{{ edu.institution }}</p>
                  <p class="text-sm text-[var(--accent)]">{{ edu.period }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Skills Grid -->
          <div>
            <h3 class="flex items-center gap-2 text-xl font-semibold mb-6">
              <svg class="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              {{ t.experience.skillsTitle }}
            </h3>
            
            <div class="grid grid-cols-2 gap-3">
              <div 
                v-for="skill in skillsData" 
                :key="skill.name"
                class="glass-card p-4 glow-hover flex items-center gap-3"
              >
                <div class="w-8 h-8 rounded bg-[var(--accent)]/20 flex items-center justify-center">
                  <svg class="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span class="font-medium text-sm">{{ skill.name }}</span>
              </div>
            </div>
          </div>
          
          <!-- CTA Button -->
          <a href="#projects" class="btn-primary w-full flex items-center justify-center gap-2">
            {{ t.experience.viewProjects }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
