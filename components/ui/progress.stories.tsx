import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Progress } from './progress'

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The current progress value (0-100)',
    },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 40,
  },
  render: ({ value }) => (
    <div className='w-[300px]'>
      <Progress value={value} />
    </div>
  ),
}

export const WithLabel: Story = {
  args: {
    value: 65,
  },
  render: ({ value }) => (
    <div className='w-[300px] space-y-2'>
      <div className='flex justify-between text-sm'>
        <span>Progress</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  ),
}

export const CustomSizes: Story = {
  render: () => (
    <div className='w-[300px] space-y-6'>
      <div className='space-y-2'>
        <div className='text-sm'>Small (h-2)</div>
        <Progress value={40} className='h-2' />
      </div>
      <div className='space-y-2'>
        <div className='text-sm'>Default (h-4)</div>
        <Progress value={60} />
      </div>
      <div className='space-y-2'>
        <div className='text-sm'>Large (h-6)</div>
        <Progress value={80} className='h-6' />
      </div>
    </div>
  ),
}
