import type { KeyboardEventHandler } from 'react'
import React, { useState } from 'react'
import './App.css'
import Todo from './models/Todo'

function App() {
  const [todoInputText, setTodoInputText] = useState('')
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleTodoInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== 'Enter' || !todoInputText)
      return

    setTodoList(list => [...list, new Todo({ title: todoInputText })])
    setTodoInputText('')
  }

  return (
    <div className="App">
      <div className='todo-input-wrapper'>
        <input
          data-testid="todo-input"
          onChange={e => setTodoInputText(e.target.value)}
          onKeyDown={handleTodoInputKeyDown}
        />
      </div>

      <ul className='todo-list'>
        {todoList.map(todo => (<li key={todo.id}>{todo.title}</li>))}
      </ul>
    </div>
  )
}

export default App
