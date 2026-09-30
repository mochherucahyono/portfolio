<script setup>
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-vue-next'

const profile = {
  name: "Heru Cahyono",
  role: "Hamba Allah",
  tagline: "Saya membangun antarmuka web yang bersih, responsif, dan nyaman digunakan.",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  email: "mailto:alex@example.com"
}
</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 px-6">
    <div class="max-w-4xl mx-auto text-center md:text-left flex flex-col-reverse md:flex-row items-center gap-10 py-12">
      
      <!-- Teks & CTA -->
      <div class="flex-1 space-y-6">
        <div class="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 rounded-full">
          Tersedia untuk Proyek & Pekerjaan
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Halo, Saya <span class="text-emerald-400">{{ profile.name }}</span>
        </h1>
        
        <p class="text-lg sm:text-xl font-medium text-slate-400">
          {{ profile.role }}
        </p>
        
        <p class="text-slate-400 max-w-xl leading-relaxed">
          {{ profile.tagline }}
        </p>

        <!-- Tombol Aksi -->
        <div class="flex flex-wrap gap-4 justify-center md:justify-start items-center pt-2">
          <a 
            href="#projects" 
            class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-medium rounded-lg transition-colors duration-200"
          >
            Lihat Proyek
            <ArrowRight class="w-4 h-4" />
          </a>
          
          <a 
            href="#contact" 
            class="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded-lg transition-colors duration-200"
          >
            Hubungi Saya
          </a>
        </div>

        <!-- Tautan Sosial -->
        <div class="flex items-center justify-center md:justify-start gap-5 pt-4 text-slate-400">
          <a :href="profile.githubUrl" target="_blank" class="hover:text-white transition-colors" aria-label="GitHub">
            <Github class="w-5 h-5" />
          </a>
          <a :href="profile.linkedinUrl" target="_blank" class="hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin class="w-5 h-5" />
          </a>
          <a :href="profile.email" class="hover:text-white transition-colors" aria-label="Email">
            <Mail class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Foto / Avatar -->
      <div class="relative group">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
        <img 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" 
          alt="Foto Profil" 
          class="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-slate-800 shadow-xl"
        />
      </div>

    </div>
  </section>
</template>