import { useMemo, useState } from 'react'
import Todo from '../models/Todo'
import { TODO_CATEGORY, type TodoCategory } from '../components/StatusBar'

export function useTodos() {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [category, setCategory] = useState<TodoCategory>(TODO_CATEGORY.all)

  const filteredTodoList = useMemo(() => {
    if (category === TODO_CATEGORY.active)
      return todoList.filter(todo => !todo.completed)
    if (category === TODO_CATEGORY.completed)
      return todoList.filter(todo => todo.completed)
    else return todoList
  }, [todoList, category])

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
    filteredTodoList,
    setCategory,
  }
}
