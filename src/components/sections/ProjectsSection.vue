<script setup>
import { ref, inject, computed } from 'vue'
import { translations, projectsData, projectCategories } from '../../i18n/translations.js'

const currentLang = inject('currentLang')
const t = computed(() => translations[currentLang.value])

const activeFilter = ref('All')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projectsData
  return projectsData.filter(p => p.category === activeFilter.value)
})

const getText = (obj) => obj[currentLang.value] || obj.pt || obj
</script>

<template>
  <section id="projects" class="py-20 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t.projects.title }}</h2>
        <p class="text-[var(--text-secondary)] max-w-2xl">{{ t.projects.subtitle }}</p>
      </div>
      
      <!-- Filters -->
      <div class="flex flex-wrap gap-3 mb-10">
        <button
          v-for="category in projectCategories"
          :key="category"
          @click="activeFilter = category"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all',
            activeFilter === category
              ? 'bg-[var(--accent)] text-white'
              : 'glass-card hover:border-[var(--accent)] text-[var(--text-secondary)]'
          ]"
        >
          {{ category === 'All' ? t.projects.filterAll : category }}
        </button>
      </div>
      
      <!-- Projects Grid (3 columns on desktop) -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="project in filteredProjects"
          :key="project.title"
          class="glass-card overflow-hidden glow-hover group"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <!-- Link button -->
            <a 
              :href="project.link"
              class="absolute top-3 right-3 w-10 h-10 rounded-full bg-[var(--bg-card)] backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg class="w-5 h-5 text-[var(--text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </a>
          </div>
          
          <!-- Content -->
          <div class="p-5">
            <h3 class="font-semibold text-lg mb-2">{{ project.title }}</h3>
            <p class="text-sm text-[var(--text-secondary)] mb-4">{{ getText(project.description) }}</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-3 py-1 text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
              >
                {{ tag }}
              </span>
            </div>
            
            <!-- Footer -->
            <div class="flex items-center justify-between text-sm text-[var(--text-muted)]">
              <span>{{ project.date }}</span>
              <div class="flex gap-2">
                <button class="hover:text-[var(--text-primary)]">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button class="hover:text-[var(--text-primary)]">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
