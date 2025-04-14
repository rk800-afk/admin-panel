import { useContext } from "react"
import { LoginRegisterForm } from "../../../components/login-register-form"
import { AppStateContext } from "../../../context/app-state-conext"

export function LoginForm() {
  const { handleLogin } = useContext(AppStateContext)

  return <LoginRegisterForm type='login' handleLoginRegister={handleLogin} />
}
