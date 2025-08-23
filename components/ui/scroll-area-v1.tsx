'use client'

import * as RadixScrollArea from '@radix-ui/react-scroll-area'
// Migrated and modifed from Mantine v6 and shadcn ScrollArea component
// https://github.com/mantinedev/mantine/tree/v6/src/mantine-core/src/ScrollArea
// https://ui.shadcn.com/docs/components/scroll-area
import type React from 'react'
import { forwardRef } from 'react'

import { cn } from '@/lib/cn'

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof RadixScrollArea.Root> {
  /** Scrollbar size in pixels */
  scrollbarSize?: number

  /** Should scrollbars be offset with padding */
  offsetScrollbars?: boolean

  /** Get viewport ref */
  viewportRef?: React.ForwardedRef<React.ElementRef<typeof RadixScrollArea.Viewport>>

  /** Props added to the viewport element */
  // viewportProps?: React.ComponentPropsWithRef<'div'>
  viewportProps?: React.ComponentPropsWithRef<typeof RadixScrollArea.Viewport>

  /** Subscribe to scroll position changes */
  onScrollPositionChange?(position: { x: number; y: number }): void
}

export const ScrollArea = forwardRef<React.ElementRef<typeof RadixScrollArea.Root>, ScrollAreaProps>(
  (
    {
      className,
      children,
      scrollbarSize = 12,
      offsetScrollbars = false,
      viewportRef,
      viewportProps,
      onScrollPositionChange,
      ...props
    },
    ref
  ) => {
    const { className: viewportClassName, ...restViewportProps } = viewportProps || {}

    return (
      <RadixScrollArea.Root ref={ref} className={cn('relative overflow-hidden', className)} {...props}>
        <RadixScrollArea.Viewport
          ref={viewportRef}
          className={cn(
            'scroll-area size-full',
            // https://github.com/radix-ui/primitives/issues/926
            '[&>div]:block!',
            offsetScrollbars && {
              'pr-(--scrollbar-size)': true,
              'pb-(--scrollbar-size)': true,
            },
            viewportClassName
          )}
          style={{ '--scrollbar-size': `${scrollbarSize}px` } as React.CSSProperties}
          onScroll={
            typeof onScrollPositionChange === 'function'
              ? ({ currentTarget }) =>
                  onScrollPositionChange({
                    x: currentTarget.scrollLeft,
                    y: currentTarget.scrollTop,
                  })
              : undefined
          }
          {...restViewportProps}
        >
          {children}
        </RadixScrollArea.Viewport>

        <RadixScrollArea.Scrollbar
          orientation='vertical'
          className='bg-fg/0 hover:bg-fg/5 flex touch-none p-0.5 transition-colors duration-150 ease-out select-none data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:w-2'
        >
          <RadixScrollArea.Thumb className='bg-fg/40 hover:bg-fg/80 relative flex-1 rounded-[10px] before:absolute before:top-1/2 before:left-1/2 before:size-full before:min-h-6 before:min-w-6 before:-translate-x-1/2 before:-translate-y-1/2' />
        </RadixScrollArea.Scrollbar>

        <RadixScrollArea.Scrollbar
          orientation='horizontal'
          className='bg-fg/0 hover:bg-fg/5 flex touch-none p-0.5 transition-colors duration-150 ease-out select-none data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:w-2'
        >
          <RadixScrollArea.Thumb className='bg-fg/40 hover:bg-fg/80 relative flex-1 rounded-[10px] before:absolute before:top-1/2 before:left-1/2 before:size-full before:min-h-6 before:min-w-6 before:-translate-x-1/2 before:-translate-y-1/2' />
        </RadixScrollArea.Scrollbar>

        {/* scrollbar background is transparent by default, so no needs for this component */}
        <RadixScrollArea.Corner />
      </RadixScrollArea.Root>
    )
  }
)

ScrollArea.displayName = 'ScrollArea'
