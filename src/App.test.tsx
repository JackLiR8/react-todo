import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Todo Application', () => {
  test('should add a todo when user types in the input and presses enter', async () => {
    render(<App />)

    const todoInput = screen.getByTestId('todo-input')
    expect(todoInput).toBeInTheDocument()

    userEvent.type(todoInput, 'Learn React')
    userEvent.type(todoInput, '{enter}')

    await waitFor(() => {
      expect(screen.getByText('Learn React')).toBeInTheDocument()
    })
  })
})
