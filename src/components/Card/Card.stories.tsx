import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card"

const meta: Meta<typeof Card> = {
    title: "Custom Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        title: { control: 'text' },
        content: { control: 'text' },
    }
}

export default meta

type Story = StoryObj<typeof meta>

/** Basic Custom Card Component */
export const BasicCard: Story = {
    args: {
        title: 'Basic Card',
        content: 'This is a basic card with some content.',
    }
}

/** Styled Cutom Card Component */
export const StylesCard: Story = {
    args: {
        title: 'Styled Card',
        content: 'This card has custom styling applied.',
        style: { backgroundColor: 'green', color: 'white', borderRadius: '8px' },
    }
}