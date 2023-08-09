import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextField from './TextField';
import { userEvent } from '@storybook/testing-library';

describe('Custom TextField Component', () => {
    test('renders TextField', () => {
        const { getByRole } = render(<TextField label="Username" />);

        const textField = getByRole("textbox", { name: /Username/i })
        expect(textField).toBeInTheDocument();
        expect(textField).toHaveAttribute("aria-invalid", "false")

    });

    test('renders TextField with error and helper text', () => {
        const { getByLabelText, getByText } = render(<TextField label="Password" error helperText="Invalid password" />);

        const textField = getByLabelText('Password');
        expect(textField).toBeInTheDocument();

        const helperText = getByText('Invalid password');
        expect(helperText).toBeInTheDocument();

        expect(textField).toHaveAttribute('aria-invalid', 'true');
    });

    test('renders TextField with additional props', () => {
        const { getByLabelText } = render(<TextField label="Email" placeholder="Enter your email" />);

        const textField = getByLabelText('Email');
        expect(textField).toBeInTheDocument();

        expect(textField).toHaveAttribute('placeholder', 'Enter your email');
    });

    test('calls onChange handler when input value changes', () => {
        const handleChange = jest.fn();
        const { getByLabelText } = render(<TextField label="Name" onChange={handleChange} />);

        const textField = getByLabelText('Name');

        fireEvent.change(textField, { target: { value: 'John Doe' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
