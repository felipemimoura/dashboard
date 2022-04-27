<template>
  <customHeader @login="handleLogin" @create-account="handleAccountCreate" />
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
import useModal from '../../hooks/useModal'

export default {
  components: {
    CustomHeader,
    Contact
  },

  setup () {
    const router = useRouter()
    const modal = useModal()

    // Antes do componente renderizar
    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    // Funções
    const handleLogin = () => {
      modal.open({
        component: 'ModalLogin'
      })
    }
    const handleAccountCreate = () => {
      modal.open({
        component: 'ModalCreateAccount'
      })
    }

    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>
