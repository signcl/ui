import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipProvider } from './tooltip'

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Content to show in the tooltip',
    },
    children: {
      control: false,
      description: 'Element that triggers the tooltip',
    },
    triggerOptions: {
      control: false,
      description: 'Additional options for the trigger element',
    },
    contentOptions: {
      control: false,
      description: 'Additional options for the tooltip content',
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof Tooltip>

// Basic tooltip with text
export const Basic: Story = {
  args: {
    label: 'This is a basic tooltip',
    children: <Button>Hover me</Button>,
  },
}

// Tooltip with rich content
export const RichContent: Story = {
  args: {
    label: (
      <div className='space-y-2'>
        <p className='font-semibold'>Rich Content Tooltip</p>
        <p>This tooltip contains multiple lines and styled content.</p>
        <ul className='list-disc pl-4'>
          <li>Feature one</li>
          <li>Feature two</li>
        </ul>
      </div>
    ),
    children: <Button>Hover for details</Button>,
  },
}

// Different positions
export const Positions: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tooltip label='Top tooltip' contentOptions={{ side: 'top' }}>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip label='Bottom tooltip' contentOptions={{ side: 'bottom' }}>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip label='Left tooltip' contentOptions={{ side: 'left' }}>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip label='Right tooltip' contentOptions={{ side: 'right' }}>
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
}

// Icon with tooltip
export const IconTooltip: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tooltip label='Information tooltip'>
        <span className='cursor-help'>ℹ️</span>
      </Tooltip>
      <Tooltip label='Warning tooltip'>
        <span className='cursor-help'>⚠️</span>
      </Tooltip>
      <Tooltip label='Success tooltip'>
        <span className='cursor-help'>✅</span>
      </Tooltip>
    </div>
  ),
}

// Long content with max width
export const LongContent: Story = {
  args: {
    label:
      'This is a very long tooltip content that will be wrapped to multiple lines when it exceeds the maximum width of the tooltip container. It demonstrates how the tooltip handles lengthy text content.',
    children: <Button>Hover for long content</Button>,
  },
}

// Disabled tooltip
export const Disabled: Story = {
  args: {
    label: 'This tooltip is disabled',
    children: <Button disabled>Disabled button</Button>,
    triggerOptions: {
      disabled: true,
    },
  },
}

// Custom alignment
export const CustomAlignment: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <Tooltip label='Start aligned tooltip' contentOptions={{ align: 'start' }}>
        <Button>Start Aligned</Button>
      </Tooltip>
      <Tooltip label='Center aligned tooltip' contentOptions={{ align: 'center' }}>
        <Button>Center Aligned</Button>
      </Tooltip>
      <Tooltip label='End aligned tooltip' contentOptions={{ align: 'end' }}>
        <Button>End Aligned</Button>
      </Tooltip>
    </div>
  ),
}
