import React from 'react';
import "@testing-library/jest-dom"
import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('renders with the default props', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const button = getByText('Click Me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('background-color: #28a745');
    expect(button).toHaveStyle('color: #fff');
    expect(button).toHaveStyle('font-size: 14px');
  });

  it('renders with the primary color and large size', () => {
    const { getByText } = render(
      <Button color="primary" size="large">
        Click Me
      </Button>
    );
    const button = getByText('Click Me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('background-color: #007bff');
    expect(button).toHaveStyle('color: #fff');
    expect(button).toHaveStyle('font-size: 18px');
  });

  it('renders with the secondary color and small size', () => {
    const { getByText } = render(
      <Button color="secondary" size="small">
        Click Me
      </Button>
    );
    const button = getByText('Click Me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('background-color: #dc3545');
    expect(button).toHaveStyle('color: #fff');
    expect(button).toHaveStyle('font-size: 12px');
  });

  it('calls onClick callback when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click Me</Button>
    );
    const button = getByText('Click Me');

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
