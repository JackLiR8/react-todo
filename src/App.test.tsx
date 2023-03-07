import React from 'react'
import { findByTestId, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import App from './App'

describe('Todo Application', () => {
  test('should add a todo when user types in the input and presses enter', async () => {
    render(<App />)

    const todoInput = await screen.findByTestId('todo-input')
    expect(todoInput).toBeInTheDocument()

    act(() => {
      userEvent.type(todoInput, 'Learn React')
      userEvent.type(todoInput, '{enter}')
    })

    expect(await screen.findByText('Learn React')).toBeInTheDocument()
  })

  test('toggle active and completed of an item', async () => {
    render(<App />)

    const todoInput = await screen.findByTestId('todo-input')
    act(() => {
      userEvent.type(todoInput, 'Learn React')
      userEvent.type(todoInput, '{enter}')
    })

    const todoItem = await screen.findByText('Learn React')
    expect(todoItem).toBeInTheDocument()

    act(() => {
      userEvent.click(todoItem)
    })
    expect(todoItem).toHaveAttribute('data-completed', 'true')

    act(() => {
      userEvent.click(todoItem)
    })
    expect(todoItem).not.toHaveAttribute('data-completed')
  })

  test('remove an item', async () => {
    render(<App />)

    const todoInput = await screen.findByTestId('todo-input')
    act(() => {
      userEvent.type(todoInput, 'Learn React')
      userEvent.type(todoInput, '{enter}')
    })
    act(() => {
      userEvent.type(todoInput, 'Learn Redux')
      userEvent.type(todoInput, '{enter}')
    })

    const removeItem = await screen.findByText('Learn React')
    const removeButton = await findByTestId(removeItem, 'remove-button')
    expect(removeButton).toBeInTheDocument()

    act(() => {
      userEvent.click(removeButton)
    })
    expect(removeItem).not.toBeInTheDocument()
    expect(await screen.findByText('Learn Redux')).toBeInTheDocument()
  })
})
