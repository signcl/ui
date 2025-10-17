'use client'

import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { IconCheck, IconChevronRight, IconCircle } from '@tabler/icons-react'
import type * as React from 'react'

import { cn } from '@/lib/cn'

function Menubar({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot='menubar'
      className={cn('flex h-10 items-center space-x-1 rounded-md border p-1', className)}
      {...props}
    />
  )
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot='menubar-menu' {...props} />
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot='menubar-group' {...props} />
}

function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot='menubar-portal' {...props} />
}

function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup data-slot='menubar-radio-group' {...props} />
}

function MenubarTrigger({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot='menubar-trigger'
      className={cn(
        'flex cursor-default items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none select-none',
        'focus:bg-ac/10 focus:text-ac data-[state=open]:bg-ac/10 data-[state=open]:text-ac',
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot='menubar-content'
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'floating z-50 min-w-[12rem] overflow-hidden rounded-md border px-0 py-1',
          'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          'origin-(--radix-menubar-content-transform-origin)',
          className
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  tint = 'accent',
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  tint?: 'accent' | 'rose'
}) {
  return (
    <MenubarPrimitive.Item
      data-slot='menubar-item'
      data-inset={inset}
      data-tint={tint}
      className={cn(
        'relative flex cursor-default items-center gap-1 py-1.5 px-3 text-sm outline-none select-none',
        'focus:bg-ac/10 focus:text-ac data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        "data-[inset]:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",

        // Tint Rose
        // Mapped to shadcn variant=destructive
        'data-[tint=rose]:text-rose-500 data-[tint=rose]:focus:bg-rose-500/10 data-[tint=rose]:focus:text-rose-500 data-[tint=rose]:*:[svg]:!text-rose-500',
        className
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot='menubar-checkbox-item'
      className={cn(
        'relative flex cursor-default items-center gap-1 py-1.5 pr-3 pl-7 text-sm outline-none select-none',
        'focus:bg-ac/10 focus:text-ac data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className='pointer-events-none absolute left-2 flex size-3.5 items-center justify-center'>
        <MenubarPrimitive.ItemIndicator>
          <IconCheck className='size-4' />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({ className, children, ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot='menubar-radio-item'
      className={cn(
        'relative flex cursor-default items-center gap-1 py-1.5 pr-3 pl-7 text-sm outline-none select-none',
        'focus:bg-ac/10 focus:text-ac data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className='pointer-events-none absolute left-2 flex size-3.5 items-center justify-center'>
        <MenubarPrimitive.ItemIndicator>
          <IconCircle className='size-2 fill-current' />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot='menubar-label'
      data-inset={inset}
      className={cn('text-fg/60 px-2 py-1.5 text-xs leading-none uppercase data-[inset]:pl-7', className)}
      {...props}
    />
  )
}

function MenubarSeparator({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot='menubar-separator'
      className={cn('bg-fg/5 -mx-1 h-1', className)}
      {...props}
    />
  )
}

function MenubarShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot='menubar-shortcut'
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  )
}
function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot='menubar-sub' {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot='menubar-sub-trigger'
      data-inset={inset}
      className={cn(
        'flex cursor-default items-center gap-1 px-3 py-1.5 text-sm outline-none select-none',
        'focus:bg-ac/10 focus:text-ac data-[state=open]:bg-ac/10 data-[state=open]:text-ac',
        "data-[inset]:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <IconChevronRight className='ml-auto size-4' />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.SubContent
        data-slot='menubar-sub-content'
        className={cn(
          'floating z-50 min-w-[8rem] overflow-hidden rounded-md border px-0 py-1',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          // 'origin-(--radix-menubar-content-transform-origin)',
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
}

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
