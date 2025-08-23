'use client'

import { IconCircle } from '@tabler/icons-react'
import type * as React from 'react'

import { cn } from '@/lib/cn'

function Radio({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <div className='relative inline-flex'>
      <input
        type='radio'
        data-slot='radio'
        className={cn(
          'peer bg-bg/10 size-4 cursor-pointer appearance-none rounded-full border',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'checked:border-ac checked:bg-ac',
          'focus-ring',
          className
        )}
        {...props}
      />
      <div className='text-bg pointer-events-none absolute flex size-4 items-center justify-center opacity-0 peer-checked:opacity-100'>
        <IconCircle className='size-2 fill-current' />
      </div>
    </div>
  )
}

export { Radio }
