import type { Meta, StoryObj } from '@storybook/react'
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
    'children': (
      <>
        <IconMicrophone className='size-4' />
        <span>Microphone</span>
      </>
    ),
  },
}

export const IconOnly: Story = {
  args: {
    'variant': 'icon',
    'aria-label': 'Toggle microphone',
    'children': <IconMicrophone />,
  },
  render: args => {
    return (
      <div className='flex items-start gap-2'>
        <Toggle size={'sm'} {...args} />
        <Toggle size={'default'} {...args} />
        <Toggle size={'lg'} {...args} />
      </div>
    )
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outline',
    children: 'Outlined Toggle',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
}

export const Pressed: Story = {
  args: {
    pressed: true,
    children: 'Pressed State',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}
