import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './components/Nav';

test('render title element', () => {
  render(<Nav />);
  expect(screen.getByText('YouTube')).toBeInTheDocument();
});