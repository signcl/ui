import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './input-otp'
import { Label } from './label'

const meta = {
  title: 'UI/InputOTP',
  component: InputOTP,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxLength: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: 'Maximum number of characters',
      defaultValue: 6,
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof InputOTP>

export const Default: Story = {
  render: ({ maxLength = 6, disabled = false }) => {
    const [value, setValue] = useState('')

    return (
      <div className='space-y-2'>
        <InputOTP maxLength={maxLength} value={value} onChange={setValue} disabled={disabled}>
          <InputOTPGroup>
            {Array.from({ length: maxLength }, (_, i) => (
              <InputOTPSlot key={i} index={i} />
            ))}
          </InputOTPGroup>
        </InputOTP>
        <div className='text-fg/60 text-xs'>Value: {value || 'N/A'}</div>
      </div>
    )
  },
}

export const WithSeparator: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  },
}

export const PinInput: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <div className='space-y-2'>
        <Label htmlFor='pin'>Enter PIN</Label>
        <InputOTP id='pin' maxLength={4} value={value} onChange={setValue} containerClassName='justify-center'>
          <InputOTPGroup className='gap-2'>
            {Array.from({ length: 4 }, (_, i) => (
              <InputOTPSlot key={i} index={i} className='rounded-md border-1' />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>
    )
  },
}

export const Sized: Story = {
  render: () => {
    return (
      <div className='space-y-8'>
        <div className='space-y-2'>
          <Label>Small</Label>
          <InputOTP maxLength={4} value=''>
            <InputOTPGroup>
              {Array.from({ length: 4 }, (_, i) => (
                <InputOTPSlot key={i} index={i} className='h-8 w-8 text-xs' />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className='space-y-2'>
          <Label>Default</Label>
          <InputOTP maxLength={4} value=''>
            <InputOTPGroup>
              {Array.from({ length: 4 }, (_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className='space-y-2'>
          <Label>Large</Label>
          <InputOTP maxLength={4} value=''>
            <InputOTPGroup>
              {Array.from({ length: 4 }, (_, i) => (
                <InputOTPSlot key={i} index={i} className='h-14 w-14 text-lg' />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
    )
  },
}
