import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal"
import React from "react";
const meta: Meta<typeof Modal> = {
    title: "Custom Modal",
    component: Modal,
    argTypes: {
        open: {
            control: { type: "radio" },
            options: [true, false]
        }
    }

}

export default meta

type Story = StoryObj<typeof meta>

export const ModalOpen: Story = {
    args: {
        open: true,
        children: (
            <div style={{
                width: "60%",
                backgroundColor: "white",
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                border: "none"
            }}>
                <h1>Hello, this is the content of the modal!</h1>
                <p>This is an example of a modal with some content.</p>
            </div>
        )
    }
}

export const ModalClose: Story = {
    args: {
        open: false,
        children: (
            <div style={{
                width: "60%",
                backgroundColor: "white",
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                border: "none"
            }}>
                <h1>This modal is closed!</h1>
                <p>Try clicking outside the modal or pressing the escape key.</p>
            </div>
        )
    }
}