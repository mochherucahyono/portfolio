<script setup>
import { CheckCircle2 } from 'lucide-vue-next'

defineProps({
  show: Boolean,
  message: String
})
</script>

<template>
  <Transition
    enter-active-class="transform transition duration-300 ease-out"
    enter-from-class="translate-y-5 opacity-0 scale-95"
    enter-to-class="translate-y-0 opacity-100 scale-100"
    leave-active-class="transform transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100 scale-100"
    leave-to-class="translate-y-5 opacity-0 scale-95"
  >
    <!-- Background disamakan: Putih (Light) & Dark Zinc 900 (Dark) -->
    <div 
      v-if="show"
      class="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-800 text-sm font-medium"
    >
      <!-- Ikon Centang Biru Primary -->
      <CheckCircle2 class="w-4.5 h-4.5 text-blue-600 dark:text-blue-500 flex-shrink-0" />
      <span>{{ message }}</span>
    </div>
  </Transition>
</template>