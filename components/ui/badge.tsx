import { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot, Slottable } from '@radix-ui/react-slot'

import { cn } from '@/lib/cn'

const badgeVariantsConfig = {
  size: {
    default: 'text-xs px-2.5 py-0.5 leading-tight',
    lg: 'text-sm px-3 py-0.5 leading-tight',
    sm: 'text-[10px] px-1.5 py-[0.1rem] leading-none',
  },
  variant: {
    default: '',
    solid: '',
    // TODO: Implement gradient variant
    gradient: '',
    dot: 'relative',
  },
  tint: {
    default: 'bg-gray-500/10 text-gray-600',
    red: 'bg-red-500/10 text-red-600',
    orange: 'bg-orange-500/10 text-orange-600',
    amber: 'bg-amber-500/10 text-amber-600',
    yellow: 'bg-yellow-500/10 text-yellow-600',
    lime: 'bg-lime-500/10 text-lime-600',
    green: 'bg-green-500/10 text-green-600',
    emerald: 'bg-emerald-500/10 text-emerald-600',
    teal: 'bg-teal-500/10 text-teal-600',
    cyan: 'bg-cyan-500/10 text-cyan-600',
    sky: 'bg-sky-500/10 text-sky-600',
    blue: 'bg-blue-500/10 text-blue-600',
    indigo: 'bg-indigo-500/10 text-indigo-600',
    violet: 'bg-violet-500/10 text-violet-600',
    purple: 'bg-purple-500/10 text-purple-600',
    fuchsia: 'bg-fuchsia-500/10 text-fuchsia-600',
    pink: 'bg-pink-500/10 text-pink-600',
    rose: 'bg-rose-500/10 text-rose-600',
    dark: 'bg-fg/10 text-fg',
  },
  radius: {
    default: 'rounded-full',
    lg: 'rounded-lg',
    md: 'rounded-md',
    sm: 'rounded-xs',
    none: 'rounded-none',
  },
  border: {
    default: 'border',
    none: 'border-transparent',
  },
}

const dotVariants = cva('absolute top-1/2 -translate-y-1/2 rounded-full', {
  variants: {
    size: {
      default: 'size-2 left-1.5',
      lg: 'size-2 left-1.5',
      sm: 'size-1.5 left-1',
    },
    tint: {
      default: 'bg-gray-600',
      red: 'bg-red-600',
      orange: 'bg-orange-600',
      amber: 'bg-amber-600',
      yellow: 'bg-yellow-600',
      lime: 'bg-lime-600',
      green: 'bg-green-600',
      emerald: 'bg-emerald-600',
      teal: 'bg-teal-600',
      cyan: 'bg-cyan-600',
      sky: 'bg-sky-600',
      blue: 'bg-blue-600',
      indigo: 'bg-indigo-600',
      violet: 'bg-violet-600',
      purple: 'bg-purple-600',
      fuchsia: 'bg-fuchsia-600',
      pink: 'bg-pink-600',
      rose: 'bg-rose-600',
      dark: 'bg-fg',
    },
  },
  defaultVariants: {
    size: 'default',
    tint: 'default',
  },
})

const badgeVariants = cva(
  'inline-flex items-center uppercase justify-center rounded-full border border-solid border-current font-medium',
  {
    variants: badgeVariantsConfig,
    compoundVariants: [
      { variant: 'solid', tint: 'default', className: 'bg-gray-600 border-gray-600 text-bg' },
      { variant: 'solid', tint: 'red', className: 'bg-red-600 border-red-600 text-bg' },
      { variant: 'solid', tint: 'orange', className: 'bg-orange-600 border-orange-600 text-bg' },
      { variant: 'solid', tint: 'amber', className: 'bg-amber-600 border-amber-600 text-bg' },
      { variant: 'solid', tint: 'yellow', className: 'bg-yellow-600 border-yellow-600 text-bg' },
      { variant: 'solid', tint: 'lime', className: 'bg-lime-600 border-lime-600 text-bg' },
      { variant: 'solid', tint: 'green', className: 'bg-green-600 border-green-600 text-bg' },
      { variant: 'solid', tint: 'emerald', className: 'bg-emerald-600 border-emerald-600 text-bg' },
      { variant: 'solid', tint: 'teal', className: 'bg-teal-600 border-teal-600 text-bg' },
      { variant: 'solid', tint: 'cyan', className: 'bg-cyan-600 border-cyan-600 text-bg' },
      { variant: 'solid', tint: 'sky', className: 'bg-sky-600 border-sky-600 text-bg' },
      { variant: 'solid', tint: 'blue', className: 'bg-blue-600 border-blue-600 text-bg' },
      { variant: 'solid', tint: 'indigo', className: 'bg-indigo-600 border-indigo-600 text-bg' },
      { variant: 'solid', tint: 'violet', className: 'bg-violet-600 border-violet-600 text-bg' },
      { variant: 'solid', tint: 'purple', className: 'bg-purple-600 border-purple-600 text-bg' },
      { variant: 'solid', tint: 'fuchsia', className: 'bg-fuchsia-600 border-fuchsia-600 text-bg' },
      { variant: 'solid', tint: 'pink', className: 'bg-pink-600 border-pink-600 text-bg' },
      { variant: 'solid', tint: 'rose', className: 'bg-rose-600 border-rose-600 text-bg' },
      { variant: 'solid', tint: 'dark', className: 'bg-fg border-fg text-bg' },

      // Dot variant padding adjustments
      { variant: 'dot', size: 'default', className: 'pl-[1.125rem]' },
      { variant: 'dot', size: 'sm', className: 'pl-[0.85rem]' },
      { variant: 'dot', size: 'lg', className: 'pl-5' },
    ],
    defaultVariants: {
      size: 'default',
      variant: 'default',
      tint: 'default',
      radius: 'default',
      border: 'default',
    },
  }
)

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  /**
   * @link https://www.radix-ui.com/primitives/docs/utilities/slot
   */
  asChild?: boolean
}

function Badge({
  size,
  className,
  asChild = false,
  tint = 'default',
  variant,
  radius,
  border,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      data-slot='badge'
      className={cn(badgeVariants({ size, variant, tint, radius, border }), className)}
      {...props}
    >
      {variant === 'dot' && <span className={dotVariants({ size, tint })} />}
      <Slottable>{children}</Slottable>
    </Comp>
  )
}

export { Badge, badgeVariants, badgeVariantsConfig, dotVariants }
