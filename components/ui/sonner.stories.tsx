import { toast } from 'sonner'
import type { Meta, StoryObj } from '@storybook/react'

import { Toaster } from '@/components/ui/sonner'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Sonner',
  component: Toaster,
  // argTypes: {
  //   children: {
  //     control: 'text',
  //   },
  // },
  // args: {
  //   children: content,
  // },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onSelect: fn() },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: () => {
    const promise = () => new Promise<{ name: string }>(resolve => setTimeout(() => resolve({ name: 'Sonner' }), 3000))

    return (
      <div className='size-[400px]'>
        <Toaster />
        <h3>Types</h3>
        <div className='flex flex-wrap gap-2'>
          <button
            onClick={() =>
              toast.message('Event has been created', {
                description: 'Monday, January 3rd at 6:00pm',
              })
            }
          >
            Description
          </button>
          <button onClick={() => toast.success('Event has been created')}>Success</button>
          <button onClick={() => toast.info('Be at the area 10 minutes before the event time')}>Info</button>
          <button
            onClick={() =>
              toast.warning('Event start time cannot be earlier than 8am', {
                duration: 3000,
              })
            }
          >
            Warning
          </button>
          <button onClick={() => toast.error('Event has not been created')}>Error</button>
          <button
            onClick={() =>
              toast('Event has been created', {
                action: {
                  label: 'Undo',
                  onClick: () => console.log('Undo'),
                },
              })
            }
          >
            Action
          </button>
          <button
            onClick={() =>
              toast.promise(promise, {
                loading: 'Loading...',
                success: data => {
                  return `${data.name} toast has been added`
                },
                error: 'Error',
              })
            }
          >
            Promise
          </button>
        </div>

        <h3>Position</h3>
        <div className='flex flex-wrap gap-2'>
          <button onClick={() => toast('top-left', { position: 'top-left' })}>top-left</button>
          <button onClick={() => toast('top-center', { position: 'top-center' })}>top-center</button>
          <button onClick={() => toast('top-right', { position: 'top-right' })}>top-right</button>
          <button onClick={() => toast('bottom-left', { position: 'bottom-left' })}>bottom-left</button>
          <button onClick={() => toast('bottom-center', { position: 'bottom-center' })}>bottom-center</button>
          <button onClick={() => toast('bottom-right', { position: 'bottom-right' })}>bottom-right</button>
        </div>
      </div>
    )
  },
}
