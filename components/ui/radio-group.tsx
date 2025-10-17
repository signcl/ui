'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { IconCircle } from '@tabler/icons-react'
import type * as React from 'react'

import { cn } from '@/lib/cn'

function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root data-slot='radio-group' className={cn('grid gap-2', className)} {...props} />
}

function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot='radio-group-item'
      className={cn(
        'border-fg/20 text-ac focus-ring aria-invalid:ring-rose-500/30 aria-invalid:border-rose-500 aspect-square size-4 shrink-0 rounded-full border shadow-xs outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot='radio-group-indicator'
        className='relative flex items-center justify-center'
      >
        <IconCircle className='fill-current size-2' />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
