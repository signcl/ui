import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '@/components/ui/accordion'

// <Pagination
// className='my-2'
// value={pageIndexLiveGuards}
// onPageChange={setPageIndexLiveGuards}
// total={dataLiveGuards?.data?.info ? dataLiveGuards.data.info.page : 0}
// />

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Accordion',
  component: Accordion,
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
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs = {
  items: [
    {
      id: 1,
      label: 'What is React?',
      content: (
        <div>
          <p>
            React is a JavaScript library for building user interfaces. It lets you create reusable UI components that
            manage their own state.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      label: 'Why use TypeScript?',
      content: (
        <div>
          <p>
            TypeScript adds static typing to JavaScript, which can help catch errors early and improve code
            maintainability.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      label: 'What is Tailwind CSS?',
      content: (
        <div>
          <p>
            Tailwind CSS is a utility-first CSS framework that lets you build custom designs directly in your markup.
          </p>
        </div>
      ),
    },
    {
      id: '123',
      label: 'Nested Accordion',
      content: (
        <div>
          <Accordion
            items={[
              {
                id: '12',
                label: 'Nested Accordion 1',
                content: <div>Nested Accordion 1</div>,
              },
              {
                id: '123',
                label: 'Nested Accordion 2',
                content: <div>Nested Accordion 2</div>,
              },
            ]}
          />
        </div>
      ),
    },
  ],
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: defaultArgs,
  render: args => (
    <div className='w-[600px]'>
      <Accordion {...args} />
    </div>
  ),
}

export const VariantSeparate: Story = {
  args: {
    ...defaultArgs,
    variant: 'separated',
  },
  render: args => (
    <div className='w-[600px]'>
      <Accordion {...args} />
    </div>
  ),
}
