import React from "react";
import { act, render, screen } from "@testing-library/react";
import TodoInput from "../index";
import userEvent from "@testing-library/user-event";

describe("Component TodoInput", () => {
  it("should render a TodoInput", async () => {
    render(<TodoInput onAddTodo={jest.fn()} />);

    expect(await screen.findByTestId("todo-input")).toBeInTheDocument();
  });

  it("should trigger onAddTodo when user types in the input and presses enter", async () => {
    const onAddTodo = jest.fn();
    render(<TodoInput onAddTodo={onAddTodo} />);

    const todoInput = await screen.findByTestId("todo-input");
    act(() => {
      userEvent.type(todoInput, "Learn React");
      userEvent.type(todoInput, "{enter}");
    })

    expect(onAddTodo).toHaveBeenCalledTimes(1);
    expect(onAddTodo).toBeCalledWith("Learn React");
    // clear input after adding todo
    expect(todoInput).toHaveValue("");
  });

  it("should not trigger onAddTodo when user types in the input", async () => {
    const onAddTodo = jest.fn();
    render(<TodoInput onAddTodo={onAddTodo} />);

    const todoInput = await screen.findByTestId("todo-input");
    act(() => {
      userEvent.type(todoInput, "Learn React");
    })

    expect(onAddTodo).not.toHaveBeenCalled();
  });

  it("should not trigger onAddTodo when input is empty", async () => {
    const onAddTodo = jest.fn();
    render(<TodoInput onAddTodo={onAddTodo} />);

    const todoInput = await screen.findByTestId("todo-input");
    userEvent.type(todoInput, "{enter}");

    expect(onAddTodo).not.toHaveBeenCalled();

    act(() => {
      userEvent.type(todoInput, "Learn React");
      userEvent.clear(todoInput);
      userEvent.type(todoInput, "{enter}");
    })

    expect(onAddTodo).not.toHaveBeenCalled();
  });
});
