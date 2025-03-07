'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/cn'

const switchVariants = cva(
  [
    'peer cursor-pointer appearance-none rounded-full border bg-bg/10',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'checked:bg-ac',
    'focus-ring',
    'transition-colors',
  ],
  {
    variants: {
      size: {
        sm: 'h-3 w-6',
        md: 'h-4 w-8',
        lg: 'h-5 w-10',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const thumbVariants = cva(
  [
    'pointer-events-none absolute rounded-full bg-fg/60',
    'supports-[not(color:oklch(0_0_0))]:bg-current',
    'transition-[background-color,translate]',
    'peer-checked:bg-bg peer-disabled:opacity-50',
    'supports-[not(color:oklch(0_0_0))]:peer-checked:bg-current',
  ],
  {
    variants: {
      size: {
        sm: 'size-1.5 left-[0.2rem] top-[0.2rem] peer-checked:translate-x-3',
        md: 'size-2 left-1 top-1 peer-checked:translate-x-4',
        lg: 'size-2.5 left-[0.3rem] top-[0.3rem] peer-checked:translate-x-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const labelVariants = cva(
  [
    'flex items-center absolute top-1/2 -translate-y-1/2',
    'pointer-events-none select-none',
    'text-fg/60 transition-[colors,opacity]',
  ],
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export interface SwitchProps
  extends Omit<React.ComponentProps<'input'>, 'type' | 'size'>,
    VariantProps<typeof switchVariants> {
  className?: string
  onLabel?: React.ReactNode
  offLabel?: React.ReactNode
}

function Switch({ className, size, onLabel, offLabel, ...props }: SwitchProps) {
  return (
    <div className='relative inline-flex'>
      <input type='checkbox' data-slot='switch' className={cn(switchVariants({ size }), className)} {...props} />
      <div className={thumbVariants({ size })} />
      {onLabel && (
        <div className={cn(labelVariants({ size }), 'left-[0.2em]', 'opacity-0 peer-checked:opacity-100')}>
          {onLabel}
        </div>
      )}
      {offLabel && (
        <div className={cn(labelVariants({ size }), 'right-[0.2em]', 'opacity-100 peer-checked:opacity-0')}>
          {offLabel}
        </div>
      )}
    </div>
  )
}

export { Switch }
