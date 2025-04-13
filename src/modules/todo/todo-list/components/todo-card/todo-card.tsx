import { useState } from "react"
import { DeleteIcon } from "../../../../../ui/delete-icon"
import { EditIcon } from "../../../../../ui/edit-icon"
import styles from "./todo-card.module.css"
import { SuccessIcon } from "../../../../../ui/success-icon"

export function TodoCard({
  id,
  title,
  description,
  status,
  isEditing,
  onEditClick,
  onSuccessClick,
  onDeleteClick,
  onSaveClick,
  isViewer,
}: {
  id: number
  title: string
  description: string
  status: boolean
  isEditing: boolean
  isViewer: boolean
  onEditClick: (id: number) => void
  onSuccessClick: (id: number) => void
  onDeleteClick: (id: number) => void
  onSaveClick: (id: number, title: string, description: string) => void
}) {
  const [localTitle, setLocalTitle] = useState(title)
  const [localDescription, setLocalDescription] = useState(description)

  return (
    <div className={styles.cardContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.statusContainer}>
          <div
            onClick={!isViewer ? () => onSuccessClick(id) : () => {}}
            className={`${styles.statusBtn} ${status ? styles.success : ""}`}
          >
            {status && <SuccessIcon />}
          </div>
          <p className={styles.cardStatus}>{status ? "Done" : "Not done"}</p>
        </div>
        {!isViewer && (
          <div className={styles.iconsContaier}>
            <button
              onClick={() => onEditClick(id)}
              className={styles.changeBtn}
            >
              <EditIcon />
            </button>
            <button
              onClick={() => onDeleteClick(id)}
              className={styles.changeBtn}
            >
              <DeleteIcon />
            </button>
          </div>
        )}
      </div>
      {!isEditing ? (
        <p className={styles.cardTitle}>{title}</p>
      ) : (
        <input
          placeholder='Title'
          className={styles.cardTitleInput}
          value={localTitle}
          onChange={(e) => setLocalTitle(e.target.value)}
        />
      )}
      {!isEditing ? (
        <p className={styles.cardDescription}>{description}</p>
      ) : (
        <textarea
          placeholder='Description'
          className={styles.cardDescriptionInput}
          value={localDescription}
          onChange={(e) => setLocalDescription(e.target.value)}
        />
      )}

      {isEditing && (
        <button
          onClick={() => onSaveClick(id, localTitle, localDescription)}
          className={styles.saveBtn}
        >
          Save
        </button>
      )}
    </div>
  )
}
