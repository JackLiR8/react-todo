import React, { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import Todo from './models/Todo'

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleAddTodo = (title: string) => {
    setTodoList([...todoList, new Todo({ title })])
  }

  const handleTodoToggle = (todo: Todo) => {
    todo.toggleCompleted()
    setTodoList([...todoList])
  }

  return (
    <div className="App">
      <TodoInput onAddTodo={handleAddTodo} />

      <ul className="todo-list">
        {todoList.map(todo => (
          <li
            key={todo.id}
            className="todo-item"
            onClick={() => handleTodoToggle(todo)}
            {...todo.completed && { 'data-completed': true }}
          >{todo.title}</li>),
        )}
      </ul>
    </div>
  )
}

export default App
