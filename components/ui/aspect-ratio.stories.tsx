import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { AspectRatio } from './aspect-ratio'

const meta = {
  title: 'UI/Aspect Ratio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: { type: 'number', min: 0.1, max: 3, step: 0.1 },
      description: 'The desired aspect ratio (width/height)',
    },
  },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

// Helper to create a placeholder image with specified dimensions and label
const PlaceholderImage = ({ ratio, label }: { ratio: number; label: string }) => (
  <div className='bg-fg/10 relative overflow-hidden rounded-md'>
    <picture>
      <img
        src={`https://placehold.co/600x${Math.round(600 / ratio)}`}
        alt='Placeholder image'
        className='size-full object-cover'
      />
    </picture>
    {/* <div className='size-64 bg-ac/50' /> */}
    <div className='text-fg absolute inset-0 flex items-center justify-center text-lg font-semibold'>{label}</div>
  </div>
)

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: args => (
    <div className='w-64'>
      <AspectRatio {...args}>
        <PlaceholderImage ratio={args.ratio || 1} label='1:1' />
      </AspectRatio>
    </div>
  ),
}

export const Landscape16by9: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: args => (
    <div className='w-96'>
      <AspectRatio {...args}>
        <PlaceholderImage ratio={args.ratio || 16 / 9} label='16:9' />
      </AspectRatio>
    </div>
  ),
}

export const Landscape4by3: Story = {
  args: {
    ratio: 4 / 3,
  },
  render: args => (
    <div className='w-96'>
      <AspectRatio {...args}>
        <PlaceholderImage ratio={args.ratio || 4 / 3} label='4:3' />
      </AspectRatio>
    </div>
  ),
}

export const Portrait3by4: Story = {
  args: {
    ratio: 3 / 4,
  },
  render: args => (
    <div className='w-64'>
      <AspectRatio {...args}>
        <PlaceholderImage ratio={args.ratio || 3 / 4} label='3:4' />
      </AspectRatio>
    </div>
  ),
}

export const Portrait9by16: Story = {
  args: {
    ratio: 9 / 16,
  },
  render: args => (
    <div className='w-48'>
      <AspectRatio {...args}>
        <PlaceholderImage ratio={args.ratio || 9 / 16} label='9:16' />
      </AspectRatio>
    </div>
  ),
}

export const Ultrawide21by9: Story = {
  args: {
    ratio: 21 / 9,
  },
  render: args => (
    <div className='w-[480px]'>
      <AspectRatio {...args}>
        <PlaceholderImage ratio={args.ratio || 21 / 9} label='21:9' />
      </AspectRatio>
    </div>
  ),
}

export const GalleryGrid: Story = {
  render: () => (
    <div className='grid w-[600px] grid-cols-3 gap-4'>
      {[
        { ratio: 1, label: '1:1' },
        { ratio: 4 / 3, label: '4:3' },
        { ratio: 3 / 4, label: '3:4' },
        { ratio: 16 / 9, label: '16:9' },
        { ratio: 1, label: '1:1' },
        { ratio: 9 / 16, label: '9:16' },
      ].map((item, i) => (
        <div key={i}>
          <AspectRatio ratio={item.ratio}>
            <PlaceholderImage ratio={item.ratio} label={item.label} />
          </AspectRatio>
        </div>
      ))}
    </div>
  ),
}
