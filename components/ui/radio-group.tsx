'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { IconCircle } from '@tabler/icons-react'
import * as React from 'react'

import { cn } from '@/lib/cn'

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      data-slot='radio-group-item'
      className={cn(
        'peer bg-bg/10 size-4 cursor-pointer appearance-none rounded-full border',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:border-ac data-[state=checked]:bg-ac',
        'focus-ring',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot='radio-group-indicator'
        className='text-bg flex items-center justify-center'
      >
        <IconCircle className='size-2 fill-current' />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
