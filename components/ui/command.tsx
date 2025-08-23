'use client'

import type { DialogProps } from '@radix-ui/react-dialog'
import { IconSearch } from '@tabler/icons-react'
import { Command as CommandPrimitive } from 'cmdk'
import type * as React from 'react'

import { cn } from '@/lib/cn'

import { Dialog, DialogContent } from '@/components/ui/dialog'

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot='command'
      className={cn('flex h-full w-full flex-col overflow-hidden rounded-md border', className)}
      {...props}
    />
  )
}

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className='overflow-hidden p-0'>
        <Command className='border-none'>{children}</Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div className='shadow-border-b flex items-center gap-x-2 px-3' cmdk-input-wrapper=''>
      <IconSearch className='size-4 shrink-0 opacity-50' />
      <CommandPrimitive.Input
        data-slot='command-input'
        className={cn(
          'placeholder:text-fg/60 flex w-full rounded-md bg-transparent py-2 outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot='command-list'
      className={cn('max-h-[300px] overflow-x-hidden overflow-y-auto', className)}
      {...props}
    />
  )
}

function CommandEmpty(props: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return <CommandPrimitive.Empty data-slot='command-empty' className='py-6 text-center' {...props} />
}

function CommandGroup({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot='command-group'
      className={cn(
        '[&_[cmdk-group-heading]]:text-fg/60 overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase',
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot='command-separator'
      className={cn('bg-fg/10 -mx-1 h-px', className)}
      {...props}
    />
  )
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot='command-item'
      className={cn(
        "data-[selected='true']:bg-ac/10 data-[selected=true]:text-ac relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 outline-none select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('text-fg/60 ml-auto text-xs tracking-widest', className)} {...props} />
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
