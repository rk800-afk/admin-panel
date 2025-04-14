import { useContext } from "react"
import styles from "./footer.module.css"
import { AppStateContext } from "../../../context/app-state-conext"

export function Footer() {
  const { footerText } = useContext(AppStateContext)
  return <div className={styles.footerContainer}>{footerText}</div>
}
