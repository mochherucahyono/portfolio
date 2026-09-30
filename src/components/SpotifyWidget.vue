<script setup>
import { ref } from 'vue'
import { Play, Pause } from 'lucide-vue-next'

// Persiapkan file MP3 (bisa dari folder src/assets/ atau URL direct)
import audioFile from '../assets/music/Asmalibrasi.mp3'

const currentTrack = ref({
  title: 'Asmalibrasi',
  artist: 'Soegi Bornean',
})

const isPlaying = ref(false)
// Buat objek Audio JavaScript
const audio = new Audio(audioFile)

// Fungsi Play / Pause
const togglePlay = () => {
  if (isPlaying.value) {
    audio.pause()
    isPlaying.value = false
  } else {
    audio.play()
    isPlaying.value = true
  }
}

// Saat lagu selesai, otomatis stop animasi
audio.onended = () => {
  isPlaying.value = false
}
</script>

<template>
  <div 
    @click="togglePlay"
    class="flex items-center gap-2.5 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200/70 dark:hover:bg-zinc-800 rounded-full border border-zinc-200/80 dark:border-zinc-800 transition duration-200 cursor-pointer select-none group max-w-[200px] sm:max-w-[240px]"
    :title="isPlaying ? 'Klik untuk Pause' : 'Klik untuk Putar Musik'"
  >
    <!-- Visualizer Garis Musik (Animasi saat diputar) -->
    <div class="flex items-center justify-center w-4 h-4 flex-shrink-0">
      <div v-if="isPlaying" class="flex items-end gap-0.5 h-3">
        <span class="w-0.5 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_100ms] h-full"></span>
        <span class="w-0.5 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_300ms] h-2/3"></span>
        <span class="w-0.5 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_200ms] h-4/5"></span>
      </div>
      <!-- Tombol Play Kecil saat Pause -->
      <Play v-else class="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 transition" />
    </div>

    <!-- Judul & Artist -->
    <div class="hidden sm:flex flex-col min-w-0 text-left leading-tight">
      <span class="text-[11px] font-medium text-zinc-700 dark:text-zinc-200 truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
        {{ currentTrack.title }}
      </span>
      <span class="text-[9px] text-zinc-400 dark:text-zinc-500 truncate">
        {{ isPlaying ? 'Memutar Musik...' : currentTrack.artist }}
      </span>
    </div>
  </div>
</template>