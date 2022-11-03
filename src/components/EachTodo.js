import React from "react"
import { useState } from "react"

function EachTodo({ todo, todos, setTodos }) {
  const [editing, setEditing] = useState(false)
  const [editInput, setEditInput] = useState(todo.title)

  const onDelete = () => {
    const filteredTodos = todos.filter(
      (currentTodo) => currentTodo.id !== todo.id
    )
    setTodos(filteredTodos)
  }

  const onEdit = () => {
    if (editing) {
      const updatedTodos = todos.map((currentTodo) =>
        currentTodo === todo ? { id: todo.id, title: editInput } : currentTodo
      )
      setTodos(updatedTodos)
    }
    setEditing(!editing)
  }

  const editTodo = (e) => {
    setEditInput(e.target.value)
  }

  return (
    <div>
      <input
        value={editInput}
        className={editing ? "" : "unstyled-input"}
        disabled={!editing}
        onChange={editTodo}
      />
      <button onClick={onEdit}>{editing ? "Save" : "Edit"} </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default EachTodo
