import React from "react";
import { act, render, screen } from "@testing-library/react";
import TodoInput from "../index";
import userEvent from "@testing-library/user-event";

describe('Component TodoInput', () => { 
  it('should render a TodoInput', () => {
    render(<TodoInput onAddTodo={jest.fn()} />)

    expect(screen.getByTestId('todo-input')).toBeInTheDocument()
  });

  it('should trigger onAddTodo when user types in the input and presses enter', () => {
    const onAddTodo = jest.fn()
    render(<TodoInput onAddTodo={onAddTodo} />)

    act(() => {
      const todoInput = screen.getByTestId('todo-input')
      userEvent.type(todoInput, 'Learn React')
      userEvent.type(todoInput, '{enter}')
    })

    expect(onAddTodo).toHaveBeenCalledTimes(1)
    expect(onAddTodo).toBeCalledWith('Learn React')
  })

  it('should not trigger onAddTodo when user types in the input and presses enter', () => {
    const onAddTodo = jest.fn()
    render(<TodoInput onAddTodo={onAddTodo} />)

    act(() => {
      const todoInput = screen.getByTestId('todo-input')
      userEvent.type(todoInput, 'Learn React')
    })
    
    expect(onAddTodo).not.toHaveBeenCalled()
  })
})