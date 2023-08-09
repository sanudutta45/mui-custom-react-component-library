import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Custom Button',
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: { radio: true },
            options: ["primary", "secondary"]
        },
        size: {
            control: { radio: true },
            options: ["small", "large"]
        }
    }
}

export default meta

type Story = StoryObj<typeof meta>

/** Button of color = 'primary' and size = 'large'  */
export const PrimaryLarge: Story = {
    args: {
        color: 'primary',
        size: 'large',
        children: 'Click Me',
    }
}

/** Button of color = 'secondary' and size = 'small'  */
export const SecondarySmall: Story = {
    args: {
        color: 'secondary',
        size: 'small',
        children: 'Click Me Too',
    }
}