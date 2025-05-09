import React from 'react'
import {
  ColorPicker as AriaColorPicker,
  Button,
  type ColorPickerProps as AriaColorPickerProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Popover } from '@radix-ui/react-popover'

import { focusRing } from '@/utils'

import { ColorArea } from './color-area'
import { ColorField } from './color-field'
import { ColorSlider } from './color-slider'
import { ColorSwatch } from './color-swatch'
import { PopoverContent, PopoverTrigger } from './popover'

const buttonStyles = tv({
  extend: focusRing,
  base: 'flex gap-2 items-center cursor-default rounded-xs text-sm text-gray-800 dark:text-gray-200',
})

export interface ColorPickerProps extends AriaColorPickerProps {
  label?: string
  children?: React.ReactNode
}

export function ColorPicker({ label, children, ...props }: ColorPickerProps) {
  return (
    <AriaColorPicker {...props}>
      <Popover>
        <PopoverTrigger asChild>
          <Button className={buttonStyles}>
            <ColorSwatch />
            <span>{label}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          {children || (
            <>
              <ColorArea colorSpace='hsb' xChannel='saturation' yChannel='brightness' />
              <ColorSlider colorSpace='hsb' channel='hue' />
              <ColorField label='Hex' />
            </>
          )}
        </PopoverContent>
      </Popover>
    </AriaColorPicker>
  )
}
