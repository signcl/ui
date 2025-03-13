import type { Meta, StoryObj } from '@storybook/react'
import { IconCalendar, IconUser } from '@tabler/icons-react'

import { Avatar, AvatarFallback, AvatarImage } from './avatar' // Adjust import path as needed
import { Button } from './button' // Adjust import path as needed
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'

// Adjust import path as needed

const meta = {
  title: 'UI/Hover Card',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: { control: 'boolean' },
    openDelay: { control: { type: 'number', min: 0, max: 1000, step: 100 } },
    closeDelay: { control: { type: 'number', min: 0, max: 1000, step: 100 } },
  },
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='link'>Hover over me</Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='flex justify-between space-x-4'>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>HoverCard Component</h4>
            <p className='text-sm'>
              This component displays additional content when the user hovers over a trigger element.
            </p>
            <div className='flex items-center pt-2'>
              <IconCalendar className='mr-2 h-4 w-4 opacity-70' />
              <span className='text-xs text-muted-foreground'>Added March 2024</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href='#'
          className='inline-flex items-center justify-center text-sm font-medium underline underline-offset-4 hover:text-primary'
        >
          @johndoe
        </a>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='flex justify-between space-x-4'>
          <Avatar>
            <AvatarImage src='/api/placeholder/150/150' />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>John Doe</h4>
            <p className='text-sm'>Software developer and UI/UX enthusiast. Building awesome web experiences.</p>
            <div className='flex items-center pt-2'>
              <IconCalendar className='mr-2 h-4 w-4 opacity-70' />
              <span className='text-xs text-muted-foreground'>Joined December 2023</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const Placement: Story = {
  render: () => (
    <div className='flex gap-8 flex-wrap justify-center'>
      {(['top', 'right', 'bottom', 'left'] as const).map(side => (
        <HoverCard key={side}>
          <HoverCardTrigger asChild>
            <Button variant='outline'>{side}</Button>
          </HoverCardTrigger>
          <HoverCardContent side={side} className='w-64'>
            <div className='space-y-2'>
              <h4 className='text-sm font-semibold capitalize'>{side} Placement</h4>
              <p className='text-sm'>This card appears on the {side} side of the trigger element.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
}

export const CustomWidth: Story = {
  render: () => (
    <div className='flex space-x-4'>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant='outline'>Narrow</Button>
        </HoverCardTrigger>
        <HoverCardContent className='w-48'>
          <div className='space-y-2'>
            <h4 className='text-sm font-semibold'>Narrow Card</h4>
            <p className='text-sm'>A narrow hover card with less width.</p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant='outline'>Wide</Button>
        </HoverCardTrigger>
        <HoverCardContent className='w-96'>
          <div className='space-y-2'>
            <h4 className='text-sm font-semibold'>Wide Card</h4>
            <p className='text-sm'>
              A wider hover card with more space for content. This can be useful when you need to display more
              information or larger elements.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
}
