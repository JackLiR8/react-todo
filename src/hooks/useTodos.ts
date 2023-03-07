import { useState } from 'react'
import Todo from '../models/Todo'

export function useTodos() {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleTodoAdd = (title: string) => {
    setTodoList([...todoList, new Todo({ title })])
  }

  const handleTodoToggle = (todo: Todo) => {
    todo.toggleCompleted()
    setTodoList([...todoList])
  }

  const handleTodoRemove = (todo: Todo) => {
    setTodoList(todoList.filter(t => t.id !== todo.id))
  }

  return {
    todoList,
    handleTodoAdd,
    handleTodoToggle,
    handleTodoRemove,
  }
}
