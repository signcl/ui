'use client'

import { ComponentProps, Fragment } from 'react'
import { IconChevronLeft, IconChevronRight, IconDots } from '@tabler/icons-react'

import { cn } from '@/lib/cn'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'

function PaginationPrimitive({ className, ...props }: ComponentProps<'nav'>) {
  return (
    <nav
      role='navigation'
      aria-label='pagination'
      data-slot='pagination'
      className={cn('flex', className)}
      {...props}
    />
  )
}

function PaginationContent({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot='pagination-content' className={cn('flex flex-row items-center gap-1', className)} {...props} />
}

function PaginationItem({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot='pagination-item' className={cn('', className)} {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & ComponentProps<'button'>

function PaginationLink({ className, isActive, ...props }: PaginationLinkProps) {
  return (
    <button
      data-slot='pagination-link'
      aria-current={isActive ? 'page' : undefined}
      className={cn('focus-ring rounded-sm disabled:cursor-not-allowed disabled:opacity-50', className)}
      {...props}
    />
  )
}

function PaginationPrevious({ className, ...props }: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      data-slot='pagination-previous'
      aria-label='访问上一页'
      className={cn('flex items-center gap-1 px-1.5 py-1', props.disabled && 'cursor-not-allowed', className)}
      {...props}
    >
      <IconChevronLeft className='size-4' />
    </PaginationLink>
  )
}

function PaginationNext({ className, ...props }: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      data-slot='pagination-next'
      aria-label='访问下一页'
      className={cn('flex items-center gap-1 px-1.5 py-1', props.disabled && 'cursor-not-allowed', className)}
      {...props}
    >
      <IconChevronRight className='size-4' />
    </PaginationLink>
  )
}

type PaginationEllipsisProps = {
  pages?: number[]
  onPageChange?: (page: number) => void
  disabled?: boolean
} & ComponentProps<'span'>

function PaginationEllipsis({ className, pages, onPageChange, disabled, ...props }: PaginationEllipsisProps) {
  // If no hidden pages, just show the dots
  if (!pages || pages.length === 0) {
    return (
      <span
        data-slot='pagination-ellipsis'
        aria-hidden
        className={cn('flex items-center justify-center px-2 py-1', className)}
        {...props}
      >
        <IconDots className='size-4' />
        <span className='sr-only'>更多页面</span>
      </span>
    )
  }

  // When there are hidden pages, show a select
  return (
    <Select
      onValueChange={value => {
        if (onPageChange) {
          onPageChange(parseInt(value, 10))
        }
      }}
      disabled={disabled}
    >
      <SelectTrigger className={'border-none [&>span]:flex'} withoutIcon>
        <SelectValue aria-label='更多页面' placeholder={<IconDots className='size-4' />}>
          <IconDots className='size-4' />
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {pages.map(page => (
          <SelectItem key={page} value={String(page)}>
            {page}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

interface PaginationProps extends ComponentProps<'nav'> {
  value: number
  onPageChange: (page: number) => void
  total: number
  disabled?: boolean
  siblings?: number
}

function Pagination({
  className,
  value,
  onPageChange,
  total,
  disabled = false,
  siblings = 3,
  ...props
}: PaginationProps) {
  // Generate all page numbers
  const allPages = Array.from({ length: total }, (_, k) => k + 1)

  // Determine which pages to show
  const visiblePages = allPages.filter(
    page => page === 1 || page === total || (page >= value - siblings && page <= value + siblings)
  )

  // Render the pagination
  return (
    <PaginationPrimitive className={className} {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => onPageChange(value - 1)} disabled={disabled || value === 1} />
        </PaginationItem>

        {visiblePages.map((page, index, arr) => {
          // Check if there's a gap that needs an ellipsis
          if (index > 0 && page !== arr[index - 1] + 1) {
            // Get the list of hidden pages in this gap
            const hiddenPages = allPages.filter(p => p > arr[index - 1] && p < page)

            return (
              <Fragment key={`ellipsis-${index}`}>
                <PaginationItem>
                  <PaginationEllipsis pages={hiddenPages} onPageChange={onPageChange} disabled={disabled} />
                </PaginationItem>
                <PaginationItem key={`page-${page}`}>
                  <PaginationLink
                    isActive={page === value}
                    onClick={() => onPageChange(page)}
                    className={cn('px-2 py-1', { 'bg-ac/60 text-bg': page === value })}
                    disabled={disabled}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              </Fragment>
            )
          }

          return (
            <PaginationItem key={`page-${page}`}>
              <PaginationLink
                isActive={page === value}
                onClick={() => onPageChange(page)}
                className={cn('px-2 py-1', { 'bg-ac/60 text-bg': page === value })}
                disabled={disabled}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        <PaginationItem>
          <PaginationNext onClick={() => onPageChange(value + 1)} disabled={disabled || value === total} />
        </PaginationItem>
      </PaginationContent>
    </PaginationPrimitive>
  )
}

export {
  Pagination,
  PaginationPrimitive,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
