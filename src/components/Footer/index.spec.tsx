import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Footer from './index';
import React from 'react';


test('should render correctly', () => {
    const { getByTestId, getByText, getByAltText } = render(<Footer />);
    
    const footerElement = getByTestId('footer');
    expect(footerElement).toBeInTheDocument();

    expect(getByText('Lacrei Saúde')).toBeInTheDocument();
    expect(getByText('Saúde')).toBeInTheDocument();
    expect(getByText('Segurança e Privacidade')).toBeInTheDocument();

    const altImgElement = getByAltText('Botão para retornar ao topo');
    expect(altImgElement).toBeInTheDocument();
})