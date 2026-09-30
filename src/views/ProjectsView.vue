<script setup>
import { ExternalLink, Github } from 'lucide-vue-next'

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'Dashboard admin responsif untuk mengelola inventaris, pesanan, dan analitik penjualan real-time.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    tags: ['Vue 3', 'Tailwind CSS', 'Chart.js'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    title: 'Task Management App',
    description: 'Aplikasi manajemen tugas produktif dengan fitur drag-and-drop, kategori, dan mode gelap.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600',
    tags: ['Vue 3', 'Pinia', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    title: 'Weather Forecast Portal',
    description: 'Aplikasi perkiraan cuaca interaktif memanfaatkan REST API OpenWeatherMap.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=600',
    tags: ['Vue 3', 'REST API', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  }
]
</script>

<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Proyek Unggulan</h1>
      <p class="text-zinc-500 dark:text-zinc-400 mt-1">Koleksi beberapa proyek web yang telah saya kerjakan.</p>
    </div>

    <!-- Grid Kartu Proyek -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        class="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500/50 transition duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
      >
        <div>
          <!-- Thumbnail Proyek -->
          <div class="overflow-hidden aspect-video relative bg-zinc-100 dark:bg-zinc-800">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <!-- Informasi Proyek -->
          <div class="p-5 space-y-3">
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Tech Badges -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="text-xs px-2.5 py-0.5 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-medium rounded-full border border-blue-200/60 dark:border-blue-900/40"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Links Footer Kartu -->
        <div class="p-5 pt-0 flex items-center gap-4 text-sm font-medium border-t border-zinc-100 dark:border-zinc-800/60 mt-4">
          <a :href="project.demoUrl" target="_blank" class="inline-flex items-center gap-1.5 pt-3 text-blue-600 dark:text-blue-400 hover:underline">
            <ExternalLink class="w-4 h-4" /> Live Demo
          </a>
          <a :href="project.githubUrl" target="_blank" class="inline-flex items-center gap-1.5 pt-3 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
            <Github class="w-4 h-4" /> Kode
          </a>
        </div>

      </div>
    </div>
  </div>
</template>