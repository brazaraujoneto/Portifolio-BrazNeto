<script setup>
import { inject, computed } from 'vue'
import { translations } from '../i18n/translations.js'

const currentLang = inject('currentLang')
const t = computed(() => translations[currentLang.value])

const navItems = [
  { key: 'home', href: '#home', icon: 'home' },
  { key: 'experience', href: '#experience', icon: 'briefcase' },
  { key: 'projects', href: '#projects', icon: 'code' },
  { key: 'contact', href: '#contact', icon: 'mail' },
]
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 z-50 glass-card border-b-0 border-x-0 rounded-none md:hidden">
    <div class="flex justify-around py-3">
      <a
        v-for="item in navItems"
        :key="item.key"
        :href="item.href"
        class="flex flex-col items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
      >
        <!-- Icons -->
        <svg v-if="item.icon === 'home'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <svg v-if="item.icon === 'briefcase'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <svg v-if="item.icon === 'code'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <svg v-if="item.icon === 'mail'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span class="text-xs">{{ t.nav[item.key] }}</span>
      </a>
    </div>
  </nav>
</template>
