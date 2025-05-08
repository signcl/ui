import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconDots } from '@tabler/icons-react'
import type { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTable, getSortableHeader } from '@/components/ui/data-table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown'

// Payment type for the basic example
type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

// Sample payment data
const payments: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@example.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@example.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@example.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@example.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@example.com',
  },
]

// Define payment columns
const paymentColumns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <div className='flex'>
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onChange={e => table.toggleAllPageRowsSelected(e.target.checked)}
          aria-label='Select all'
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className='flex'>
        <Checkbox
          checked={row.getIsSelected()}
          onChange={e => row.toggleSelected(e.target.checked)}
          aria-label='Select row'
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: getSortableHeader('Status'),
    cell: ({ row }) => {
      const status = row.getValue('status') as string

      const statusMap: Record<string, { label: string; tint: 'emerald' | 'orange' | 'red' | 'default' }> = {
        success: { label: 'Success', tint: 'emerald' },
        processing: { label: 'Processing', tint: 'orange' },
        pending: { label: 'Pending', tint: 'orange' },
        failed: { label: 'Failed', tint: 'red' },
      }

      const { label, tint } = statusMap[status] || { label: status, tint: 'default' }

      return (
        <Badge size='sm' tint={tint}>
          {label}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'email',
    header: getSortableHeader('Email'),
  },
  {
    accessorKey: 'amount',
    header: getSortableHeader('Amount'),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return <div className='text-right font-medium'>{formatted}</div>
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='link' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <IconDots className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const meta = {
  title: 'UI/Data Table',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

// Basic example story
export const Basic: Story = {
  args: {
    // TODO: need type fix
    columns: paymentColumns as ColumnDef<unknown, unknown>[],
    data: payments,
    filterColumn: 'email',
    filterPlaceholder: 'Filter emails...',
  },
  render: args => (
    <div className='container mx-auto'>
      <h2 className='mb-4 text-xl font-bold tracking-tight'>Payment Management</h2>
      <DataTable {...args} />
    </div>
  ),
}
