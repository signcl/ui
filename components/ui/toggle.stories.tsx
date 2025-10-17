import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconMicrophone } from '@tabler/icons-react'

import { Toggle } from './toggle'

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: {
    children: 'Toggle',
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {}

export const WithIcon: Story = {
  args: {
    'aria-label': 'Toggle microphone',
    children: (
      <>
        <IconMicrophone className='size-4' />
        <span>Microphone</span>
      </>
    ),
  },
  render: args => {
    return (
      <div className='flex items-start gap-2'>
        <Toggle size={'sm'} {...args} />
        <Toggle size={'default'} {...args} />
        <Toggle size={'lg'} {...args} />
        <Toggle variant={'outline'} size={'sm'} {...args} />
        <Toggle variant={'outline'} size={'default'} {...args} />
        <Toggle variant={'outline'} size={'lg'} {...args} />
      </div>
    )
  },
}

export const IconOnly: Story = {
  args: {
    'aria-label': 'Toggle microphone',
    children: <IconMicrophone />,
  },
  render: args => {
    return (
      <div className='flex items-start gap-2'>
        <Toggle size={'icon-sm'} {...args} />
        <Toggle size={'icon'} {...args} />
        <Toggle size={'icon-lg'} {...args} />
        <Toggle variant={'outline'} size={'icon-sm'} {...args} />
        <Toggle variant={'outline'} size={'icon'} {...args} />
        <Toggle variant={'outline'} size={'icon-lg'} {...args} />
      </div>
    )
  },
}

export const Pressed: Story = {
  args: {
    pressed: true,
    children: 'Pressed State',
  },
  render: args => {
    return (
      <div className='flex items-start gap-2'>
        <Toggle size={'sm'} {...args} />
        <Toggle size={'default'} {...args} />
        <Toggle size={'lg'} {...args} />
        <Toggle variant={'outline'} size={'sm'} {...args} />
        <Toggle variant={'outline'} size={'default'} {...args} />
        <Toggle variant={'outline'} size={'lg'} {...args} />
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
  render: args => {
    return (
      <div className='flex items-start gap-2'>
        <Toggle size={'sm'} {...args} />
        <Toggle size={'default'} {...args} />
        <Toggle size={'lg'} {...args} />
        <Toggle variant={'outline'} size={'sm'} {...args} />
        <Toggle variant={'outline'} size={'default'} {...args} />
        <Toggle variant={'outline'} size={'lg'} {...args} />
      </div>
    )
  },
}
