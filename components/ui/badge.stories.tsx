import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Badge, badgeVariantsConfig } from '@/components/ui/badge'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Badge',
  component: Badge,
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Badge 吧唧',
  },
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
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = { args: {} }

export const RadiusSizes: Story = {
  args: {},
  render: () => {
    const radiusSizes = Object.keys(badgeVariantsConfig.radius)

    return (
      <div className='grid gap-2'>
        {radiusSizes.map(radius => (
          <Badge key={radius} radius={radius as keyof typeof badgeVariantsConfig.radius}>
            Badge 吧唧
          </Badge>
        ))}
      </div>
    )
  },
}

export const Borders: Story = {
  args: {},
  render: () => {
    const borders = Object.keys(badgeVariantsConfig.border)

    return (
      <div className='grid gap-2'>
        {borders.map(border => (
          <Badge key={border} border={border as keyof typeof badgeVariantsConfig.border}>
            Badge 吧唧
          </Badge>
        ))}
      </div>
    )
  },
}

export const Sizes: Story = {
  args: {},
  render: () => {
    const sizes = Object.keys(badgeVariantsConfig.size)

    return (
      <div className='flex items-center gap-2'>
        {sizes.map(size => (
          <Badge key={size} size={size as keyof typeof badgeVariantsConfig.size}>
            Badge 吧唧
          </Badge>
        ))}
      </div>
    )
  },
}

export const VariantDefault: Story = {
  args: {},
  render: () => {
    const tints = Object.keys(badgeVariantsConfig.tint)

    return (
      <div className='flex items-start gap-2'>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Badge key={tint} tint={tint as keyof typeof badgeVariantsConfig.tint} size={'sm'}>
              Badge 吧唧
            </Badge>
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Badge key={tint} tint={tint as keyof typeof badgeVariantsConfig.tint}>
              Badge 吧唧
            </Badge>
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Badge key={tint} tint={tint as keyof typeof badgeVariantsConfig.tint} size={'lg'}>
              Badge 吧唧
            </Badge>
          ))}
        </div>
      </div>
    )
  },
}

export const VariantSolid: Story = {
  args: {},
  render: () => {
    const tints = Object.keys(badgeVariantsConfig.tint)

    return (
      <div className='flex items-start gap-2'>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Badge key={tint} variant='solid' tint={tint as keyof typeof badgeVariantsConfig.tint} size={'sm'}>
              Badge 吧唧
            </Badge>
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Badge key={tint} variant='solid' tint={tint as keyof typeof badgeVariantsConfig.tint}>
              Badge 吧唧
            </Badge>
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Badge key={tint} variant='solid' tint={tint as keyof typeof badgeVariantsConfig.tint} size={'lg'}>
              Badge 吧唧
            </Badge>
          ))}
        </div>
      </div>
    )
  },
}

export const VariantDot: Story = {
  args: {},
  render: () => {
    const tints = Object.keys(badgeVariantsConfig.tint)

    return (
      <div className='flex items-start gap-2'>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Badge key={tint} variant='dot' tint={tint as keyof typeof badgeVariantsConfig.tint} size={'sm'}>
              Badge 吧唧
            </Badge>
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Badge key={tint} variant='dot' tint={tint as keyof typeof badgeVariantsConfig.tint}>
              Badge 吧唧
            </Badge>
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Badge key={tint} variant='dot' tint={tint as keyof typeof badgeVariantsConfig.tint} size={'lg'}>
              Badge 吧唧
            </Badge>
          ))}
        </div>
      </div>
    )
  },
}
