import styles from "./page-layout.module.css"
import { ReactNode } from "react"

export function PageLayout({ children }: { children: ReactNode }) {
  return <div className={styles.PageLayout}>{children}</div>
}
