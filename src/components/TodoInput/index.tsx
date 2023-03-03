import React, { KeyboardEventHandler, useState } from "react"

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
    <div className='todo-input-wrapper'>
      <input
        data-testid="todo-input"
        onChange={e => setTodoInputText(e.target.value)}
        onKeyDown={handleTodoInputKeyDown}
      />
    </div>
  )
}