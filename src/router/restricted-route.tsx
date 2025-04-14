import { ReactNode, useContext } from "react"
import { AppStateContext } from "../context/app-state-conext"
import { Navigate } from "react-router-dom"

export const RestrictedRoute = ({ children }: { children: ReactNode }) => {
  const { isLogined } = useContext(AppStateContext)
  return !isLogined ? children : <Navigate to='/' />
}
