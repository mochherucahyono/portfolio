<script setup>
import { ArrowRight, Github, Linkedin, Mail, Wheat } from 'lucide-vue-next'
import IconInstagram from '../components/IconInstagram.vue'
import ProfilePic from '../assets/profil.jpg'

const profile = {
  name: "Heru Cahyono",
  role: "Frontend Web Developer",
  tagline: "Saya suka merancang dan membangun antarmuka web yang simpel, bersih, dan modern.",
}
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-8 md:py-16">
    
    <!-- Teks Utama & Aksi -->
    <div class="flex-1 space-y-6 text-center md:text-left">
      <div class="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/50 rounded-full">
        <span class="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
        Bismillah
      </div>

      <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
        This Is <span class="text-blue-600 dark:text-blue-500">{{ profile.name }}</span>
      </h1>

      <p class="text-xl font-medium text-zinc-600 dark:text-zinc-400">
        {{ profile.role }}
      </p>

      <p class="text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed">
        {{ profile.tagline }}
      </p>

      <!-- Tombol Biru Primary & Secondary -->
      <div class="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
        <router-link 
          to="/projects" 
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition duration-200"
        >
          Lihat Proyek
        </router-link>

        <router-link 
          to="/contact" 
          class="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium rounded-lg transition duration-200"
        >
          Hubungi Saya
        </router-link>
      </div>

      <!-- Tautan Sosial -->
      <div class="flex items-center justify-center md:justify-start gap-5 pt-4 text-zinc-500 dark:text-zinc-400">
        <a href="https://github.com/mochherucahyono" target="_blank" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Github class="w-5 h-5" /></a>
        <a href="https://linkedin.com" target="_blank" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Linkedin class="w-5 h-5" /></a>
        <a href="mailto:herucahyonom@gmail.com" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Mail class="w-5 h-5" /></a>
        <a href="https://instagram.com/herucahyono._" target="_blank" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><IconInstagram class="w-5 h-5" /></a>
      </div>
    </div>
    <!-- Foto Profil Avatar Minimalis -->
    <div class="relative group">
      <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
      <img 
        :src="ProfilePic" 
        alt="Foto Profil" 
        class="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-xl"
      />
    </div>

  </div>
</template>