'use client'

import {
  IconAlertCircleFilled,
  IconAlertTriangleFilled,
  IconCircleCheckFilled,
  IconInfoCircleFilled,
} from '@tabler/icons-react'
// https://ui.shadcn.com/docs/components/sonner
import { Toaster as Sonner } from 'sonner'

import { Loading } from './loading'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className='unstyled'
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'group floating p-3 rounded-lg flex gap-2 items-start w-(--width)',
          title: 'font-medium text-base',
          description: 'text-sm',
          closeButton:
            'group-hover:opacity-100 opacity-0 bg-bg shadow-border absolute -top-1 -left-1.5 rounded-full size-5 flex items-center justify-center',
          content: 'flex-auto',
          info: '**:data-icon:text-sky-500',
          success: '**:data-icon:text-emerald-500',
          warning: '**:data-icon:text-amber-500',
          error: '**:data-icon:text-rose-500',
          actionButton: 'shrink-0 px-2 py-0.5 text-sm rounded-sm border focus-ring',
          cancelButton: 'shrink-0 px-2 py-0.5 text-sm rounded-sm focus-ring',
          loader: 'flex items-center',
          icon: 'relative flex flex-shrink-0 items-center size-6 [&>svg]:flex [&>svg]:flex-auto',
        },
      }}
      // https://sonner.emilkowal.ski/styling#changing-icons
      icons={{
        success: <IconCircleCheckFilled size={'1.5rem'} />,
        info: <IconInfoCircleFilled size={'1.5rem'} />,
        warning: <IconAlertTriangleFilled size={'1.5rem'} />,
        error: <IconAlertCircleFilled size={'1.5rem'} />,
        loading: <Loading size={'1.5rem'} />,
      }}
      gap={10}
      {...props}
    />
  )
}

export { Toaster }
