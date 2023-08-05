import { Meta, StoryObj } from "@storybook/react";
import Snackbar from "./Snackbar"

const meta: Meta<typeof Snackbar> = {
    title: "Custom Snackbar",
    component: Snackbar,
    tags: ["autodocs"],
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

/** Success Snackbar on top of MUI Snackbar Component */
export const SuccessSnackbar: Story = {
    args: {
        message: "Success Message",
        variant: "success",
        open: true
    }
}

/** Error Snackbar on top of MUI Snackbar Component */
export const ErrorSnackbar: Story = {
    args: {
        message: "Error Message",
        variant: "error",
        open: true
    }
}

/** Warning Snackbar on top of MUI Snackbar Component */
export const WarningSnackbar: Story = {
    args: {
        message: "Warning Message",
        variant: "warning",
        open: true
    }
}

/** Info Snackbar on top of MUI Snackbar Component */
export const InfoSnackbar: Story = {
    args: {
        message: "Info Message",
        variant: "info",
        open: true
    }
}