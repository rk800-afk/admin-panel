import { useContext } from "react"
import styles from "./profile-info.module.css"
import { AppStateContext } from "../../../context/app-state-conext"

export function ProfileInfo() {
  const { user } = useContext(AppStateContext)

  return (
    <div className={styles.infoContainer}>
      <p>User email: {user!.email}</p>
      <p>User role: {user!.role}</p>
    </div>
  )
}
