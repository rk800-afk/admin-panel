import { ReactNode } from "react"
import { AppStateContext, AppStateContextType } from "./app-state-conext"

// Створюємо провайдер
interface AppStateProviderProps {
  children: ReactNode
  context: AppStateContextType
}

export const AppStateProvider = ({
  children,
  context,
}: AppStateProviderProps) => {
  return (
    <AppStateContext.Provider value={context}>
      {children}
    </AppStateContext.Provider>
  )
}
