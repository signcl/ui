import type { Meta, StoryObj } from '@storybook/nextjs'
import { IconCheck, IconClipboard } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'

import { CopyButton } from './copy-button'

const meta: Meta<typeof CopyButton> = {
  title: 'UI/Copy Button',
  component: CopyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'The value to copy to clipboard',
    },
    timeout: {
      control: { type: 'number', min: 500, max: 10000, step: 500 },
      description: 'Time in milliseconds that the copied state should persist',
    },
    children: {
      description: 'Render prop that provides the copied state and copy function',
    },
    className: {
      control: 'text',
      description: 'Optional className for the wrapper div',
    },
  },
}

export default meta
type Story = StoryObj<typeof CopyButton>

// Basic example with minimal styling
export const Basic: Story = {
  args: {
    value: 'Text to be copied',
    timeout: 2000,
    children: ({ copied, copy }) => <Button onClick={copy}>{copied ? 'Copied!' : 'Copy Text'}</Button>,
  },
}

// With Lucide icons
export const WithIcons: Story = {
  args: {
    value: 'Text with icons',
    timeout: 2000,
    children: ({ copied, copy }) => (
      <Button onClick={copy}>
        {copied ? (
          <>
            <IconCheck className='size-4' />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <IconClipboard className='size-4' />
            <span>Copy</span>
          </>
        )}
      </Button>
    ),
  },
}

// Icon-only button
export const IconOnly: Story = {
  args: {
    value: 'Text for icon-only button',
    timeout: 2000,
    children: ({ copied, copy }) => (
      <Button size={'icon'} onClick={copy} aria-label={copied ? 'Copied' : 'Copy to clipboard'}>
        {copied ? <IconCheck className='size-4' /> : <IconClipboard className='size-4' />}
      </Button>
    ),
  },
}

// Using a longer timeout
export const LongTimeout: Story = {
  args: {
    value: 'This copied state will last 5 seconds',
    timeout: 5000,
    children: ({ copied, copy }) => (
      <Button onClick={copy} tint={copied ? 'green' : 'default'}>
        {copied ? '✓ Copied (5s timeout)' : 'Copy with 5s timeout'}
      </Button>
    ),
  },
}

// Example with disabled state
export const Disabled: Story = {
  args: {
    value: '',
    timeout: 2000,
    children: ({ copied, copy }) => (
      <Button
        onClick={copy}
        disabled={!Boolean('') /* Simulates being disabled when value is empty */}
        className='cursor-not-allowed opacity-50'
      >
        {copied ? 'Copied!' : 'Nothing to copy'}
      </Button>
    ),
  },
}
