export type User = {
  email: string
  role: "admin" | "editor" | "viewer"
  password: string
}

export const USERS: User[] = [
  { email: "1234@gmail.com", password: "12345", role: "admin" },
  { email: "gtv@gmail.com", password: "54321", role: "editor" },
  { email: "vova@gmail.com", password: "qwert", role: "viewer" },
  { email: "ok@gmail.com", password: "12345qwert", role: "viewer" },
]
