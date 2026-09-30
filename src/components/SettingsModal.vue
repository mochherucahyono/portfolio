<script setup>
import { Volume2, VolumeX, Sparkles, X, Check } from 'lucide-vue-next'
import { useSettings } from '../composables/useSettings'

defineProps({
  isOpen: Boolean
})

defineEmits(['close'])

const { 
  activeColor, 
  soundEnabled, 
  reducedMotion, 
  colorThemes, 
  setColor, 
  toggleSound, 
  toggleMotion, 
  playClickSound 
} = useSettings()

const handleColorSelect = (color) => {
  setColor(color)
  playClickSound()
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      @click.self="$emit('close')"
    >
      <div class="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-6">
        
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
          <div class="flex items-center gap-2">
            <Sparkles class="w-5 h-5 text-zinc-500" />
            <h2 class="text-lg font-bold text-zinc-900 dark:text-white">Pengaturan Tampilan</h2>
          </div>
          <button 
            @click="$emit('close')" 
            class="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-lg transition"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Section 1: Aksen Warna -->
        <div class="space-y-3">
          <label class="text-xs font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
            Warna Aksen Web
          </label>
          <div class="grid grid-cols-5 gap-2">
            <button
              v-for="theme in colorThemes"
              :key="theme.value"
              @click="handleColorSelect(theme.value)"
              :class="[
                'h-10 rounded-xl flex items-center justify-center transition transform active:scale-95',
                theme.primary,
                activeColor === theme.value ? 'ring-2 ring-offset-2 ring-zinc-900 dark:ring-white scale-105' : 'opacity-80 hover:opacity-100'
              ]"
              :title="theme.name"
            >
              <Check v-if="activeColor === theme.value" class="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <!-- Section 2: Efek Suara (SFX) -->
        <div class="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
              <Volume2 v-if="soundEnabled" class="w-4 h-4" />
              <VolumeX v-else class="w-4 h-4" />
            </div>
            <div>
              <p class="text-sm font-medium text-zinc-800 dark:text-zinc-200">Efek Suara (SFX)</p>
              <p class="text-xs text-zinc-500 dark:text-zinc-400">Bunyi klik halus saat menekan tombol</p>
            </div>
          </div>
          <button 
            @click="() => { toggleSound(); playClickSound(); }"
            :class="[
              'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
              soundEnabled ? 'bg-zinc-900 dark:bg-white' : 'bg-zinc-300 dark:bg-zinc-700'
            ]"
          >
            <span 
              :class="[
                'inline-block h-4 w-4 transform rounded-full bg-white dark:bg-zinc-900 transition-transform',
                soundEnabled ? 'translate-x-6' : 'translate-x-1'
              ]" 
            />
          </button>
        </div>

        <!-- Section 3: Reduksi Animasi -->
        <div class="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800">
          <div>
            <p class="text-sm font-medium text-zinc-800 dark:text-zinc-200">Kurangi Animasi</p>
            <p class="text-xs text-zinc-500 dark:text-zinc-400">Nonaktifkan animasi berat untuk performa lebih cepat</p>
          </div>
          <button 
            @click="() => { toggleMotion(); playClickSound(); }"
            :class="[
              'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
              reducedMotion ? 'bg-zinc-900 dark:bg-white' : 'bg-zinc-300 dark:bg-zinc-700'
            ]"
          >
            <span 
              :class="[
                'inline-block h-4 w-4 transform rounded-full bg-white dark:bg-zinc-900 transition-transform',
                reducedMotion ? 'translate-x-6' : 'translate-x-1'
              ]" 
            />
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>