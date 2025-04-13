import { useOutletContext } from "react-router-dom"
import { TodoList } from "../../modules/todo/todo-list"
import { User } from "../../constants"

interface TodosPageContext {
  todoTitle: string
  user: User
}

export function TodoPage() {
  const { todoTitle, user } = useOutletContext<TodosPageContext>()
  return <TodoList todoTitle={todoTitle} user={user} />
}
