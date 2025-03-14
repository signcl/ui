'use client'

import * as ResizablePrimitive from 'react-resizable-panels'
import { IconGripVertical } from '@tabler/icons-react'

import { cn } from '@/lib/cn'

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn('flex h-full w-full data-[panel-group-direction=vertical]:flex-col', className)}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      'relative flex w-px items-center justify-center bg-fg/20',
      'after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 ',

      // Hover state
      'data-[resize-handle-state=hover]:bg-fg/40 data-[resize-handle-state=hover]:[&>[data-slot=handle]]:text-fg/50 data-[resize-handle-state=hover]:[&>[data-slot=handle]]:border-fg/40',

      // Drag state
      'data-[resize-handle-state=drag]:bg-fg data-[resize-handle-state=drag]:[&>[data-slot=handle]]:text-fg data-[resize-handle-state=drag]:[&>[data-slot=handle]]:border-fg',

      // Focus state
      'focus-visible:outline-none focus-visible:bg-ac focus-visible:[&>[data-slot=handle]]:text-ac focus-visible:[&>[data-slot=handle]]:border-ac',

      // Vertical handle
      'data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>[data-slot=handle]]:rotate-90',
      className
    )}
    {...props}
  >
    {withHandle && (
      <div
        data-slot='handle'
        className='z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-bg text-fg/30'
      >
        <IconGripVertical className='size-2.5' />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
