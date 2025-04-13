import styles from "./profile-info.module.css"

export function ProfileInfo({ email, role }: { email: string; role: string }) {
  return (
    <div className={styles.infoContainer}>
      <p>User email: {email}</p>
      <p>User role: {role}</p>
    </div>
  )
}
