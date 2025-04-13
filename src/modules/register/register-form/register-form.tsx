import { LoginRegisterForm } from "../../../components/login-register-form"

export function RegisterForm({
  handleRegister,
}: {
  handleRegister: (data: { email: string; password: string }) => string
}) {
  return (
    <LoginRegisterForm type='register' handleLoginRegister={handleRegister} />
  )
}
