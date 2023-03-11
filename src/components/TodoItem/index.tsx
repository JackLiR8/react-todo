import type Todo from '../../models/Todo'

export type TodoItemProps = {
  todo: Todo
  onToggle: (todo: Todo) => void
  onRemove: (todo: Todo) => void
}
export default function TodoItem(props: TodoItemProps) {
  const { todo, onToggle, onRemove } = props
  return (
    <div
      className="todo-item"
      data-completed={todo.completed ? true : undefined}
      onClick={() => onToggle?.(todo)}
    >
      {todo.title}
      <button
        className="todo-item--remove-button"
        data-testid="remove-button"
        onClick={(e) => {
          e.stopPropagation()
          onRemove?.(todo)
        }}
      >x</button>
    </div>
  )
}
