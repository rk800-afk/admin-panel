import { LoginRegisterForm } from "../../../components/login-register-form"

export function LoginForm({
  handleLogin,
}: {
  handleLogin: (data: { email: string; password: string }) => string
}) {
  return <LoginRegisterForm type='login' handleLoginRegister={handleLogin} />
}
