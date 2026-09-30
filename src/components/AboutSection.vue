<script setup>
const skills = [
  "Vue.js", "JavaScript (ES6+)", "Tailwind CSS", 
  "HTML5 & CSS3", "Git", "Responsive Design", 
  "Pinia", "REST API"
]
</script>

<template>
  <section id="about" class="py-20 bg-slate-950 text-slate-300">
    <div class="max-w-4xl mx-auto px-6">
      
      <!-- Judul -->
      <h2 class="text-3xl font-bold text-white mb-8">Tentang Saya</h2>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Kolom Kiri: Deskripsi -->
        <div class="space-y-4">
          <p class="leading-relaxed">
            Saya seorang pengembang web yang antusias dengan antarmuka yang bersih dan pengalaman pengguna yang lancar. Saya memiliki pengalaman dalam membangun aplikasi web modern menggunakan Vue.js.
          </p>
          <p class="leading-relaxed">
            Saya selalu bersemangat untuk mempelajari teknologi baru dan menyelesaikan masalah melalui kode yang efisien.
          </p>
        </div>

        <!-- Kolom Kanan: Skills -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Tech Stack</h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="skill in skills" 
              :key="skill"
              class="px-3 py-1 bg-slate-800 text-emerald-400 text-sm rounded-md border border-slate-700 hover:border-emerald-500 transition-colors"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>