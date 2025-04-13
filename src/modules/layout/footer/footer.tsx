import styles from "./footer.module.css"

export function Footer({ footerText }: { footerText: string }) {
  return <div className={styles.footerContainer}>{footerText}</div>
}
