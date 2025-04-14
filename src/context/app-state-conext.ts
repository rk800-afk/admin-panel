import { createContext } from "react"
import { User } from "../constants"

export interface AppStateContextType {
  user: User | null
  todoTitle: string
  footerText: string
  isLogined: boolean
  handleLogin: (data: { email: string; password: string }) => string
  handleRegister: (data: { email: string; password: string }) => string
  handleLogout: () => void
  handleSettingsChange: (title: string, text: string) => void
}

export const AppStateContext = createContext<AppStateContextType>({
  user: null,
  todoTitle: "",
  footerText: "",
  isLogined: false,
  handleLogin: () => "",
  handleRegister: () => "",
  handleLogout: () => {},
  handleSettingsChange: () => {},
})
