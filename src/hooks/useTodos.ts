import { useState } from 'react'
import Todo from '../models/Todo'

export function useTodos() {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleTodoAdd = (title: string) => {
    if (!title || hasDuplicateTodo())
      return
    setTodoList([...todoList, new Todo({ title })])

    function hasDuplicateTodo() {
      return todoList.some(todo => todo.title === title)
    }
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
