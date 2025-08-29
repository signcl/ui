'use client'

import { IconCheck, IconCopy } from '@tabler/icons-react'
import type React from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { CopyButton } from '@/components/ui/copy-button'
import { Input } from '@/components/ui/input'

export interface CommandProps extends React.ComponentProps<'div'> {
  command: string
}

export function Command({ command }: CommandProps) {
  const [, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1000)
    })
  }

  return (
    <Input
      value={command}
      onClick={handleCopy}
      aria-label='Copy command'
      readOnly
      rightSection={
        <CopyButton value={command} timeout={2000} className='flex items-center'>
          {({ copied, copy }) => (
            <Button
              variant={copied ? 'solid' : 'default'}
              tint={'accent'}
              size={'icon'}
              onClick={copy}
              aria-label={'Copy command'}
              disabled={!command}
            >
              {copied ? <IconCheck size='1rem' /> : <IconCopy size='1rem' />}
            </Button>
          )}
        </CopyButton>
      }
      rightSectionClassName='pr-1'
    />
  )
}
