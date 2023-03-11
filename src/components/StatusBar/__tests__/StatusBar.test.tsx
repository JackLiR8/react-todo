import React from 'react'
import { render, screen } from '@testing-library/react'
import Todo from 'src/models/Todo'
import StatusBar, { TODO_CATEGORY } from '../index'

let todoList: Todo[]
beforeEach(() => {
  todoList = [
    new Todo({ title: 'reading' }),
    new Todo({ title: 'writing' }),
    new Todo({ title: 'coding' }),
  ]
  todoList[0].toggleCompleted()
})

describe('Component StatusBar', () => {
  test('should render a StatusBar', async () => {
    render(<StatusBar<Todo> dataSource={todoList} onCategoryChange={() => {}} />)

    expect(await screen.findByText('Total: 3')).toBeInTheDocument()
    expect(await screen.findByText('Active: 2')).toBeInTheDocument()
    expect(await screen.findByText('Completed: 1')).toBeInTheDocument()
  })

  test('should trigger onCategoryChange when user clicks on a category', async () => {
    const onCategoryChange = jest.fn()
    render(<StatusBar<Todo> dataSource={todoList} onCategoryChange={onCategoryChange} />)

    const activeCategory = await screen.findByText(/active/i)
    activeCategory.click()
    expect(onCategoryChange).toHaveBeenCalledTimes(1)
    expect(onCategoryChange).toBeCalledWith(TODO_CATEGORY.active)
    onCategoryChange.mockClear()

    const completedCategory = await screen.findByText(/completed/i)
    completedCategory.click()
    expect(onCategoryChange).toHaveBeenCalledTimes(1)
    expect(onCategoryChange).toBeCalledWith(TODO_CATEGORY.completed)
    onCategoryChange.mockClear()

    const allCategory = await screen.findByText(/total/i)
    allCategory.click()
    expect(onCategoryChange).toHaveBeenCalledTimes(1)
    expect(onCategoryChange).toBeCalledWith(TODO_CATEGORY.all)
  })
})
