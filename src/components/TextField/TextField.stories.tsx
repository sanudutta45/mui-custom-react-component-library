import { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";


const meta: Meta = {
    title: "Custom Text Field",
    component: TextField,
    argTypes: {
        error: {
            control: { type: 'radio' },
            options: [true, false],
            defaultValue: false
        },
        helperText: {
            control: { type: 'text' }
        }
    }
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultTextField: Story = {
    args: {
        label: "Text Field"
    }
}

export const WithError: Story = {
    args: {
        label: "Has Error",
        error: true
    }
}

export const WithHelperText: Story = {
    args: {
        label: "Text Field",
        helperText: "Enter your text here"
    }
}

export const DisabledTextField: Story = {
    args: {
        label: "Disabled Text Field",
        disabled: true
    }
}

