import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  IconArrowUp,
  IconBrandJavascript,
  IconCheck,
  IconChevronDown,
  IconCircleCheckFilled,
  IconCopy,
  IconCornerDownLeft,
  IconCreditCard,
  IconDots,
  IconHelpCircle,
  IconInfoCircle,
  IconLink,
  IconLoader,
  IconMail,
  IconPlus,
  IconRefresh,
  IconSearch,
  IconStar,
} from '@tabler/icons-react'
import * as React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'

import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown'
import { Label } from '@/components/ui/label'
import { Loading } from '@/components/ui/loading'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { TooltipContent, TooltipRoot, TooltipTrigger } from '@/components/ui/tooltip'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './input-group'

const meta = {
  title: 'UI/Input Group',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof InputGroup>

// Demo
export const Demo: Story = {
  render: () => (
    <div className='grid w-full max-w-sm gap-6'>
      <InputGroup>
        <InputGroupInput placeholder='Search...' />
        <InputGroupAddon>
          <IconSearch />
        </InputGroupAddon>
        <InputGroupAddon align='inline-end'>12 results</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder='example.com' className='!pl-1' />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align='inline-end'>
          <TooltipRoot>
            <TooltipTrigger asChild>
              <InputGroupButton className='rounded-full' size='icon-xs'>
                <IconInfoCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>This is content in a tooltip.</TooltipContent>
          </TooltipRoot>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder='Ask, Search or Chat...' />
        <InputGroupAddon align='block-end'>
          <InputGroupButton variant='outline' className='rounded-full' size='icon-xs'>
            <IconPlus />
          </InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant='ghost'>Auto</InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side='top' align='start' className='[--radius:0.95rem]'>
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupText className='ml-auto'>52% used</InputGroupText>
          <Separator orientation='vertical' className='h-4' />
          <InputGroupButton variant='default' className='rounded-full' size='icon-xs' disabled>
            <IconArrowUp />
            <span className='sr-only'>Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder='@shadcn' />
        <InputGroupAddon align='inline-end'>
          <div className='text-emerald-500 flex size-4 items-center justify-center rounded-full'>
            <IconCircleCheckFilled />
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

// Icon
export const Icon: Story = {
  render: () => (
    <div className='grid w-full max-w-sm gap-6'>
      <InputGroup>
        <InputGroupInput placeholder='Search...' />
        <InputGroupAddon>
          <IconSearch />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type='email' placeholder='Enter your email' />
        <InputGroupAddon>
          <IconMail />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder='Card number' />
        <InputGroupAddon>
          <IconCreditCard />
        </InputGroupAddon>
        <InputGroupAddon align='inline-end'>
          <IconCheck />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder='Card number' />
        <InputGroupAddon align='inline-end'>
          <IconStar />
          <IconInfoCircle />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

// Text
export const Text: Story = {
  render: () => (
    <div className='grid w-full max-w-sm gap-6'>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder='0.00' />
        <InputGroupAddon align='inline-end'>
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder='example.com' className='!pl-0.5' />
        <InputGroupAddon align='inline-end'>
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder='Enter your username' />
        <InputGroupAddon align='inline-end'>
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder='Enter your message' />
        <InputGroupAddon align='block-end'>
          <InputGroupText className='text-muted-foreground text-xs'>120 characters left</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

// Button
export const Button: Story = {
  render: () => {
    const { copyToClipboard, isCopied } = useCopyToClipboard()
    const [isFavorite, setIsFavorite] = React.useState(false)

    return (
      <div className='grid w-full max-w-sm gap-6'>
        <InputGroup>
          <InputGroupInput placeholder='https://x.com/shadcn' readOnly />
          <InputGroupAddon align='inline-end'>
            <InputGroupButton
              aria-label='Copy'
              title='Copy'
              size='icon-xs'
              onClick={() => {
                copyToClipboard('https://x.com/shadcn')
              }}
            >
              {isCopied ? <IconCheck /> : <IconCopy />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup className='rounded-full'>
          <Popover>
            <PopoverTrigger asChild>
              <InputGroupAddon>
                <InputGroupButton variant='ghost' size='icon-xs' className='rounded-full'>
                  <IconInfoCircle />
                </InputGroupButton>
              </InputGroupAddon>
            </PopoverTrigger>
            <PopoverContent align='start' className='flex flex-col gap-1 rounded-xl text-sm'>
              <p className='font-medium'>Your connection is not secure.</p>
              <p>You should not enter any sensitive information on this site.</p>
            </PopoverContent>
          </Popover>
          <InputGroupAddon className='text-muted-foreground pl-0.5'>https://</InputGroupAddon>
          <InputGroupInput id='input-secure-19' />
          <InputGroupAddon align='inline-end'>
            <InputGroupButton onClick={() => setIsFavorite(!isFavorite)} size='icon-xs' className='rounded-full'>
              <IconStar
                data-favorite={isFavorite}
                className='data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600'
              />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder='Type to search...' />
          <InputGroupAddon align='inline-end'>
            <InputGroupButton variant='ghost'>Search</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  },
}

// Tooltip
export const TooltipExample: Story = {
  render: () => (
    <div className='grid w-full max-w-sm gap-4'>
      <InputGroup>
        <InputGroupInput placeholder='Enter password' type='password' />
        <InputGroupAddon align='inline-end'>
          <TooltipRoot>
            <TooltipTrigger asChild>
              <InputGroupButton variant='ghost' aria-label='Info' size='icon-xs'>
                <IconInfoCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>Password must be at least 8 characters</p>
            </TooltipContent>
          </TooltipRoot>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder='Your email address' />
        <InputGroupAddon align='inline-end'>
          <TooltipRoot>
            <TooltipTrigger asChild>
              <InputGroupButton variant='ghost' aria-label='Help' size='icon-xs'>
                <IconHelpCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>We&apos;ll use this to send you notifications</p>
            </TooltipContent>
          </TooltipRoot>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder='Enter API key' />
        <TooltipRoot>
          <TooltipTrigger asChild>
            <InputGroupAddon>
              <InputGroupButton variant='ghost' aria-label='Help' size='icon-xs'>
                <IconHelpCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </TooltipTrigger>
          <TooltipContent side='left'>
            <p>Click for help with API keys</p>
          </TooltipContent>
        </TooltipRoot>
      </InputGroup>
    </div>
  ),
}

// Textarea
export const Textarea: Story = {
  render: () => (
    <div className='grid w-full max-w-md gap-4'>
      <InputGroup>
        <InputGroupTextarea
          id='textarea-code-32'
          placeholder="console.log('Hello, world!');"
          className='min-h-[200px]'
        />
        <InputGroupAddon align='block-end' className='border-t'>
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size='sm' className='ml-auto' variant='default'>
            Run <IconCornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align='block-start' className='border-b'>
          <InputGroupText className='font-mono font-medium'>
            <IconBrandJavascript />
            script.js
          </InputGroupText>
          <InputGroupButton className='ml-auto' size='icon-xs'>
            <IconRefresh />
          </InputGroupButton>
          <InputGroupButton variant='ghost' size='icon-xs'>
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

// Spinner
export const SpinnerExample: Story = {
  render: () => (
    <div className='grid w-full max-w-sm gap-4'>
      <InputGroup data-disabled>
        <InputGroupInput placeholder='Searching...' disabled />
        <InputGroupAddon align='inline-end'>
          <Loading />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder='Processing...' disabled />
        <InputGroupAddon>
          <Loading />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder='Saving changes...' disabled />
        <InputGroupAddon align='inline-end'>
          <InputGroupText>Saving...</InputGroupText>
          <Loading />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder='Refreshing data...' disabled />
        <InputGroupAddon>
          <IconLoader className='animate-spin' />
        </InputGroupAddon>
        <InputGroupAddon align='inline-end'>
          <InputGroupText className='text-muted-foreground'>Please wait...</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

// Label
export const LabelExample: Story = {
  render: () => (
    <div className='grid w-full max-w-sm gap-4'>
      <InputGroup>
        <InputGroupInput id='email' placeholder='shadcn' />
        <InputGroupAddon>
          <Label htmlFor='email'>@</Label>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id='email-2' placeholder='shadcn@vercel.com' />
        <InputGroupAddon align='block-start'>
          <Label htmlFor='email-2' className='text-foreground'>
            Email
          </Label>
          <TooltipRoot>
            <TooltipTrigger asChild>
              <InputGroupButton variant='ghost' aria-label='Help' className='ml-auto rounded-full' size='icon-xs'>
                <IconInfoCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>We&apos;ll use this to send you notifications</p>
            </TooltipContent>
          </TooltipRoot>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

// Dropdown
export const Dropdown: Story = {
  render: () => (
    <div className='grid w-full max-w-sm gap-4'>
      <InputGroup>
        <InputGroupInput placeholder='Enter file name' />
        <InputGroupAddon align='inline-end'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant='ghost' aria-label='More' size='icon-xs'>
                <IconDots />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Copy path</DropdownMenuItem>
              <DropdownMenuItem>Open location</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className='[--radius:1rem]'>
        <InputGroupInput placeholder='Enter search query' />
        <InputGroupAddon align='inline-end'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant='ghost' className='!pr-1.5 text-xs'>
                Search In... <IconChevronDown className='size-3' />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='[--radius:0.95rem]'>
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Blog Posts</DropdownMenuItem>
              <DropdownMenuItem>Changelog</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

// Button Group
export const ButtonGroupExample: Story = {
  render: () => (
    <div className='grid w-full max-w-sm gap-6'>
      <ButtonGroup>
        <ButtonGroupText asChild>
          <Label htmlFor='url'>https://</Label>
        </ButtonGroupText>
        <InputGroup>
          <InputGroupInput id='url' />
          <InputGroupAddon align='inline-end'>
            <IconLink />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  ),
}

// Custom
export const Custom: Story = {
  render: () => (
    <div className='grid w-full max-w-sm gap-6'>
      <InputGroup>
        <TextareaAutosize
          data-slot='input-group-control'
          className='flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm'
          placeholder='Autoresize textarea...'
        />
        <InputGroupAddon align='block-end'>
          <InputGroupButton className='ml-auto' size='sm' variant='default'>
            Submit
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}
