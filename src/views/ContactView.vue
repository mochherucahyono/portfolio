<script setup>
import { ref } from 'vue'
import { Copy, Mail } from 'lucide-vue-next'
import ToastNotification from '../components/ToastNotification.vue'

const email = "herucahyonom@gmail.com"
const showToast = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  } catch (err) {
    console.error("Gagal menyalin email", err)
  }
}

// 1. Data Form & Validasi
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({
  name: false,
  email: false,
  message: false
})

const isSubmitted = ref(false)
let toastTimer = null

// 2. Fungsi Submit dengan Validasi & Auto-Hide 3 Detik
const handleSubmit = () => {
  // Cek input kosong
  errors.value.name = !formData.value.name.trim()
  errors.value.email = !formData.value.email.trim()
  errors.value.message = !formData.value.message.trim()

  // Jika ada salah satu yang kosong, batalkan pengiriman
  if (errors.value.name || errors.value.email || errors.value.message) {
    return
  }

  // Jika SEMUA terisi lengkap:
  isSubmitted.value = true

  // Reset timer jika ada pengiriman ulang
  if (toastTimer) clearTimeout(toastTimer)

  // Otomatis hilang setelah 3 detik
  toastTimer = setTimeout(() => {
    isSubmitted.value = false
  }, 3000)

  // Reset form setelah berhasil
  formData.value = { name: '', email: '', message: '' }
}
</script>

<template>
  <div class="space-y-8 max-w-xl">
    <div>
      <h1 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Hubungi Saya</h1>
      <p class="text-zinc-500 dark:text-zinc-400 mt-1">Ada pertanyaan atau ingin bekerja sama? Kirimkan pesan di bawah ini.</p>
    </div>

    <!-- Kotak Kontak Cepat / Copy Email -->
    <div class="p-4 bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 rounded-xl flex items-center justify-between gap-4">
      <div class="flex items-center gap-3 min-w-0">
        <div class="p-2.5 bg-blue-600 text-white rounded-lg flex-shrink-0">
          <Mail class="w-5 h-5" />
        </div>
        <div class="min-w-0">
          <p class="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Email Direct</p>
          <p class="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">{{ email }}</p>
        </div>
      </div>
      <button 
        @click="copyEmail"
        class="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold rounded-lg border border-zinc-200 dark:border-zinc-800 transition flex-shrink-0"
      >
        <Copy class="w-3.5 h-3.5" /> Salin
      </button>
    </div>

    <!-- Formulir Kontak -->
    <form @submit.prevent="handleSubmit" class="space-y-4" novalidate>
      <!-- Input Nama -->
      <div>
        <label class="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">Nama Lengkap</label>
        <input 
          v-model="formData.name"
          type="text" 
          placeholder="Nama Anda" 
          :class="[
            'w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2',
            errors.name ? 'border-red-500 focus:ring-red-500' : 'border-zinc-300 dark:border-zinc-800 focus:ring-blue-600 dark:focus:ring-blue-500'
          ]"
        />
        <p v-if="errors.name" class="text-xs text-red-500 mt-1 font-medium">Nama wajib diisi</p>
      </div>

      <!-- Input Email -->
      <div>
        <label class="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">Alamat Email</label>
        <input 
          v-model="formData.email"
          type="email" 
          placeholder="nama@email.com" 
          :class="[
            'w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2',
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-zinc-300 dark:border-zinc-800 focus:ring-blue-600 dark:focus:ring-blue-500'
          ]"
        />
        <p v-if="errors.email" class="text-xs text-red-500 mt-1 font-medium">Email wajib diisi</p>
      </div>

      <!-- Input Pesan -->
      <div>
        <label class="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">Pesan</label>
        <textarea 
          v-model="formData.message"
          rows="4" 
          placeholder="Tuliskan pesan Anda di sini..." 
          :class="[
            'w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 resize-none',
            errors.message ? 'border-red-500 focus:ring-red-500' : 'border-zinc-300 dark:border-zinc-800 focus:ring-blue-600 dark:focus:ring-blue-500'
          ]"
        ></textarea>
        <p v-if="errors.message" class="text-xs text-red-500 mt-1 font-medium">Pesan wajib diisi</p>
      </div>

      <button 
        type="submit" 
        class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 shadow-sm"
      >
        Kirim Pesan
      </button>
    </form>

    <!-- ALERT BERWARNA PUTIH & MODE DARK BERSIH (Pojok Kanan Bawah) -->
    <Transition
      enter-active-class="transform transition duration-300 ease-out"
      enter-from-class="translate-y-10 opacity-0 scale-95"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="transform transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100 scale-100"
      leave-to-class="translate-y-10 opacity-0 scale-95"
    >
      <div 
        v-if="isSubmitted" 
        class="fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-800 text-sm font-medium"
      >
        <!-- Titik Indikator Hijau Sukses -->
        <span class="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>

        <!-- Teks Pesan -->
        <span>Pesan Anda berhasil terkirim!</span>

        <!-- Tombol Tutup Silang (X) -->
        <button 
          @click="isSubmitted = false" 
          class="ml-2 text-zinc-400 hover:text-zinc-700 dark:hover:text-white font-bold"
        >
          ✕
        </button>
      </div>
    </Transition>

    <!-- Notifikasi Copy Email -->
    <ToastNotification :show="showToast" message="Alamat email berhasil disalin ke clipboard!" />
  </div>
</template>