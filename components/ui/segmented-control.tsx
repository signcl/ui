'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/cn'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const segmentedControlVariants = cva('bg-fg/5 gap-0', {
  variants: {
    size: {
      sm: 'rounded-sm',
      default: 'rounded-md',
      lg: 'rounded-md',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const segmentedControlItemVariants = cva('data-[state=on]:bg-bg text-fg/60 hover:text-fg border', {
  variants: {
    tint: {
      default: 'data-[state=on]:text-fg data-[state=on]:border-fg/20',
      accent: 'data-[state=on]:bg-ac data-[state=on]:text-bg',
    },
  },
  defaultVariants: {
    tint: 'default',
  },
})

type SegmentedControlProps = React.ComponentPropsWithoutRef<typeof ToggleGroup> & {
  tint?: VariantProps<typeof segmentedControlItemVariants>['tint']
}

const SegmentedControlContext = React.createContext<{
  tint?: VariantProps<typeof segmentedControlItemVariants>['tint']
}>({})

const SegmentedControl = React.forwardRef<React.ComponentRef<typeof ToggleGroup>, SegmentedControlProps>(
  ({ className, size, variant = 'default', tint = 'default', children, ...props }, ref) => (
    <SegmentedControlContext.Provider value={{ tint }}>
      <ToggleGroup
        ref={ref}
        className={cn(segmentedControlVariants({ size }), className)}
        size={size}
        variant={variant}
        {...props}
      >
        {children}
      </ToggleGroup>
    </SegmentedControlContext.Provider>
  )
)

SegmentedControl.displayName = 'SegmentedControl'

type SegmentedControlItemProps = React.ComponentPropsWithoutRef<typeof ToggleGroupItem> & {
  tint?: VariantProps<typeof segmentedControlItemVariants>['tint']
}

const SegmentedControlItem = React.forwardRef<React.ComponentRef<typeof ToggleGroupItem>, SegmentedControlItemProps>(
  ({ className, children, tint, ...props }, ref) => {
    const context = React.useContext(SegmentedControlContext)
    const itemTint = tint || context.tint

    return (
      <ToggleGroupItem
        ref={ref}
        className={cn(
          segmentedControlItemVariants({
            tint: itemTint,
          }),
          className
        )}
        {...props}
      >
        {children}
      </ToggleGroupItem>
    )
  }
)

SegmentedControlItem.displayName = 'SegmentedControlItem'

export { SegmentedControl, SegmentedControlItem }
