import { getByText, render, screen } from '@testing-library/react'
import Home from '../app/(shop)/page';


describe('pruebas en el componente Home', () => {

    const page = ()=> render(<Home />);

    test('Debe de contener el texto "Tienda"', () => {
        page();
        //screen.debug();

        const title = screen.getByText('Tienda');

        expect(title).toBeInTheDocument();
        expect(title).toBeVisible();
    });

    test('should be show text "Todos los productos"', () => {
        page();
        const subtitle = screen.getByText('Todos los productos');

        expect(subtitle).toBeInTheDocument();
        expect(subtitle).toBeVisible();
    });


})

