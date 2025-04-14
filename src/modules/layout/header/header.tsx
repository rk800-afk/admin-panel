import { Link } from "react-router-dom"
import styles from "./header.module.css"
import { useContext } from "react"
import { AppStateContext } from "../../../context/app-state-conext"

export function Header() {
  const { isLogined, handleLogout, user } = useContext(AppStateContext)
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
        <p className={styles.greating}>Hello {user!.email}, have a good day!</p>
      )}
    </header>
  )
}
