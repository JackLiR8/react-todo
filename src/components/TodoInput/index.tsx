import type { KeyboardEventHandler } from 'react'
import React, { useState } from 'react'

type TodoInputProps = {
  onAddTodo: (title: string) => void
}

export default function TodoInput(props: TodoInputProps) {
  const { onAddTodo } = props
  const [todoInputText, setTodoInputText] = useState('')

  const handleTodoInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== 'Enter' || !todoInputText)
      return

    onAddTodo(todoInputText)
    setTodoInputText('')
  }

  return (
    <div className='todo-input__wrapper'>
      <input
        data-testid="todo-input"
        className="todo-input"
        value={todoInputText}
        onChange={e => setTodoInputText(e.target.value)}
        onKeyDown={handleTodoInputKeyDown}
      />
    </div>
  )
}
