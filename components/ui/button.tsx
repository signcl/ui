import type { ButtonHTMLAttributes } from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'
import { Loading } from './loading'

const buttonVariantsConfig = {
  size: {
    sm: 'text-xs px-[0.5em] py-[0.25em] rounded-sm',
    default: 'text-base px-[0.625em] py-[0.25em]',
    lg: 'text-lg px-[0.8em] py-[0.325em]',
    icon: 'text-base p-[0.25em]',
  },
  variant: {
    default: '',
    solid: '',
    outline: 'border bg-transparent focus-visible:border-current',
    link: 'text-fg not-disabled:hover:text-ac bg-transparent',
  },
  tint: {
    default: 'text-fg focus-visible:ring-fg/30',
    accent: 'text-ac focus-visible:ring-ac/30',
    gray: 'text-gray-600 focus-visible:ring-gray-500/30',
    red: 'text-red-600 focus-visible:ring-red-500/30',
    orange: 'text-orange-600 focus-visible:ring-orange-500/30',
    amber: 'text-amber-600 focus-visible:ring-amber-500/30',
    yellow: 'text-yellow-600 focus-visible:ring-yellow-500/30',
    lime: 'text-lime-600 focus-visible:ring-lime-500/30',
    green: 'text-green-600 focus-visible:ring-green-500/30',
    emerald: 'text-emerald-600 focus-visible:ring-emerald-500/30',
    teal: 'text-teal-600 focus-visible:ring-teal-500/30',
    cyan: 'text-cyan-600 focus-visible:ring-cyan-500/30',
    sky: 'text-sky-600 focus-visible:ring-sky-500/30',
    blue: 'text-blue-600 focus-visible:ring-blue-500/30',
    indigo: 'text-indigo-600 focus-visible:ring-indigo-500/30',
    violet: 'text-violet-600 focus-visible:ring-violet-500/30',
    purple: 'text-purple-600 focus-visible:ring-purple-500/30',
    fuchsia: 'text-fuchsia-600 focus-visible:ring-fuchsia-500/30',
    pink: 'text-pink-600 focus-visible:ring-pink-500/30',
    rose: 'text-rose-600 focus-visible:ring-rose-500/30',
  },
}

