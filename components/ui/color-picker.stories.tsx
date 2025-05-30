import type { Meta, StoryObj } from '@storybook/nextjs'

import { ColorPicker } from './color-picker'

const meta = {
  title: 'UI/Color Picker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: '#ff0000',
    label: 'Color',
  },
}
