<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useSettings } from '../composables/useSettings'

const canvasRef = ref(null)
const containerRef = ref(null)
const { reducedMotion } = useSettings()

let animationFrameId = null
let angle = 0
let resizeObserver = null

const drawSpiral = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  
  const width = canvas.width
  const height = canvas.height
  const centerX = width / 2
  const centerY = height / 2

  ctx.clearRect(0, 0, width, height)

  // Warna garis spiral (Terlihat jelas di Light & Dark mode)
  ctx.lineWidth = 1.5
  ctx.strokeStyle = 'rgba(59, 130, 246, 0.35)' // Biru transparan

  if (reducedMotion?.value) {
    // Spiral statis
    ctx.beginPath()
    for (let i = 0; i < 180; i++) {
      const currentAngle = 0.1 * i
      const radius = 2.5 * i
      const x = centerX + radius * Math.cos(currentAngle)
      const y = centerY + radius * Math.sin(currentAngle)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
    return
  }

  // Spiral animasi
  ctx.beginPath()
  for (let i = 0; i < 220; i++) {
    const currentAngle = 0.1 * i + angle
    const radius = 2.5 * i
    const x = centerX + radius * Math.cos(currentAngle)
    const y = centerY + radius * Math.sin(currentAngle)

    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.stroke()

  angle += 0.008
  animationFrameId = requestAnimationFrame(drawSpiral)
}

const updateCanvasSize = () => {
  const container = containerRef.value
  const canvas = canvasRef.value
  if (container && canvas) {
    canvas.width = container.clientWidth || 300
    canvas.height = container.clientHeight || 200
  }
}

onMounted(() => {
  updateCanvasSize()
  drawSpiral()

  // Pastikan ukuran canvas diperbarui jika ukuran layar/kartu berubah
  if (containerRef.value) {
    resizeObserver = new ResizeObserver(() => {
      updateCanvasSize()
    })
    resizeObserver.observe(containerRef.value)
  }
})

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (resizeObserver) resizeObserver.disconnect()
})

watch(() => reducedMotion?.value, () => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  drawSpiral()
})
</script>

<template>
  <div ref="containerRef" class="absolute inset-0 pointer-events-none overflow-hidden z-0">
    <canvas ref="canvasRef" class="w-full h-full block"></canvas>
  </div>
</template>