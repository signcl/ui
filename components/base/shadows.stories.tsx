import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'

const ShadowsComponent = () => <div>Shadow Examples</div>

const meta = {
  title: 'Design System/Shadows',
  component: ShadowsComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShadowsComponent>

export default meta
type Story = StoryObj<typeof meta>

// Helper component to display each shadow example
const ShadowExample = ({ name, className }: { name: string; className: string }) => (
  <div className='flex flex-col items-center gap-2'>
    <div className={`bg-bg flex h-24 w-24 items-center justify-center rounded-lg ${className}`}>
      <span className='text-fg/60 text-sm font-medium'></span>
    </div>
    <span className='text-center text-sm font-medium'>{name}</span>
    <span className='text-fg/60 text-xs'>{className}</span>
  </div>
)

// Box shadows
export const BoxShadows: Story = {
  render: () => (
    <div className='space-y-8 p-8'>
      <div>
        <h2 className='mb-4 text-xl font-semibold'>Box Shadows</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <ShadowExample name='shadow-2xs' className='shadow-2xs' />
          <ShadowExample name='shadow-xs' className='shadow-xs' />
          <ShadowExample name='shadow-sm' className='shadow-sm' />
          <ShadowExample name='shadow-md' className='shadow-md' />
          <ShadowExample name='shadow-lg' className='shadow-lg' />
          <ShadowExample name='shadow-xl' className='shadow-xl' />
          <ShadowExample name='shadow-2xl' className='shadow-2xl' />
          <ShadowExample name='shadow-inner' className='shadow-inner' />
          <ShadowExample name='shadow-none' className='shadow-none' />
          <ShadowExample name='inset-shadow-2xs' className='inset-shadow-2xs' />
          <ShadowExample name='inset-shadow-xs' className='inset-shadow-xs' />
          <ShadowExample name='inset-shadow-sm' className='inset-shadow-sm' />
          <ShadowExample name='inset-shadow-input' className='inset-shadow-input' />
          <ShadowExample name='shadow-border' className='shadow-border' />
          <ShadowExample name='shadow-border-t' className='shadow-border-t' />
          <ShadowExample name='shadow-border-b' className='shadow-border-b' />
        </div>
      </div>
    </div>
  ),
}

// Drop shadows
export const DropShadows: Story = {
  render: () => (
    <div className='space-y-8 p-8'>
      <div>
        <h2 className='mb-4 text-xl font-semibold'>Drop Shadows</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <ShadowExample name='drop-shadow-xs' className='drop-shadow-xs' />
          <ShadowExample name='drop-shadow-sm' className='drop-shadow-sm' />
          <ShadowExample name='drop-shadow-md' className='drop-shadow-md' />
          <ShadowExample name='drop-shadow-lg' className='drop-shadow-lg' />
          <ShadowExample name='drop-shadow-xl' className='drop-shadow-xl' />
          <ShadowExample name='drop-shadow-2xl' className='drop-shadow-2xl' />
          <ShadowExample name='drop-shadow-none' className='drop-shadow-none' />
        </div>
      </div>
    </div>
  ),
}

// Combined examples with different colors
export const ColoredBoxShadows: Story = {
  render: () => (
    <div className='space-y-8 p-8'>
      <div>
        <h2 className='mb-4 text-xl font-semibold'>Colored Box Shadows</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <ShadowExample name='Blue' className='shadow-lg shadow-blue-500/50' />
          <ShadowExample name='Red' className='shadow-lg shadow-red-500/50' />
          <ShadowExample name='Green' className='shadow-lg shadow-green-500/50' />
          <ShadowExample name='Yellow' className='shadow-lg shadow-yellow-500/50' />
          <ShadowExample name='Purple' className='shadow-lg shadow-purple-500/50' />
          <ShadowExample name='Pink' className='shadow-lg shadow-pink-500/50' />
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <ShadowExample name='Blue' className='inset-shadow-2xs inset-shadow-blue-500/50' />
          <ShadowExample name='Red' className='inset-shadow-2xs inset-shadow-red-500/50' />
          <ShadowExample name='Green' className='inset-shadow-2xs inset-shadow-green-500/50' />
          <ShadowExample name='Yellow' className='inset-shadow-2xs inset-shadow-yellow-500/50' />
          <ShadowExample name='Purple' className='inset-shadow-2xs inset-shadow-purple-500/50' />
          <ShadowExample name='Pink' className='inset-shadow-2xs inset-shadow-pink-500/50' />
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <ShadowExample name='Blue' className='inset-shadow-xs inset-shadow-blue-500/50' />
          <ShadowExample name='Red' className='inset-shadow-xs inset-shadow-red-500/50' />
          <ShadowExample name='Green' className='inset-shadow-xs inset-shadow-green-500/50' />
          <ShadowExample name='Yellow' className='inset-shadow-xs inset-shadow-yellow-500/50' />
          <ShadowExample name='Purple' className='inset-shadow-xs inset-shadow-purple-500/50' />
          <ShadowExample name='Pink' className='inset-shadow-xs inset-shadow-pink-500/50' />
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <ShadowExample name='Blue' className='inset-shadow-sm inset-shadow-blue-500/50' />
          <ShadowExample name='Red' className='inset-shadow-sm inset-shadow-red-500/50' />
          <ShadowExample name='Green' className='inset-shadow-sm inset-shadow-green-500/50' />
          <ShadowExample name='Yellow' className='inset-shadow-sm inset-shadow-yellow-500/50' />
          <ShadowExample name='Purple' className='inset-shadow-sm inset-shadow-purple-500/50' />
          <ShadowExample name='Pink' className='inset-shadow-sm inset-shadow-pink-500/50' />
        </div>
      </div>
    </div>
  ),
}

// Shadow transition example
export const ShadowTransitions: Story = {
  render: () => (
    <div className='space-y-8 p-8'>
      <div>
        <h2 className='mb-4 text-xl font-semibold'>Shadow Transitions (Hover)</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col items-center gap-2'>
            <div className='bg-bg flex h-24 w-24 items-center justify-center rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-xl'>
              <span className='text-fg/60 text-sm font-medium'>Hover me</span>
            </div>
            <span className='text-sm font-medium'>sm → xl</span>
            <span className='text-fg/60 text-xs'>shadow-sm → shadow-xl</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='bg-bg flex h-24 w-24 items-center justify-center rounded-lg shadow-md transition-shadow duration-300 hover:shadow-2xl'>
              <span className='text-fg/60 text-sm font-medium'>Hover me</span>
            </div>
            <span className='text-sm font-medium'>default → 2xl</span>
            <span className='text-fg/60 text-xs'>shadow-md → shadow-2xl</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='bg-bg flex h-24 w-24 items-center justify-center rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50'>
              <span className='text-fg/60 text-sm font-medium'>Hover me</span>
            </div>
            <span className='text-sm font-medium'>md → xl (colored)</span>
            <span className='text-fg/60 text-xs'>shadow-md → shadow-xl shadow-blue-500/50</span>
          </div>
        </div>
      </div>
    </div>
  ),
}
