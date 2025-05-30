import type { Meta, StoryObj } from '@storybook/nextjs'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof Tabs>

// Basic example
export const Basic: Story = {
  render: () => (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
        <TabsTrigger value='settings'>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value='account' className='p-4'>
        <h3 className='text-lg font-medium'>Account Settings</h3>
        <p className='text-fg/60 mt-2'>Update your account settings. Set your preferred language and timezone.</p>
      </TabsContent>
      <TabsContent value='password' className='p-4'>
        <h3 className='text-lg font-medium'>Password Settings</h3>
        <p className='text-fg/60 mt-2'>Change your password here. After saving, you’ll be logged out.</p>
      </TabsContent>
      <TabsContent value='settings' className='p-4'>
        <h3 className='text-lg font-medium'>General Settings</h3>
        <p className='text-fg/60 mt-2'>Configure your general application preferences here.</p>
      </TabsContent>
    </Tabs>
  ),
}

// Example with disabled tab
export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue='active' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='active'>Active</TabsTrigger>
        <TabsTrigger value='disabled' disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value='pending'>Pending</TabsTrigger>
      </TabsList>
      <TabsContent value='active' className='p-4'>
        <p>This is an active tab content.</p>
      </TabsContent>
      <TabsContent value='disabled' className='p-4'>
        <p>This content is not accessible.</p>
      </TabsContent>
      <TabsContent value='pending' className='p-4'>
        <p>This is pending tab content.</p>
      </TabsContent>
    </Tabs>
  ),
}
