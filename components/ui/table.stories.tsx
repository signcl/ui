import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Badge } from './badge'
import { Checkbox } from './checkbox'

// Sample data for table stories
const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
]

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class names for the table component',
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

/**
 * Basic table example showing a simple data structure with headers
 */
export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => (
          <TableRow key={invoice.invoice}>
            <TableCell className='font-medium'>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

/**
 * Table with footer showing summary information
 */
export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableCaption>Invoice list with summary.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => (
          <TableRow key={invoice.invoice}>
            <TableCell className='font-medium'>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className='text-right'>$1,750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

/**
 * Table with zebra striping for improved readability
 */
export const Striped: Story = {
  render: () => (
    <Table>
      <TableCaption>Striped table rows for readability.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow key={invoice.invoice} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
            <TableCell className='font-medium'>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

/**
 * Table with status indicators shown as colored badges
 */
export const WithStatusIndicators: Story = {
  render: () => (
    <Table>
      <TableCaption>A table with status indicators.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => (
          <TableRow key={invoice.invoice}>
            <TableCell className='font-medium'>{invoice.invoice}</TableCell>
            <TableCell>
              <Badge
                tint={
                  invoice.paymentStatus === 'Paid' ? 'green' : invoice.paymentStatus === 'Pending' ? 'orange' : 'red'
                }
              >
                {invoice.paymentStatus}
              </Badge>
            </TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

/**
 * Compact table with reduced padding for when space is limited
 */
export const Compact: Story = {
  render: () => (
    <Table>
      <TableCaption>Compact table with reduced spacing.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='p-1'>Invoice</TableHead>
          <TableHead className='p-1'>Status</TableHead>
          <TableHead className='p-1'>Method</TableHead>
          <TableHead className='p-1 text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => (
          <TableRow key={invoice.invoice}>
            <TableCell className='p-1 font-medium'>{invoice.invoice}</TableCell>
            <TableCell className='p-1'>{invoice.paymentStatus}</TableCell>
            <TableCell className='p-1'>{invoice.paymentMethod}</TableCell>
            <TableCell className='p-1 text-right'>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

/**
 * Table with interactive rows for selection
 */
export const Interactive: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = React.useState<string[]>([])

    const toggleRow = (id: string) => {
      setSelectedRows(prev => (prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]))
    }

    return (
      <Table>
        <TableCaption>Interactive table with selectable rows.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-10'></TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(invoice => (
            <TableRow
              key={invoice.invoice}
              data-state={selectedRows.includes(invoice.invoice) ? 'selected' : undefined}
              onClick={() => toggleRow(invoice.invoice)}
              className='cursor-pointer'
            >
              <TableCell className='p-0 [&>*]:p-2.5'>
                <Checkbox
                  checked={selectedRows.includes(invoice.invoice)}
                  onChange={e => {
                    e.stopPropagation()
                    toggleRow(invoice.invoice)
                  }}
                />
              </TableCell>
              <TableCell className='font-medium'>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}
