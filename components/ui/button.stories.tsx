import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconArrowUp, IconArrowUpRight, IconExternalLink, IconGitBranch } from '@tabler/icons-react'

import { Button, buttonVariantsConfig } from '@/components/ui/button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Button 按钮',
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = { args: {} }

export const Disabled: Story = {
  args: { disabled: true },
  render: args => <Button {...args} />,
}

export const IsLoading: Story = {
  args: { loading: true },
  render: args => <Button {...args} />,
}

export const Sizes: Story = {
  args: { size: 'sm' },
  render: _args => {
    return (
      <div className='flex flex-col items-start gap-8 sm:flex-row'>
        <div className='flex items-start gap-2'>
          <Button size='sm' variant='outline'>
            Small
          </Button>
          <Button size='icon-sm' aria-label='Submit' variant='outline'>
            <IconArrowUpRight />
          </Button>
        </div>
        <div className='flex items-start gap-2'>
          <Button variant='outline'>Default</Button>
          <Button size='icon' aria-label='Submit' variant='outline'>
            <IconArrowUpRight />
          </Button>
        </div>
        <div className='flex items-start gap-2'>
          <Button variant='outline' size='lg'>
            Large
          </Button>
          <Button size='icon-lg' aria-label='Submit' variant='outline'>
            <IconArrowUpRight />
          </Button>
        </div>
      </div>
    )
  },
}

export const WithIcon: Story = {
  args: {},
  render: _args => {
    return (
      <div className='flex items-start gap-2'>
        <Button variant='outline' size='sm'>
          <IconGitBranch /> New Branch
        </Button>
        <Button variant='outline'>
          <IconGitBranch /> New Branch
        </Button>
        <Button variant='outline' size='lg'>
          <IconGitBranch /> New Branch
        </Button>
      </div>
    )
  },
}

export const Rounded: Story = {
  args: {},
  render: args => {
    return (
      <div className='flex flex-col gap-8'>
        <Button variant='outline' size='icon' className='rounded-full'>
          <IconArrowUp />
        </Button>
      </div>
    )
  },
}

export const VariantDefault: Story = {
  args: {},
  render: args => {
    const tints = Object.keys(buttonVariantsConfig.tint)

    return (
      <div className='flex items-start gap-2'>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'sm'} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'lg'} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'icon'} {...args}>
              <IconExternalLink size={'1rem'} />
            </Button>
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} loading {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} disabled {...args} />
          ))}
        </div>
      </div>
    )
  },
}

export const VariantSolid: Story = {
  args: { variant: 'solid' },
  render: args => {
    const tints = Object.keys(buttonVariantsConfig.tint)

    return (
      <div className='flex items-start gap-2'>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'sm'} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'lg'} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'icon'} {...args}>
              <IconExternalLink />
            </Button>
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} loading {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} disabled {...args} />
          ))}
        </div>
      </div>
    )
  },
}

export const VariantOutline: Story = {
  args: { variant: 'outline' },
  render: args => {
    const tints = Object.keys(buttonVariantsConfig.tint)

    return (
      <div className='flex items-start gap-2'>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'sm'} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'lg'} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'icon'} {...args}>
              <IconExternalLink />
            </Button>
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} loading {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} disabled {...args} />
          ))}
        </div>
      </div>
    )
  },
}

export const VariantGhost: Story = {
  args: { variant: 'ghost' },
  render: args => {
    const tints = Object.keys(buttonVariantsConfig.tint)

    return (
      <div className='flex items-start gap-2'>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'sm'} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'lg'} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'icon'} {...args}>
              <IconExternalLink />
            </Button>
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} loading {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} disabled {...args} />
          ))}
        </div>
      </div>
    )
  },
}

export const VariantLink: Story = {
  args: { variant: 'link' },
  render: args => {
    const tints = Object.keys(buttonVariantsConfig.tint)

    return (
      <div className='flex items-start gap-2'>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'sm'} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'lg'} {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} size={'icon'} {...args}>
              <IconExternalLink />
            </Button>
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} loading {...args} />
          ))}
        </div>
        <div className='grid items-start gap-2'>
          {tints.map(tint => (
            <Button key={tint} tint={tint as keyof typeof buttonVariantsConfig.tint} disabled {...args} />
          ))}
        </div>
      </div>
    )
  },
}

export const VariantCombinations: Story = {
  render: () => {
    return (
      <div className='space-y-4'>
        <div className='flex items-start gap-2'>
          <Button variant={'default'}>Solid</Button>
          <Button variant={'solid'}>Solid</Button>
          <Button variant={'outline'}>Outline</Button>
          <Button variant={'link'}>Link</Button>
        </div>
        <div className='flex items-start gap-2'>
          <Button variant={'default'} size={'sm'}>
            Solid
          </Button>
          <Button variant={'solid'} size={'sm'}>
            Solid
          </Button>
          <Button variant={'outline'} size={'sm'}>
            Outline
          </Button>
          <Button variant={'link'} size={'sm'}>
            Link
          </Button>
        </div>
        <div className='flex items-start gap-2'>
          <Button variant={'default'} size={'lg'}>
            Solid
          </Button>
          <Button variant={'solid'} size={'lg'}>
            Solid
          </Button>
          <Button variant={'outline'} size={'lg'}>
            Outline
          </Button>
          <Button variant={'link'} size={'lg'}>
            Link
          </Button>
        </div>
      </div>
    )
  },
}

export const LeftSection: Story = {
  args: { leftSection: <IconExternalLink size={'1.125rem'} /> },
  render: args => <Button {...args} />,
}

export const RightSection: Story = {
  args: { rightSection: <IconExternalLink size={'1.125rem'} /> },
  render: args => <Button {...args} />,
}
