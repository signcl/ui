import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconBold,
  IconItalic,
  IconLayoutCards,
  IconLayoutGrid,
  IconLayoutList,
  IconStar,
  IconStrikethrough,
  IconUnderline,
} from '@tabler/icons-react'
import React from 'react'

import { Label } from '@/components/ui/label'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const meta = {
  title: 'UI/Toggle Group',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    variant: 'default',
    size: 'default',
    type: 'single',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    type: 'single',
    defaultValue: 'center',
    size: 'icon',
  },
  render: args => (
    <div className='flex flex-col items-center space-y-4'>
      <Label htmlFor='text-alignment'>Text Alignment</Label>
      <ToggleGroup {...args} id='text-alignment' aria-label='Text alignment'>
        <ToggleGroupItem value='left' aria-label='Left aligned'>
          <IconAlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Center aligned'>
          <IconAlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Right aligned'>
          <IconAlignRight />
        </ToggleGroupItem>
        <ToggleGroupItem value='justify' aria-label='Justified'>
          <IconAlignJustified />
        </ToggleGroupItem>
      </ToggleGroup>
      <Label htmlFor='text-alignment'>Text Alignment Outline</Label>
      <ToggleGroup {...args} id='text-alignment' variant={'outline'} aria-label='Text alignment'>
        <ToggleGroupItem value='left' aria-label='Left aligned'>
          <IconAlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Center aligned'>
          <IconAlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Right aligned'>
          <IconAlignRight />
        </ToggleGroupItem>
        <ToggleGroupItem value='justify' aria-label='Justified'>
          <IconAlignJustified />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
    size: 'icon',
    defaultValue: ['bold'],
  },
  render: args => (
    <div className='flex flex-col items-center space-y-4'>
      <Label htmlFor='text-formatting'>Text Formatting</Label>
      <ToggleGroup {...args} id='text-formatting' aria-label='Text formatting'>
        <ToggleGroupItem variant={'default'} value='bold' aria-label='Bold'>
          <IconBold />
        </ToggleGroupItem>
        <ToggleGroupItem variant={'default'} value='italic' aria-label='Italic'>
          <IconItalic />
        </ToggleGroupItem>
        <ToggleGroupItem variant={'default'} value='underline' aria-label='Underline'>
          <IconUnderline />
        </ToggleGroupItem>
        <ToggleGroupItem variant={'default'} value='strikethrough' aria-label='Strikethrough'>
          <IconStrikethrough />
        </ToggleGroupItem>
      </ToggleGroup>
      <Label htmlFor='text-formatting'>Text Formatting Outline</Label>
      <ToggleGroup {...args} id='text-formatting' variant={'outline'} aria-label='Text formatting'>
        <ToggleGroupItem value='bold' aria-label='Bold'>
          <IconBold />
        </ToggleGroupItem>
        <ToggleGroupItem value='italic' aria-label='Italic'>
          <IconItalic />
        </ToggleGroupItem>
        <ToggleGroupItem value='underline' aria-label='Underline'>
          <IconUnderline />
        </ToggleGroupItem>
        <ToggleGroupItem value='strikethrough' aria-label='Strikethrough'>
          <IconStrikethrough />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col space-y-8'>
      <div className='flex flex-col items-center space-y-2'>
        <Label>Small</Label>
        <ToggleGroup type='single' size='icon-sm' defaultValue='list'>
          <ToggleGroupItem value='list'>
            <IconLayoutList />
          </ToggleGroupItem>
          <ToggleGroupItem value='grid'>
            <IconLayoutGrid />
          </ToggleGroupItem>
          <ToggleGroupItem value='cards'>
            <IconLayoutCards />
          </ToggleGroupItem>
        </ToggleGroup>

        <Label>Small Outline</Label>
        <ToggleGroup type='single' size='icon-sm' variant={'outline'} defaultValue='list'>
          <ToggleGroupItem value='list'>
            <IconLayoutList />
          </ToggleGroupItem>
          <ToggleGroupItem value='grid'>
            <IconLayoutGrid />
          </ToggleGroupItem>
          <ToggleGroupItem value='cards'>
            <IconLayoutCards />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className='flex flex-col items-center space-y-2'>
        <Label>Default</Label>
        <ToggleGroup type='single' size='icon' defaultValue='list'>
          <ToggleGroupItem value='list'>
            <IconLayoutList />
          </ToggleGroupItem>
          <ToggleGroupItem value='grid'>
            <IconLayoutGrid />
          </ToggleGroupItem>
          <ToggleGroupItem value='cards'>
            <IconLayoutCards />
          </ToggleGroupItem>
        </ToggleGroup>

        <Label>Default Outline</Label>
        <ToggleGroup type='single' size='icon' variant={'outline'} defaultValue='list'>
          <ToggleGroupItem value='list'>
            <IconLayoutList />
          </ToggleGroupItem>
          <ToggleGroupItem value='grid'>
            <IconLayoutGrid />
          </ToggleGroupItem>
          <ToggleGroupItem value='cards'>
            <IconLayoutCards />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className='flex flex-col items-center space-y-2'>
        <Label>Large</Label>
        <ToggleGroup type='single' size='icon-lg' defaultValue='list'>
          <ToggleGroupItem value='list'>
            <IconLayoutList />
          </ToggleGroupItem>
          <ToggleGroupItem value='grid'>
            <IconLayoutGrid />
          </ToggleGroupItem>
          <ToggleGroupItem value='cards'>
            <IconLayoutCards />
          </ToggleGroupItem>
        </ToggleGroup>

        <Label>Large Outline</Label>
        <ToggleGroup type='single' size='icon-lg' variant={'outline'} defaultValue='list'>
          <ToggleGroupItem value='list'>
            <IconLayoutList />
          </ToggleGroupItem>
          <ToggleGroupItem value='grid'>
            <IconLayoutGrid />
          </ToggleGroupItem>
          <ToggleGroupItem value='cards'>
            <IconLayoutCards />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
}

