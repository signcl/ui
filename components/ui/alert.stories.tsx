import type { Meta, StoryObj } from '@storybook/react'
import { IconAlertCircle } from '@tabler/icons-react'

import { Alert, alertVariantsConfig } from '@/components/ui/alert'

// <Pagination
// className='my-2'
// value={pageIndexLiveGuards}
// onPageChange={setPageIndexLiveGuards}
// total={dataLiveGuards?.data?.info ? dataLiveGuards.data.info.page : 0}
// />

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Alert',
  component: Alert,
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
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'This is a title',
    children: 'This is a default alert',
    icon: <IconAlertCircle />,
  },
  render: args => (
    <div>
      <Alert {...args} />
    </div>
  ),
}

export const Checked: Story = {
  args: {
    tint: 'danger',
    label: 'This is a title',
    children: 'This is a danger alert',
    icon: <IconAlertCircle />,
  },
  render: args => (
    <div>
      <Alert {...args} />
    </div>
  ),
}

export const VariantDefault: Story = {
  args: {
    label: 'This is a title',
    children: 'This is a alert content 这是一个 alert 内容',
  },
  render: args => {
    const tints = Object.keys(alertVariantsConfig.tint)

    return (
      <div className='flex items-start gap-2'>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Alert key={tint} tint={tint as keyof typeof alertVariantsConfig.tint} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Alert
              key={tint}
              tint={tint as keyof typeof alertVariantsConfig.tint}
              {...args}
              icon={<IconAlertCircle />}
            />
          ))}
        </div>
      </div>
    )
  },
}
