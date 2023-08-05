import { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";


const meta: Meta = {
    title: "Custom Text Field",
    component: TextField,
    tags: ["autodocs"],
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

/** Default Text Input Field */
export const DefaultTextField: Story = {
    args: {
        label: "Text Field"
    }
}

/** Input text field with error indication */
export const WithError: Story = {
    args: {
        label: "Has Error",
        error: true
    }
}

/** Input text field with helper text */
export const WithHelperText: Story = {
    args: {
        label: "Text Field",
        helperText: "Enter your text here"
    }
}

/** Disable Input text field */
export const DisabledTextField: Story = {
    args: {
        label: "Disabled Text Field",
        disabled: true
    }
}

