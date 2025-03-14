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
        sm: 'text-xs px-[0.5em] py-[0.25em] rounded-sm',
        default: 'text-base px-[0.625em] py-[0.25em]',
        lg: 'text-lg px-[0.8em] py-[0.325em]',
      },
    },
    compoundVariants: [
      {
        variant: 'icon',
        size: 'sm',
        className: 'text-xs p-[0.25em] rounded-sm',
      },
      {
        variant: 'icon',
        size: 'default',
        className: 'text-base p-[0.25em]',
      },
      {
        variant: 'icon',
        size: 'lg',
        className: 'text-lg p-[0.325em]',
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
