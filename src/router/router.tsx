import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { TodoPage } from "../pages/todo"
import { LoginPage } from "../pages/login/login-page"
import { RegisterPage } from "../pages/register/register-page"
import { SettingsPage } from "../pages/settings/settings-page"
import { ProfilePage } from "../pages/profile/profile-page"
import { PrivateRoute } from "./private-route"
import { RestrictedRoute } from "./restricted-route"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <TodoPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <RestrictedRoute>
            <LoginPage />
          </RestrictedRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <RestrictedRoute>
            <RegisterPage />
          </RestrictedRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivateRoute>
            <SettingsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
    ],
  },
])
