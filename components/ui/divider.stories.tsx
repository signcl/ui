import type { Meta, StoryObj } from '@storybook/nextjs'

import { Divider } from '@/components/ui/divider'

// <Pagination
// className='my-2'
// value={pageIndexLiveGuards}
// onPageChange={setPageIndexLiveGuards}
// total={dataLiveGuards?.data?.info ? dataLiveGuards.data.info.page : 0}
// />

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Divider',
  component: Divider,
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
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Default',
  },
  render: args => (
    <div className='w-48'>
      <Divider {...args} />
    </div>
  ),
}

export const CustomElement: Story = {
  args: {
    label: <div className='text-lg'>Custom Element</div>,
  },
  render: args => (
    <div className='w-48'>
      <Divider {...args} />
    </div>
  ),
}