export const WithState: Story = {
  render: () => {
    const [value, setValue] = React.useState('medium')

    return (
      <div className='flex flex-col items-center space-y-4'>
        <Label htmlFor='rating'>Rating</Label>
        <ToggleGroup
          type='single'
          id='rating'
          value={value}
          onValueChange={value => {
            if (value) setValue(value)
          }}
          aria-label='Rating'
        >
          <ToggleGroupItem value='low' aria-label='Low rating'>
            <IconStar className='mr-1 size-4' />
            Low
          </ToggleGroupItem>
          <ToggleGroupItem value='medium' aria-label='Medium rating'>
            <IconStar className='mr-1 size-4' />
            Medium
          </ToggleGroupItem>
          <ToggleGroupItem value='high' aria-label='High rating'>
            <IconStar className='mr-1 size-4' />
            High
          </ToggleGroupItem>
        </ToggleGroup>
        <div className='text-fg/70 mt-2 text-sm'>
          Selected: <span className='text-fg font-medium'>{value}</span>
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    type: 'single',
    defaultValue: 'center',
    disabled: true,
  },
  render: args => (
    <div className='flex flex-col items-center space-y-4'>
      <Label htmlFor='text-alignment-disabled'>Text Alignment (Disabled)</Label>
      <ToggleGroup {...args} size={'icon-lg'} id='text-alignment-disabled' aria-label='Text alignment'>
        <ToggleGroupItem value='left' aria-label='Left aligned'>
          <IconAlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Center aligned'>
          <IconAlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' aria-label='Right aligned'>
          <IconAlignRight />
        </ToggleGroupItem>
      </ToggleGroup>

      <Label htmlFor='partially-disabled' className='mt-4'>
        Partially Disabled
      </Label>
      <ToggleGroup
        size={'icon-lg'}
        type='single'
        id='partially-disabled'
        defaultValue='center'
        aria-label='Text alignment'
      >
        <ToggleGroupItem value='left' aria-label='Left aligned'>
          <IconAlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value='center' aria-label='Center aligned'>
          <IconAlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value='right' disabled aria-label='Right aligned'>
          <IconAlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
}
