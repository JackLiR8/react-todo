import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders submit button', () => {
  render(<App />);

  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement.innerHTML).toBe('Submit')
});
