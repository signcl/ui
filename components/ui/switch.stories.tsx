import type { Meta, StoryObj } from '@storybook/nextjs'
import { IconMoon, IconSun } from '@tabler/icons-react'

import { Switch } from '@/components/ui/switch'

// <Pagination
// className='my-2'
// value={pageIndexLiveGuards}
// onPageChange={setPageIndexLiveGuards}
// total={dataLiveGuards?.data?.info ? dataLiveGuards.data.info.page : 0}
// />

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Switch',
  component: Switch,
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
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
  render: args => (
    <div>
      <Switch {...args} />
    </div>
  ),
}

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: args => (
    <div>
      <Switch {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => (
    <div className='flex flex-wrap gap-2'>
      <Switch {...args} />
      <Switch checked {...args} />
    </div>
  ),
}

export const Size: Story = {
  args: {},
  render: args => (
    <div className='flex flex-wrap gap-2'>
      <Switch {...args} size='sm' />
      <Switch {...args} size='md' />
      <Switch {...args} size='lg' />
    </div>
  ),
}

export const Icons: Story = {
  args: {
    onLabel: <IconSun size='.85rem' stroke={1.5} />,
    offLabel: <IconMoon size='.85rem' stroke={1.5} />,
  },
  render: args => (
    <div className='flex flex-wrap gap-2'>
      <Switch {...args} size='lg' />
    </div>
  ),
}
