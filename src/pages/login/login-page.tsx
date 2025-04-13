import { useOutletContext } from "react-router-dom"
import { LoginForm } from "../../modules/login/login-form"

interface LoginPageContext {
  handleLogin: (data: { email: string; password: string }) => string
}

export function LoginPage() {
  const { handleLogin } = useOutletContext<LoginPageContext>()
  return <LoginForm handleLogin={handleLogin} />
}
