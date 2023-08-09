import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

describe('Custom Card Component', () => {
    test('renders the card with the provided title and content', () => {
        const { getByText } = render(
            <Card title="Test Title" content="Test Content" />
        );

        const titleElement = getByText('Test Title');
        const contentElement = getByText('Test Content');

        expect(titleElement).toBeInTheDocument();
        expect(contentElement).toBeInTheDocument();
    });

    test('applies custom styles to the card', () => {
        const { getByTestId } = render(
            <Card
                title="Custom Styled Card"
                content="This card has custom styling applied."
                data-testid="custom-card"
                style={{ backgroundColor: 'lightblue', color: 'white', borderRadius: '8px' }}
            />
        );

        const customCard = getByTestId('custom-card');

        expect(customCard).toHaveStyle('background-color: lightblue');
        expect(customCard).toHaveStyle('color: white');
        expect(customCard).toHaveStyle('border-radius: 8px');
    });
});