<script setup>
import { inject, computed } from 'vue'
import { translations, personalData } from '../i18n/translations.js'

const isDark = inject('isDark')
const currentLang = inject('currentLang')
const toggleTheme = inject('toggleTheme')
const toggleLang = inject('toggleLang')

const t = computed(() => translations[currentLang.value])

const navItems = computed(() => [
  { key: 'home', href: '#home' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
])
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0 rounded-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo -->
        <a href="#home" class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white font-bold">
            {{ personalData.initials }}
          </div>
          <span class="font-semibold text-lg hidden sm:block">{{ personalData.name }}</span>
        </a>
        
        <!-- Nav Links (Desktop) -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="item.href"
            class="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            {{ t.nav[item.key] }}
          </a>
        </div>
        
        <!-- Controls -->
        <div class="flex items-center gap-4">
          
          <!-- Language Toggle -->
          <div class="flex items-center rounded-full border border-[var(--border-color)] overflow-hidden">
            <button
              @click="toggleLang('en')"
              :class="[
                'px-3 py-1.5 text-sm font-medium transition-colors',
                currentLang === 'en' 
                  ? 'bg-[var(--accent)] text-white' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              ]"
            >
              EN
            </button>
            <button
              @click="toggleLang('pt')"
              :class="[
                'px-3 py-1.5 text-sm font-medium transition-colors',
                currentLang === 'pt' 
                  ? 'bg-[var(--accent)] text-white' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              ]"
            >
              PT
            </button>
          </div>
          
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <!-- Sun icon (light mode) -->
            <svg v-if="isDark" class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <!-- Moon icon (dark mode) -->
            <svg v-else class="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          
        </div>
      </div>
    </div>
  </nav>
</template>
