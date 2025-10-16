'use client'

import { IconAdjustments, IconAdjustmentsCog, IconChevronDown, IconChevronUp, IconRestore } from '@tabler/icons-react'
import type * as React from 'react'

import { Button } from '@/components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Input, type InputProps } from '@/components/ui/input-next'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export interface InputNumberProps extends Omit<InputProps, 'type'> {
  /** Hide number controls */
  hideControls?: boolean
  /** Step interval for number inputs */
  step?: number
  /** Min value for number inputs */
  min?: number
  /** Max value for number inputs */
  max?: number
  /** onChange handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Current value */
  value?: number | string
  /** Default value for reset functionality */
  defaultValue?: number | string
}

function InputNumber({
  className,
  hideControls,
  step = 1,
  min,
  max,
  onChange,
  disabled,
  value,
  defaultValue,
  inputSize,
  ...props
}: InputNumberProps) {
  const triggerChange = (newValue: number) => {
    if (disabled) return

    if (onChange) {
      onChange({
        target: { value: newValue.toString(), valueAsNumber: newValue },
        currentTarget: { value: newValue.toString(), valueAsNumber: newValue },
      } as React.ChangeEvent<HTMLInputElement>)
    }
  }

  const handleIncrement = () => {
    if (disabled) return

    const currentValue = Number(value) || 0
    const newValue = currentValue + step

    if (max !== undefined && newValue > max) return

    triggerChange(newValue)
  }

  const handleDecrement = () => {
    if (disabled) return

    const currentValue = Number(value) || 0
    const newValue = currentValue - step

    if (min !== undefined && newValue < min) return

    triggerChange(newValue)
  }

  const handleReset = () => {
    if (disabled || defaultValue === undefined) return
    triggerChange(Number(defaultValue))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      handleIncrement()
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      handleDecrement()
    }
  }

  const isValueDifferentFromDefault = defaultValue !== undefined && Number(value) !== Number(defaultValue)

  const numberControls = (
    <div className='flex gap-0.5 p-0.5'>
      <div className='flex gap-0.5'>
        <Button
          variant={'link'}
          className='size-8 p-0'
          onClick={handleIncrement}
          disabled={disabled || (max !== undefined && Number(value) >= max)}
          aria-label='Increment'
        >
          <IconChevronUp size='1rem' />
        </Button>
        <Button
          variant={'link'}
          className='size-8 p-0'
          onClick={handleDecrement}
          disabled={disabled || (min !== undefined && Number(value) <= min)}
          aria-label='Decrement'
        >
          <IconChevronDown size='1rem' />
        </Button>
      </div>
      {defaultValue !== undefined && (
        <Button
          variant={'link'}
          className='size-8 p-0'
          onClick={handleReset}
          disabled={disabled || Number(value) === Number(defaultValue)}
          aria-label='Reset to default'
        >
          <IconRestore size='1rem' />
        </Button>
      )}
    </div>
  )

  if (hideControls) {
    return (
      <Input
        type='number'
        className={className}
        onChange={onChange}
        disabled={disabled}
        value={value}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        inputSize={inputSize}
        {...props}
      />
    )
  }

  return (
    <InputGroup className={className} data-disabled={disabled}>
      <InputGroupInput
        type='number'
        onKeyDown={handleKeyDown}
        onChange={onChange}
        disabled={disabled}
        value={value}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        {...props}
      />
      <InputGroupAddon align='inline-end'>
        <Popover>
          <PopoverTrigger asChild>
            <InputGroupButton size='icon-xs' variant='ghost' disabled={disabled}>
              {isValueDifferentFromDefault ? <IconAdjustmentsCog className='text-ac' /> : <IconAdjustments />}
            </InputGroupButton>
          </PopoverTrigger>
          <PopoverContent className='w-fit p-0' side='top'>
            {numberControls}
          </PopoverContent>
        </Popover>
      </InputGroupAddon>
    </InputGroup>
  )
}

export { InputNumber }
