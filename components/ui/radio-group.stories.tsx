import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Label } from '@/components/ui/label'

import { RadioGroup, RadioGroupItem } from './radio-group'

const meta = {
  title: 'UI/Radio Group',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: args => (
    <RadioGroup {...args} defaultValue='option-one'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-one' id='option-one' />
        <Label htmlFor='option-one'>Option One</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-two' id='option-two' />
        <Label htmlFor='option-two'>Option Two</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-three' id='option-three' aria-invalid />
        <Label htmlFor='option-three'>Option Three</Label>
      </div>
    </RadioGroup>
  ),
}

export const Horizontal: Story = {
  render: args => (
    <RadioGroup {...args} defaultValue='option-one' className='flex space-x-4'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-one' id='h-option-one' />
        <Label htmlFor='h-option-one'>Option One</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-two' id='h-option-two' />
        <Label htmlFor='h-option-two'>Option Two</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-three' id='h-option-three' />
        <Label htmlFor='h-option-three'>Option Three</Label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: args => (
    <RadioGroup {...args} defaultValue='option-one' disabled>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-one' id='d-option-one' />
        <Label htmlFor='d-option-one' className='text-fg/50'>
          Option One
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-two' id='d-option-two' />
        <Label htmlFor='d-option-two' className='text-fg/50'>
          Option Two
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-three' id='d-option-three' />
        <Label htmlFor='d-option-three' className='text-fg/50'>
          Option Three
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const WithDisabledItems: Story = {
  render: args => (
    <RadioGroup {...args} defaultValue='option-one'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-one' id='di-option-one' />
        <Label htmlFor='di-option-one'>Option One</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-two' id='di-option-two' disabled />
        <Label htmlFor='di-option-two' className='text-fg/50'>
          Option Two (Disabled)
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-three' id='di-option-three' />
        <Label htmlFor='di-option-three'>Option Three</Label>
      </div>
    </RadioGroup>
  ),
}
