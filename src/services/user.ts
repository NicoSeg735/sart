// src/services/userService.js

import axiosInstance from '@/lib/axios'

export const getUser = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/user`, {
      params: {
        id: userId
      }
    })

    return {
      data: response.data,
      error: null
    }
  } catch (error) {
    console.error('Error fetching user:', error)
    return {
      data: null,
      error
    }
  }
}
