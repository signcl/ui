import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Slider } from '@/components/ui/slider'

// <Pagination
// className='my-2'
// value={pageIndexLiveGuards}
// onPageChange={setPageIndexLiveGuards}
// total={dataLiveGuards?.data?.info ? dataLiveGuards.data.info.page : 0}
// />

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Slider',
  component: Slider,
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
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    defaultValue: [20],
    value: [0],
    min: 0,
    max: 100,
    step: 1,
  },
  render: args => (
    <div className='w-[300px]'>
      <Slider {...args} />
    </div>
  ),
}

export const Range: Story = {
  args: {
    defaultValue: [20, 80],
    value: [20, 80],
    min: 0,
    max: 100,
    step: 1,
  },
  render: args => (
    <div className='w-[300px]'>
      <Slider {...args} />
    </div>
  ),
}

export const Marks: Story = {
  args: {
    defaultValue: [20, 80],
    value: [20, 80],
    min: 0,
    max: 100,
    step: 1,
    marks: [
      { value: 0, label: '0' },
      { value: 10, label: '10' },
      { value: 20, label: '20' },
      { value: 30, label: '40' },
      { value: 60, label: '60' },
      { value: 80, label: '80' },
      { value: 100, label: '100' },
    ],
  },
  render: args => (
    <div className='w-[300px]'>
      <Slider {...args} />
    </div>
  ),
}
