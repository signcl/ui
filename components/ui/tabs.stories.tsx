import type { Meta, StoryObj } from '@storybook/nextjs-vite'

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

// Underline variant
export const UnderlineVariant: Story = {
  render: () => (
    <Tabs defaultValue='account' variant='underline' className='w-[400px]'>
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
        <p className='text-fg/60 mt-2'>Change your password here. After saving, you'll be logged out.</p>
      </TabsContent>
      <TabsContent value='settings' className='p-4'>
        <h3 className='text-lg font-medium'>General Settings</h3>
        <p className='text-fg/60 mt-2'>Configure your general application preferences here.</p>
      </TabsContent>
    </Tabs>
  ),
}

// Segmented variant (default)
export const SegmentedVariant: Story = {
  render: () => (
    <Tabs defaultValue='account' variant='segmented' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
        <TabsTrigger value='settings'>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value='account' className='mt-4'>
        <h3 className='text-lg font-medium'>Account Settings</h3>
        <p className='text-fg/60 mt-2'>Update your account settings. Set your preferred language and timezone.</p>
      </TabsContent>
      <TabsContent value='password' className='mt-4'>
        <h3 className='text-lg font-medium'>Password Settings</h3>
        <p className='text-fg/60 mt-2'>Change your password here. After saving, you'll be logged out.</p>
      </TabsContent>
      <TabsContent value='settings' className='mt-4'>
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

// Example with many tabs that overflow
export const ManyTabsOverflow: Story = {
  render: () => (
    <div className='max-w-[600px]'>
      <Tabs defaultValue='tab1'>
        <TabsList>
          <TabsTrigger value='tab1'>Dashboard</TabsTrigger>
          <TabsTrigger value='tab2'>Analytics</TabsTrigger>
          <TabsTrigger value='tab3'>Reports</TabsTrigger>
          <TabsTrigger value='tab4'>Settings</TabsTrigger>
          <TabsTrigger value='tab5'>Users</TabsTrigger>
          <TabsTrigger value='tab6'>Products</TabsTrigger>
          <TabsTrigger value='tab7'>Orders</TabsTrigger>
          <TabsTrigger value='tab8'>Inventory</TabsTrigger>
          <TabsTrigger value='tab9'>Customers</TabsTrigger>
          <TabsTrigger value='tab10'>Payments</TabsTrigger>
          <TabsTrigger value='tab11'>Notifications</TabsTrigger>
          <TabsTrigger value='tab12'>Security</TabsTrigger>
          <TabsTrigger value='tab13'>Integrations</TabsTrigger>
          <TabsTrigger value='tab14'>API Keys</TabsTrigger>
          <TabsTrigger value='tab15'>Documentation</TabsTrigger>
        </TabsList>
        <TabsContent value='tab1' className='p-4'>
          <h3 className='text-lg font-medium'>Dashboard</h3>
          <p className='text-fg/60 mt-2'>Welcome to your dashboard. Here you can see an overview of your data.</p>
        </TabsContent>
        <TabsContent value='tab2' className='p-4'>
          <h3 className='text-lg font-medium'>Analytics</h3>
          <p className='text-fg/60 mt-2'>View detailed analytics and insights about your performance.</p>
        </TabsContent>
        <TabsContent value='tab3' className='p-4'>
          <h3 className='text-lg font-medium'>Reports</h3>
          <p className='text-fg/60 mt-2'>Generate and view various reports for your business.</p>
        </TabsContent>
        <TabsContent value='tab4' className='p-4'>
          <h3 className='text-lg font-medium'>Settings</h3>
          <p className='text-fg/60 mt-2'>Configure your application settings and preferences.</p>
        </TabsContent>
        <TabsContent value='tab5' className='p-4'>
          <h3 className='text-lg font-medium'>Users</h3>
          <p className='text-fg/60 mt-2'>Manage users and their permissions.</p>
        </TabsContent>
        <TabsContent value='tab6' className='p-4'>
          <h3 className='text-lg font-medium'>Products</h3>
          <p className='text-fg/60 mt-2'>Browse and manage your product catalog.</p>
        </TabsContent>
        <TabsContent value='tab7' className='p-4'>
          <h3 className='text-lg font-medium'>Orders</h3>
          <p className='text-fg/60 mt-2'>View and process customer orders.</p>
        </TabsContent>
        <TabsContent value='tab8' className='p-4'>
          <h3 className='text-lg font-medium'>Inventory</h3>
          <p className='text-fg/60 mt-2'>Track and manage your inventory levels.</p>
        </TabsContent>
        <TabsContent value='tab9' className='p-4'>
          <h3 className='text-lg font-medium'>Customers</h3>
          <p className='text-fg/60 mt-2'>View and manage customer information.</p>
        </TabsContent>
        <TabsContent value='tab10' className='p-4'>
          <h3 className='text-lg font-medium'>Payments</h3>
          <p className='text-fg/60 mt-2'>Process and track payment transactions.</p>
        </TabsContent>
        <TabsContent value='tab11' className='p-4'>
          <h3 className='text-lg font-medium'>Notifications</h3>
          <p className='text-fg/60 mt-2'>Configure notification settings and view notification history.</p>
        </TabsContent>
        <TabsContent value='tab12' className='p-4'>
          <h3 className='text-lg font-medium'>Security</h3>
          <p className='text-fg/60 mt-2'>Manage security settings and access controls.</p>
        </TabsContent>
        <TabsContent value='tab13' className='p-4'>
          <h3 className='text-lg font-medium'>Integrations</h3>
          <p className='text-fg/60 mt-2'>Connect with third-party services and applications.</p>
        </TabsContent>
        <TabsContent value='tab14' className='p-4'>
          <h3 className='text-lg font-medium'>API Keys</h3>
          <p className='text-fg/60 mt-2'>Manage API keys for external integrations.</p>
        </TabsContent>
        <TabsContent value='tab15' className='p-4'>
          <h3 className='text-lg font-medium'>Documentation</h3>
          <p className='text-fg/60 mt-2'>Access detailed documentation and guides.</p>
        </TabsContent>
      </Tabs>
    </div>
  ),
}
