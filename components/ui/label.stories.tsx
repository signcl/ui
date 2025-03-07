import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'

import { Label } from './label'

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof Label>

// Basic label example
export const Basic: Story = {
  render: () => <Label>Basic Label</Label>,
}

// Label with input
export const WithInput: Story = {
  render: () => (
    <div className='grid w-full max-w-sm'>
      <Label htmlFor='email'>Email</Label>
      <Input type='email' id='email' placeholder='Enter your email' />
    </div>
  ),
}

// Label with required field
export const Required: Story = {
  render: () => (
    <div className='grid w-full max-w-sm'>
      <Label htmlFor='username'>
        Username <span className='text-red-500'>*</span>
      </Label>
      <Input type='text' id='username' required />
    </div>
  ),
}

// Label with checkbox
export const WithCheckbox: Story = {
  render: () => (
    <div className='flex items-center'>
      <Checkbox id='terms' />
      <Label htmlFor='terms' className='pb-0 pl-2'>
        Accept terms and conditions
      </Label>
    </div>
  ),
}

// Label with switch
export const WithSwitch: Story = {
  render: () => (
    <div className='flex items-center'>
      <Switch id='airplane-mode' />
      <Label htmlFor='airplane-mode' className='pb-0 pl-2'>
        Airplane Mode
      </Label>
    </div>
  ),
}

// Disabled state
export const Disabled: Story = {
  render: () => (
    <div className='grid w-full max-w-sm'>
      <Label htmlFor='disabled-input' className='text-fg/50'>
        Disabled Field
      </Label>
      <Input type='text' id='disabled-input' disabled />
    </div>
  ),
}

// Label with help text
export const WithHelpText: Story = {
  render: () => (
    <div className='grid w-full max-w-sm'>
      <Label htmlFor='password'>Password</Label>
      <Input type='password' id='password' />
      <div className='text-fg/60 my-1 text-xs'>Password must be at least 8 characters long</div>
    </div>
  ),
}

// Label with custom styling
export const CustomStyling: Story = {
  render: () => (
    <Label className='text-lg font-bold text-blue-600' htmlFor='custom'>
      Custom Styled Label
    </Label>
  ),
}

// Label with nested content
export const WithNestedContent: Story = {
  render: () => (
    <Label>
      <div className='space-y-1'>
        <div className='font-semibold'>Profile Settings</div>
        <div className='text-fg/60 text-sm'>Configure your profile preferences</div>
      </div>
    </Label>
  ),
}

// Label with error state
export const WithError: Story = {
  render: () => (
    <div className='grid w-full max-w-sm'>
      <Label htmlFor='error-input' className='text-red-600'>
        Invalid Input
      </Label>
      <Input type='text' id='error-input' className='border-red-600' />
      <div className='my-1 text-xs text-red-600'>This field is required</div>
    </div>
  ),
}
