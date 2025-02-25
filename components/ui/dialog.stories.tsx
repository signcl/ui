import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'

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
        <div className='grid gap-2'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='name' className='text-right'>
              Name
            </label>
            <input id='name' className='col-span-3 rounded border p-2' placeholder='Enter your name' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='username' className='text-right'>
              Username
            </label>
            <input id='username' className='col-span-3 rounded border p-2' placeholder='@username' />
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
        <div className='grid gap-2'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='name' className='text-right'>
              Name
            </label>
            <input id='name' className='col-span-3 rounded border p-2' placeholder='Enter your name' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='username' className='text-right'>
              Username
            </label>
            <input id='username' className='col-span-3 rounded border p-2' placeholder='@username' />
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
        <div className='max-h-[60vh] overflow-auto'>
          {Array.from({ length: 15 }).map((_, i) => (
            <p key={i} className='mb-4'>
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
        <form className='grid gap-2'>
          <div className='flex items-center gap-4'>
            <input type='checkbox' id='marketing' />
            <label htmlFor='marketing'>Receive marketing emails</label>
          </div>
          <div className='flex items-center gap-4'>
            <input type='checkbox' id='updates' />
            <label htmlFor='updates'>Receive product updates</label>
          </div>
          <div className='grid gap-2'>
            <label htmlFor='timezone'>Timezone</label>
            <select id='timezone' className='rounded border p-2'>
              <option>UTC-8</option>
              <option>UTC-7</option>
              <option>UTC-6</option>
              <option>UTC-5</option>
            </select>
          </div>
        </form>
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
          <DialogTitle className='text-red-600'>Delete Account</DialogTitle>
          <DialogDescription className='text-red-500'>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-2'>
          <div className='flex items-center gap-4'>
            <input type='checkbox' id='confirm' />
            <label htmlFor='confirm'>I understand that this action is permanent</label>
          </div>
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