const buttonVariants = cva(
  'appearance-none inline-flex items-center gap-1 cursor-pointer justify-center whitespace-nowrap rounded-md font-medium focus-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: buttonVariantsConfig,
    // prettier-ignore
    compoundVariants: [
      { variant: 'default', tint: 'default', className: 'bg-fg/10 not-disabled:hover:bg-fg/20' },
      { variant: 'default', tint: 'accent', className: 'bg-ac/10 not-disabled:hover:bg-ac/20' },
      { variant: 'default', tint: 'gray', className: 'bg-gray-500/10 not-disabled:hover:bg-gray-500/20' },
      { variant: 'default', tint: 'red', className: 'bg-red-500/10 not-disabled:hover:bg-red-500/20' },
      { variant: 'default', tint: 'orange', className: 'bg-orange-500/10 not-disabled:hover:bg-orange-500/20' },
      { variant: 'default', tint: 'amber', className: 'bg-amber-500/10 not-disabled:hover:bg-amber-500/20' },
      { variant: 'default', tint: 'yellow', className: 'bg-yellow-500/10 not-disabled:hover:bg-yellow-500/20' },
      { variant: 'default', tint: 'lime', className: 'bg-lime-500/10 not-disabled:hover:bg-lime-500/20' },
      { variant: 'default', tint: 'green', className: 'bg-green-500/10 not-disabled:hover:bg-green-500/20' },
      { variant: 'default', tint: 'emerald', className: 'bg-emerald-500/10 not-disabled:hover:bg-emerald-500/20' },
      { variant: 'default', tint: 'teal', className: 'bg-teal-500/10 not-disabled:hover:bg-teal-500/20' },
      { variant: 'default', tint: 'cyan', className: 'bg-cyan-500/10 not-disabled:hover:bg-cyan-500/20' },
      { variant: 'default', tint: 'sky', className: 'bg-sky-500/10 not-disabled:hover:bg-sky-500/20' },
      { variant: 'default', tint: 'blue', className: 'bg-blue-500/10 not-disabled:hover:bg-blue-500/20' },
      { variant: 'default', tint: 'indigo', className: 'bg-indigo-500/10 not-disabled:hover:bg-indigo-500/20' },
      { variant: 'default', tint: 'violet', className: 'bg-violet-500/10 not-disabled:hover:bg-violet-500/20' },
      { variant: 'default', tint: 'purple', className: 'bg-purple-500/10 not-disabled:hover:bg-purple-500/20' },
      { variant: 'default', tint: 'fuchsia', className: 'bg-fuchsia-500/10 not-disabled:hover:bg-fuchsia-500/20' },
      { variant: 'default', tint: 'pink', className: 'bg-pink-500/10 not-disabled:hover:bg-pink-500/20' },
      { variant: 'default', tint: 'rose', className: 'bg-rose-500/10 not-disabled:hover:bg-rose-500/20' },

      // Solid
      { variant: 'solid', tint: 'default', className: 'bg-fg border-fg text-bg not-disabled:hover:bg-fg/80' },
      { variant: 'solid', tint: 'accent', className: 'bg-ac border-ac text-bg not-disabled:hover:bg-ac/80' },
      { variant: 'solid', tint: 'gray', className: 'bg-gray-600 text-bg not-disabled:hover:bg-gray-700' },
      { variant: 'solid', tint: 'red', className: 'bg-red-600 text-bg not-disabled:hover:bg-red-700' },
      { variant: 'solid', tint: 'orange', className: 'bg-orange-600 text-bg not-disabled:hover:bg-orange-700' },
      { variant: 'solid', tint: 'amber', className: 'bg-amber-600 text-bg not-disabled:hover:bg-amber-700' },
      { variant: 'solid', tint: 'yellow', className: 'bg-yellow-600 text-bg not-disabled:hover:bg-yellow-700' },
      { variant: 'solid', tint: 'lime', className: 'bg-lime-600 text-bg not-disabled:hover:bg-lime-700' },
      { variant: 'solid', tint: 'green', className: 'bg-green-600 text-bg not-disabled:hover:bg-green-700' },
      { variant: 'solid', tint: 'emerald', className: 'bg-emerald-600 text-bg not-disabled:hover:bg-emerald-700', },
      { variant: 'solid', tint: 'teal', className: 'bg-teal-600 text-bg not-disabled:hover:bg-teal-700' },
      { variant: 'solid', tint: 'cyan', className: 'bg-cyan-600 text-bg not-disabled:hover:bg-cyan-700' },
      { variant: 'solid', tint: 'sky', className: 'bg-sky-600 text-bg not-disabled:hover:bg-sky-700' },
      { variant: 'solid', tint: 'blue', className: 'bg-blue-600 text-bg not-disabled:hover:bg-blue-700' },
      { variant: 'solid', tint: 'indigo', className: 'bg-indigo-600 text-bg not-disabled:hover:bg-indigo-700' },
      { variant: 'solid', tint: 'violet', className: 'bg-violet-600 text-bg not-disabled:hover:bg-violet-700' },
      { variant: 'solid', tint: 'purple', className: 'bg-purple-600 text-bg not-disabled:hover:bg-purple-700' },
      { variant: 'solid', tint: 'fuchsia', className: 'bg-fuchsia-600 text-bg not-disabled:hover:bg-fuchsia-700', },
      { variant: 'solid', tint: 'pink', className: 'bg-pink-600 text-bg not-disabled:hover:bg-pink-700' },
      { variant: 'solid', tint: 'rose', className: 'bg-rose-600 text-bg not-disabled:hover:bg-rose-700' },

      // Outline
      { variant: 'outline', tint: 'default', className: 'border-fg/30 not-disabled:hover:text-fg/80 not-disabled:hover:border-fg/80 data-[state=open]:border-ac data-[state=open]:text-ac' },
      { variant: 'outline', tint: 'accent', className: 'border-ac not-disabled:hover:text-ac/80 not-disabled:hover:border-ac/80' },
      { variant: 'outline', tint: 'gray', className: 'border-gray-600 not-disabled:hover:text-gray-700 not-disabled:hover:border-gray-700' },
      { variant: 'outline', tint: 'red', className: 'border-red-600 not-disabled:hover:text-red-700 not-disabled:hover:border-red-700' },
      { variant: 'outline', tint: 'orange', className: 'border-orange-600 not-disabled:hover:text-orange-700 not-disabled:hover:border-orange-700' },
      { variant: 'outline', tint: 'amber', className: 'border-amber-600 not-disabled:hover:text-amber-700 not-disabled:hover:border-amber-700' },
      { variant: 'outline', tint: 'yellow', className: 'border-yellow-600 not-disabled:hover:text-yellow-700 not-disabled:hover:border-yellow-700' },
      { variant: 'outline', tint: 'lime', className: 'border-lime-600 not-disabled:hover:text-lime-700 not-disabled:hover:border-lime-700' },
      { variant: 'outline', tint: 'green', className: 'border-green-600 not-disabled:hover:text-green-700 not-disabled:hover:border-green-700' },
      { variant: 'outline', tint: 'emerald', className: 'border-emerald-600 not-disabled:hover:text-emerald-700 not-disabled:hover:border-emerald-700' },
      { variant: 'outline', tint: 'teal', className: 'border-teal-600 not-disabled:hover:text-teal-700 not-disabled:hover:border-teal-700' },
      { variant: 'outline', tint: 'cyan', className: 'border-cyan-600 not-disabled:hover:text-cyan-700 not-disabled:hover:border-cyan-700' },
      { variant: 'outline', tint: 'sky', className: 'border-sky-600 not-disabled:hover:text-sky-700 not-disabled:hover:border-sky-700' },
      { variant: 'outline', tint: 'blue', className: 'border-blue-600 not-disabled:hover:text-blue-700 not-disabled:hover:border-blue-700' },
      { variant: 'outline', tint: 'indigo', className: 'border-indigo-600 not-disabled:hover:text-indigo-700 not-disabled:hover:border-indigo-700' },
      { variant: 'outline', tint: 'violet', className: 'border-violet-600 not-disabled:hover:text-violet-700 not-disabled:hover:border-violet-700' },
      { variant: 'outline', tint: 'purple', className: 'border-purple-600 not-disabled:hover:text-purple-700 not-disabled:hover:border-purple-700' },
      { variant: 'outline', tint: 'fuchsia', className: 'border-fuchsia-600 not-disabled:hover:text-fuchsia-700 not-disabled:hover:border-fuchsia-700' },
      { variant: 'outline', tint: 'pink', className: 'border-pink-600 not-disabled:hover:text-pink-700 not-disabled:hover:border-pink-700' },
      { variant: 'outline', tint: 'rose', className: 'border-rose-600 not-disabled:hover:text-rose-700 not-disabled:hover:border-rose-700' },

      // Link
      { variant: 'link', tint: 'default', className: 'not-disabled:hover:text-ac data-[state=open]:text-ac' },
      { variant: 'link', tint: 'accent', className: 'not-disabled:hover:text-ac/80' },
      { variant: 'link', tint: 'gray', className: 'not-disabled:hover:text-gray-500' },
      { variant: 'link', tint: 'red', className: 'not-disabled:hover:text-red-500' },
      { variant: 'link', tint: 'orange', className: 'not-disabled:hover:text-orange-500' },
      { variant: 'link', tint: 'amber', className: 'not-disabled:hover:text-amber-500' },
      { variant: 'link', tint: 'yellow', className: 'not-disabled:hover:text-yellow-500' },
      { variant: 'link', tint: 'lime', className: 'not-disabled:hover:text-lime-500' },
      { variant: 'link', tint: 'green', className: 'not-disabled:hover:text-green-500' },
      { variant: 'link', tint: 'emerald', className: 'not-disabled:hover:text-emerald-500' },
      { variant: 'link', tint: 'teal', className: 'not-disabled:hover:text-teal-500' },
      { variant: 'link', tint: 'cyan', className: 'not-disabled:hover:text-cyan-500' },
      { variant: 'link', tint: 'sky', className: 'not-disabled:hover:text-sky-500' },
      { variant: 'link', tint: 'blue', className: 'not-disabled:hover:text-blue-500' },
      { variant: 'link', tint: 'indigo', className: 'not-disabled:hover:text-indigo-500' },
      { variant: 'link', tint: 'violet', className: 'not-disabled:hover:text-violet-500' },
      { variant: 'link', tint: 'purple', className: 'not-disabled:hover:text-purple-500' },
      { variant: 'link', tint: 'fuchsia', className: 'not-disabled:hover:text-fuchsia-500' },
      { variant: 'link', tint: 'pink', className: 'not-disabled:hover:text-pink-500' },
      { variant: 'link', tint: 'rose', className: 'not-disabled:hover:text-rose-500' },

      // Dot variant padding adjustments
      // { variant: 'dot', size: 'default', className: 'pl-[1.125rem]' },
      // { variant: 'dot', size: 'sm', className: 'pl-[0.85rem]' },
      // { variant: 'dot', size: 'lg', className: 'pl-5' },
    ],
    defaultVariants: {
      size: 'default',
      variant: 'default',
      tint: 'default',
    },
  }
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  as?: string
  /**
   * @link https://www.radix-ui.com/primitives/docs/utilities/slot
   */
  asChild?: boolean
  loading?: boolean
  leftSection?: React.ReactNode
  leftSectionClassName?: string
  rightSection?: React.ReactNode
  rightSectionClassName?: string
}

function Button({
  className,
  variant,
  size,
  tint,
  as,
  asChild = false,
  loading = false,
  leftSection,
  leftSectionClassName,
  rightSection,
  rightSectionClassName,
  children,
  ...props
}: ButtonProps) {
  const Comp = as ? as : asChild ? Slot : 'button'
  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, tint, className }), loading && 'cursor-wait')}
      {...props}
    >
      {leftSection ? (
        <div className={cn('flex items-center justify-center', leftSectionClassName)}>{leftSection}</div>
      ) : null}

      <Slottable>{children}</Slottable>

      {loading && <Loading />}
      {rightSection ? (
        <div className={cn('flex items-center justify-center', rightSectionClassName)}>{rightSection}</div>
      ) : null}
    </Comp>
  )
}

export { Button, buttonVariants, buttonVariantsConfig }
