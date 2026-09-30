<script setup>
import { MapPin, Briefcase } from 'lucide-vue-next'
import { useProfile } from '../composables/useProfile'
import { useSettings } from '../composables/useSettings'
import AvailabilityBadge from './AvailabilityBadge.vue'
import SpiralBackground from './SpiralBackground.vue' // 👈 Import Spiral

const { profileData } = useProfile()
const { playClickSound } = useSettings()
</script>

<template>
  <!-- Pembungkus Utama dengan relative & overflow-hidden -->
  <div class="relative overflow-hidden p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm space-y-4">
    
    <!-- 🌀 Background Animasi Spiral -->
    <SpiralBackground />

    <!-- Layer Konten Utama (z-10 agar selalu di atas animasi) -->
    <div class="relative z-10 space-y-4">
      
      <!-- Header Card: Badge Status & Lokasi -->
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <AvailabilityBadge />
        
        <div class="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          <MapPin class="w-3.5 h-3.5 text-zinc-400" />
          <span>{{ profileData.location }}</span>
        </div>
      </div>

      <!-- Informasi Utama -->
      <div>
        <h2 class="text-xl font-bold text-zinc-900 dark:text-white">
          {{ profileData.name }}
        </h2>
        <p class="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mt-0.5">
          <Briefcase class="w-3.5 h-3.5" />
          {{ profileData.role }}
        </p>
      </div>

      <!-- Bio Singkat -->
      <p class="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
        {{ profileData.bio }}
      </p>

    </div>
  </div>
</template>