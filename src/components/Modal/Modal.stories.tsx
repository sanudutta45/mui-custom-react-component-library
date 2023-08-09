import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal"
import React, { Fragment, useRef } from "react";
const meta: Meta<typeof Modal> = {
    title: "Custom Modal",
    component: Modal,
    tags: ["autodocs"],
    argTypes: {
        open: {
            control: { type: "radio" },
            options: [true, false]
        }
    }

}

export default meta

type Story = StoryObj<typeof meta>

/** Modal in open state */
export const ModalOpen: Story = {
    render: (args) => {
        return (
            <Fragment>
                <div id="modal-temp-container" style={{ height: "350px" }}>
                </div>
                <Modal {...args}
                    container={() => document.getElementById("modal-temp-container")}
                />
            </Fragment>
        )
    },
    args: {
        open: true,
        children: (
            <div style={{
                width: "60%",
                backgroundColor: "white",
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                border: "none",
                outline: 0
            }}>
                <h1>Hello, this is the content of the modal!</h1>
                <p>This is an example of a modal with some content.</p>
            </div>
        )
    }
}

/** Modal in closed state */
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
                border: "none",
                outline: 0
            }}>
                <h1>This modal is closed!</h1>
                <p>Try clicking outside the modal or pressing the escape key.</p>
            </div>
        )
    }
}