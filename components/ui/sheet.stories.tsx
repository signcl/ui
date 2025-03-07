import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button' // Assuming you have a Button component

import { Input } from './input'
import { Label } from './label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'

/**
 * Sheet is a dialog that slides in from the edge of the screen.
 * It can be triggered from any side of the screen: top, right, bottom, or left.
 */
const meta: Meta<typeof Sheet> = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sheet>

/**
 * Default sheet that slides in from the right side.
 */
export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent className='space-y-4'>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you’re done.</SheetDescription>
        </SheetHeader>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input id='name' placeholder='Enter your name' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='username' className='text-right'>
              Username
            </Label>
            <Input id='username' placeholder='@username' />
          </div>
          <SheetClose asChild>
            <Button type='submit'>Save changes</Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

/**
 * Default sheet that slides in from the right side with the content already open.
 */
export const DefaultOpen: Story = {
  render: () => (
    <Sheet open>
      <SheetTrigger asChild>
        <Button variant='outline'>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent className='space-y-4'>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you’re done.</SheetDescription>
        </SheetHeader>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input id='name' placeholder='Enter your name' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='username' className='text-right'>
              Username
            </Label>
            <Input id='username' placeholder='@username' />
          </div>
          <SheetClose asChild>
            <Button type='submit'>Save changes</Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

/**
 * Sheet that slides in from the left side.
 */
export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side='left' className='space-y-4'>
        <SheetHeader>
          <SheetTitle>Left Side Sheet</SheetTitle>
          <SheetDescription>This sheet slides in from the left side of the screen.</SheetDescription>
        </SheetHeader>
        <div>Content goes here</div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

/**
 * Sheet that slides in from the top of the screen.
 */
export const TopSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side='top' className='space-y-4'>
        <SheetHeader>
          <SheetTitle>Top Sheet</SheetTitle>
          <SheetDescription>This sheet slides down from the top of the screen.</SheetDescription>
        </SheetHeader>
        <div>Content goes here</div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

/**
 * Sheet that slides in from the bottom of the screen.
 */
export const BottomSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side='bottom' className='space-y-4'>
        <SheetHeader>
          <SheetTitle>Bottom Sheet</SheetTitle>
          <SheetDescription>This sheet slides up from the bottom of the screen.</SheetDescription>
        </SheetHeader>
        <div>Content goes here</div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

/**
 * Sheet with a custom width.
 */
export const CustomWidth: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Wide Sheet</Button>
      </SheetTrigger>
      <SheetContent className='space-y-4 sm:max-w-[300px]'>
        <SheetHeader>
          <SheetTitle>Custom Width Sheet</SheetTitle>
          <SheetDescription>This sheet has a custom width.</SheetDescription>
        </SheetHeader>
        <div>
          <p>This sheet is wider than the default 450px on larger screens.</p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
