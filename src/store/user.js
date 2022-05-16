import { reactive } from 'vue'

// Criando contexto global do usuário

const state = reactive({
  currentUser: {}
})

export default state

// Apagadno usuário atual
export function clearCurrentUser () {
  state.currentUser = {}
}

// Atualizando o usuário atual
export function setCurrentUser (user) {
  state.currentUser = user
}

// Atualizando alguma informação do usuário
export function setApiKey (apiKey) {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}
