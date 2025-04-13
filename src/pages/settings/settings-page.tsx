import { useOutletContext } from "react-router-dom"
import { SettingsForm } from "../../modules/settings/settings-form"
import { User } from "../../constants"

// Визначаємо тип контексту
interface SettingsPageContext {
  todoTitle: string
  footerText: string
  handleSettingsChange: (title: string, text: string) => void
  user: User
}

export function SettingsPage() {
  const { todoTitle, footerText, handleSettingsChange, user } =
    useOutletContext<SettingsPageContext>()
  return (
    <SettingsForm
      todoTitle={todoTitle}
      footerText={footerText}
      handleSettingsChange={handleSettingsChange}
      user={user}
    />
  )
}
