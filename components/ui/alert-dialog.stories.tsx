import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog'
import { Checkbox } from './checkbox'
import { Label } from './label'

const meta = {
  title: 'UI/Alert Dialog',
  component: AlertDialog,
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
  argTypes: {},
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof AlertDialog>

// Basic example with title and description
export const Basic: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Open Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant='link'>Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button tint='accent'>Continue</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const BasicOpen: Story = {
  render: () => (
    <AlertDialog open>
      <AlertDialogTrigger asChild>
        <Button>Open Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant='link'>Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button tint='accent'>Continue</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

// Example with custom styling
export const CustomStyling: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button tint='red'>Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-red-600'>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            Are you absolutely sure? This action is permanent and cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant='link'>Never mind</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button tint='red'>Yes, delete my account</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

// Example with long content to demonstrate scrolling
export const LongContent: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Terms & Conditions</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Terms & Conditions</AlertDialogTitle>
          <AlertDialogDescription className='space-y-4'>
            {Array.from({ length: 10 }).map((_, i) => (
              <p key={i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant='link'>Decline</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button tint='accent'>Accept</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

// Example with interactive content
export const Interactive: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Interactive Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Action</AlertDialogTitle>
          <AlertDialogDescription>
            <div className='space-y-4'>
              <p>Please confirm your understanding of the following:</p>
              <div className='flex items-center gap-2'>
                <Checkbox type='checkbox' id='confirm1' />
                <Label htmlFor='confirm1'>I understand this action is permanent</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox type='checkbox' id='confirm2' />
                <Label htmlFor='confirm2'>I have backed up my data</Label>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant='link'>Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button tint='accent'>Proceed</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

// Add play function to demonstrate interaction
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const openButton = canvas.getByText('Open Dialog')
  await userEvent.click(openButton)
}

CustomStyling.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const deleteButton = canvas.getByText('Delete Account')
  await userEvent.click(deleteButton)
}

LongContent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const termsButton = canvas.getByText('Terms & Conditions')
  await userEvent.click(termsButton)
}

Interactive.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const confirmButton = canvas.getByText('Interactive Dialog')
  await userEvent.click(confirmButton)
}
