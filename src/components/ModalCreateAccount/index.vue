<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800">Crie sua conta</h1>

    <button class="text-4xl text-gray-600" @click="close">&times;</button>
  </div>

  <div class="mt-10">
    <form @submit.prevent="handleSubmit">
      <label class="block mt-1">
        <span class="text-lg font-medium text-gray-800"> Nome </span>
        <input
          type="text"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          :class="{ 'border-brand-danger': !!state.name.errorMessage }"
          placeholder="Jonh Doe"
          v-model="state.name.value"
        />

        <span
          v-if="!!state.name.errorMessage"
          class="block font-medium text-brand-danger"
        >
          {{ state.name.errorMessage }}
        </span>
      </label>
      <label class="block mt-9">
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
        <icon v-if="state.isLoading" name="loading" class="animate-spin" />
        <span v-else> Entrar </span>
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
import Icon from '../Icon'

export default {
  components: { Icon },
  setup () {
    const modal = useModal()
    const router = useRouter()
    const toast = useToast()
    const { value: nameValue, errorMessage: nameErrorMessage } = useField(
      'name'
    )
    const { value: emailValue, errorMessage: emailErrorMessage } = useField(
      'email',
      validadeEmail
    )
    const { value: passwordValue, errorMessage: passwordErrorMessage } =
      useField('password', validatePassword)

    const state = reactive({
      hasError: false,
      isLoading: false,
      name: {
        value: nameValue,
        errorMessage: nameErrorMessage
      },
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      }
    })

    const login = async ({ email, password }) => {
      const { data, erros } = await services.auth.login({ email, password })

      if (!erros) {
        window.localStorage.setItem('token', data.token)
        router.push({ name: 'Feedbacks' })
        modal.close()
      }
      state.isLoading = false
    }

    const handleSubmit = async () => {
      try {
        toast.clear()
        state.isLoading = true
        const { erros } = await services.auth.create({
          name: state.name.value,
          email: state.email.value,
          password: state.password.value
        })

        if (!erros) {
          await login({
            email: state.email.value,
            password: state.password.value
          })
          return
        }

        if (erros.status === 400) {
          toast.error('Ocorreu um erro ao criar a conta')
        }

        state.isLoading = false
      } catch (error) {
        state.isLoading = false
        state.hasError = !!error
        toast.error('Ocorreu um erro ao criar a conta')
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
