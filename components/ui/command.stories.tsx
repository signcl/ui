import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconCalendar, IconSearch } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command'

const meta: Meta<typeof Command> = {
  title: 'UI/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Command>

/**
 * A basic command menu with groups and items.
 */
export const Basic: Story = {
  render: args => (
    <div className='w-[400px]'>
      <Command {...args}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>
              <IconCalendar />
              <span>Calendar</span>
              <CommandShortcut>⌘C</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <IconSearch />
              <span>Search</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Settings</span>
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Quick Actions'>
            <CommandItem>
              <span>New Project</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>New Document</span>
              <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
}

/**
 * A command dialog that can be opened and closed.
 */
export const WithDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Command Menu</Button>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder='Type a command or search...' />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading='Suggestions'>
              <CommandItem
                onSelect={() => {
                  console.log('Calendar selected')
                  setOpen(false)
                }}
              >
                <IconCalendar />
                <span>Calendar</span>
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  console.log('Search selected')
                  setOpen(false)
                }}
              >
                <IconSearch />
                <span>Search</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  console.log('Settings selected')
                  setOpen(false)
                }}
              >
                <span>Settings</span>
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    )
  },
}

/**
 * Example of a custom searchable command menu.
 */
export const WithCustomSearch: Story = {
  render: () => {
    const [search, setSearch] = useState('')

    const items = [
      { name: 'Calendar', shortcut: '⌘C', group: 'Apps' },
      { name: 'Mail', shortcut: '⌘M', group: 'Apps' },
      { name: 'Messages', shortcut: '⌘E', group: 'Apps' },
      { name: 'New Project', shortcut: '⌘N', group: 'Actions' },
      { name: 'New Document', shortcut: '⌘D', group: 'Actions' },
      { name: 'Settings', shortcut: '⌘,', group: 'Settings' },
      { name: 'Preferences', shortcut: '⌘P', group: 'Settings' },
    ]

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    const groupedItems = filteredItems.reduce(
      (groups, item) => {
        const group = groups[item.group] || []
        group.push(item)
        groups[item.group] = group
        return groups
      },
      {} as Record<string, typeof items>
    )

    return (
      <div className='w-[400px]'>
        <Command>
          <CommandInput placeholder='Search...' value={search} onValueChange={setSearch} />
          <CommandList>
            {filteredItems.length === 0 && <CommandEmpty>No results found.</CommandEmpty>}

            {Object.entries(groupedItems).map(([groupName, items]) => (
              <div key={groupName}>
                <CommandGroup heading={groupName}>
                  {items.map(item => (
                    <CommandItem key={item.name}>
                      <span>{item.name}</span>
                      <CommandShortcut>{item.shortcut}</CommandShortcut>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </div>
            ))}
          </CommandList>
        </Command>
      </div>
    )
  },
}
