import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconCircleCheckFilled } from '@tabler/icons-react'

import { Button } from './button' // Adjust import path as needed
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
import { Input } from './input'
import { Label } from './label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

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
        <CardTitle>Create project with a very very very long title</CardTitle>
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
          <Label htmlFor='name'>Name</Label>
          <Input id='name' placeholder='John Doe' />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' placeholder='john.doe@example.com' />
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card className='w-[350px] overflow-hidden'>
      <picture>
        <img src='https://placehold.co/600x400' alt='Card cover' className='h-48 w-full object-cover' />
      </picture>
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
        <div className='text-muted-foreground text-sm'>$199/night</div>
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
            <span className='text-muted-foreground ml-1'>/month</span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-center gap-x-2'>
              <IconCircleCheckFilled size={16} />
              <span>1 User</span>
            </li>
            <li className='flex items-center gap-x-2'>
              <IconCircleCheckFilled size={16} />
              <span>5GB Storage</span>
            </li>
            <li className='flex items-center gap-x-2'>
              <IconCircleCheckFilled size={16} />
              <span>Email Support</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className='w-full'>Get Started</Button>
        </CardFooter>
      </Card>
      <Card className='border-primary w-[300px]'>
        <CardHeader>
          <div className='text-primary mb-1 text-sm font-medium uppercase'>Popular</div>
          <CardTitle>Professional</CardTitle>
          <CardDescription>Perfect for small teams</CardDescription>
          <div className='mt-2 flex items-baseline'>
            <span className='text-4xl font-bold'>$29</span>
            <span className='text-muted-foreground ml-1'>/month</span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-center gap-x-2'>
              <IconCircleCheckFilled size={16} />
              <span>5 Users</span>
            </li>
            <li className='flex items-center gap-x-2'>
              <IconCircleCheckFilled size={16} />
              <span>50GB Storage</span>
            </li>
            <li className='flex items-center gap-x-2'>
              <IconCircleCheckFilled size={16} />
              <span>Priority Support</span>
            </li>
            <li className='flex items-center gap-x-2'>
              <IconCircleCheckFilled size={16} />
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
      <CardHeader className='p-3'>
        <CardTitle className='text-lg'>Quick Summary</CardTitle>
      </CardHeader>
      <CardContent className='p-3 pt-0'>
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
    <Card className='flex w-[600px] flex-row'>
      <div className='w-1/3'>
        <picture>
          <img src='https://placehold.co/300x400' alt='Product' className='h-full w-full object-cover' />
        </picture>
      </div>
      <div className='flex w-2/3 flex-col'>
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
      <Tabs defaultValue='general' variant='underline'>
        <TabsList>
          <TabsTrigger value='general'>General</TabsTrigger>
          <TabsTrigger value='security'>Security</TabsTrigger>
          <TabsTrigger value='notifications'>Notifications</TabsTrigger>
        </TabsList>
        <CardContent className='p-4'>
          <TabsContent value='general'>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='username'>Username</Label>
                <Input id='username' placeholder='johndoe' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='language'>Language</Label>
                <Select>
                  <SelectTrigger id='language'>
                    <SelectValue placeholder='Select a language' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='en'>English</SelectItem>
                    <SelectItem value='fr'>French</SelectItem>
                    <SelectItem value='de'>German</SelectItem>
                    <SelectItem value='es'>Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='security'>
            <div>security</div>
          </TabsContent>
          <TabsContent value='notifications'>
            <div>notifications</div>
          </TabsContent>
        </CardContent>
      </Tabs>

      <CardFooter className='flex justify-end'>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  ),
}
