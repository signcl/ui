import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './calendar'

// <Pagination
// className='my-2'
// value={pageIndexLiveGuards}
// onPageChange={setPageIndexLiveGuards}
// total={dataLiveGuards?.data?.info ? dataLiveGuards.data.info.page : 0}
// />

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Calendar',
  component: Calendar,
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
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    mode: 'single',
    selected: new Date(2021, 5, 13),
    defaultMonth: new Date(2021, 5, 13),
  },
}

export const CustomCss: Story = {
  args: {
    mode: 'single',
    selected: new Date(2021, 5, 13),
    defaultMonth: new Date(2021, 5, 13),
    className: 'rounded-sm border',
  },
}

export const Range: Story = {
  args: {
    mode: 'range',
    selected: {
      from: new Date('Mar 24, 2024, 9:00 PM'),
      to: new Date('Apr 5, 2024, 9:00 PM'),
    },
    defaultMonth: new Date('Mar 24, 2024, 9:00 PM'),
  },
}

export const Disabled: Story = {
  args: {
    mode: 'range',
    selected: {
      from: new Date(2021, 5, 10),
      to: new Date(2021, 5, 12),
    },
    disabled: [new Date(2021, 5, 4), new Date(2021, 5, 5), new Date(2021, 5, 7)],
    defaultMonth: new Date(2021, 5, 13),
  },
}

export const TwoMonths: Story = {
  args: {
    mode: 'range',
    selected: {
      from: new Date('Mar 24, 2024, 9:00 PM'),
      to: new Date('Apr 5, 2024, 9:00 PM'),
    },
    numberOfMonths: 2,
    defaultMonth: new Date('Mar 24, 2024, 9:00 PM'),
  },
}
