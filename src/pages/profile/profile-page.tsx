import { useOutletContext } from "react-router-dom"
import { User } from "../../constants"
import { ProfileInfo } from "../../modules/profile/profile-info"

interface ProfilePageContext {
  user: User
}

export function ProfilePage() {
  const { user } = useOutletContext<ProfilePageContext>()

  return <ProfileInfo email={user.email} role={user.role} />
}
