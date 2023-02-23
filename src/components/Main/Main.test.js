import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('Main renders', () => {
  render(<Main />);
  const mainElement = screen.getByTestId('mainRenders');
  expect(mainElement).toBeVisible();
});

test('renders button with className "App_btn"', () => {
  render(<Main />);
  const buttonElement = screen.getByRole('button', { className: 'App_btn' });
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('Search');
});

test('input element with testId "inputText" has placeholder "Your pokemon name here"', () => {
  render(<Main />);
  const inputElement = screen.getByTestId('inputText');
  expect(inputElement).toHaveAttribute('placeholder', 'Your pokemon name here');
});