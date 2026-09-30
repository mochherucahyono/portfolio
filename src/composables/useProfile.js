import { ref } from 'vue'

const profileData = ref({
    name: 'Heru Cahyono',
    role: 'Frontend Developer',
    location: 'Tulungagung, Indonesia',
    // Pilihan status: 'available' | 'busy' | 'freelance'
    status: 'available',
    bio: 'Mengembangkan aplikasi web modern, responsif, dan performan dengan Vue 3 & Tailwind CSS.',
    socials: {
        github: 'https://github.com/username',
        linkedin: 'https://linkedin.com/in/username',
        instagram: 'https://instagram.com/username',
    }
})

export function useProfile() {
    const setStatus = (newStatus) => {
        profileData.value.status = newStatus
    }

    return {
        profileData,
        setStatus
    }
}