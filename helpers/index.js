export const formatCurrency = (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

export const formatDate = date => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }

  return new Date(date).toLocaleDateString('es-ES', options)
}