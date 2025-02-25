'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'

import { cn } from '@/utils/cn'

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

function SelectTrigger({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot='trigger'
      className={cn(
        'placeholder:text-fg/60 flex w-full items-center justify-between gap-x-1 rounded-md border bg-transparent px-[.625em] py-[.25em] text-start text-base font-medium disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        'focus-ring',
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className='size-4' />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot='scroll-up'
      className={cn(
        'absolute top-0 right-0 left-0 z-51 flex h-6 cursor-default items-center justify-center pb-4',
        'hover:from-ac/20 hover:text-ac hover:bg-linear-to-b',
        className
      )}
      {...props}
    >
      {/* <ChevronUp className='size-4' /> */}
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot='scroll-down'
      className={cn(
        'absolute right-0 bottom-0 left-0 z-51 flex h-6 cursor-default items-center justify-center pt-4',
        'hover:from-ac/20 hover:text-ac hover:bg-linear-to-t',
        className
      )}
      {...props}
    >
      {/* <ChevronDown className='size-4' /> */}
    </SelectPrimitive.ScrollDownButton>
  )
}

function SelectContent({
  className,
  children,
  position = 'item-aligned',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot='content'
        className={cn(
          'floating text-fg data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative max-h-[350px] min-w-[8rem] overflow-hidden rounded-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        collisionPadding={5}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'py-1',
            '[mask-image:linear-gradient(to_bottom,transparent,black_0.3rem,black_calc(100%-0.3rem),transparent)]',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot='label'
      className={cn('text-fg/60 py-1.5 pr-2 pl-7 text-xs leading-none uppercase', className)}
      {...props}
    />
  )
}

// Extend SelectItem with a custom props
interface SelectItemProps extends React.ComponentProps<typeof SelectPrimitive.Item> {
  plain?: boolean
}

function SelectItem({ className, children, plain, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot='item'
      className={cn(
        'focus:bg-ac/10 focus:text-ac relative flex w-full cursor-default items-start py-1.5 pr-2 text-base outline-hidden select-none',
        'data-[state=checked]:text-ac data-disabled:pointer-events-none data-disabled:opacity-50 data-[state=checked]:font-medium',
        plain ? 'pl-2' : 'pl-7',
        className
      )}
      {...props}
    >
      {!plain && (
        <span className='absolute top-2.5 left-2 flex size-4 items-center justify-center'>
          <SelectPrimitive.ItemIndicator>
            {/* <Check className='size-4' /> */}
            <div className='size-1.5 rounded-full bg-current' />
          </SelectPrimitive.ItemIndicator>
        </span>
      )}

      <div className='flex-auto'>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </div>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator data-slot='separator' className={cn('bg-fg/10 -mx-1 my-1 h-px', className)} {...props} />
  )
}

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
