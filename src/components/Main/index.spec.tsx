import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Main from './index';
// Import React to ensure JSX syntax works in this file
import React from 'react';

 test('should render correctly', () => {
  const { getByTestId, getByText, getByAltText } = render(<Main />);
  
  const mainElement = getByTestId('main');
  expect(mainElement).toBeInTheDocument();

  expect(getByText('Junte-se à nossa comunidade')).toBeInTheDocument();
  expect(getByText(/Encontre atendimento clínico de qualidade/i)).toBeInTheDocument();
  expect(getByText(/Entre para o time de profissionais da Lacrei Saúde/i)).toBeInTheDocument();

  const heroElement = getByAltText('Imagem de atendimento ao paciente');
  expect(heroElement).toBeInTheDocument();
});