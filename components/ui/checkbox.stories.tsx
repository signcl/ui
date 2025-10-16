import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Checkbox } from '@/components/ui/checkbox'

import { Label } from './label'

// <Pagination
// className='my-2'
// value={pageIndexLiveGuards}
// onPageChange={setPageIndexLiveGuards}
// total={dataLiveGuards?.data?.info ? dataLiveGuards.data.info.page : 0}
// />

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
  render: args => (
    <div>
      <Checkbox {...args} />
    </div>
  ),
}

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: args => (
    <div>
      <Checkbox {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => (
    <div className='flex flex-wrap gap-2'>
      <Checkbox {...args} />
      <Checkbox checked {...args} />
    </div>
  ),
}

export const Example: Story = {
  args: {},
  render: _args => {
    return (
      <div className='flex flex-col gap-6'>
        <div className='flex items-center gap-3'>
          <Checkbox id='terms' />
          <Label htmlFor='terms'>Accept terms and conditions</Label>
        </div>
        <div className='flex items-start gap-3'>
          <Checkbox id='terms-2' defaultChecked />
          <div className='grid gap-2'>
            <Label htmlFor='terms-2'>Accept terms and conditions</Label>
            <p className='text-muted-foreground text-sm'>
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-3'>
          <Checkbox id='toggle' disabled />
          <Label htmlFor='toggle'>Enable notifications</Label>
        </div>
        <Label className='hover:bg-fg/5 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-rose-500 has-[[aria-checked=true]]:bg-rose-500/5'>
          <Checkbox
            id='toggle-2'
            defaultChecked
            className='data-[state=checked]:border-rose-500 data-[state=checked]:bg-rose-500 data-[state=checked]:text-white'
          />
          <div className='grid gap-1.5 font-normal'>
            <p className='text-sm leading-none font-medium'>Enable notifications</p>
            <p className='text-muted-foreground text-sm'>You can enable or disable notifications at any time.</p>
          </div>
        </Label>
      </div>
    )
  },
}
