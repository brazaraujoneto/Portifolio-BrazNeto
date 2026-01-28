<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mouseX = ref(50)
const mouseY = ref(50)

const handleMouseMove = (e) => {
  mouseX.value = (e.clientX / window.innerWidth) * 100
  mouseY.value = (e.clientY / window.innerHeight) * 100
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <div 
    class="fixed inset-0 pointer-events-none transition-all duration-300"
    :style="{
      background: `radial-gradient(circle at ${mouseX}% ${mouseY}%, var(--spotlight) 0%, transparent 50%)`
    }"
  />
</template>
