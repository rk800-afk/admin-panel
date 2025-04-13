import { Link } from "react-router-dom"
import styles from "./header.module.css"

export function Header({
  isLogined,
  userEmail,
  handleLogout,
}: {
  isLogined: boolean
  userEmail: string
  handleLogout: () => void
}) {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.nav}>
        {isLogined && (
          <>
            <Link to='/profile'>Profile</Link>
            <Link to='/'>To do list</Link>
            <Link to='/settings'>Settings</Link>
          </>
        )}

        {!isLogined ? (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        ) : (
          <button onClick={handleLogout}>Log out</button>
        )}
      </nav>
      {isLogined && (
        <p className={styles.greating}>Hello {userEmail}, have a good day!</p>
      )}
    </header>
  )
}
