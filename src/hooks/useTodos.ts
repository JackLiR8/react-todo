import { useState } from 'react'
import Todo from '../models/Todo'

export function useTodos() {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleAddTodo = (title: string) => {
    setTodoList([...todoList, new Todo({ title })])
  }

  const handleTodoToggle = (todo: Todo) => {
    todo.toggleCompleted()
    setTodoList([...todoList])
  }

  return {
    todoList,
    handleAddTodo,
    handleTodoToggle,
  }
}
