import { reactive } from 'vue'

const state = reactive({
  isLoading: false
})

export default state

export function setLoading (status) {
  state.isLoading = status
}
