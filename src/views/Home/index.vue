<template>
  <customHeader />
  <Contact />
  <div class="flex jusitfy-center  py-10 bg-brand-gray">
    <p class="font-medium mx-auto text-gray-800">feedbacker &copy; 2022</p>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CustomHeader from './CustomHeader.vue'
import Contact from './Contact.vue'

export default {
  components: {
    CustomHeader,
    Contact
  },

  setup () {
    const router = useRouter()

    // Antes do componente renderizar
    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    // Funções
    const handleLogin = () => {}
    const handleAccountCreate = () => {}

    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>
