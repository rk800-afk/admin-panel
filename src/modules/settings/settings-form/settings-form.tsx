import { useState } from "react"
import styles from "./settings-form.module.css"
import { User } from "../../../constants"

export function SettingsForm({
  todoTitle,
  footerText,
  handleSettingsChange,
  user,
}: {
  todoTitle: string
  footerText: string
  handleSettingsChange: (title: string, text: string) => void
  user: User
}) {
  const [localTitle, setLocalTitle] = useState(todoTitle)
  const [localFotterText, setFotterText] = useState(footerText)

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSettingsChange(localTitle, localFotterText)
        }}
        className={styles.formContainer}
      >
        <div className={styles.inputContainer}>
          <p>Panel title:</p>
          <input
            className={styles.formInput}
            type='text'
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
            readOnly={user.role === "viewer"}
          />
        </div>
        <div className={styles.inputContainer}>
          <p>Footer text:</p>
          <input
            className={styles.formInput}
            type='text'
            value={localFotterText}
            onChange={(e) => setFotterText(e.target.value)}
            readOnly={user.role === "viewer"}
          />
        </div>
        <button className={styles.formBtn}>Change</button>
      </form>
    </div>
  )
}
