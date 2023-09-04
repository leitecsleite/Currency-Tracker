import { render } from "@testing-library/react"; 
import React from 'react';
import LastUpdate from '@/components/LastUpdate/index'; 



describe('render component lastUpdate', () => {
    it('render without error', () => {
        const { getByText } = render(<LastUpdate/>); 

        const lastUpdateText = getByText('Última atualização às');

        expect(lastUpdateText).toBeInTheDocument(); 
        
    })

    it('Check the style of the spans css', () => {
        const { getByTestId } = render(<LastUpdate/>); 
        const spanElement = getByTestId('circle-animation'); 

        expect(spanElement).toBeInTheDocument(); 
        expect(getByTestId('last update')).toHaveStyle({
           'display': 'block',
        })
    })
})