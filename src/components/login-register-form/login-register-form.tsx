import { Link } from "react-router-dom"
import styles from "./login-register-form.module.css"
import { useState } from "react"

export function LoginRegisterForm({
  type,
  handleLoginRegister,
}: {
  type: "login" | "register"
  handleLoginRegister: (data: { email: string; password: string }) => string
}) {
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const result = handleLoginRegister({ email, password })
    setMessage(result)

    // e.currentTarget.reset() // очищаємо форму після сабміту
  }

  return (
    <div className={styles.formLayout}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <p className={styles.formTitle}>
          {type === "login" ? "Log In" : "Register"}
        </p>
        <p>{message}</p>
        <div>
          <p>Email</p>
          <input
            required
            name='email'
            className={styles.formInput}
            type='email'
            placeholder='Enter your email'
          />
        </div>
        <div>
          <p>Password</p>
          <input
            required
            name='password'
            className={styles.formInput}
            type='password'
            placeholder='Enter your password'
          />
        </div>
        <button className={styles.formButton}>
          {type === "login" ? "Log In" : "Register"}
        </button>
        {type === "register" ? (
          <div className={styles.footerContainer}>
            <p className={styles.footerText}>Already have account?</p>
            <Link className={styles.footerLink} to='/login'>
              Login
            </Link>
          </div>
        ) : (
          <div className={styles.footerContainer}>
            <p className={styles.footerText}>Don't have account?</p>
            <Link className={styles.footerLink} to='/register'>
              Register
            </Link>
          </div>
        )}
      </form>
    </div>
  )
}
