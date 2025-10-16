import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconBold,
  IconClipboard,
  IconCopy,
  IconCut,
  IconDeviceFloppy,
  IconDeviceIpadHorizontalExclamation,
  IconFileText,
  IconItalic,
  IconLink,
  IconMail,
  IconPhoto,
  IconScreenShare,
  IconSettings,
  IconTrash,
  IconUnderline,
} from '@tabler/icons-react'
import React from 'react'

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from './menubar'

const meta = {
  title: 'UI/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
  render: () => {
    // Using state to demonstrate controlled checkbox and radio items
    const [showStatusBar, setShowStatusBar] = React.useState(true)
    const [showActivityBar, setShowActivityBar] = React.useState(false)
    const [showPanel, setShowPanel] = React.useState(false)
    const [position, setPosition] = React.useState<'left' | 'center' | 'right'>('left')
    const [zoom, setZoom] = React.useState<string>('100%')

    return (
      <div className='flex w-[700px] flex-col gap-10'>
        <div className='flex flex-col gap-2'>
          <h2 className='mb-2 text-lg font-semibold'>Complete Application Menubar</h2>
          <Menubar className='rounded-md border'>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Open <MenubarShortcut>⌘O</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>
                    <IconFileText className='size-4' />
                    Share
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>
                      <IconMail className='size-4' />
                      Email
                    </MenubarItem>
                    <MenubarItem>
                      <IconScreenShare className='size-4' />
                      Screen Share
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  <IconDeviceFloppy className='size-4' />
                  Save <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>Save As</MenubarItem>
                <MenubarItem tint='rose'>Discard</MenubarItem>
                <MenubarItem tint='rose'>
                  <IconTrash />
                  Discard
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <IconCut className='size-4' />
                  Cut <MenubarShortcut>⌘X</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <IconCopy className='size-4' />
                  Copy <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <IconClipboard className='size-4' />
                  Paste <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Find</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Find in File...</MenubarItem>
                    <MenubarItem>Find in Project...</MenubarItem>
                    <MenubarItem>Find and Replace...</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSub>
                  <MenubarSubTrigger>
                    <IconFileText className='size-4' />
                    Find
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Find in File...</MenubarItem>
                    <MenubarItem>Find in Project...</MenubarItem>
                    <MenubarItem>Find and Replace...</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
                  Status Bar
                </MenubarCheckboxItem>
                <MenubarCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
                  Activity Bar
                </MenubarCheckboxItem>
                <MenubarCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                  Panel
                </MenubarCheckboxItem>
                <MenubarRadioGroup value={position} onValueChange={setPosition as (value: string) => void}>
                  <MenubarRadioItem value='left'>Left</MenubarRadioItem>
                  <MenubarRadioItem value='center'>Center</MenubarRadioItem>
                  <MenubarRadioItem value='right'>Right</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarRadioGroup value={position} onValueChange={setPosition as (value: string) => void}>
                  <MenubarRadioItem value='left'>
                    <IconAlignLeft className='size-4' />
                    Left
                  </MenubarRadioItem>
                  <MenubarRadioItem value='center'>
                    <IconAlignCenter className='size-4' />
                    Center
                  </MenubarRadioItem>
                  <MenubarRadioItem value='right'>
                    <IconAlignRight className='size-4' />
                    Right
                  </MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarLabel inset>Info</MenubarLabel>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger inset>Appearance</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarRadioGroup value={position} onValueChange={setPosition as (value: string) => void}>
                      <MenubarRadioItem value='left'>
                        <IconAlignLeft className='size-4' />
                        Left
                      </MenubarRadioItem>
                      <MenubarRadioItem value='center'>
                        <IconAlignCenter className='size-4' />
                        Center
                      </MenubarRadioItem>
                      <MenubarRadioItem value='right'>
                        <IconAlignRight className='size-4' />
                        Right
                      </MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarRadioGroup value={zoom} onValueChange={setZoom}>
                      <MenubarRadioItem value='50%'>50%</MenubarRadioItem>
                      <MenubarRadioItem value='75%'>75%</MenubarRadioItem>
                      <MenubarRadioItem value='100%'>100%</MenubarRadioItem>
                      <MenubarRadioItem value='125%'>125%</MenubarRadioItem>
                      <MenubarRadioItem value='150%'>150%</MenubarRadioItem>
                    </MenubarRadioGroup>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarItem inset>With Inset</MenubarItem>
                <MenubarItem inset>
                  <IconTrash />
                  With Inset
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Format</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarItem>
                    <IconBold className='size-4' />
                    Bold <MenubarShortcut>⌘B</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <IconItalic className='size-4' />
                    Italic <MenubarShortcut>⌘I</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <IconUnderline className='size-4' />
                    Underline <MenubarShortcut>⌘U</MenubarShortcut>
                  </MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarItem>
                    <IconLink className='size-4' />
                    Add Link
                  </MenubarItem>
                  <MenubarItem>
                    <IconPhoto className='size-4' />
                    Add Image
                  </MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarLabel>Info</MenubarLabel>
                <MenubarSeparator />
                <MenubarItem>Documentation</MenubarItem>
                <MenubarItem>View License</MenubarItem>
                <MenubarLabel>Support</MenubarLabel>
                <MenubarSeparator />
                <MenubarItem>Community Forum</MenubarItem>
                <MenubarItem>Contact Support</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <IconSettings className='size-4' />
                  Preferences
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <div className='bg-bg/30 mt-4 rounded-md border p-4'>
            <h3 className='text-md mb-2 font-medium'>Current UI State:</h3>
            <div className='grid grid-cols-2 gap-2 text-sm'>
              <div>Status Bar:</div>
              <div>{showStatusBar ? 'Visible' : 'Hidden'}</div>

              <div>Activity Bar:</div>
              <div>{showActivityBar ? 'Visible' : 'Hidden'}</div>

              <div>Panel:</div>
              <div>{showPanel ? 'Visible' : 'Hidden'}</div>

              <div>Text Alignment:</div>
              <div className='capitalize'>{position}</div>

              <div>Zoom Level:</div>
              <div>{zoom}</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
