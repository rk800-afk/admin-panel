import styles from "./todo-create-form.module.css"

type Props = {
  onSubmit: (data: { title: string; description: string }) => void
}

export function TodoCreateForm({ onSubmit }: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const title = formData.get("title") as string
    const description = formData.get("description") as string

    onSubmit({ title, description })

    e.currentTarget.reset() // очищаємо форму після сабміту
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div>
        <p>Title:</p>
        <input className={styles.input} type='text' name='title' />
      </div>
      <div>
        <p>Description:</p>
        <textarea className={styles.input} name='description' />
      </div>

      <button type='submit' className={styles.formButton}>
        Create card
      </button>
    </form>
  )
}
