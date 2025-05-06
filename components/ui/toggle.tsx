'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import * as TogglePrimitive from '@radix-ui/react-toggle'

import { cn } from '@/lib/cn'

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium focus-ring hover:bg-fg/5 hover:text-ac disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-ac/10 data-[state=on]:text-ac [&_svg]:pointer-events-none [&_svg]:shrink-0 gap-1',
  {
    variants: {
      variant: {
        default: 'border border-transparent',
        outline: 'border hover:bg-fg/5 hover:text-ac hover:border-fg/40 data-[state=on]:border-ac',
        icon: 'border border-transparent',
      },
      size: {
        sm: 'text-xs px-2 py-[calc(0.25rem-1px)] rounded-sm',
        default: 'text-base px-2.5 py-[calc(0.25rem-1px)]',
        lg: 'text-lg px-3 py-[calc(0.25rem-1px)]',
      },
    },
    compoundVariants: [
      {
        variant: 'icon',
        size: 'sm',
        className: 'text-xs p-[calc(0.25rem-1px)] rounded-sm [&_svg]:size-4',
      },
      {
        variant: 'icon',
        size: 'default',
        className: 'text-base p-[calc(0.25rem-1px)] [&_svg]:size-6',
      },
      {
        variant: 'icon',
        size: 'lg',
        className: 'text-lg p-[calc(0.25rem-1px)] [&_svg]:size-7',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
