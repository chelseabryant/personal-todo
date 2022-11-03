import React from "react"
import { useState } from "react"

function EnterTodo({ updateTodos }) {
  const [todoInput, setTodoInput] = useState("")
  const [idGenerator, setIdGenerator] = useState(1)

  const input = (e) => {
    setTodoInput(e.target.value)
  }

  const onAddClick = () => {
    updateTodos({ id: idGenerator, title: todoInput })
    setIdGenerator(idGenerator + 1)
    setTodoInput("")
  }

  return (
    <div>
      <input value={todoInput} onChange={input} placeholder="Enter todo" />
      <button onClick={onAddClick}>Add</button>
    </div>
  )
}

export default EnterTodo
