import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/cn'

const alertVariantsConfig = {
  tint: {
    default: 'bg-bg/10 text-fg border',
    accent: 'bg-ac/5 text-[color-mix(in_srgb,var(--color-ac),var(--color-fg)_60%)] border-ac',
    danger: 'border-rose-500/50 text-rose-500 bg-rose-500/5',
    success: 'border-emerald-500/50 text-emerald-500 bg-emerald-500/5',
    warning: 'border-orange-500/50 text-orange-500 bg-orange-500/5',
    info: 'border-blue-500/50 text-blue-500 bg-blue-500/5',
  },
}

const alertVariants = cva('relative w-full rounded-md border p-3', {
  variants: alertVariantsConfig,
  defaultVariants: {
    tint: 'default',
  },
})

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  children?: React.ReactNode
  label?: React.ReactNode
  icon?: React.ReactNode
}

function Alert({ className, tint, children, label, icon, ...props }: React.ComponentProps<'div'> & AlertProps) {
  const content = typeof children === 'string' ? <div>{children}</div> : children

  return (
    <div role='alert' data-slot='alert' className={cn(alertVariants({ tint }), icon && 'pl-3', className)} {...props}>
      <div className='flex'>
        {icon && <div className='shrink-0'>{icon}</div>}
        <div className={cn('w-full', icon && 'ml-2')}>
          {label && <h5 className='mb-1 leading-tight font-medium tracking-tight'>{label}</h5>}
          {content}
        </div>
      </div>
    </div>
  )
}

export { Alert, alertVariantsConfig }
