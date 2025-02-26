// https://ui.shadcn.com/docs/components/calendar

'use client'

import { ComponentProps } from 'react'
import { DayPicker } from 'react-day-picker'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

// We can remove date-fns if no custom locale is needed:
// https://daypicker.dev/upgrading
import { zhCN } from 'date-fns/locale'

import { cn } from '@/utils/cn'

export type CalendarProps = ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      locale={zhCN}
      // captionLayout='dropdown-buttons'
      showOutsideDays={showOutsideDays}
      className={cn(className)}
      classNames={{
        months: 'relative flex flex-col sm:flex-row gap-2',
        month: 'space-y-2',
        month_caption: '',
        caption_label: 'ml-1 text-sm font-medium',
        dropdowns: 'flex place-items-center',
        nav: 'flex gap-2 absolute top-0.5 right-0.5 leading-none',
        button_next: 'disabled:opacity-50 outline-hidden focus-ring rounded-sm',
        button_previous: 'disabled:opacity-50 outline-hidden focus-ring rounded-sm',
        month_grid: 'w-full border-collapse space-y-1',
        weekdays: 'flex',
        weekday: 'w-8 font-normal text-[0.8rem]',
        week: 'flex w-full mt-0.5',
        day: cn(
          'relative rounded-sm hover:bg-ac/10 p-0 text-center text-sm focus-within:relative focus-within:z-20 overflow-hidden',
          '[&:has([aria-selected])]:bg-ac [&:has([aria-selected].day-outside)]:bg-ac/50 [&:has([aria-selected].day-range-end)]:rounded-r',
          'data-[focused=true]:ring-2 data-[focused=true]:ring-ac/40'
          // props.mode === 'range'
          //   ? '[&:has(>.day-range-end)]:rounded-r [&:has(>.day-range-start)]:rounded-l first:[&:has([aria-selected])]:rounded-l last:[&:has([aria-selected])]:rounded-r'
          //   : '[&:has([aria-selected])]:rounded-sm'
        ),
        day_button: 'h-8 w-8 p-0 aria-selected:opacity-100 outline-hidden',
        range_start: 'day-range-start rounded-l-sm rounded-r-none',
        range_end: 'day-range-end rounded-r-sm rounded-l-none',
        range_middle: 'aria-selected:bg-ac aria-selected:text-bg rounded-none!',
        selected: cn(
          'bg-ac! text-bg hover:bg-ac/60 hover:text-bg',
          props.mode === 'range' ? 'rounded-none' : 'rounded-sm'
        ),
        today: 'font-bold',
        outside: 'day-outside text-fg/10 aria-selected:text-bg aria-selected:opacity-60',
        disabled: 'text-fg/40 cursor-not-allowed hover:bg-transparent',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ ...props }) => {
          if (props.orientation === 'left') {
            return <IconChevronLeft className='size-4' />
          } else {
            return <IconChevronRight className='size-4' />
          }
        },
      }}
      {...props}
    />
  )
}

export { Calendar }
