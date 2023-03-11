import React from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import { useTodos } from './hooks/useTodos'

function App() {
  const { todoList, handleTodoAdd, handleTodoToggle, handleTodoRemove } = useTodos()

  return (
    <div className="App">
      <div className="todo-list">
        {todoList.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={handleTodoRemove}
            onToggle={handleTodoToggle}
          />
        ))}
      </div>

      <TodoInput onAddTodo={handleTodoAdd} />
    </div>
  )
}

export default App
