import type { Meta, StoryObj } from '@storybook/react'
import { Figure } from './figure-display'

// Sample data for the stories
const sampleFigures = [
  { label: 'Users', figure: '1,234', tooltip: 'Number of unique users' },
  { label: 'Conversion', figure: '12.5%', tooltip: 'Percentage of users who completed the funnel' },
  { label: 'Revenue', figure: '$1,234.56', tooltip: 'Total revenue generated' },
]

const meta = {
  title: 'UI/Figure',
  component: Figure,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['start', 'center', 'end', 'fixed'],
      description: 'Alignment of the figure content',
    },
    active: {
      control: 'boolean',
      description: 'Whether the figure is in an active state',
    },
    altOrderOnMobile: {
      control: 'boolean',
      description: 'Changes the order of elements on mobile devices',
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'Size variant of the figure',
    },
  },
} satisfies Meta<typeof Figure>

export default meta
type FigureStory = StoryObj<typeof Figure>

// Single Figure Stories
export const Default: FigureStory = {
  args: {
    label: 'Users',
    figure: '1,234',
  },
}

export const WithTooltip: FigureStory = {
  args: {
    label: 'Users',
    figure: '1,234',
    tooltip: 'Number of unique users',
  },
}

export const Active: FigureStory = {
  args: {
    label: 'Users',
    figure: '1,234',
    active: true,
  },
}

export const SmallSize: FigureStory = {
  args: {
    label: 'Users',
    figure: '1,234',
    size: 'sm',
  },
}

export const CenteredAlignment: FigureStory = {
  args: {
    label: 'Users',
    figure: '1,234',
    position: 'center',
  },
}

export const EndAlignment: FigureStory = {
  args: {
    label: 'Users',
    figure: '1,234',
    position: 'end',
  },
}

// Multiple Figures Stories
export const MultipleFigures: StoryObj<typeof Figure> = {
  render: args => (
    <div className='flex justify-between gap-3'>
      {sampleFigures.map((item, index) => (
        <Figure key={index} {...args} label={item.label} figure={item.figure} tooltip={item.tooltip} />
      ))}
    </div>
  ),
  decorators: [
    Story => (
      <div className='w-120'>
        <Story />
      </div>
    ),
  ],
  args: {
    position: 'start',
  },
}

// Responsive behavior showcase
export const ResponsiveBehavior = {
  render: () => (
    <div className='mx-auto w-full max-w-3xl space-y-8'>
      <div className='rounded border p-4'>
        <h3 className='mb-2 text-lg font-medium'>Desktop View (Resize to see mobile view)</h3>
        <p className='mb-4 text-sm text-fg/60'>
          This demonstrates how the component responds to different screen sizes
        </p>

        <div className='space-y-8'>
          <div>
            <h4 className='mb-2 text-sm font-medium'>Standard Alignment</h4>
            <div className='flex justify-between gap-3'>
              {sampleFigures.map((item, index) => (
                <Figure key={index} label={item.label} figure={item.figure} tooltip={item.tooltip} />
              ))}
            </div>
          </div>

          <div>
            <h4 className='mb-2 text-sm font-medium'>Center Alignment with Alternative Order</h4>
            <div className='flex justify-between gap-3'>
              {sampleFigures.map((item, index) => (
                <Figure
                  key={index}
                  label={item.label}
                  figure={item.figure}
                  tooltip={item.tooltip}
                  position='center'
                  altOrderOnMobile={true}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className='mb-2 text-sm font-medium'>Fixed Width Items</h4>
            <div className='flex justify-between gap-3'>
              {sampleFigures.map((item, index) => (
                <Figure key={index} label={item.label} figure={item.figure} tooltip={item.tooltip} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}
