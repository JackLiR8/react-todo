import React from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import { useTodos } from './hooks/useTodos'

function App() {
  const { todoList, handleAddTodo, handleTodoToggle } = useTodos()

  return (
    <div className="App">
      <TodoInput onAddTodo={handleAddTodo} />

      <ul className="todo-list">
        {todoList.map(todo => (
          <li
            key={todo.id}
            className="todo-item"
            onClick={() => handleTodoToggle(todo)}
            data-completed={todo.completed ? true : undefined}
          >{todo.title}</li>),
        )}
      </ul>
    </div>
  )
}

export default App
