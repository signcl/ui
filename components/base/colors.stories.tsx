import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const ColorsComponent = () => <div className='space-y-4'>Color Utilities</div>

const meta = {
  title: 'Design System/Colors',
  component: ColorsComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ColorsComponent>

export default meta
type Story = StoryObj<typeof meta>

// Helper component to display a color sample
const ColorSwatch = ({ className, name }: { className: string; name: string }) => (
  <div className='flex flex-col gap-1'>
    <div className={`size-20 rounded-md ${className} flex items-center justify-center`} />
    <div className='text-xs'>{name}</div>
    <div className='text-fg/60 text-xs'>{className}</div>
  </div>
)

export const Colors: Story = {
  render: () => (
    <div className='space-y-8 p-4'>
      <div className='space-y-4 bg-gray-600'>
        <h2 className='text-2xl font-semibold'>Foreground Colors</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-fg/5' name='Foreground 5%' />
          <ColorSwatch className='bg-fg/10' name='Foreground 10%' />
          <ColorSwatch className='bg-fg/20' name='Foreground 20%' />
          <ColorSwatch className='bg-fg/30' name='Foreground 30%' />
          <ColorSwatch className='bg-fg/40' name='Foreground 40%' />
          <ColorSwatch className='bg-fg/50' name='Foreground 50%' />
          <ColorSwatch className='bg-fg/60' name='Foreground 60%' />
          <ColorSwatch className='bg-fg/70' name='Foreground 70%' />
          <ColorSwatch className='bg-fg/80' name='Foreground 80%' />
          <ColorSwatch className='bg-fg/90' name='Foreground 90%' />
          <ColorSwatch className='bg-fg/100' name='Foreground 100%' />
        </div>
      </div>

      <div className='space-y-4 bg-gray-600'>
        <h2 className='text-2xl font-semibold'>Background Colors</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-bg/5' name='Background 5%' />
          <ColorSwatch className='bg-bg/10' name='Background 10%' />
          <ColorSwatch className='bg-bg/20' name='Background 20%' />
          <ColorSwatch className='bg-bg/30' name='Background 30%' />
          <ColorSwatch className='bg-bg/40' name='Background 40%' />
          <ColorSwatch className='bg-bg/50' name='Background 50%' />
          <ColorSwatch className='bg-bg/60' name='Background 60%' />
          <ColorSwatch className='bg-bg/70' name='Background 70%' />
          <ColorSwatch className='bg-bg/80' name='Background 80%' />
          <ColorSwatch className='bg-bg/90' name='Background 90%' />
          <ColorSwatch className='bg-bg/100' name='Background 100%' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Accent Colors</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-ac/5' name='Accent 5%' />
          <ColorSwatch className='bg-ac/10' name='Accent 10%' />
          <ColorSwatch className='bg-ac/20' name='Accent 20%' />
          <ColorSwatch className='bg-ac/30' name='Accent 30%' />
          <ColorSwatch className='bg-ac/40' name='Accent 40%' />
          <ColorSwatch className='bg-ac/50' name='Accent 50%' />
          <ColorSwatch className='bg-ac/60' name='Accent 60%' />
          <ColorSwatch className='bg-ac/70' name='Accent 70%' />
          <ColorSwatch className='bg-ac/80' name='Accent 80%' />
          <ColorSwatch className='bg-ac/90' name='Accent 90%' />
          <ColorSwatch className='bg-ac/100' name='Accent 100%' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Red</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-red-50' name='Red 50' />
          <ColorSwatch className='bg-red-100' name='Red 100' />
          <ColorSwatch className='bg-red-200' name='Red 200' />
          <ColorSwatch className='bg-red-300' name='Red 300' />
          <ColorSwatch className='bg-red-400' name='Red 400' />
          <ColorSwatch className='bg-red-500' name='Red 500' />
          <ColorSwatch className='bg-red-600' name='Red 600' />
          <ColorSwatch className='bg-red-700' name='Red 700' />
          <ColorSwatch className='bg-red-800' name='Red 800' />
          <ColorSwatch className='bg-red-900' name='Red 900' />
          <ColorSwatch className='bg-red-950' name='Red 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Orange</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-orange-50' name='Orange 50' />
          <ColorSwatch className='bg-orange-100' name='Orange 100' />
          <ColorSwatch className='bg-orange-200' name='Orange 200' />
          <ColorSwatch className='bg-orange-300' name='Orange 300' />
          <ColorSwatch className='bg-orange-400' name='Orange 400' />
          <ColorSwatch className='bg-orange-500' name='Orange 500' />
          <ColorSwatch className='bg-orange-600' name='Orange 600' />
          <ColorSwatch className='bg-orange-700' name='Orange 700' />
          <ColorSwatch className='bg-orange-800' name='Orange 800' />
          <ColorSwatch className='bg-orange-900' name='Orange 900' />
          <ColorSwatch className='bg-orange-950' name='Orange 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Amber</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-amber-50' name='Amber 50' />
          <ColorSwatch className='bg-amber-100' name='Amber 100' />
          <ColorSwatch className='bg-amber-200' name='Amber 200' />
          <ColorSwatch className='bg-amber-300' name='Amber 300' />
          <ColorSwatch className='bg-amber-400' name='Amber 400' />
          <ColorSwatch className='bg-amber-500' name='Amber 500' />
          <ColorSwatch className='bg-amber-600' name='Amber 600' />
          <ColorSwatch className='bg-amber-700' name='Amber 700' />
          <ColorSwatch className='bg-amber-800' name='Amber 800' />
          <ColorSwatch className='bg-amber-900' name='Amber 900' />
          <ColorSwatch className='bg-amber-950' name='Amber 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Yellow</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-yellow-50' name='Yellow 50' />
          <ColorSwatch className='bg-yellow-100' name='Yellow 100' />
          <ColorSwatch className='bg-yellow-200' name='Yellow 200' />
          <ColorSwatch className='bg-yellow-300' name='Yellow 300' />
          <ColorSwatch className='bg-yellow-400' name='Yellow 400' />
          <ColorSwatch className='bg-yellow-500' name='Yellow 500' />
          <ColorSwatch className='bg-yellow-600' name='Yellow 600' />
          <ColorSwatch className='bg-yellow-700' name='Yellow 700' />
          <ColorSwatch className='bg-yellow-800' name='Yellow 800' />
          <ColorSwatch className='bg-yellow-900' name='Yellow 900' />
          <ColorSwatch className='bg-yellow-950' name='Yellow 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Lime</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-lime-50' name='Lime 50' />
          <ColorSwatch className='bg-lime-100' name='Lime 100' />
          <ColorSwatch className='bg-lime-200' name='Lime 200' />
          <ColorSwatch className='bg-lime-300' name='Lime 300' />
          <ColorSwatch className='bg-lime-400' name='Lime 400' />
          <ColorSwatch className='bg-lime-500' name='Lime 500' />
          <ColorSwatch className='bg-lime-600' name='Lime 600' />
          <ColorSwatch className='bg-lime-700' name='Lime 700' />
          <ColorSwatch className='bg-lime-800' name='Lime 800' />
          <ColorSwatch className='bg-lime-900' name='Lime 900' />
          <ColorSwatch className='bg-lime-950' name='Lime 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Green</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-green-50' name='Green 50' />
          <ColorSwatch className='bg-green-100' name='Green 100' />
          <ColorSwatch className='bg-green-200' name='Green 200' />
          <ColorSwatch className='bg-green-300' name='Green 300' />
          <ColorSwatch className='bg-green-400' name='Green 400' />
          <ColorSwatch className='bg-green-500' name='Green 500' />
          <ColorSwatch className='bg-green-600' name='Green 600' />
          <ColorSwatch className='bg-green-700' name='Green 700' />
          <ColorSwatch className='bg-green-800' name='Green 800' />
          <ColorSwatch className='bg-green-900' name='Green 900' />
          <ColorSwatch className='bg-green-950' name='Green 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Emerald</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-emerald-50' name='Emerald 50' />
          <ColorSwatch className='bg-emerald-100' name='Emerald 100' />
          <ColorSwatch className='bg-emerald-200' name='Emerald 200' />
          <ColorSwatch className='bg-emerald-300' name='Emerald 300' />
          <ColorSwatch className='bg-emerald-400' name='Emerald 400' />
          <ColorSwatch className='bg-emerald-500' name='Emerald 500' />
          <ColorSwatch className='bg-emerald-600' name='Emerald 600' />
          <ColorSwatch className='bg-emerald-700' name='Emerald 700' />
          <ColorSwatch className='bg-emerald-800' name='Emerald 800' />
          <ColorSwatch className='bg-emerald-900' name='Emerald 900' />
          <ColorSwatch className='bg-emerald-950' name='Emerald 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Teal</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-teal-50' name='Teal 50' />
          <ColorSwatch className='bg-teal-100' name='Teal 100' />
          <ColorSwatch className='bg-teal-200' name='Teal 200' />
          <ColorSwatch className='bg-teal-300' name='Teal 300' />
          <ColorSwatch className='bg-teal-400' name='Teal 400' />
          <ColorSwatch className='bg-teal-500' name='Teal 500' />
          <ColorSwatch className='bg-teal-600' name='Teal 600' />
          <ColorSwatch className='bg-teal-700' name='Teal 700' />
          <ColorSwatch className='bg-teal-800' name='Teal 800' />
          <ColorSwatch className='bg-teal-900' name='Teal 900' />
          <ColorSwatch className='bg-teal-950' name='Teal 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Cyan</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-cyan-50' name='Cyan 50' />
          <ColorSwatch className='bg-cyan-100' name='Cyan 100' />
          <ColorSwatch className='bg-cyan-200' name='Cyan 200' />
          <ColorSwatch className='bg-cyan-300' name='Cyan 300' />
          <ColorSwatch className='bg-cyan-400' name='Cyan 400' />
          <ColorSwatch className='bg-cyan-500' name='Cyan 500' />
          <ColorSwatch className='bg-cyan-600' name='Cyan 600' />
          <ColorSwatch className='bg-cyan-700' name='Cyan 700' />
          <ColorSwatch className='bg-cyan-800' name='Cyan 800' />
          <ColorSwatch className='bg-cyan-900' name='Cyan 900' />
          <ColorSwatch className='bg-cyan-950' name='Cyan 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Sky</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-sky-50' name='Sky 50' />
          <ColorSwatch className='bg-sky-100' name='Sky 100' />
          <ColorSwatch className='bg-sky-200' name='Sky 200' />
          <ColorSwatch className='bg-sky-300' name='Sky 300' />
          <ColorSwatch className='bg-sky-400' name='Sky 400' />
          <ColorSwatch className='bg-sky-500' name='Sky 500' />
          <ColorSwatch className='bg-sky-600' name='Sky 600' />
          <ColorSwatch className='bg-sky-700' name='Sky 700' />
          <ColorSwatch className='bg-sky-800' name='Sky 800' />
          <ColorSwatch className='bg-sky-900' name='Sky 900' />
          <ColorSwatch className='bg-sky-950' name='Sky 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Blue</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-blue-50' name='Blue 50' />
          <ColorSwatch className='bg-blue-100' name='Blue 100' />
          <ColorSwatch className='bg-blue-200' name='Blue 200' />
          <ColorSwatch className='bg-blue-300' name='Blue 300' />
          <ColorSwatch className='bg-blue-400' name='Blue 400' />
          <ColorSwatch className='bg-blue-500' name='Blue 500' />
          <ColorSwatch className='bg-blue-600' name='Blue 600' />
          <ColorSwatch className='bg-blue-700' name='Blue 700' />
          <ColorSwatch className='bg-blue-800' name='Blue 800' />
          <ColorSwatch className='bg-blue-900' name='Blue 900' />
          <ColorSwatch className='bg-blue-950' name='Blue 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Indigo</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-indigo-50' name='Indigo 50' />
          <ColorSwatch className='bg-indigo-100' name='Indigo 100' />
          <ColorSwatch className='bg-indigo-200' name='Indigo 200' />
          <ColorSwatch className='bg-indigo-300' name='Indigo 300' />
          <ColorSwatch className='bg-indigo-400' name='Indigo 400' />
          <ColorSwatch className='bg-indigo-500' name='Indigo 500' />
          <ColorSwatch className='bg-indigo-600' name='Indigo 600' />
          <ColorSwatch className='bg-indigo-700' name='Indigo 700' />
          <ColorSwatch className='bg-indigo-800' name='Indigo 800' />
          <ColorSwatch className='bg-indigo-900' name='Indigo 900' />
          <ColorSwatch className='bg-indigo-950' name='Indigo 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Violet</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-violet-50' name='Violet 50' />
          <ColorSwatch className='bg-violet-100' name='Violet 100' />
          <ColorSwatch className='bg-violet-200' name='Violet 200' />
          <ColorSwatch className='bg-violet-300' name='Violet 300' />
          <ColorSwatch className='bg-violet-400' name='Violet 400' />
          <ColorSwatch className='bg-violet-500' name='Violet 500' />
          <ColorSwatch className='bg-violet-600' name='Violet 600' />
          <ColorSwatch className='bg-violet-700' name='Violet 700' />
          <ColorSwatch className='bg-violet-800' name='Violet 800' />
          <ColorSwatch className='bg-violet-900' name='Violet 900' />
          <ColorSwatch className='bg-violet-950' name='Violet 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Purple</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-purple-50' name='Purple 50' />
          <ColorSwatch className='bg-purple-100' name='Purple 100' />
          <ColorSwatch className='bg-purple-200' name='Purple 200' />
          <ColorSwatch className='bg-purple-300' name='Purple 300' />
          <ColorSwatch className='bg-purple-400' name='Purple 400' />
          <ColorSwatch className='bg-purple-500' name='Purple 500' />
          <ColorSwatch className='bg-purple-600' name='Purple 600' />
          <ColorSwatch className='bg-purple-700' name='Purple 700' />
          <ColorSwatch className='bg-purple-800' name='Purple 800' />
          <ColorSwatch className='bg-purple-900' name='Purple 900' />
          <ColorSwatch className='bg-purple-950' name='Purple 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Fuchsia</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-fuchsia-50' name='Fuchsia 50' />
          <ColorSwatch className='bg-fuchsia-100' name='Fuchsia 100' />
          <ColorSwatch className='bg-fuchsia-200' name='Fuchsia 200' />
          <ColorSwatch className='bg-fuchsia-300' name='Fuchsia 300' />
          <ColorSwatch className='bg-fuchsia-400' name='Fuchsia 400' />
          <ColorSwatch className='bg-fuchsia-500' name='Fuchsia 500' />
          <ColorSwatch className='bg-fuchsia-600' name='Fuchsia 600' />
          <ColorSwatch className='bg-fuchsia-700' name='Fuchsia 700' />
          <ColorSwatch className='bg-fuchsia-800' name='Fuchsia 800' />
          <ColorSwatch className='bg-fuchsia-900' name='Fuchsia 900' />
          <ColorSwatch className='bg-fuchsia-950' name='Fuchsia 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Pink</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-pink-50' name='Pink 50' />
          <ColorSwatch className='bg-pink-100' name='Pink 100' />
          <ColorSwatch className='bg-pink-200' name='Pink 200' />
          <ColorSwatch className='bg-pink-300' name='Pink 300' />
          <ColorSwatch className='bg-pink-400' name='Pink 400' />
          <ColorSwatch className='bg-pink-500' name='Pink 500' />
          <ColorSwatch className='bg-pink-600' name='Pink 600' />
          <ColorSwatch className='bg-pink-700' name='Pink 700' />
          <ColorSwatch className='bg-pink-800' name='Pink 800' />
          <ColorSwatch className='bg-pink-900' name='Pink 900' />
          <ColorSwatch className='bg-pink-950' name='Pink 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Rose</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-rose-50' name='Rose 50' />
          <ColorSwatch className='bg-rose-100' name='Rose 100' />
          <ColorSwatch className='bg-rose-200' name='Rose 200' />
          <ColorSwatch className='bg-rose-300' name='Rose 300' />
          <ColorSwatch className='bg-rose-400' name='Rose 400' />
          <ColorSwatch className='bg-rose-500' name='Rose 500' />
          <ColorSwatch className='bg-rose-600' name='Rose 600' />
          <ColorSwatch className='bg-rose-700' name='Rose 700' />
          <ColorSwatch className='bg-rose-800' name='Rose 800' />
          <ColorSwatch className='bg-rose-900' name='Rose 900' />
          <ColorSwatch className='bg-rose-950' name='Rose 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Slate (Should not be used in our projects)</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-slate-50' name='Slate 50' />
          <ColorSwatch className='bg-slate-100' name='Slate 100' />
          <ColorSwatch className='bg-slate-200' name='Slate 200' />
          <ColorSwatch className='bg-slate-300' name='Slate 300' />
          <ColorSwatch className='bg-slate-400' name='Slate 400' />
          <ColorSwatch className='bg-slate-500' name='Slate 500' />
          <ColorSwatch className='bg-slate-600' name='Slate 600' />
          <ColorSwatch className='bg-slate-700' name='Slate 700' />
          <ColorSwatch className='bg-slate-800' name='Slate 800' />
          <ColorSwatch className='bg-slate-900' name='Slate 900' />
          <ColorSwatch className='bg-slate-950' name='Slate 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Gray (Should not be used in our projects)</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-gray-50' name='Gray 50' />
          <ColorSwatch className='bg-gray-100' name='Gray 100' />
          <ColorSwatch className='bg-gray-200' name='Gray 200' />
          <ColorSwatch className='bg-gray-300' name='Gray 300' />
          <ColorSwatch className='bg-gray-400' name='Gray 400' />
          <ColorSwatch className='bg-gray-500' name='Gray 500' />
          <ColorSwatch className='bg-gray-600' name='Gray 600' />
          <ColorSwatch className='bg-gray-700' name='Gray 700' />
          <ColorSwatch className='bg-gray-800' name='Gray 800' />
          <ColorSwatch className='bg-gray-900' name='Gray 900' />
          <ColorSwatch className='bg-gray-950' name='Gray 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Zinc (Should not be used in our projects)</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-zinc-50' name='Zinc 50' />
          <ColorSwatch className='bg-zinc-100' name='Zinc 100' />
          <ColorSwatch className='bg-zinc-200' name='Zinc 200' />
          <ColorSwatch className='bg-zinc-300' name='Zinc 300' />
          <ColorSwatch className='bg-zinc-400' name='Zinc 400' />
          <ColorSwatch className='bg-zinc-500' name='Zinc 500' />
          <ColorSwatch className='bg-zinc-600' name='Zinc 600' />
          <ColorSwatch className='bg-zinc-700' name='Zinc 700' />
          <ColorSwatch className='bg-zinc-800' name='Zinc 800' />
          <ColorSwatch className='bg-zinc-900' name='Zinc 900' />
          <ColorSwatch className='bg-zinc-950' name='Zinc 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Neutral (Should not be used in our projects)</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-neutral-50' name='Neutral 50' />
          <ColorSwatch className='bg-neutral-100' name='Neutral 100' />
          <ColorSwatch className='bg-neutral-200' name='Neutral 200' />
          <ColorSwatch className='bg-neutral-300' name='Neutral 300' />
          <ColorSwatch className='bg-neutral-400' name='Neutral 400' />
          <ColorSwatch className='bg-neutral-500' name='Neutral 500' />
          <ColorSwatch className='bg-neutral-600' name='Neutral 600' />
          <ColorSwatch className='bg-neutral-700' name='Neutral 700' />
          <ColorSwatch className='bg-neutral-800' name='Neutral 800' />
          <ColorSwatch className='bg-neutral-900' name='Neutral 900' />
          <ColorSwatch className='bg-neutral-950' name='Neutral 950' />
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Stone (Should not be used in our projects)</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-11'>
          <ColorSwatch className='bg-stone-50' name='Stone 50' />
          <ColorSwatch className='bg-stone-100' name='Stone 100' />
          <ColorSwatch className='bg-stone-200' name='Stone 200' />
          <ColorSwatch className='bg-stone-300' name='Stone 300' />
          <ColorSwatch className='bg-stone-400' name='Stone 400' />
          <ColorSwatch className='bg-stone-500' name='Stone 500' />
          <ColorSwatch className='bg-stone-600' name='Stone 600' />
          <ColorSwatch className='bg-stone-700' name='Stone 700' />
          <ColorSwatch className='bg-stone-800' name='Stone 800' />
          <ColorSwatch className='bg-stone-900' name='Stone 900' />
          <ColorSwatch className='bg-stone-950' name='Stone 950' />
        </div>
      </div>
    </div>
  ),
}
