import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './select'

// Define the meta information for the component
const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // decorators: [
  //   Story => (
  //     <div className='min-h-[350px] w-[300px] p-4'>
  //       <Story />
  //     </div>
  //   ),
  // ],
}

export default meta

// Define the Story type
type Story = StoryObj<typeof Select>

// Basic usage example
export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='orange'>Orange</SelectItem>
          <SelectItem value='grape'>Grape</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <Select open>
      <SelectTrigger>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='orange'>Orange</SelectItem>
          <SelectItem value='grape'>Grape</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const DefaultOpenSelected: Story = {
  render: () => (
    <Select open value='banana'>
      <SelectTrigger>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='orange'>Orange</SelectItem>
          <SelectItem value='grape'>Grape</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

// Example with multiple groups
export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder='Select a food item' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='orange'>Orange</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value='carrot'>Carrot</SelectItem>
          <SelectItem value='broccoli'>Broccoli</SelectItem>
          <SelectItem value='spinach'>Spinach</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

// Example with disabled items
export const WithDisabledItems: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder='Select an option' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          <SelectItem value='option1'>Option 1</SelectItem>
          <SelectItem value='option2' disabled>
            Option 2 (Disabled)
          </SelectItem>
          <SelectItem value='option3'>Option 3</SelectItem>
          <SelectItem value='option4' disabled>
            Option 4 (Disabled)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

// Example with plain items (no indicators)
export const PlainItems: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder='Select an option' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Plain Items</SelectLabel>
          <SelectItem value='option1' plain>
            Option 1
          </SelectItem>
          <SelectItem value='option2' plain>
            Option 2
          </SelectItem>
          <SelectItem value='option3' plain>
            Option 3
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

// Example showcasing controlled behavior
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder='Select a color' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Colors</SelectLabel>
            <SelectItem value='red'>Red</SelectItem>
            <SelectItem value='blue'>Blue</SelectItem>
            <SelectItem value='green'>Green</SelectItem>
            <SelectItem value='yellow'>Yellow</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  },
}
