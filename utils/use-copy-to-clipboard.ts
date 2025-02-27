'use client'

import { useState } from 'react'

export interface useCopyToClipboardProps {
  timeout?: number
}

export function useCopyToClipboard(props?: useCopyToClipboardProps) {
  const timeout = props?.timeout ?? 2000
  const [isCopied, setIsCopied] = useState<Boolean>(false)

  const copyToClipboard = (value: string) => {
    if (typeof window === 'undefined' || !navigator.clipboard?.writeText) {
      return
    }

    if (!value) {
      return
    }

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, timeout)
    })
  }

  return { isCopied, copyToClipboard }
}
