// src/utils/axiosInstance.js
import axios from 'axios'

// Crear una instancia de axios con configuración base
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptor para manejar errores
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Aquí puedes manejar los errores de forma general
    if (error.response) {
      // Errores de la respuesta del servidor (4xx, 5xx)
      console.error('Server Error:', error.response)
    } else if (error.request) {
      // Errores relacionados con la solicitud que no recibió respuesta
      console.error('Network Error:', error.request)
    } else {
      // Errores en la configuración de la solicitud
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
