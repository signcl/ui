import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  IconAlertTriangle,
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconCopy,
  IconMinus,
  IconPlus,
  IconRobot,
  IconSearch,
  IconShare,
  IconSpeakerphone,
  IconTrash,
  IconUserX,
  IconVolumeOff,
} from '@tabler/icons-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
import { Divider } from '@/components/ui/divider'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Input } from '@/components/ui/input-next'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { TooltipContent, TooltipRoot, TooltipTrigger } from '@/components/ui/tooltip'

const meta = {
  title: 'UI/Button Group',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

// Default demo
export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant={'outline'}>Horizontal 1</Button>
      <Button variant={'outline'}>Horizontal 2</Button>
      <Button variant={'outline'}>Horizontal 3</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation='vertical' aria-label='Media controls' className='h-fit'>
      <Button variant='outline' size='icon'>
        <IconPlus />
      </Button>
      <Button variant='outline' size='icon'>
        <IconMinus />
      </Button>
    </ButtonGroup>
  ),
}

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col items-start gap-8'>
      <ButtonGroup>
        <Button variant='outline' size='sm'>
          Small
        </Button>
        <Button variant='outline' size='sm'>
          Button
        </Button>
        <Button variant='outline' size='sm'>
          Group
        </Button>
        <Button variant='outline' size='icon-sm'>
          <IconPlus />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant='outline'>Default</Button>
        <Button variant='outline'>Button</Button>
        <Button variant='outline'>Group</Button>
        <Button variant='outline' size='icon'>
          <IconPlus />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant='outline' size='lg'>
          Large
        </Button>
        <Button variant='outline' size='lg'>
          Button
        </Button>
        <Button variant='outline' size='lg'>
          Group
        </Button>
        <Button variant='outline' size='icon-lg'>
          <IconPlus />
        </Button>
      </ButtonGroup>
    </div>
  ),
}

// Nested button groups
export const Nested: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant='outline' size='sm'>
          1
        </Button>
        <Button variant='outline' size='sm'>
          2
        </Button>
        <Button variant='outline' size='sm'>
          3
        </Button>
        <Button variant='outline' size='sm'>
          4
        </Button>
        <Button variant='outline' size='sm'>
          5
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant='outline' size='icon-sm' aria-label='Previous'>
          <IconArrowLeft />
        </Button>
        <Button variant='outline' size='icon-sm' aria-label='Next'>
          <IconArrowRight />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
}

// Separator example
export const WithSeparator: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <ButtonGroup>
        <Button size='sm' variant={'solid'} tint={'accent'}>
          Copy
        </Button>
        <ButtonGroupSeparator />
        <Button size='sm' variant={'solid'} tint={'amber'}>
          Paste
        </Button>
      </ButtonGroup>
    </div>
  ),
}

// Split button
export const SplitButton: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Button</Button>
      <ButtonGroupSeparator />
      <Button size='icon'>
        <IconPlus />
      </Button>
    </ButtonGroup>
  ),
}

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText asChild>
        <Label htmlFor='name'>Text</Label>
      </ButtonGroupText>
      <Input placeholder='Type something here...' id='name' />
    </ButtonGroup>
  ),
}

// Input integration
export const WithInput: Story = {
  render: () => (
    <ButtonGroup>
      <Input placeholder='Search...' />
      <Button variant='outline' aria-label='Search'>
        <IconSearch />
      </Button>
    </ButtonGroup>
  ),
}

// Input group with text
export const WithInputGroup: Story = {
  render: () => {
    const [voiceEnabled, setVoiceEnabled] = useState(false)

    return (
      <div className='flex flex-col gap-4'>
        <ButtonGroup className='[--radius:9999rem]'>
          <ButtonGroup>
            <Button variant='outline' size='icon'>
              <IconPlus />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <InputGroup>
              <InputGroupInput
                placeholder={voiceEnabled ? 'Record and send audio...' : 'Send a message...'}
                disabled={voiceEnabled}
              />
              <InputGroupAddon align='inline-end'>
                <TooltipRoot>
                  <TooltipTrigger asChild>
                    <InputGroupButton
                      onClick={() => setVoiceEnabled(!voiceEnabled)}
                      size='icon-xs'
                      data-active={voiceEnabled}
                      className='data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100'
                      aria-pressed={voiceEnabled}
                    >
                      <IconSpeakerphone />
                    </InputGroupButton>
                  </TooltipTrigger>
                  <TooltipContent>Voice Mode</TooltipContent>
                </TooltipRoot>
              </InputGroupAddon>
            </InputGroup>
          </ButtonGroup>
        </ButtonGroup>
      </div>
    )
  },
}

// Dropdown menu integration
export const WithDropdown: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <ButtonGroup>
        <Button variant='outline'>Follow</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <IconChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='[--radius:1rem]'>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconVolumeOff />
                Mute Conversation
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCheck />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconAlertTriangle />
                Report Conversation
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconUserX />
                Block User
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconShare />
                Share Conversation
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCopy />
                Copy Conversation
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem tint='rose'>
                <IconTrash />
                Delete Conversation
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  ),
}

// Select integration
export const WithSelect: Story = {
  render: () => {
    const CURRENCIES = [
      {
        value: '$',
        label: 'US Dollar',
      },
      {
        value: '€',
        label: 'Euro',
      },
      {
        value: '£',
        label: 'British Pound',
      },
    ]

    const [currency, setCurrency] = useState('$')

    return (
      <div className='flex flex-col gap-4'>
        <ButtonGroup>
          <ButtonGroup>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className='font-mono w-fit'>
                <SelectValue>{currency}</SelectValue>
              </SelectTrigger>
              <SelectContent className='min-w-24'>
                {CURRENCIES.map(currency => (
                  <SelectItem key={currency.value} value={currency.value}>
                    {currency.value} <span className='text-muted-foreground'>{currency.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input placeholder='10.00' pattern='[0-9]*' />
          </ButtonGroup>
          <ButtonGroup>
            <Button aria-label='Send' size='icon' variant='outline'>
              <IconArrowRight />
            </Button>
          </ButtonGroup>
        </ButtonGroup>

        <ButtonGroup>
          <Select defaultValue='public'>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='public'>Public</SelectItem>
              <SelectItem value='private'>Private</SelectItem>
              <SelectItem value='team'>Team only</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <IconShare className='size-4' />
            Share
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button variant='outline'>Export</Button>
          <Select defaultValue='pdf'>
            <SelectTrigger className='w-24'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='pdf'>PDF</SelectItem>
              <SelectItem value='csv'>CSV</SelectItem>
              <SelectItem value='xlsx'>XLSX</SelectItem>
            </SelectContent>
          </Select>
        </ButtonGroup>
      </div>
    )
  },
}

// Popover integration
export const WithPopover: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant='outline'>
        <IconRobot /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' size='icon' aria-label='Open Popover'>
            <IconChevronDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent align='end' className='rounded-xl p-0 text-sm max-w-80'>
          <div className='px-4 py-3'>
            <div className='text-sm font-medium'>Agent Tasks</div>
          </div>
          <Divider />
          <div className='p-4 space-y-2'>
            <Textarea placeholder='Describe your task in natural language.' className='mb-4 resize-none' />
            <p className='font-medium'>Start a new task with Copilot</p>
            <p className='text-fg/60'>
              Describe your task in natural language. Copilot will work in the background and open a pull request for
              your review.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  ),
}
