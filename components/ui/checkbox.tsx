'use client'

import { IconCheck } from '@tabler/icons-react'
import * as React from 'react'

import { cn } from '@/lib/cn'

/**
 * Checkbox component
 *
 * - Q: Why not using @radix-ui/react-checkbox?
 * - A: @radix-ui/react-checkbox uses button with type="button" and role="checkbox"
 *      which is anti pattern for accessibility.
 */
function Checkbox({ className, onChange, checked, defaultChecked, ...props }: React.ComponentProps<'input'>) {
  const [isChecked, setIsChecked] = React.useState(checked ?? defaultChecked ?? false)

  // Keep latest onChange in ref (similar to useEffectEvent)
  const onChangeRef = React.useRef(onChange)
  React.useEffect(() => {
    onChangeRef.current = onChange
  })

  // Sync with controlled checked prop
  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }, [checked])

  // Stable event handler that always calls latest onChange
  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    onChangeRef.current?.(e)
  }, [])

  return (
    <div className='relative inline-flex [&+label]:pb-0'>
      <input
        type='checkbox'
        data-slot='checkbox'
        className={cn(
          'peer bg-bg/10 size-4 cursor-pointer appearance-none rounded-sm border',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'checked:border-ac checked:bg-ac',
          'focus-ring',
          className
        )}
        onChange={handleChange}
        checked={checked}
        defaultChecked={defaultChecked}
        aria-checked={isChecked}
        data-state={isChecked ? 'checked' : 'unchecked'}
        {...props}
      />
      <div
        data-slot='checkbox-indicator'
        className='text-bg pointer-events-none absolute flex size-4 items-center justify-center opacity-0 peer-checked:opacity-100'
      >
        <IconCheck className='size-3.5' />
      </div>
    </div>
  )
}

export { Checkbox }
