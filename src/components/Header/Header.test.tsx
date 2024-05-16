import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';

// Limpar após cada teste para evitar leaks
afterEach(cleanup);

test('renders Header component correctly', () => {
  const { getByTestId } = render(<Header />);
  
  const headerElement = getByTestId('header');
  expect(headerElement).toBeInTheDocument();
  
  const logoElement = getByTestId('logo');
  expect(logoElement).toBeInTheDocument();
  
  const hamburguerMenuElement = getByTestId('hamburguerMenu');
  expect(hamburguerMenuElement).toBeInTheDocument();
});
