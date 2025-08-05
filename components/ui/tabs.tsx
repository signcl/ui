// https://ui.shadcn.com/docs/components/tabs
'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/cn'

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot='tabs' className={cn(className)} {...props} />
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot='tabs-list'
      className={cn(
        'max-w-full overflow-x-auto overflow-y-hidden',
        'bg-fg/5 text-fg/60 flex items-center rounded-lg p-[3px]',
        'snap-x snap-mandatory scroll-p-1 scroll-smooth',
        // Hide scrollbar but keep functionality
        '[&::-webkit-scrollbar]:h-[0px]',
        '[&::-webkit-scrollbar-track]:bg-transparent',
        '[&::-webkit-scrollbar-thumb]:bg-transparent',
        '[&::-webkit-scrollbar-thumb]:rounded-full',
        'hover:[&::-webkit-scrollbar-thumb]:bg-transparent',
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot='tabs-trigger'
      className={cn(
        'focus-ring text-fg inline-flex items-center justify-center gap-1 rounded-md px-3 py-0.5 font-medium whitespace-nowrap',
        'disabled:pointer-events-none disabled:opacity-50',
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        'data-[state=active]:text-ac data-[state=active]:bg-bg',
        'snap-end',
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content data-slot='tabs-content' className={cn('focus-ring rounded-md', className)} {...props} />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
