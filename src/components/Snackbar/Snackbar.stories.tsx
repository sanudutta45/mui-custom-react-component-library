import { Meta, StoryObj } from "@storybook/react";
import Snackbar from "./Snackbar"

const meta: Meta<typeof Snackbar> = {
    title: "Custom Snackbar",
    component: Snackbar,
    argTypes: {
        message: {
            control: { type: "text" }
        },
        variant: {
            control: { type: "radio" },
            options: ["success", "error", "info", "warning"]
        },
        open: {
            control: { type: "boolean" },
            defaultValue: true
        }
    }
}

export default meta

type Story = StoryObj<typeof meta>

export const SuccessSnackbar: Story = {
    args: {
        message: "Success Message",
        variant: "success",
        open: true
    }
}
export const ErrorSnackbar: Story = {
    args: {
        message: "Error Message",
        variant: "error",
        open: true
    }
}
export const WarningSnackbar: Story = {
    args: {
        message: "Warning Message",
        variant: "warning",
        open: true
    }
}
export const InfoSnackbar: Story = {
    args: {
        message: "Info Message",
        variant: "info",
        open: true
    }
}