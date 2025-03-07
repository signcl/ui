import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { ScrollArea } from '@/components/ui/scroll-area'

const content = Array(10)
  .fill(0)
  .map((_, index) => (
    <p key={index}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui minima, voluptates aperiam labore delectus
      consequuntur tempore a sed ullam? Vitae ducimus amet distinctio, fugiat odio accusamus veniam sit hic.
    </p>
  ))

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Scroll Area',
  component: ScrollArea,
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    children: content,
  },
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
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    style: { height: 200, width: 200 },
  },
}

export const AlwaysType: Story = {
  args: {},
  render: () => {
    return (
      <ScrollArea style={{ height: 200, width: 200 }} type='always'>
        <div style={{ width: 600 }}>{content}</div>
      </ScrollArea>
    )
  },
}

export const OnScrollChange: Story = {
  args: {},
  render: () => {
    const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 })
    return (
      <div style={{ padding: 40, maxWidth: 300 }}>
        <ScrollArea style={{ height: 200 }} onScrollPositionChange={onScrollPositionChange}>
          <div style={{ width: 600 }}>{content}</div>
        </ScrollArea>
        <div>
          scroll position x: {scrollPosition.x}, y: {scrollPosition.y}
        </div>
      </div>
    )
  },
}
