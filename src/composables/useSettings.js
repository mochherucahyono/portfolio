import { ref, watch, onMounted } from 'vue'

// Color Themes
export const colorThemes = [
    { name: 'Blue', value: 'blue', primary: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', ring: 'ring-blue-600' },
    { name: 'Emerald', value: 'emerald', primary: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', ring: 'ring-emerald-600' },
    { name: 'Violet', value: 'violet', primary: 'bg-violet-600', text: 'text-violet-600', border: 'border-violet-600', ring: 'ring-violet-600' },
    { name: 'Amber', value: 'amber', primary: 'bg-amber-500', text: 'text-amber-500', border: 'border-amber-500', ring: 'ring-amber-500' },
    { name: 'Rose', value: 'rose', primary: 'bg-rose-600', text: 'text-rose-600', border: 'border-rose-600', ring: 'ring-rose-600' },
]

const activeColor = ref(localStorage.getItem('theme_color') || 'blue')
const soundEnabled = ref(localStorage.getItem('theme_sfx') === 'true')
const reducedMotion = ref(localStorage.getItem('theme_motion') === 'true')

export function useSettings() {
    const setColor = (colorValue) => {
        activeColor.value = colorValue
        localStorage.setItem('theme_color', colorValue)
        document.documentElement.setAttribute('data-theme', colorValue)
    }

    const toggleSound = () => {
        soundEnabled.value = !soundEnabled.value
        localStorage.setItem('theme_sfx', soundEnabled.value)
    }

    const playClickSound = () => {
        if (!soundEnabled.value) return
            // Simple Web Audio API Synthesizer Click Sound (Tanpa file MP3 eksternal)
        try {
            const audioCtx = new(window.AudioContext || window.webkitAudioContext)()
            const osc = audioCtx.createOscillator()
            const gain = audioCtx.createGain()
            osc.type = 'sine'
            osc.frequency.setValueAtTime(800, audioCtx.currentTime)
            gain.gain.setValueAtTime(0.05, audioCtx.currentTime)
            gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.05)
            osc.connect(gain)
            gain.connect(audioCtx.destination)
            osc.start()
            osc.stop(audioCtx.currentTime + 0.05)
        } catch (e) {
            // AudioContext fallback
        }
    }

    const toggleMotion = () => {
        reducedMotion.value = !reducedMotion.value
        localStorage.setItem('theme_motion', reducedMotion.value)
    }

    onMounted(() => {
        document.documentElement.setAttribute('data-theme', activeColor.value)
    })

    return {
        activeColor,
        soundEnabled,
        reducedMotion,
        colorThemes,
        setColor,
        toggleSound,
        toggleMotion,
        playClickSound
    }
}