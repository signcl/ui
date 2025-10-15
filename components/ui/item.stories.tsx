import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  IconChevronDown,
  IconChevronRight,
  IconExternalLink,
  IconPlus,
  IconRosetteDiscountCheck,
  IconShield,
} from '@tabler/icons-react'
import Image from 'next/image'
import * as React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown'

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from './item'

const meta = {
  title: 'UI/Item',
  component: Item,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof Item>

// Demo
export const Demo: Story = {
  render: () => (
    <div className='flex w-full max-w-md flex-col gap-6'>
      <Item variant='outline'>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>A simple item with title and description.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant='outline'>Action</Button>
        </ItemActions>
      </Item>
      <Item variant='outline' size='sm' asChild>
        {/* biome-ignore lint/a11y/useValidAnchor: example link */}
        <a href='#'>
          <ItemMedia>
            <IconRosetteDiscountCheck className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <IconChevronRight className='size-4' />
          </ItemActions>
        </a>
      </Item>
    </div>
  ),
}

// Variants
export const Variants: Story = {
  render: () => (
    <div className='flex flex-col gap-6'>
      <Item>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>Standard styling with subtle background and borders.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant='outline'>Open</Button>
        </ItemActions>
      </Item>
      <Item variant='outline'>
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>Outlined style with clear borders and transparent background.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant='outline'>Open</Button>
        </ItemActions>
      </Item>
      <Item variant='muted'>
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>Subdued appearance with muted colors for secondary content.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant='solid'>Open</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

// Size
export const Size: Story = {
  render: () => (
    <div className='flex w-full max-w-md flex-col gap-6'>
      <Item variant='outline'>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>A simple item with title and description.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant='outline' size='sm'>
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant='outline' size='sm' asChild>
        {/* biome-ignore lint/a11y/useValidAnchor: example link */}
        <a href='#'>
          <ItemMedia>
            <IconRosetteDiscountCheck className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <IconChevronRight className='size-4' />
          </ItemActions>
        </a>
      </Item>
    </div>
  ),
}

// Icon
export const Icon: Story = {
  render: () => (
    <div className='flex w-full max-w-lg flex-col gap-6'>
      <Item variant='outline'>
        <ItemMedia variant='icon'>
          <IconShield />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security Alert</ItemTitle>
          <ItemDescription>New login detected from unknown device.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size='sm' variant='outline'>
            Review
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

// Avatar
export const AvatarExample: Story = {
  render: () => (
    <div className='flex w-full max-w-lg flex-col gap-6'>
      <Item variant='outline'>
        <ItemMedia>
          <Avatar className='size-10'>
            <AvatarImage src='https://github.com/evilrabbit.png' />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size='icon-sm' variant='outline' className='rounded-full' aria-label='Invite'>
            <IconPlus />
          </Button>
        </ItemActions>
      </Item>
      <Item variant='outline'>
        <ItemMedia>
          <div className='*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale'>
            <Avatar className='hidden sm:flex'>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className='hidden sm:flex'>
              <AvatarImage src='https://github.com/maxleiter.png' alt='@maxleiter' />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src='https://github.com/evilrabbit.png' alt='@evilrabbit' />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>No Team Members</ItemTitle>
          <ItemDescription>Invite your team to collaborate on this project.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant='outline'>Invite</Button>
        </ItemActions>
      </Item>
    </div>
  ),
}

// Image
export const ImageExample: Story = {
  render: () => {
    const music = [
      {
        title: 'Midnight City Lights',
        artist: 'Neon Dreams',
        album: 'Electric Nights',
        duration: '3:45',
      },
      {
        title: 'Coffee Shop Conversations',
        artist: 'The Morning Brew',
        album: 'Urban Stories',
        duration: '4:05',
      },
      {
        title: 'Digital Rain',
        artist: 'Cyber Symphony',
        album: 'Binary Beats',
        duration: '3:30',
      },
    ]

    return (
      <div className='flex w-full max-w-md flex-col gap-6'>
        <ItemGroup className='gap-4'>
          {music.map(song => (
            <Item key={song.title} variant='outline' asChild role='listitem'>
              {/* biome-ignore lint/a11y/useValidAnchor: example link */}
              <a href='#'>
                <ItemMedia variant='image'>
                  <Image
                    src={`https://avatar.vercel.sh/${song.title}`}
                    alt={song.title}
                    width={32}
                    height={32}
                    className='object-cover grayscale'
                  />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className='line-clamp-1'>
                    {song.title} - <span className='text-muted-foreground'>{song.album}</span>
                  </ItemTitle>
                  <ItemDescription>{song.artist}</ItemDescription>
                </ItemContent>
                <ItemContent className='flex-none text-center'>
                  <ItemDescription>{song.duration}</ItemDescription>
                </ItemContent>
              </a>
            </Item>
          ))}
        </ItemGroup>
      </div>
    )
  },
}

// Group
export const Group: Story = {
  render: () => {
    const people = [
      {
        username: 'shadcn',
        avatar: 'https://github.com/shadcn.png',
        email: 'shadcn@vercel.com',
      },
      {
        username: 'maxleiter',
        avatar: 'https://github.com/maxleiter.png',
        email: 'maxleiter@vercel.com',
      },
      {
        username: 'evilrabbit',
        avatar: 'https://github.com/evilrabbit.png',
        email: 'evilrabbit@vercel.com',
      },
    ]

    return (
      <div className='flex w-full max-w-md flex-col gap-6'>
        <ItemGroup>
          {people.map((person, index) => (
            <React.Fragment key={person.username}>
              <Item>
                <ItemMedia>
                  <Avatar>
                    <AvatarImage src={person.avatar} className='grayscale' />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className='gap-1'>
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription>{person.email}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button variant='ghost' size='icon' className='rounded-full'>
                    <IconPlus />
                  </Button>
                </ItemActions>
              </Item>
              {index !== people.length - 1 && <ItemSeparator />}
            </React.Fragment>
          ))}
        </ItemGroup>
      </div>
    )
  },
}

// Header
export const Header: Story = {
  render: () => {
    const models = [
      {
        name: 'v0-1.5-sm',
        description: 'Everyday tasks and UI generation.',
        image: 'https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop',
        credit: 'Valeria Reverdo on Unsplash',
      },
      {
        name: 'v0-1.5-lg',
        description: 'Advanced thinking or reasoning.',
        image: 'https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop',
        credit: 'Michael Oeser on Unsplash',
      },
      {
        name: 'v0-2.0-mini',
        description: 'Open Source model for everyone.',
        image: 'https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop',
        credit: 'Cherry Laithang on Unsplash',
      },
    ]

    return (
      <div className='flex w-full max-w-xl flex-col gap-6'>
        <ItemGroup className='grid grid-cols-3 gap-4'>
          {models.map(model => (
            <Item key={model.name} variant='outline'>
              <ItemHeader>
                <Image
                  src={model.image}
                  alt={model.name}
                  width={128}
                  height={128}
                  className='aspect-square w-full rounded-sm object-cover'
                />
              </ItemHeader>
              <ItemContent>
                <ItemTitle>{model.name}</ItemTitle>
                <ItemDescription>{model.description}</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
      </div>
    )
  },
}

// Link
export const Link: Story = {
  render: () => (
    <div className='flex w-full max-w-md flex-col gap-4'>
      <Item asChild>
        {/* biome-ignore lint/a11y/useValidAnchor: example link */}
        <a href='#'>
          <ItemContent>
            <ItemTitle>Visit our documentation</ItemTitle>
            <ItemDescription>Learn how to get started with our components.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <IconChevronRight className='size-4' />
          </ItemActions>
        </a>
      </Item>
      <Item variant='outline' asChild>
        {/* biome-ignore lint/a11y/useValidAnchor: example link */}
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <ItemContent>
            <ItemTitle>External resource</ItemTitle>
            <ItemDescription>Opens in a new tab with security attributes.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <IconExternalLink className='size-4' />
          </ItemActions>
        </a>
      </Item>
    </div>
  ),
}

// Dropdown
export const Dropdown: Story = {
  render: () => {
    const people = [
      {
        username: 'shadcn',
        avatar: 'https://github.com/shadcn.png',
        email: 'shadcn@vercel.com',
      },
      {
        username: 'maxleiter',
        avatar: 'https://github.com/maxleiter.png',
        email: 'maxleiter@vercel.com',
      },
      {
        username: 'evilrabbit',
        avatar: 'https://github.com/evilrabbit.png',
        email: 'evilrabbit@vercel.com',
      },
    ]

    return (
      <div className='flex min-h-64 w-full max-w-md flex-col items-center gap-6'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='w-fit'>
              Select <IconChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-72 [--radius:0.65rem]' align='end'>
            {people.map(person => (
              <DropdownMenuItem key={person.username} className='p-0'>
                <Item size='sm' className='w-full p-2'>
                  <ItemMedia>
                    <Avatar className='size-8'>
                      <AvatarImage src={person.avatar} className='grayscale' />
                      <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className='gap-0.5'>
                    <ItemTitle>{person.username}</ItemTitle>
                    <ItemDescription>{person.email}</ItemDescription>
                  </ItemContent>
                </Item>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
}
