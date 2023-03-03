import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { act } from 'react-dom/test-utils'

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
})
