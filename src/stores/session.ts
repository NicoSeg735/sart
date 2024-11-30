import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IUser {
  id: number
  name: string
  email: string
}

interface IRole {
  id: string
  name: string
}

interface SessionState {
  user: IUser | null
  role: IRole | null
  login: (user: IUser, role: IRole) => void
  logout: () => void
}

export const useSession = create<SessionState>()(
  persist(
    (set) => ({
      user: null,
      role: null,
      login: (user, role) => set({ user, role }),
      logout: () => set({ user: null, role: null })
    }),
    {
      name: 'session'
    }
  )
)
