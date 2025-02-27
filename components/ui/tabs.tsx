// https://ui.shadcn.com/docs/components/tabs
'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/cn'

const Tabs = TabsPrimitive.Root

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot='tabs-list'
      className={cn('text-fg inline-flex h-10 items-center justify-center', className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot='tabs-trigger'
      className={cn(
        'shadow-fg/30 inline-flex items-center justify-center rounded-t px-4 pt-3 pb-2.5 leading-none font-medium whitespace-nowrap shadow-[0_2px_0_0]',
        'focus-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        'hover:shadow-fg/40',
        'data-[state=active]:bg-bg data-[state=active]:text-fg data-[state=active]:shadow-ac',
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
