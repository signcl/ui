import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconList, IconPhoto, IconSettings } from '@tabler/icons-react'

import { SegmentedControl, SegmentedControlItem } from '@/components/ui/segmented-control'

const meta = {
  title: 'Components/Segmented Control',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'single',
    defaultValue: 'center',
    children: (
      <>
        <SegmentedControlItem value='left'>Left</SegmentedControlItem>
        <SegmentedControlItem value='center'>Center</SegmentedControlItem>
        <SegmentedControlItem value='right'>Right</SegmentedControlItem>
      </>
    ),
  },
}

export const Small: Story = {
  args: {
    type: 'single',
    defaultValue: 'center',
    size: 'sm',
    children: (
      <>
        <SegmentedControlItem value='left'>Left</SegmentedControlItem>
        <SegmentedControlItem value='center'>Center</SegmentedControlItem>
        <SegmentedControlItem value='right'>Right</SegmentedControlItem>
      </>
    ),
  },
}

export const Large: Story = {
  args: {
    type: 'single',
    defaultValue: 'center',
    size: 'lg',
    children: (
      <>
        <SegmentedControlItem value='left'>Left</SegmentedControlItem>
        <SegmentedControlItem value='center'>Center</SegmentedControlItem>
        <SegmentedControlItem value='right'>Right</SegmentedControlItem>
      </>
    ),
  },
}

export const DefaultTint: Story = {
  args: {
    type: 'single',
    defaultValue: 'default',
    tint: 'default',
    children: (
      <>
        <SegmentedControlItem value='default'>Default</SegmentedControlItem>
        <SegmentedControlItem value='option'>Option</SegmentedControlItem>
      </>
    ),
  },
}

export const AccentTint: Story = {
  args: {
    type: 'single',
    defaultValue: 'accent',
    tint: 'accent',
    children: (
      <>
        <SegmentedControlItem value='accent'>Accent</SegmentedControlItem>
        <SegmentedControlItem value='option'>Option</SegmentedControlItem>
      </>
    ),
  },
}

export const WithTextAndIcons: Story = {
  args: {
    type: 'single',
    defaultValue: 'list',
    children: (
      <>
        <SegmentedControlItem value='list'>
          <IconList size='1rem' />
          <span>List</span>
        </SegmentedControlItem>
        <SegmentedControlItem value='photo'>
          <IconPhoto size='1rem' />
          <span>Photos</span>
        </SegmentedControlItem>
        <SegmentedControlItem value='settings'>
          <IconSettings size='1rem' />
          <span>Settings</span>
        </SegmentedControlItem>
      </>
    ),
  },
}

export const WithIconsOnly: Story = {
  args: {
    type: 'single',
    defaultValue: 'list',
    children: (
      <>
        <SegmentedControlItem value='list'>
          <IconList size='1rem' />
        </SegmentedControlItem>
        <SegmentedControlItem value='photo'>
          <IconPhoto size='1rem' />
        </SegmentedControlItem>
        <SegmentedControlItem value='settings'>
          <IconSettings size='1rem' />
        </SegmentedControlItem>
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    type: 'single',
    defaultValue: 'center',
    children: (
      <>
        <SegmentedControlItem value='left'>Left</SegmentedControlItem>
        <SegmentedControlItem value='center'>Center</SegmentedControlItem>
        <SegmentedControlItem value='right' disabled>
          Right
        </SegmentedControlItem>
      </>
    ),
  },
}

export const Controlled: Story = {
  args: {
    type: 'single',
    value: 'option1',
    children: (
      <>
        <SegmentedControlItem value='option1'>Option 1</SegmentedControlItem>
        <SegmentedControlItem value='option2'>Option 2</SegmentedControlItem>
        <SegmentedControlItem value='option3'>Option 3</SegmentedControlItem>
      </>
    ),
  },
}
