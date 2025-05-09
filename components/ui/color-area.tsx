import React from 'react'
import { ColorArea as AriaColorArea, type ColorAreaProps as AriaColorAreaProps } from 'react-aria-components'

import { composeTailwindRenderProps } from '@/utils'

import { ColorThumb } from './color-thumb'

export function ColorArea(props: AriaColorAreaProps) {
  return (
    <AriaColorArea
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'h-56 w-56 rounded-lg bg-gray-300 dark:bg-zinc-800 forced-colors:bg-[GrayText]'
      )}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        background: isDisabled ? undefined : defaultStyle.background,
      })}
    >
      <ColorThumb />
    </AriaColorArea>
  )
}
