export function validatePassword (value) {
  if (!value) {
    return 'Esse campo é obrigatório'
  }
  if (value.length < 3) {
    return 'Esse campo precisa de no mínimo 3 caracteres'
  }

  return true
}

export function validadeEmail (value) {
  if (!value) {
    return 'Esse campo é obrigatório'
  }

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)
  if (!isValid) {
    return 'Esse campo precisa ser um email'
  }
  return true
}
