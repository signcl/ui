import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './pagination'

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    total: {
      control: { type: 'number' },
      description: 'Total number of pages',
    },
    siblings: {
      control: { type: 'number' },
      description: 'Number of page links to show on either side of the current page',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the pagination is disabled',
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

// Basic example with controlled state
export const Default: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
      <div className='mx-auto w-full max-w-xl p-4'>
        <Pagination {...args} value={currentPage} onPageChange={setCurrentPage} total={args.total || 10} />

        <div className='bg-bg mt-4 rounded border p-4'>
          <p>Current page: {currentPage}</p>
        </div>
      </div>
    )
  },
  args: {
    total: 10,
    siblings: 1,
    disabled: false,
  },
}

// Large number of pages to demonstrate ellipsis and select behavior
export const ManyPages: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(19)
    return (
      <div className='mx-auto w-full max-w-xl p-4'>
        <Pagination {...args} value={currentPage} onPageChange={setCurrentPage} total={args.total || 100} />

        <div className='bg-bg mt-4 rounded border p-4'>
          <p>Current page: {currentPage}</p>
          <p className='text-fg/60 mt-2 text-sm'>
            Try clicking on the ellipsis (...) to select a page that is not visible in the pagination.
          </p>
        </div>
      </div>
    )
  },
  args: {
    total: 1000,
    siblings: 1,
    disabled: false,
  },
}

// Demonstrate disabled state
export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
}

// Demonstrate with many siblings
export const WithManySiblings: Story = {
  ...ManyPages,
  args: {
    ...ManyPages.args,
    siblings: 4,
  },
}
