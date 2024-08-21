import { StoryFn, Meta } from "@storybook/react"
import WaveButton from "./WaveButton"

export default {
    title: 'Cxlib/WaveButton',
    component: WaveButton,
    parameters: {
        layout: "centered",
    },
    tags: ['autodocs'],
} as Meta<typeof WaveButton>

const Template: StoryFn<typeof WaveButton> = (args) => <WaveButton {...args} />

export const WaveButtonTest = Template.bind({})
WaveButtonTest.args = {
    label: 'Click!',
    size: 'small'
}

