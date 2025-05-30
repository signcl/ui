import type { Meta, StoryObj } from '@storybook/nextjs'
import { IconRefresh, IconSearch } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// <Pagination
// className='my-2'
// value={pageIndexLiveGuards}
// onPageChange={setPageIndexLiveGuards}
// total={dataLiveGuards?.data?.info ? dataLiveGuards.data.info.page : 0}
// />

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Input',
  component: Input,
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
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    placeholder: '测试 placeholder...',
  },
}

export const File: Story = {
  args: {},
  render: () => {
    return (
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Input id='picture' type='file' />
      </div>
    )
  },
}

export const Number: Story = {
  args: {},
  render: () => {
    return (
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Input type='number' placeholder='Number' />
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {},
  render: () => {
    return (
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Input id='email' disabled type='email' placeholder='Email' />
      </div>
    )
  },
}

export const WithSections: Story = {
  args: {},
  render: () => {
    return (
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Input
          id='email'
          type='text'
          placeholder='Email'
          leftSection={
            <div className='flex size-8 items-center justify-center'>
              <IconSearch size='1rem' />
            </div>
          }
          leftSectionClassName='pointer-events-none'
          rightSection={
            <div className='flex size-6 items-center justify-center'>
              <Button className='size-4 p-0'>
                <IconRefresh size={'0.6rem'} />
              </Button>
            </div>
          }
          inputSize={'sm'}
        />
        <Input
          id='email'
          type='text'
          placeholder='Email'
          leftSection={
            <div className='flex size-8 items-center justify-center'>
              <IconSearch size='1rem' />
            </div>
          }
          leftSectionClassName='pointer-events-none'
          rightSection={
            <div className='flex size-8 items-center justify-center'>
              <Button className='size-5 p-0'>
                <IconRefresh size={'1rem'} />
              </Button>
            </div>
          }
        />
        <Input
          id='email'
          type='text'
          placeholder='Email'
          leftSection={
            <div className='flex size-8 items-center justify-center'>
              <IconSearch size='1rem' />
            </div>
          }
          leftSectionClassName='pointer-events-none'
          rightSection={
            <div className='flex size-10 items-center justify-center'>
              <Button className='size-6 p-0'>
                <IconRefresh size={'1.25rem'} />
              </Button>
            </div>
          }
          inputSize={'lg'}
        />
      </div>
    )
  },
}

export const CustomSizes: Story = {
  args: {},
  render: () => {
    return (
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Input id='email' type='text' placeholder='Email' inputSize='sm' />
        <Input id='email' type='text' placeholder='Email' inputSize='md' />
        <Input id='email' type='text' placeholder='Email' inputSize='lg' />
        <Input id='email' type='number' placeholder='Phone' inputSize='sm' />
        <Input id='email' type='number' placeholder='Phone' inputSize='md' />
        <Input id='email' type='number' placeholder='Phone' inputSize='lg' />
      </div>
    )
  },
}

// export const CustomWeight: Story = {
//   args: {
//     width: '4px',
//   },
// }
