import { render, screen } from '@testing-library/react';
import { initialData } from '../../../seed/seed';
import ProductPage from '@/app/(shop)/product/[slug]/page';
import { notFound } from 'next/navigation';


jest.mock('next/navigation', () => ({
    notFound: jest.fn(),
}));

describe('ProductPage', () => {
    const sampleProduct = initialData.products[0];

    test('renders product details when product is found', () => {
        render(<ProductPage params={{ slug: sampleProduct.slug }} />);

        expect(screen.getByText(sampleProduct.title)).toBeInTheDocument();
        expect(screen.getByText(`$${sampleProduct.price}`)).toBeInTheDocument();
        expect(screen.getByText('Photo')).toBeInTheDocument();
        expect(screen.getByText(sampleProduct.description)).toBeInTheDocument();
        expect(screen.getByText('Agregar al carrito')).toBeInTheDocument();
        expect(screen.getByText('Descripción')).toBeInTheDocument();
    });

    test('renders size selector with available sizes', () => {
        render(<ProductPage params={{ slug: sampleProduct.slug }} />);

        sampleProduct.sizes.forEach(size => {
            expect(screen.getByText(size)).toBeInTheDocument();
        });
    });

    test('calls notFound when product is not found', () => {
        const invalidSlug = 'non-existing-slug';

        render(<ProductPage params={{ slug: invalidSlug }} />);

        expect(notFound).toHaveBeenCalled();
    });
});