
import router from '@/router'
import axios from 'axios'
import AuthService from './auth'
import UsersService from './users'

const API_ENV = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENV.local
})

httpClient.interceptors.response.use((response) => response, (error) => {
  const canThrowAnError = error.response.status = 0 || error.response.status === 500

  if (canThrowAnError) {
    throw new Error(error.message)
  }

  // Verificando token Válido

  if (error.status === 401) {
    router.push({ name: 'Home' })
  }
  return error
})

export default {
  auth: AuthService(httpClient),
  user: UsersService(httpClient)
}

// Adicionando Interceptors de request
// Toda request vai enviar essae valor

httpClient.interceptors.request.use((config) => {
  // Pegando token no LocalStorage
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }

  return config
})
