import { useContext } from "react"
import { LoginRegisterForm } from "../../../components/login-register-form"
import { AppStateContext } from "../../../context/app-state-conext"

export function RegisterForm() {
  const { handleRegister } = useContext(AppStateContext)
  return (
    <LoginRegisterForm type='register' handleLoginRegister={handleRegister} />
  )
}
