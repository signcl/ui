import type { Meta, StoryObj } from '@storybook/react'
import { IconUser } from '@tabler/icons-react'

import { Avatar, AvatarFallback, AvatarImage } from './avatar'

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  decorators: [
    Story => (
      <div className='flex items-center justify-center p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='https://placehold.co/200x200' alt='Avatar' />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='/non-existent-image.jpg' alt='Avatar' />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='/non-existent-image.jpg' alt='Avatar' />
      <AvatarFallback>
        <IconUser className='h-5 w-5' />
      </AvatarFallback>
    </Avatar>
  ),
}

export const CustomSizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Avatar className='h-6 w-6'>
        <AvatarImage src='https://placehold.co/100x100' alt='Small avatar' />
        <AvatarFallback>XS</AvatarFallback>
      </Avatar>
      <Avatar className='h-8 w-8'>
        <AvatarImage src='https://placehold.co/100x100' alt='Small avatar' />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src='https://placehold.co/100x100' alt='Default avatar' />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className='h-12 w-12'>
        <AvatarImage src='https://placehold.co/100x100' alt='Large avatar' />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar className='h-16 w-16'>
        <AvatarImage src='https://placehold.co/100x100' alt='Extra large avatar' />
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Avatar>
        <AvatarFallback className='bg-red-50 text-red-600'>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className='bg-blue-50 text-blue-600'>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className='bg-green-50 text-green-600'>CK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className='bg-yellow-50 text-yellow-600'>TJ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className='bg-purple-50 text-purple-600'>RW</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const AvatarGroup: Story = {
  render: () => (
    <div className='flex items-center -space-x-2'>
      <Avatar className='border-2'>
        <AvatarImage src='https://placehold.co/100x100' alt='Avatar 1' />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className='border-2'>
        <AvatarImage src='https://placehold.co/100x100' alt='Avatar 2' />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className='border-2'>
        <AvatarImage src='https://placehold.co/100x100' alt='Avatar 3' />
        <AvatarFallback>CK</AvatarFallback>
      </Avatar>
      <Avatar className='border-2'>
        <AvatarImage src='https://placehold.co/100x100' alt='Avatar 4' />
        <AvatarFallback>TJ</AvatarFallback>
      </Avatar>
      <Avatar className='border-2'>
        <AvatarFallback>+5</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const CustomShapes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Avatar className='rounded-full'>
        <AvatarImage src='https://placehold.co/100x100' alt='Circle avatar' />
        <AvatarFallback>CR</AvatarFallback>
      </Avatar>
      <Avatar className='rounded-lg'>
        <AvatarImage src='https://placehold.co/100x100' alt='Rounded square avatar' />
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
      <Avatar className='rounded-md'>
        <AvatarImage src='https://placehold.co/100x100' alt='Slightly rounded avatar' />
        <AvatarFallback>SR</AvatarFallback>
      </Avatar>
      <Avatar className='rounded-none'>
        <AvatarImage src='https://placehold.co/100x100' alt='Square avatar' />
        <AvatarFallback>SQ</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <div className='relative'>
        <Avatar>
          <AvatarImage src='https://placehold.co/100x100' alt='Avatar with online badge' />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <span className='absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white' />
      </div>
      <div className='relative'>
        <Avatar>
          <AvatarImage src='https://placehold.co/100x100' alt='Avatar with busy badge' />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <span className='absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-white' />
      </div>
      <div className='relative'>
        <Avatar>
          <AvatarImage src='https://placehold.co/100x100' alt='Avatar with away badge' />
          <AvatarFallback>CK</AvatarFallback>
        </Avatar>
        <span className='absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-yellow-500 ring-2 ring-white' />
      </div>
    </div>
  ),
}

export const WithDelayedFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='/non-existent-image.jpg' alt='Avatar' />
      <AvatarFallback delayMs={1000}>JD</AvatarFallback>
    </Avatar>
  ),
}
