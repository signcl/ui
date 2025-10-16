import { cn } from '@/lib/cn'

function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      data-slot='kbd'
      className={cn(
        'bg-fg/10 text-fg/90 pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none',
        "[&_svg:not([class*='size-'])]:size-3",
        '[[data-slot=tooltip-content]_&]:bg-fg [[data-slot=tooltip-content]_&]:text-bg',
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return <kbd data-slot='kbd-group' className={cn('inline-flex items-center gap-1', className)} {...props} />
}

export { Kbd, KbdGroup }
