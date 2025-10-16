'use client'

import { IconCheck, IconCopy } from '@tabler/icons-react'
import type React from 'react'

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'

export interface CommandProps extends React.ComponentProps<'div'> {
  command: string
}

export function Command({ command }: CommandProps) {
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  return (
    <InputGroup>
      <InputGroupInput
        value={command}
        className='font-mono'
        readOnly
        aria-label='Copy command'
        onClick={() => copyToClipboard(command)}
      />
      <InputGroupAddon align='inline-end'>
        <InputGroupButton
          aria-label='Copy command'
          title='Copy'
          size='icon-xs'
          onClick={() => copyToClipboard(command)}
          disabled={!command}
        >
          {isCopied ? <IconCheck /> : <IconCopy />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
