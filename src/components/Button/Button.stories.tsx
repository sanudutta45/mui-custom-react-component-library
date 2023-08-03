import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';
import { CustomButtonProps } from './Button.types';

export default {
    title: 'CustomButtonWrapper',
    component: Button,
} as Meta;

const Template: Story<CustomButtonProps> = (args) => <Button {...args} />;


export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
    color: 'primary',
    size: 'large',
    children: 'Click Me',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
    color: 'secondary',
    size: 'small',
    children: 'Click Me Too',
};