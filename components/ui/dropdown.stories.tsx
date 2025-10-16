import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconArrowBackUpDouble, IconFiles, IconSettings, IconTools, IconTrash } from '@tabler/icons-react'
import { useState } from 'react'
import { userEvent, within } from 'storybook/test'

import { Button } from './button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './dropdown'

const meta = {
  title: 'UI/Dropdown Menu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>New Tab</DropdownMenuItem>
        <DropdownMenuItem>New Window</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem tint='rose'>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const BasicOpen: Story = {
  render: () => (
    <DropdownMenu open>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>New Tab</DropdownMenuItem>
        <DropdownMenuItem>New Window</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>
          <IconSettings />
          <div>
            <div>Settings</div>
            <div className='opacity-60 text-xs'>Double-click an event to mark it as read</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem tint='rose'>Delete</DropdownMenuItem>
        <DropdownMenuItem tint='rose'>
          <IconTrash />
          Delete
        </DropdownMenuItem>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuLabel inset>Actions</DropdownMenuLabel>
        <DropdownMenuItem inset>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          New Tab
          <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          New Private Window
          <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByText('Actions')
    await userEvent.click(trigger)
  },
}

export const WithSubmenus: Story = {
  render: () => {
    const [position, setPosition] = useState('bottom')

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Edit</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            Copy
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuLabel inset>Submenu with Radio Group</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='right'>Right</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='right'>
              <div>
                <div>Right</div>
                <div className='opacity-60 text-xs'>Double-click an event to mark it as read</div>
              </div>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>More Tools</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Save Page As...</DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
              <DropdownMenuItem>Name Window...</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>
              <IconFiles />
              More Tools
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Save Page As...</DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
              <DropdownMenuItem>Name Window...</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuLabel>Normal Submenu</DropdownMenuLabel>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <IconTools />
              <div>
                <div>More Tools</div>
                <div className='opacity-60 text-xs'>Double-click an event to mark it as read</div>
              </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Save Page As...</DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
              <DropdownMenuItem>Name Window...</DropdownMenuItem>
              <DropdownMenuItem>General Menu Item</DropdownMenuItem>
              <DropdownMenuItem>General Menu Item</DropdownMenuItem>
              <DropdownMenuItem>General Menu Item</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Save Page As...</DropdownMenuItem>
                  <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
                  <DropdownMenuItem>Name Window...</DropdownMenuItem>
                  <DropdownMenuItem>General Menu Item</DropdownMenuItem>
                  <DropdownMenuItem>General Menu Item</DropdownMenuItem>
                  <DropdownMenuItem>General Menu Item</DropdownMenuItem>
                  <DropdownMenuItem>General Menu Item</DropdownMenuItem>
                  <DropdownMenuItem>General Menu Item</DropdownMenuItem>
                  <DropdownMenuItem>General Menu Item</DropdownMenuItem>
                  <DropdownMenuItem>General Menu Item</DropdownMenuItem>
                  <DropdownMenuItem>General Menu Item</DropdownMenuItem>
                  <DropdownMenuItem>General Menu Item</DropdownMenuItem>
                  <DropdownMenuItem>General Menu Item</DropdownMenuItem>
                  <DropdownMenuItem>General Menu Item</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>General Menu Item</DropdownMenuItem>
              <DropdownMenuItem>General Menu Item</DropdownMenuItem>
              <DropdownMenuItem>General Menu Item</DropdownMenuItem>
              <DropdownMenuItem>General Menu Item</DropdownMenuItem>
              <DropdownMenuItem>General Menu Item</DropdownMenuItem>
              <DropdownMenuItem>General Menu Item</DropdownMenuItem>
              <DropdownMenuItem>General Menu Item</DropdownMenuItem>
              <DropdownMenuItem>General Menu Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
          <DropdownMenuItem>General Menu Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByText('Edit')
    await userEvent.click(trigger)
  },
}

export const WithCheckboxes: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true)
    const [showActivityBar, setShowActivityBar] = useState(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>View</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
            <div>
              <div>Activity Bar</div>
              <div className='opacity-60 text-xs'>Double-click an event to mark it as read</div>
            </div>
          </DropdownMenuCheckboxItem>
          <DropdownMenuItem>
            <IconArrowBackUpDouble />
            <div>Mark All as Unread</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconArrowBackUpDouble />
            <div>
              <div>Mark All as Unread</div>
              <div className='opacity-60 text-xs'>Double-click an event to mark it as read</div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByText('View')
    await userEvent.click(trigger)
  },
}

export const WithRadioGroup: Story = {
  render: () => {
    const [position, setPosition] = useState('bottom')

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Position</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='right'>Right</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='right'>
              <div>
                <div>Right</div>
                <div className='opacity-60 text-xs'>Double-click an event to mark it as read</div>
              </div>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuItem>
            <IconArrowBackUpDouble />
            <div>Mark All as Unread</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconArrowBackUpDouble />
            <div>
              <div>Mark All as Unread</div>
              <div className='opacity-60 text-xs'>Double-click an event to mark it as read</div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByText('Position')
    await userEvent.click(trigger)
  },
}

export const WithMixedContent: Story = {
  render: () => {
    const [position, setPosition] = useState('bottom')
    const [showStatusBar, setShowStatusBar] = useState(true)
    const [showActivityBar, setShowActivityBar] = useState(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Position</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='bottom'>
              Bottom
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='right'>
              <div>
                <div>Right</div>
                <div className='opacity-60 text-xs'>Double-click an event to mark it as read</div>
              </div>
              <DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
            </DropdownMenuRadioItem>
            <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
              Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
              Activity Bar
              <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
            </DropdownMenuCheckboxItem>
            <DropdownMenuItem>
              <IconArrowBackUpDouble />
              <div>
                <div>Right</div>
                <div className='opacity-60 text-xs'>Double-click an event to mark it as read</div>
              </div>
              <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByText('Position')
    await userEvent.click(trigger)
  },
}

export const WithHiddenIndicators: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true)
    const [position, setPosition] = useState('bottom')

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Hidden Indicators</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Checkbox with hidden indicator</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar} hideIndicator>
            Status Bar (no indicator)
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Radio group with hidden indicators</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value='top' hideIndicator>
              Top (no indicator)
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='bottom' hideIndicator>
              Bottom (no indicator)
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='right' hideIndicator>
              Right (no indicator)
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByText('Hidden Indicators')
    await userEvent.click(trigger)
  },
}
