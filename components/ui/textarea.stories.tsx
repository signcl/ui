import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Label } from './label'
import { Textarea } from './textarea'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
}

export const WithValue: Story = {
  args: {
    value: 'This is a textarea with some initial content. You can edit this text.',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'This textarea is disabled',
  },
}

export const WithRows: Story = {
  args: {
    rows: 8,
    placeholder: 'This textarea has 8 rows',
  },
}

export const WithMaxLength: Story = {
  render: args => (
    <div className='space-y-2'>
      <Textarea {...args} maxLength={100} placeholder='This textarea has a maximum length of 100 characters' />
      <p className='text-fg/60 text-xs'>Maximum length: 100 characters</p>
    </div>
  ),
}

export const Resizable: Story = {
  args: {
    className: 'resize-y',
    placeholder: 'This textarea can be resized vertically',
  },
}

export const FullyResizable: Story = {
  args: {
    className: 'resize',
    placeholder: 'This textarea can be resized in all directions',
  },
}

export const WithLabel: Story = {
  render: args => (
    <div className='space-y-2'>
      <Label htmlFor='message'>Your message</Label>
      <Textarea {...args} id='message' placeholder='Type your message here.' />
    </div>
  ),
}
