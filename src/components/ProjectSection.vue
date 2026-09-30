<script setup>
import { ExternalLink, Github } from 'lucide-vue-next'

// Data proyek (Anda bisa mengganti isi array ini sesuai proyek Anda)
const projects = [
  {
    title: 'UbhiSir Kasir',
    description: 'UbhiSir responsif untuk mengelola produk, kasir, dan analitik penjualan real-time.',
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
    title: 'Weather App',
    description: 'Aplikasi perkiraan cuaca interaktif memanfaatkan REST API OpenWeatherMap.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=600',
    tags: ['Vue 3', 'Fetch API', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  }
]
</script>

<template>
  <section id="projects" class="py-20 bg-slate-900 text-slate-100">
    <div class="max-w-4xl mx-auto px-6">
      
      <!-- Judul Bagian -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-white">Proyek Unggulan</h2>
        <p class="text-slate-400 mt-2">Beberapa proyek yang telah saya kerjakan baru-baru ini.</p>
      </div>

      <!-- Grid Kartu Proyek -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition duration-300 flex flex-col justify-between group"
        >
          <div>
            <!-- Thumbnail Proyek -->
            <div class="overflow-hidden aspect-video">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <!-- Konten Kartu -->
            <div class="p-5 space-y-3">
              <h3 class="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {{ project.title }}
              </h3>
              
              <p class="text-slate-400 text-sm leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Tags / Tech Stack -->
              <div class="flex flex-wrap gap-1.5 pt-2">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="text-xs px-2.5 py-0.5 bg-slate-900 text-emerald-400 font-medium rounded-full border border-slate-800"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Footer Kartu (Tautan) -->
          <div class="p-5 pt-0 flex items-center gap-4 text-sm font-medium">
            <a 
              :href="project.demoUrl" 
              target="_blank" 
              class="inline-flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors"
            >
              <ExternalLink class="w-4 h-4" /> Live Demo
            </a>
            <a 
              :href="project.githubUrl" 
              target="_blank" 
              class="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Github class="w-4 h-4" /> Code
            </a>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>