import React from 'react';
import { render } from '@testing-library/react';
import Header from '@/components/Header/index'


describe('Header component', () => {
    it('render without erros', () => {
        const {getByAltText, getByText } = render(<Header/>)

        const logo = getByAltText('Currency Logo'); 
        const homeLink = getByText('Home'); 
        const converterLink = getByText('Conversor'); 
        const aboutLink = getByText('Sobre'); 
        const contactLink = getByText('Contato'); 

        expect(logo).toBeInTheDocument(); 
        expect(homeLink).toBeInTheDocument(); 
        expect(converterLink).toBeInTheDocument(); 
        expect(aboutLink).toBeInTheDocument(); 
        expect(contactLink).toBeInTheDocument(); 
    })
})