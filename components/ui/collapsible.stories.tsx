import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconChevronDown } from '@tabler/icons-react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'

const meta: Meta<typeof Collapsible> = {
  title: 'UI/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls the open state of the collapsible',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'The open state when initially rendered',
    },
    onOpenChange: {
      description: 'Event handler called when the open state changes',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, prevents the user from interacting with the collapsible',
    },
  },
}

export default meta
type Story = StoryObj<typeof Collapsible>

/**
 * Basic example showing a simple collapsible component with default styling.
 */
export const Basic: Story = {
  render: () => (
    <Collapsible className='w-full max-w-md rounded-md border'>
      <div className='flex items-center justify-between p-4'>
        <h4>Collapsible trigger</h4>
        <CollapsibleTrigger>
          <IconChevronDown className='h-4 w-4' />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className='border-t p-4'>
        <p>This content can be collapsed and expanded when clicking the trigger.</p>
      </CollapsibleContent>
    </Collapsible>
  ),
}

/**
 * Controlled example showing how to manage the open state with React state.
 */
export const Controlled: Story = {
  render: () => {
    // Use React hooks in the render function
    const ControlledExample = () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <div className='w-full max-w-md'>
          <div className='mb-2'>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</button>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className='rounded-md border'>
            <div className='flex items-center justify-between p-4'>
              <span>State: {isOpen ? 'Open' : 'Closed'}</span>
              <CollapsibleTrigger>
                <IconChevronDown className='h-4 w-4' />
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className='border-t p-4'>
              <p>This collapsible component is controlled with React state.</p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      )
    }

    return <ControlledExample />
  },
}

/**
 * Example showing how to use the defaultOpen prop.
 */
export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen={true} className='w-full max-w-md rounded-md border'>
      <div className='flex items-center justify-between p-4'>
        <h4>Default Open Collapsible</h4>
        <CollapsibleTrigger>
          <IconChevronDown className='h-4 w-4' />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className='border-t p-4'>
        <p>This content starts in the open state because of the defaultOpen prop.</p>
      </CollapsibleContent>
    </Collapsible>
  ),
}

/**
 * Example with nested collapsibles.
 */
export const Nested: Story = {
  render: () => (
    <Collapsible className='w-full max-w-md rounded-md border'>
      <div className='flex items-center justify-between p-4'>
        <h4>Parent Collapsible</h4>
        <CollapsibleTrigger>
          <IconChevronDown className='h-4 w-4' />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className='border-t p-4'>
        <p className='mb-4'>This is the parent collapsible content.</p>

        <Collapsible className='rounded-md border'>
          <div className='flex items-center justify-between p-4'>
            <h4>Nested Collapsible</h4>
            <CollapsibleTrigger>
              <IconChevronDown className='h-4 w-4' />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='border-t p-4'>
            <p>This is nested inside the parent collapsible.</p>
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  ),
}
