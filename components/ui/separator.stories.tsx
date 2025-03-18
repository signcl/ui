import type { Meta, StoryObj } from '@storybook/react'

import { Separator } from './separator'

const meta = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
    decorative: {
      control: 'boolean',
      description: 'When true, indicates that the separator is purely visual and does not represent a thematic break',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  render: args => (
    <div className='w-full max-w-md'>
      <div className='space-y-1'>
        <h4 className='text-sm font-medium leading-none'>Horizontal Separator</h4>
        <p className='text-sm text-fg/60'>A basic horizontal separator that divides content.</p>
      </div>
      <Separator {...args} className='my-4' />
      <div className='flex h-5 items-center space-x-4 text-sm'>
        <div>Section 1</div>
        <Separator orientation='vertical' />
        <div>Section 2</div>
        <Separator orientation='vertical' />
        <div>Section 3</div>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  render: args => (
    <div className='w-full max-w-md space-y-4'>
      <div>
        <h3 className='mb-2 text-lg font-medium'>Section 1</h3>
        <p className='text-sm text-fg/60'>
          This is the first section of content. The separator below creates a visual break.
        </p>
      </div>
      <Separator {...args} />
      <div>
        <h3 className='mb-2 text-lg font-medium'>Section 2</h3>
        <p className='text-sm text-fg/60'>This is the second section of content, separated from the first.</p>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    decorative: true,
  },
  render: args => (
    <div className='flex h-20 items-center space-x-4'>
      <div className='text-center'>
        <h4 className='text-sm font-medium'>Column 1</h4>
        <p className='text-sm text-fg/60'>Left content</p>
      </div>
      <Separator {...args} className='h-16' />
      <div className='text-center'>
        <h4 className='text-sm font-medium'>Column 2</h4>
        <p className='text-sm text-fg/60'>Middle content</p>
      </div>
      <Separator {...args} className='h-16' />
      <div className='text-center'>
        <h4 className='text-sm font-medium'>Column 3</h4>
        <p className='text-sm text-fg/60'>Right content</p>
      </div>
    </div>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <div className='w-full max-w-md space-y-4'>
      <h4 className='text-sm font-medium'>Custom Styled Separators</h4>

      <div className='space-y-2'>
        <p className='text-xs text-fg/60'>Default</p>
        <Separator />
      </div>

      <div className='space-y-2'>
        <p className='text-xs text-fg/60'>Thicker (2px)</p>
        <Separator className='h-[2px]' />
      </div>

      <div className='space-y-2'>
        <p className='text-xs text-fg/60'>Dashed</p>
        <Separator className='border-dashed border-t border-fg/20 bg-transparent h-0' />
      </div>

      <div className='space-y-2'>
        <p className='text-xs text-fg/60'>Dotted</p>
        <Separator className='border-dotted border-t border-fg/20 bg-transparent h-0' />
      </div>

      <div className='space-y-2'>
        <p className='text-xs text-fg/60'>Colored (Accent)</p>
        <Separator className='bg-ac/50' />
      </div>

      <div className='space-y-2'>
        <p className='text-xs text-fg/60'>Gradient</p>
        <Separator className='h-[2px] bg-gradient-to-r from-transparent via-ac/50 to-transparent' />
      </div>
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className='w-full max-w-md'>
      <div className='relative flex items-center py-5'>
        <Separator className='flex-grow' />
        <div className='relative z-10 px-3 bg-bg text-fg/60 text-xs'>OR</div>
        <Separator className='flex-grow' />
      </div>

      <div className='relative flex items-center py-5'>
        <div className='flex-grow'>
          <Separator />
        </div>
        <div className='relative z-10 px-3 bg-bg text-fg/60 text-xs uppercase'>Section divider</div>
        <div className='flex-grow'>
          <Separator />
        </div>
      </div>
    </div>
  ),
}
