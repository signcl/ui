'use client'

// https://ui.shadcn.com/docs/components/sonner

import { Toaster as Sonner } from 'sonner'

import {
  IconAlertCircleFilled,
  IconAlertTriangleFilled,
  IconCircleCheckFilled,
  IconInfoCircleFilled,
} from '@tabler/icons-react'
import { Loading } from './loading'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className='unstyled'
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'floating p-3 rounded-lg flex gap-2 items-start w-(--width)',
          title: 'font-medium text-base',
          description: 'text-sm',
          closeButton: 'floating',
          info: '**:data-icon:text-sky-600',
          success: '**:data-icon:text-green-600',
          warning: '**:data-icon:text-amber-600',
          error: '**:data-icon:text-red-600',
          actionButton: 'shrink-0 px-2 py-0.5 text-sm rounded-sm border border-[currentColor]',
          cancelButton: 'shrink-0 px-2 py-0.5 text-sm rounded-sm',
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
