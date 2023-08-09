// Import necessary testing libraries and the Snackbar component
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Snackbar from './Snackbar';

describe('Snackbar', () => {
    it('renders the Snackbar with the correct message and variant', () => {
        const message = 'This is a test message';
        const variant = 'success';

        render(<Snackbar open={true} message={message} variant={variant} />);

        const snackbarMessage = screen.getByText(message);
        expect(snackbarMessage).toBeInTheDocument();

        const snackbar = screen.getByRole('alert');
        expect(snackbar).toHaveClass('MuiAlert-standardSuccess');
    });

    it('renders the Snackbar with additional props', () => {
        const message = 'This is a test message';
        const variant = 'info';

        render(<Snackbar open={false} message={message} variant={variant} />);

        const snackbar = screen.queryByRole('alert');
        expect(snackbar).not.toBeInTheDocument();
    });
});
