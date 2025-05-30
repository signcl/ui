import type { Meta, StoryObj } from '@storybook/nextjs'

import { Accordion, AccordionContent, AccordionItem, AccordionSingleton, AccordionTrigger } from './accordion'

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Determines whether one or multiple items can be opened at the same time',
    },
    collapsible: {
      control: 'boolean',
      description: 'When type is "single", allows closing all items',
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

/**
 * Basic accordion with multiple items that can be opened simultaneously.
 */
export const MultipleItems: Story = {
  args: {
    type: 'multiple',
    defaultValue: ['item-1'],
    className: 'w-full max-w-md',
  },
  render: args => (
    <Accordion {...args}>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern. The accordion uses Radix UI primitives internally.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

/**
 * Single item accordion where only one item can be open at a time.
 */
export const SingleItem: Story = {
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'item-2',
    className: 'w-full max-w-md',
  },
  render: args => (
    <Accordion {...args}>
      <AccordionItem value='item-1'>
        <AccordionTrigger>First item</AccordionTrigger>
        <AccordionContent>
          This is the first item&apos;s content. You can only have one item open at a time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Second item</AccordionTrigger>
        <AccordionContent>
          This is the second item&apos;s content. Notice it starts expanded because defaultValue is “item-2”.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Third item</AccordionTrigger>
        <AccordionContent>
          This is the third item&apos;s content. The collapsible prop allows closing all items.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

/**
 * Singleton component that simplifies creation of single accordion from data.
 */
export const SingletonAccordion: Story = {
  render: () => (
    <AccordionSingleton
      defaultValue='2'
      className='w-full max-w-md'
      items={[
        {
          id: '1',
          label: 'Accordion Item 1',
          content: 'Content for the first accordion item',
        },
        {
          id: '2',
          label: 'Accordion Item 2',
          content: 'Content for the second accordion item that starts expanded',
        },
        {
          id: '3',
          label: 'Accordion Item 3',
          content: 'Content for the third accordion item',
        },
      ]}
    />
  ),
}

/**
 * Separated variant with space between items.
 */
export const SeparatedVariant: Story = {
  render: () => (
    <AccordionSingleton
      variant='separated'
      className='w-full max-w-md'
      items={[
        {
          id: '1',
          label: 'Separated Item 1',
          content: 'This item has spacing between other items',
        },
        {
          id: '2',
          label: 'Separated Item 2',
          content: 'Notice the border appears when the item is open',
        },
        {
          id: '3',
          label: 'Separated Item 3',
          content: 'The background changes on hover and when active',
        },
      ]}
    />
  ),
}

/**
 * Nested accordions example showing how to place accordions within each other.
 */
export const NestedAccordions: Story = {
  render: () => (
    <Accordion type='single' collapsible className='w-full max-w-md'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Main category</AccordionTrigger>
        <AccordionContent>
          <p className='mb-2'>This is the main category content.</p>
          <Accordion variant={'separated'} type='single' collapsible>
            <AccordionItem variant={'separated'} value='nested-1'>
              <AccordionTrigger>Nested subcategory 1</AccordionTrigger>
              <AccordionContent>Content for the first nested subcategory.</AccordionContent>
            </AccordionItem>
            <AccordionItem variant={'separated'} value='nested-2'>
              <AccordionTrigger>Nested subcategory 2</AccordionTrigger>
              <AccordionContent>Content for the second nested subcategory.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Secondary category</AccordionTrigger>
        <AccordionContent>This category doesn’t have any nested accordions.</AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Tertiary category</AccordionTrigger>
        <AccordionContent>
          <p className='mb-2'>Another category with nested content.</p>
          <Accordion type='multiple'>
            <AccordionItem value='nested-3'>
              <AccordionTrigger>Multiple nested item 1</AccordionTrigger>
              <AccordionContent>This nested accordion allows multiple items to be open at once.</AccordionContent>
            </AccordionItem>
            <AccordionItem value='nested-4'>
              <AccordionTrigger>Multiple nested item 2</AccordionTrigger>
              <AccordionContent>You can open this while the other nested item is also open.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
