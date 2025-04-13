import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { TodoPage } from "../pages/todo"
import { LoginPage } from "../pages/login/login-page"
import { RegisterPage } from "../pages/register/register-page"
import { SettingsPage } from "../pages/settings/settings-page"
import { ProfilePage } from "../pages/profile/profile-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <TodoPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
])
