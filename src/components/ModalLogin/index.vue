<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800">Entre na sua conta</h1>

    <button class="text-4xl text-gray-600" @click="close">&times;</button>
  </div>

  <div class="mt-10">
    <form @submit.prevent="handleSubmit">
      <label class="block mt-1">
        <span class="text-lg font-medium text-gray-800"> Email </span>
        <input
          type="email"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          :class="{ 'border-brand-danger': !!state.email.errorMessage }"
          placeholder="john.doe@gmail.com"
          v-model="state.email.value"
        />

        <span
          v-if="!!state.email.errorMessage"
          class="block font-medium text-brand-danger"
        >
          {{ state.email.errorMessage }}
        </span>
      </label>
      <label class="block mt-10">
        <span class="text-lg font-medium text-gray-800"> Senha </span>
        <input
          type="password"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          :class="{ 'border-brand-danger': !!state.password.errorMessage }"
          placeholder="john.doe@gmail.com"
          v-model="state.password.value"
        />

        <span
          v-if="!!state.password.errorMessage"
          class="block font-medium text-brand-danger"
        >
          {{ state.password.errorMessage }}
        </span>
      </label>

      <button
        :disabled="state.isLoading"
        type="submit"
        :class="{ 'opacity-50': state.isLoading }"
        class="px-8 py-3 mt-10 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import useModal from '../../hooks/useModal'
import { useField } from 'vee-validate'
import { validatePassword, validadeEmail } from '../../utils/validator'
import services from '../../services'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

export default {
  setup () {
    const modal = useModal()
    const router = useRouter()
    const toast = useToast()
    const { value: emailValue, errorMessage: emailErrorMessage } = useField('email', validadeEmail)
    const { value: passwordValue, errorMessage: passwordErrorMessage } = useField('password', validatePassword)

    const state = reactive({
      hasError: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      }
    })

    const handleSubmit = async () => {
      try {
        toast.clear()
        state.isLoading = true
        const { data, erros } = await services.auth.login({ email: state.email.value, password: state.password.value })
        if (!erros) {
          window.localStorage.setItem('token', data.token)
          router.push({ name: 'Feedbacks' })
          state.isLoading = false
          modal.close()
          return
        }

        if (erros.status === 404) {
          toast.error('E-mail não encontrado')
        }

        if (erros.status === 401) {
          toast.error('E-mail/senha ou senha inválidos')
        }
        if (erros.status === 400) {
          toast.error('Ocorreu um erro ao fazer o login')
        }

        state.isLoading = false
      } catch (error) {
        state.isLoading = false
        state.hasError = !!error
        toast.error('Ocorreu um erro ao fazer o login')
      }
    }

    return {
      state,
      handleSubmit,
      close: modal.close
    }
  }
}
</script>
