export default httpClient => ({
  login: async ({ email, password }) => {
    // Fazendo login na aplicação
    const response = await httpClient.post('/auth/login', {
      email, password
    })

    // Lidando com erros
    let erros = null
    if (!response.data) {
      erros = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      erros
    }
  },

  create: async ({ name, email, password }) => {
    const response = await httpClient.post('/auth/register', {
      name, email, password
    })

    let erros = null
    if (!response.data) {
      erros = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      erros
    }
  }
})
