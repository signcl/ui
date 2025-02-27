'use client'

import { ComponentProps } from 'react'
import { IconHelpHexagonFilled } from '@tabler/icons-react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/cn'
import { Tooltip } from '@/components/ui/tooltip'

// Label variants
const labelVariants = cva('text-fg/50 flex items-center gap-1 text-xs', {
  variants: {
    position: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
    active: {
      true: 'text-fg',
    },
  },
  defaultVariants: {
    position: 'start',
  },
})

// Content variants
const contentVariants = cva('font-figures flex text-3xl leading-none font-medium', {
  variants: {
    position: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
    size: {
      default: '',
      sm: 'text-xl',
    },
    active: {
      true: 'text-ac',
    },
  },
  defaultVariants: {
    position: 'start',
    size: 'default',
  },
})

// Figure variants
const figureVariants = cva('grid min-w-[60px]', {
  variants: {
    altOrderOnMobile: {
      true: '',
    },
  },
})

interface FigureProps
  extends ComponentProps<'div'>,
    Omit<VariantProps<typeof figureVariants>, 'position' | 'active' | 'size'> {
  /**
   * 要展示的数字
   */
  figure: React.ReactNode
  /**
   * 标题
   */
  label: React.ReactNode
  tooltip?: React.ReactNode
  position?: 'start' | 'center' | 'end'
  active?: boolean
  size?: 'default' | 'sm'
}

function Figure({
  className,
  figure,
  label,
  tooltip,
  position = 'start',
  active,
  size = 'default',
  altOrderOnMobile,
  ...props
}: FigureProps) {
  // Calculate whether we need to override position on mobile
  const mobileOverrides = altOrderOnMobile && (position === 'center' || position === 'end')

  return (
    <div data-slot='figure' className={cn(figureVariants({ altOrderOnMobile }), className)} {...props}>
      <div
        data-slot='figure-label'
        className={cn(
          labelVariants({
            position,
            active,
          }),
          mobileOverrides && 'max-md:justify-start'
        )}
      >
        {label}

        {tooltip ? (
          <Tooltip label={tooltip}>
            <span className='size-3 cursor-help'>
              <IconHelpHexagonFilled />
            </span>
          </Tooltip>
        ) : null}
      </div>
      <div
        data-slot='figure-content'
        className={cn(
          contentVariants({
            position,
            size,
            active,
          }),
          mobileOverrides && 'max-md:-order-1 max-md:justify-start'
        )}
      >
        {figure}
      </div>
    </div>
  )
}

export { Figure }
