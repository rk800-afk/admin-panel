import { useState } from "react"
import { TodoCard } from "./components/todo-card"
import styles from "./todo-list.module.css"
import { TodoCreateForm } from "./components/todo-create-form"
import { User } from "../../../constants"

export function TodoList({
  todoTitle,
  user,
}: {
  todoTitle: string
  user: User
}) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Card 1",
      description: "Hooola",
      isEditing: false,
      status: false,
    },
    {
      id: 2,
      title: "Card 2",
      description: "Another",
      isEditing: false,
      status: true,
    },
    {
      id: 3,
      title: "Card 3",
      description: "Hooola",
      isEditing: false,
      status: false,
    },
    {
      id: 4,
      title: "Card 4",
      description: "Another",
      isEditing: false,
      status: true,
    },
    {
      id: 5,
      title: "Card 5",
      description: "Hooola",
      isEditing: false,
      status: false,
    },
    {
      id: 6,
      title: "Card 6",
      description: "Another",
      isEditing: false,
      status: true,
    },
  ])

  function handleEditClick(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    )
  }

  function handleSuccessClick(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    )
  }

  function handleDeliteClick(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  function handleSaveClick(id: number, title: string, description: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: false, title, description }
          : todo
      )
    )
  }

  function handleCreate(data: { title: string; description: string }) {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0
    setTodos((prev) => [
      ...prev,
      {
        id: newId,
        title: data.title,
        description: data.description,
        isEditing: false,
        status: false,
      },
    ])
  }

  return (
    <>
      {user.role === "admin" && <TodoCreateForm onSubmit={handleCreate} />}
      <p className={styles.todoTitle}>{todoTitle}</p>
      <div className={styles.todoContainer}>
        {todos.map(({ id, title, description, isEditing, status }) => {
          return (
            <TodoCard
              id={id}
              onEditClick={handleEditClick}
              onSuccessClick={handleSuccessClick}
              onDeleteClick={handleDeliteClick}
              onSaveClick={handleSaveClick}
              description={description}
              isEditing={isEditing}
              status={status}
              title={title}
              isViewer={user.role === "viewer"}
            />
          )
        })}
      </div>
    </>
  )
}
