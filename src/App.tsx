import { Outlet, useLocation, useNavigate } from "react-router-dom"
import "./App.css"
import { Header } from "./modules/layout/header"
import { Footer } from "./modules/layout/footer"
import { PageLayout } from "./modules/layout/page-layout"
import { useEffect, useState } from "react"
import { User, USERS } from "./constants"

function App() {
  const [todoTitle, setTodoTitle] = useState<string>("todo title")
  const [footerText, setFooterText] = useState("footer text")
  const [isLogined, setIsLogined] = useState(false)
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    role: "viewer",
  })

  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(USERS))
    }
    const tempUser = localStorage.getItem("user")

    if (tempUser) {
      setUser(JSON.parse(tempUser))
      setIsLogined(true)
    }
  }, [])

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      const protectedRoutes = ["/", "/settings", "/profile"]
      const tryingToAccessProtected = protectedRoutes.includes(
        location.pathname
      )

      if (!isLogined && tryingToAccessProtected) {
        navigate("/login", { replace: true })
      }
    }
  }, [isLogined, location.pathname, navigate])

  function handleSettingsChange(title: string, text: string) {
    setTodoTitle(title)
    setFooterText(text)
  }

  function handleLogin({
    email,
    password,
  }: {
    email: string
    password: string
  }): string {
    const localUsers = JSON.parse(localStorage.getItem("users") as string)
    const user: User | undefined = localUsers.filter(
      (user: User) => user.email === email
    )[0]
    if (user) {
      if (user.password === password) {
        setIsLogined(true)
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
        navigate("/", { replace: true })
        return "Success"
      }
      return "Password is incorrect"
    }

    return "No user with such email"
  }

  function handleRegister({
    email,
    password,
  }: {
    email: string
    password: string
  }): string {
    const localUsers = JSON.parse(localStorage.getItem("users") as string)
    const user: User[] = localUsers.filter((user: User) => user.email === email)

    if (user.length > 0) {
      return "User with such email already exists"
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([...localUsers, { email, password, role: "viewer" }])
      )
      return "Success"
    }
  }

  function handleLogout() {
    setIsLogined(false)
    setUser({
      email: "",
      password: "",
      role: "viewer",
    })
    localStorage.removeItem("user")
  }

  return (
    <PageLayout>
      <div>
        <Header
          isLogined={isLogined}
          userEmail={user.email}
          handleLogout={handleLogout}
        />
        <main>
          <Outlet
            context={{
              user,
              todoTitle,
              footerText,
              handleSettingsChange,
              handleLogin,
              handleRegister,
            }}
          />
        </main>
      </div>
      <Footer footerText={footerText} />
    </PageLayout>
  )
}

export default App
