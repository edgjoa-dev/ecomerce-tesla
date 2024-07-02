import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QuantitySelector } from '@/components';

// Mocking react-icons
jest.mock('react-icons/io5', () => ({
    IoAddCircleOutline: jest.fn(() => <div data-testid="add-icon" />),
    IoRemoveCircleOutline: jest.fn(() => <div data-testid="remove-icon" />)
}));

describe('QuantitySelector Component', () => {
    test('renders with initial quantity', () => {
        render(<QuantitySelector quantity={5} />);
        const quantityDisplay = screen.getByText('5');
        expect(quantityDisplay).toBeInTheDocument();
    });

    test('increments the quantity when the add button is clicked', () => {
        render(<QuantitySelector quantity={5} />);
        const addButton = screen.getByTestId('add-icon');
        fireEvent.click(addButton);
        const quantityDisplay = screen.getByText('6');
        expect(quantityDisplay).toBeInTheDocument();
    });

    test('decrements the quantity when the remove button is clicked', () => {
        render(<QuantitySelector quantity={5} />);
        const removeButton = screen.getByTestId('remove-icon');
        fireEvent.click(removeButton);
        const quantityDisplay = screen.getByText('4');
        expect(quantityDisplay).toBeInTheDocument();
    });

    test('does not decrement below 1', () => {
        render(<QuantitySelector quantity={1} />);
        const removeButton = screen.getByTestId('remove-icon');
        fireEvent.click(removeButton);
        const quantityDisplay = screen.getByText('1');
        expect(quantityDisplay).toBeInTheDocument();
    });
});
