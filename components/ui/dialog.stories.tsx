import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'

import { Button } from '@/components/ui/button'

import { Checkbox } from './checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'
import { Input } from './input'
import { Label } from './label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div className='p-6'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof Dialog>

// Basic example with title and description
export const Basic: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you’re done.</DialogDescription>
        </DialogHeader>
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
        </div>
        <DialogFooter>
          <Button variant='link'>Cancel</Button>
          <Button tint='accent'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const BasicOpen: Story = {
  render: () => (
    <Dialog open>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you’re done.</DialogDescription>
        </DialogHeader>
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
        </div>
        <DialogFooter>
          <Button variant='link'>Cancel</Button>
          <Button tint='accent'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// Example with long content
export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Terms of Service</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>Please read our terms of service carefully.</DialogDescription>
        </DialogHeader>
        <div className='space-y-4 overflow-auto'>
          {Array.from({ length: 15 }).map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          ))}
        </div>
        <DialogFooter>
          <Button variant='link'>Decline</Button>
          <Button tint='accent'>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// Example with form elements
export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Settings</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Account Settings</DialogTitle>
          <DialogDescription>Update your account preferences and notifications.</DialogDescription>
        </DialogHeader>
        <div className='flex items-center gap-2'>
          <Checkbox type='checkbox' id='marketing' />
          <Label htmlFor='marketing'>Receive marketing emails</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox type='checkbox' id='updates' />
          <Label htmlFor='updates'>Receive product updates</Label>
        </div>
        <div className='space-y-2'>
          <Label htmlFor='timezone'>Receive product updates</Label>
          <Select>
            <SelectTrigger id='timezone'>
              <SelectValue placeholder='Select a timezone' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='utc-8'>UTC-8</SelectItem>
              <SelectItem value='utc-7'>UTC-7</SelectItem>
              <SelectItem value='utc-6'>UTC-6</SelectItem>
              <SelectItem value='utc-5'>UTC-5</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button variant='link'>Reset</Button>
          <Button tint='accent'>Save preferences</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// Example with destructive action
export const Destructive: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button tint='red'>Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-rose-500'>Delete Account</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </DialogDescription>
        </DialogHeader>

        <div className='flex items-center gap-2'>
          <Checkbox type='checkbox' id='confirm' />
          <Label htmlFor='confirm'>I understand that this action is permanent</Label>
        </div>

        <DialogFooter>
          <Button variant='link'>Cancel</Button>
          <Button tint='red'>Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// Add play functions to demonstrate interactions
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const openButton = canvas.getByText('Open Dialog')
  await userEvent.click(openButton)
}

Destructive.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const deleteButton = canvas.getByText('Delete Account')
  await userEvent.click(deleteButton)
}

LongContent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const termsButton = canvas.getByText('Terms of Service')
  await userEvent.click(termsButton)
}

WithForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const editButton = canvas.getByText('Edit Settings')
  await userEvent.click(editButton)
}
