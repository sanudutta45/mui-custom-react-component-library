import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card"

const meta: Meta<typeof Card> = {
    title: "Custom Card",
    component: Card,
    argTypes: {
        title: { control: 'text' },
        content: { control: 'text' },
    }
}

export default meta

type Story = StoryObj<typeof meta>

export const BsicCard: Story = {
    args: {
        title: 'Basic Card',
        content: 'This is a basic card with some content.',
    }
}

export const StylesCard: Story = {
    args: {
        title: 'Styled Card',
        content: 'This card has custom styling applied.',
        style: { backgroundColor: 'lightblue', color: 'white', borderRadius: '8px' },
    }
}