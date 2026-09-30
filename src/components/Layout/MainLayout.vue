<script setup>
import { ref, onMounted } from 'vue'
import { Settings } from 'lucide-vue-next'
import { PanelLeft, Menu, X, Sun, Moon, Home, Folder, User, Mail } from 'lucide-vue-next'
import { useSettings } from '../../composables/useSettings'
import SpotifyWidget from '../SpotifyWidget.vue'
import SettingsModal from '../SettingsModal.vue'


const isSidebarOpen = ref(true)
const isMobileMenuOpen = ref(false)
const isDarkMode = ref(false)
const isSettingsOpen = ref(false)

// Toggle Sidebar Desktop (Lebar vs Ikon Saja)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// Toggle Sidebar Mobile (Drawer / Collapse)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})

const navLinks = [
  { name: 'Beranda', path: '/', icon: Home },
  { name: 'Proyek', path: '/projects', icon: Folder },
  { name: 'Tentang', path: '/about', icon: User },
  { name: 'Kontak', path: '/contact', icon: Mail },
]
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 font-sans transition-colors duration-200 flex flex-col">
    
    <!-- Navbar Atas -->
    <header class="h-14 border-b border-zinc-200 dark:border-zinc-800/80 px-4 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md z-30">
      <div class="flex items-center gap-3">
        
        <!-- Tombol Desktop: Mode PanelLeft (Buka/Ciutkan Icon Only) -->
        <button 
          @click="toggleSidebar" 
          class="hidden md:flex p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          :title="isSidebarOpen ? 'Ciutkan Sidebar' : 'Perluas Sidebar'"
        >
          <PanelLeft class="w-5 h-5" />
        </button>

        <!-- Tombol Mobile / HP: Garis 3 (Menu Hamburger) -->
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Toggle Menu Mobile"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>

        <!-- Logo / Name -->
        <router-link to="/" class="font-semibold text-base tracking-tight flex items-center gap-1.5" :title="'Beranda'">
          <span>Heru Cahyono</span>
          <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500"></span>
        </router-link>

      </div>
      <div class="flex items-center gap-2">
        <!-- Spotify Widget -->
        <SpotifyWidget />
        <!-- Theme Switcher -->
        <button 
          @click="toggleDarkMode" 
          class="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" :title="isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'"
        >
          <Sun v-if="isDarkMode" class="w-4 h-4 text-amber-400" />
          <Moon v-else class="w-4 h-4 text-zinc-600" />
        </button>
        <!-- Settings Modal Trigger -->
        <button 
        @click="isSettingsOpen = true"
        class="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition"
        title="Pengaturan Tampilan"
      >
        <Settings class="w-4 h-4" />
      </button>
      </div>
    </header>
    <SettingsModal :isOpen="isSettingsOpen" @close="isSettingsOpen = false" />
    <div class="flex flex-1 relative">
      
      <!-- 1. SIDEBAR DESKTOP (Lebar <-> Icon Only) -->
      <aside 
        :class="[
          'hidden md:flex flex-col border-r border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 sticky top-14 h-[calc(100vh-3.5rem)] transition-all duration-300 p-3',
          isSidebarOpen ? 'w-64' : 'w-16 items-center'
        ]"
      >
      
        <nav class="space-y-1.5 w-full">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            :class="[
              'flex items-center rounded-lg text-sm font-medium transition-colors text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900',
              isSidebarOpen ? 'px-3 py-2.5 gap-3' : 'p-2.5 justify-center'
            ]"
            active-class="bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold border border-blue-200/50 dark:border-blue-900/40"
            :title="!isSidebarOpen ? link.name : ''"
          >
            <component :is="link.icon" class="w-5 h-5 flex-shrink-0" />
            
            <!-- Teks menu hanya tampil jika sidebar terbuka -->
            <span v-show="isSidebarOpen" class="truncate whitespace-nowrap">
              {{ link.name }}
            </span>
          </router-link>
        </nav>
      </aside>

      <!-- 2. SIDEBAR MOBILE / COLLAPSE DRAWER -->
      <!-- Overlay Gelap di Belakang Mobile Menu -->
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="isMobileMenuOpen" 
          @click="isMobileMenuOpen = false" 
          class="fixed inset-0 bg-black/40 dark:bg-black/60 z-40 md:hidden backdrop-blur-xs"
        ></div>
      </Transition>

      <!-- Menu Slide-out (Drawer HP) -->
      <aside 
        :class="[
          'fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 z-50 p-4 transition-transform duration-300 ease-in-out md:hidden flex flex-col',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        ]"
      >

      <div class="flex items-center justify-between mb-4 pb-2 border-b border-zinc-100 dark:border-zinc-800">
        <span class="font-semibold text-base">Heru Cahyono</span>
        <button @click="isMobileMenuOpen = false" class="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
          <X class="w-5 h-5" />
        </button>
      </div>

        <nav class="space-y-1.5">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @click="isMobileMenuOpen = false"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            active-class="bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold border border-blue-200/50 dark:border-blue-900/40"
          >
            <component :is="link.icon" class="w-5 h-5 flex-shrink-0" />
            <span>{{ link.name }}</span>
          </router-link>
        </nav>
      </aside>

      <!-- Area Konten Utama -->
      <main class="flex-1 p-6 md:p-10 max-w-5xl w-full mx-auto">
        <router-view />
      </main>

    </div>

  </div>
</template>