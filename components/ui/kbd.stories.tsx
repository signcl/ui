import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconSearch } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip'

import { Kbd, KbdGroup } from './kbd'

const meta = {
  title: 'UI/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    children: {
      control: false,
      description: 'Content of the keyboard key',
    },
  },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof Kbd>

// Basic demo
export const Demo: Story = {
  render: () => (
    <div className='flex flex-col items-center gap-4'>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  ),
}

// Group example with text
export const Group: Story = {
  render: () => (
    <div className='flex flex-col items-center gap-4'>
      <p className='text-muted-foreground text-sm'>
        Use{' '}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{' '}
        to open the command palette
      </p>
    </div>
  ),
}

// Button example
export const ButtonExample: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-4'>
      <Button variant='outline' className='pr-2'>
        Accept <Kbd>⏎</Kbd>
      </Button>
      <Button variant='outline' className='pr-2'>
        Cancel <Kbd>Esc</Kbd>
      </Button>
    </div>
  ),
}

// Tooltip example
export const TooltipExample: Story = {
  render: () => (
    <TooltipProvider>
      <div className='flex flex-wrap gap-4'>
        <ButtonGroup>
          <Tooltip
            label={
              <div className='flex items-center gap-2'>
                Save Changes <Kbd>S</Kbd>
              </div>
            }
          >
            <Button size='sm' variant='outline'>
              Save
            </Button>
          </Tooltip>
          <Tooltip
            label={
              <div className='flex items-center gap-2'>
                Print Document{' '}
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <Kbd>P</Kbd>
                </KbdGroup>
              </div>
            }
          >
            <Button size='sm' variant='outline'>
              Print
            </Button>
          </Tooltip>
        </ButtonGroup>
      </div>
    </TooltipProvider>
  ),
}

// Input group example
export const InputGroupExample: Story = {
  render: () => (
    <div className='flex w-full max-w-xs flex-col gap-6'>
      <InputGroup>
        <InputGroupInput placeholder='Search...' />
        <InputGroupAddon>
          <IconSearch />
        </InputGroupAddon>
        <InputGroupAddon align='inline-end'>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}
