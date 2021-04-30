import React from "react";
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders socis', () => {
  render(<App />);
  const linkElement = screen.getByText(/SOCIS/i);
  expect(linkElement).toBeInTheDocument();
});
