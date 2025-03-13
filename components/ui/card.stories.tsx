import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button' // Adjust import path as needed
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is where your content will appear. You can add forms, text, or any other elements here.</p>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>Make changes to your account here.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='space-y-2'>
          <label
            htmlFor='name'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Name
          </label>
          <input
            id='name'
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            placeholder='John Doe'
            defaultValue='John Doe'
          />
        </div>
        <div className='space-y-2'>
          <label
            htmlFor='email'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            placeholder='john.doe@example.com'
            defaultValue='john.doe@example.com'
          />
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  ),
}

export const Notification: Story = {
  render: () => (
    <Card className='w-[380px]'>
      <CardHeader className='pb-3'>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='flex items-center gap-4 rounded-md border p-4'>
          <div className='flex-shrink-0 rounded-full bg-primary/10 p-2'>
            <div className='size-4 rounded-full bg-primary' />
          </div>
          <div className='flex-1'>
            <p className='text-sm font-medium'>Your order has shipped!</p>
            <p className='text-sm text-muted-foreground'>Your package is on its way. You can track it here.</p>
          </div>
          <div className='text-xs text-muted-foreground'>Just now</div>
        </div>
        <div className='flex items-center gap-4 rounded-md border p-4'>
          <div className='flex-shrink-0 rounded-full bg-primary/10 p-2'>
            <div className='size-4 rounded-full bg-primary' />
          </div>
          <div className='flex-1'>
            <p className='text-sm font-medium'>New login detected</p>
            <p className='text-sm text-muted-foreground'>A new login was detected from New York, USA.</p>
          </div>
          <div className='text-xs text-muted-foreground'>2 hours ago</div>
        </div>
        <div className='flex items-center gap-4 rounded-md border p-4'>
          <div className='flex-shrink-0 rounded-full bg-primary/10 p-2'>
            <div className='size-4 rounded-full bg-primary' />
          </div>
          <div className='flex-1'>
            <p className='text-sm font-medium'>Welcome to our platform!</p>
            <p className='text-sm text-muted-foreground'>
              Thank you for signing up. Get started with your new account.
            </p>
          </div>
          <div className='text-xs text-muted-foreground'>5 hours ago</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant='outline' className='w-full'>
          View all notifications
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card className='w-[350px] overflow-hidden'>
      <img src='/api/placeholder/600/400' alt='Card cover' className='w-full h-48 object-cover' />
      <CardHeader>
        <CardTitle>Mountain Retreat</CardTitle>
        <CardDescription>Explore the beauty of nature</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm'>
          Experience breathtaking views and serene environments at our mountain retreat locations. Perfect for weekend
          getaways or extended vacations.
        </p>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <div className='text-sm text-muted-foreground'>$199/night</div>
        <Button size='sm'>Book now</Button>
      </CardFooter>
    </Card>
  ),
}

export const Pricing: Story = {
  render: () => (
    <div className='flex gap-6'>
      <Card className='w-[300px]'>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
          <CardDescription>Perfect for individuals</CardDescription>
          <div className='mt-2 flex items-baseline'>
            <span className='text-4xl font-bold'>$9</span>
            <span className='ml-1 text-muted-foreground'>/month</span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='mr-2 h-4 w-4 text-primary'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <span>1 User</span>
            </li>
            <li className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='mr-2 h-4 w-4 text-primary'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <span>5GB Storage</span>
            </li>
            <li className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='mr-2 h-4 w-4 text-primary'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Email Support</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className='w-full'>Get Started</Button>
        </CardFooter>
      </Card>
      <Card className='w-[300px] border-primary'>
        <CardHeader>
          <div className='text-primary text-sm font-medium uppercase mb-1'>Popular</div>
          <CardTitle>Professional</CardTitle>
          <CardDescription>Perfect for small teams</CardDescription>
          <div className='mt-2 flex items-baseline'>
            <span className='text-4xl font-bold'>$29</span>
            <span className='ml-1 text-muted-foreground'>/month</span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='mr-2 h-4 w-4 text-primary'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <span>5 Users</span>
            </li>
            <li className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='mr-2 h-4 w-4 text-primary'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <span>50GB Storage</span>
            </li>
            <li className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='mr-2 h-4 w-4 text-primary'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Priority Support</span>
            </li>
            <li className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='mr-2 h-4 w-4 text-primary'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Advanced Analytics</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className='w-full'>Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  ),
}

export const Compact: Story = {
  render: () => (
    <Card className='w-[350px]'>
      <CardHeader className='p-4'>
        <CardTitle className='text-lg'>Quick Summary</CardTitle>
      </CardHeader>
      <CardContent className='p-4 pt-0'>
        <div className='grid grid-cols-2 gap-2 text-sm'>
          <div>Total Revenue:</div>
          <div className='text-right font-medium'>$45,231.89</div>
          <div>Subscribers:</div>
          <div className='text-right font-medium'>+2,350</div>
          <div>Avg. Open Rate:</div>
          <div className='text-right font-medium'>58.16%</div>
          <div>Bounce Rate:</div>
          <div className='text-right font-medium'>24.57%</div>
        </div>
      </CardContent>
    </Card>
  ),
}

export const HorizontalLayout: Story = {
  render: () => (
    <Card className='flex flex-row w-[600px]'>
      <div className='w-1/3'>
        <img src='/api/placeholder/300/400' alt='Product' className='h-full w-full object-cover' />
      </div>
      <div className='w-2/3 flex flex-col'>
        <CardHeader>
          <CardTitle>Ergonomic Chair</CardTitle>
          <CardDescription>Professional Office Furniture</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-sm'>
            Premium ergonomic office chair designed for maximum comfort during long work sessions. Features adjustable
            height, armrests, and lumbar support.
          </p>
        </CardContent>
        <CardFooter className='mt-auto flex justify-between'>
          <div className='text-lg font-bold'>$299.99</div>
          <Button>Add to Cart</Button>
        </CardFooter>
      </div>
    </Card>
  ),
}

export const WithTabs: Story = {
  render: () => (
    <Card className='w-[400px]'>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account preferences.</CardDescription>
      </CardHeader>
      <div className='border-b px-6'>
        <div className='flex space-x-6'>
          <button className='border-b-2 border-primary py-3 text-sm font-medium'>General</button>
          <button className='border-b-2 border-transparent py-3 text-sm font-medium text-muted-foreground hover:text-foreground'>
            Security
          </button>
          <button className='border-b-2 border-transparent py-3 text-sm font-medium text-muted-foreground hover:text-foreground'>
            Notifications
          </button>
        </div>
      </div>
      <CardContent className='p-6'>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <label htmlFor='username' className='text-sm font-medium'>
              Username
            </label>
            <input
              id='username'
              className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              defaultValue='johndoe'
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='language' className='text-sm font-medium'>
              Language
            </label>
            <select
              id='language'
              className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            >
              <option>English</option>
              <option>French</option>
              <option>German</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  ),
}
