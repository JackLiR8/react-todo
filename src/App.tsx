import React from 'react'
import './App.css'
import StatusBar from './components/StatusBar'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import { useTodos } from './hooks/useTodos'

function App() {
  const { todoList, handleTodoAdd, handleTodoToggle, handleTodoRemove, filteredTodoList, setCategory } = useTodos()

  return (
    <div className="App">
      <StatusBar
        dataSource={todoList}
        onCategoryChange={category => setCategory(category)}
      />

      <div className="todo-list">
        {filteredTodoList.map(todo => (
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
