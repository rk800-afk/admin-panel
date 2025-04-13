import { useOutletContext } from "react-router-dom"
import { RegisterForm } from "../../modules/register/register-form"

interface RegisterPageContext {
  handleRegister: (data: { email: string; password: string }) => string
}

export function RegisterPage() {
  const { handleRegister } = useOutletContext<RegisterPageContext>()
  return <RegisterForm handleRegister={handleRegister} />
}
