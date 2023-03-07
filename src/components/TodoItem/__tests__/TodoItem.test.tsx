import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from '../../../models/Todo'
import TodoItem from '../index'

describe('TodoItem', () => {
  let todoItemProps: { onRemove: jest.Mock; onToggle: jest.Mock; todo: Todo }
  beforeEach(() => {
    todoItemProps = {
      onRemove: jest.fn(),
      onToggle: jest.fn(),
      todo: new Todo({ title: 'reading' }),
    }
  })

  test('should render a TodoItem', async () => {
    render(<TodoItem {...todoItemProps} />)
    expect(await screen.findByText('reading')).toBeInTheDocument()
  })

  test('should call `onToggle` when user clicks on the item', async () => {
    const { onToggle, todo, onRemove } = todoItemProps
    render(<TodoItem {...todoItemProps} />)
    const todoItem = await screen.findByText('reading')

    userEvent.click(todoItem)
    expect(onToggle).toHaveBeenCalledTimes(1)
    expect(onToggle).toBeCalledWith(todo)
    onToggle.mockClear()

    userEvent.click(todoItem)
    expect(onToggle).toHaveBeenCalledTimes(1)
    expect(onToggle).toBeCalledWith(todo)
    expect(onRemove).not.toBeCalled()
  })

  test('should call `onRemove` when user clicks on the remove button', async () => {
    const { onRemove, todo, onToggle } = todoItemProps
    render(<TodoItem {...todoItemProps} />)

    const removeButton = await screen.findByTestId('remove-button')
    expect(removeButton).toBeInTheDocument()

    userEvent.click(removeButton)
    expect(onRemove).toHaveBeenCalledTimes(1)
    expect(onRemove).toBeCalledWith(todo)
    expect(onToggle).not.toBeCalled()
  })
})
