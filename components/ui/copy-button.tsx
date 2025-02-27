'use client'

import { useCopyToClipboard } from '@/lib/use-copy-to-clipboard'

interface CopyButtonProps {
  /**
   * The value to copy to clipboard
   */
  value: string
  /**
   * Time in milliseconds that the copied state should persist
   */
  timeout?: number
  /**
   * Render prop that provides the copied state and copy function
   */
  children: (props: {
    /**
     * Whether the value has been copied to the clipboard
     */
    copied: boolean
    /**
     * Function to copy the value to the clipboard
     */
    copy: () => void
  }) => React.ReactNode
  /**
   * Optional className for the wrapper div
   */
  className?: string
}

export function CopyButton({ value, timeout, children, className }: CopyButtonProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout })

  const handleCopy = () => {
    copyToClipboard(value)
  }

  return (
    <div className={className}>
      {children({
        copied: Boolean(isCopied),
        copy: handleCopy,
      })}
    </div>
  )
}

// Example usage with default components
// export function DefaultCopyButton({ value, timeout = 2000 }: { value: string; timeout?: number }) {
//   return (
//     <CopyButton value={value} timeout={timeout}>
//       {({ copied, copy }) => (
//         <Tooltip>
//           <Tooltip.Trigger asChild>
//             <Button onClick={copy} disabled={!value} className='p-2' variant={copied ? 'default' : 'ghost'} size='icon'>
//               {copied ? <Check className='h-4 w-4' /> : <Copy className='h-4 w-4' />}
//               <span className='sr-only'>{copied ? 'Copied' : 'Copy to clipboard'}</span>
//             </Button>
//           </Tooltip.Trigger>
//           <Tooltip.Content>
//             <p>{copied ? 'Copied to clipboard' : 'Copy to clipboard'}</p>
//           </Tooltip.Content>
//         </Tooltip>
//       )}
//     </CopyButton>
//   )
// }
