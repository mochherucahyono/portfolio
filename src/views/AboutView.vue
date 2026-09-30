<script setup>
import { Briefcase, GraduationCap } from 'lucide-vue-next'
import ProfileCard from '../components/ProfileCard.vue'

const skills = [
  "Vue.js 3", "JavaScript (ES6+)", "Tailwind CSS", 
  "HTML5 & CSS3", "Git & GitHub", "Responsive Design", 
  "Pinia State Management", "REST API Integration", "Vite"
]

const experiences = [
  {
    role: "Frontend Developer (Freelance)",
    company: "Proyek Mandiri / Klien",
    period: "2023 - Sekarang",
    description: "Mengembangkan antarmuka web responsif menggunakan Vue 3 dan Tailwind CSS, mengintegrasikan REST API, serta mengoptimalkan kecepatan muat halaman web."
  },
  {
    role: "Web Developer Intern",
    company: "PT Teknologi Indonesia",
    period: "2022 - 2023",
    description: "Bekerja sama dengan tim UI/UX untuk mengimplementasikan komponen desain menjadi kode Vue.js yang bersih dan mudah dipelihara."
  }
]

const education = [
  {
    degree: "S1 Teknik Informatika / Sistem Informasi",
    institution: "Universitas Contoh Indonesia",
    period: "2019 - 2023",
    description: "Fokus pada Rekayasa Perangkat Lunak, Pemrograman Web, dan Interaksi Manusia dan Komputer."
  }
]
</script>

<template>
  <div class="space-y-12 max-w-3xl">
    
    <ProfileCard />
    <!-- 1. Header & Deskripsi -->
    <div>
      <h1 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Tentang Saya</h1>
      
      <p class="text-zinc-500 dark:text-zinc-400 mt-1">Mengenal latar belakang, pengalaman, dan keahlian teknis saya.</p>
    </div>
    <!-- Ringkasan Profil -->
    <div class="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
      <p>
        Saya seorang pengembang web yang berfokus pada ekosistem **Vue.js** dan pengembangan antarmuka web modern. Saya percaya bahwa desain yang bagus adalah desain yang simpel, intuitif, dan responsif di semua ukuran layar.
      </p>
    </div>

    <hr class="border-zinc-200 dark:border-zinc-800" />
    <!-- 2. Tech Stack / Skills -->
    <div class="space-y-4">
      <h2 class="text-xl font-bold text-zinc-900 dark:text-white">Tech Stack Utama</h2>
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="skill in skills" 
          :key="skill"
          class="px-3.5 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <hr class="border-zinc-200 dark:border-zinc-800" />

    <!-- 3. Timeline Pengalaman Kerja -->
    <div class="space-y-6">
      <div class="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-white">
        <Briefcase class="w-5 h-5 text-blue-600 dark:text-blue-500" />
        <h2>Pengalaman Kerja</h2>
      </div>

      <!-- Vertical Timeline -->
      <div class="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 space-y-8 pl-6">
        <div 
          v-for="(exp, index) in experiences" 
          :key="index"
          class="relative group"
        >
          <!-- Titik Biru Timeline -->
          <div class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-zinc-950 border-2 border-blue-600 dark:border-blue-500 group-hover:bg-blue-600 transition-colors"></div>

          <!-- Konten Timeline -->
          <div class="space-y-1">
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-900/40">
              {{ exp.period }}
            </span>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white pt-1">
              {{ exp.role }}
            </h3>
            <p class="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {{ exp.company }}
            </p>
            <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed pt-1">
              {{ exp.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr class="border-zinc-200 dark:border-zinc-800" />
    

    <!-- 4. Timeline Pendidikan -->
    <div class="space-y-6">
      <div class="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-white">
        <GraduationCap class="w-5 h-5 text-blue-600 dark:text-blue-500" />
        <h2>Pendidikan</h2>
      </div>

      <div class="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 space-y-8 pl-6">
        <div 
          v-for="(edu, index) in education" 
          :key="index"
          class="relative group"
        >
          <!-- Titik Biru Timeline -->
          <div class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-zinc-950 border-2 border-blue-600 dark:border-blue-500 group-hover:bg-blue-600 transition-colors"></div>

          <div class="space-y-1">
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-900/40">
              {{ edu.period }}
            </span>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white pt-1">
              {{ edu.degree }}
            </h3>
            <p class="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {{ edu.institution }}
            </p>
            <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed pt-1">
              {{ edu.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>