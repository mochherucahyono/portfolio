<script setup>
import { computed } from 'vue'
import { useProfile } from '../composables/useProfile'

const { profileData } = useProfile()

const statusConfig = computed(() => {
  switch (profileData.value.status) {
    case 'available':
      return {
        text: 'Open to Work / Hire',
        dotColor: 'bg-emerald-500',
        pingColor: 'bg-emerald-400',
        bgColor: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-300'
      }
    case 'freelance':
      return {
        text: 'Available for Freelance',
        dotColor: 'bg-blue-500',
        pingColor: 'bg-blue-400',
        bgColor: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/40 text-blue-700 dark:text-blue-300'
      }
    case 'busy':
    default:
      return {
        text: 'Currently Busy',
        dotColor: 'bg-amber-500',
        pingColor: 'bg-amber-400',
        bgColor: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/40 text-amber-700 dark:text-amber-300'
      }
  }
})
</script>

<template>
  <div 
    :class="[
      'inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold tracking-wide transition-all',
      statusConfig.bgColor
    ]"
  >
    <!-- Efek Ping Berkedip -->
    <span class="relative flex h-2 w-2">
      <span :class="['animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', statusConfig.pingColor]"></span>
      <span :class="['relative inline-flex rounded-full h-2 w-2', statusConfig.dotColor]"></span>
    </span>

    <span>{{ statusConfig.text }}</span>
  </div>
</template>