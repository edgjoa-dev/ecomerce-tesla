import { getByText, render, screen } from '@testing-library/react'
import Home from '../app/(shop)/page';

// describe('Pruebas en el componente root de la aplicación', () => {
//     test("Debe ser true", ()=> {
//         expect(true).toBe(true);
//     })
// })


describe('Debe de contener el titulo', () => {

    test('Debe de contener el texto "Tienda"', () => {

        render(<Home />)
        screen.debug();

        const title = screen.getByText('Tienda');
        const subtitle = screen.getByText('Todos los productos');

        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
        expect(subtitle).toBeVisible();

    });


})

