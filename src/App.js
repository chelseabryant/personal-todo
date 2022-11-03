import "./App.css"
import { useState } from "react"
import EnterTodo from "./components/EnterTodo"
import React from "react"
import EachTodo from "./components/EachTodo"

function App() {
  const [todos, setTodos] = useState([])

  const updateTodos = (newTodo) => {
    if (newTodo.title && !todos.includes(newTodo.title)) {
      setTodos([...todos, newTodo])
    }
  }

  console.log("todos:", todos)

  return (
    <div className="App">
      <h2>Todo checklist</h2>
      <EnterTodo updateTodos={updateTodos} />
      {todos.map((todo) => (
        <EachTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  )
}

export default App
