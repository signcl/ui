import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

import { Input } from './input-next'

const meta = {
  title: 'UI/Input Next',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'text',
      description: 'Input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

// Default demo
export const Demo: Story = {
  render: () => <Input type='email' placeholder='Email' />,
}

// File input with label
export const File: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-3'>
      <Label htmlFor='picture'>Picture</Label>
      <Input id='picture' type='file' />
    </div>
  ),
}

// Disabled input
export const Disabled: Story = {
  render: () => <Input disabled type='email' placeholder='Email' />,
}

// Input with label
export const WithLabel: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-2'>
      <Label htmlFor='email'>Email</Label>
      <Input type='email' id='email' placeholder='Email' />
    </div>
  ),
}

// Input with button
export const WithButton: Story = {
  render: () => (
    <div className='flex w-full max-w-sm items-center gap-2'>
      <Input type='email' placeholder='Email' />
      <Button type='submit' variant='outline'>
        Subscribe
      </Button>
    </div>
  ),
}
