'use client'

import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { IconChevronDown } from '@tabler/icons-react'

import { cn } from '@/lib/cn'

type AccordionVariant = 'outline' | 'separated'

const accordionVariants = cva('', {
  variants: {
    variant: {
      outline: 'divide-y rounded-md border w-full',
      separated: 'space-y-3',
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
})

const accordionItemVariants = cva('', {
  variants: {
    variant: {
      outline: '',
      separated: [
        'rounded-md border border-transparent bg-fg/5 transition-[background-color] duration-300',
        'data-[state=open]:border-fg/30',
      ],
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
})

export const Accordion = ({
  className,
  variant = 'outline',
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & VariantProps<typeof accordionVariants>) => (
  <AccordionPrimitive.Root data-slot='accordion' className={cn(accordionVariants({ variant }), className)} {...props} />
)
Accordion.displayName = 'Accordion'

interface AccordionItemProps
  extends React.ComponentProps<typeof AccordionPrimitive.Item>,
    VariantProps<typeof accordionItemVariants> {}

export function AccordionItem({ className, variant = 'outline', ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        accordionItemVariants({ variant }),
        variant === 'separated' && 'data-[state=open]:bg-transparent',
        className
      )}
      {...props}
    />
  )
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'flex w-full items-center justify-between gap-x-3 p-3 text-left',
          'data-[state=open]:from-fg/5 data-[state=open]:to-fg/0 data-[state=open]:bg-linear-to-b [&[data-state=open]>svg]:rotate-180',
          'focus-ring',
          className
        )}
        {...props}
      >
        <div className='font-medium'>{children}</div>
        <IconChevronDown className='size-4 transition-transform duration-200' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className={cn(
        'overflow-hidden transition-[height]',
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      <div className='p-3 pt-0'>{children}</div>
    </AccordionPrimitive.Content>
  )
}

type AccordionRootProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>

interface AccordionSingletonProps extends Omit<AccordionRootProps, 'type' | 'value' | 'onValueChange'> {
  items: {
    id: string | number
    label: React.ReactNode
    content: React.ReactNode
  }[]
  variant?: AccordionVariant
  itemProps?: Partial<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>
  defaultValue?: string
}

export function AccordionSingleton({
  items,
  variant = 'outline',
  className,
  itemProps,
  defaultValue,
  ...props
}: AccordionSingletonProps) {
  const [value, setValue] = React.useState<string | undefined>(defaultValue)

  return (
    <AccordionPrimitive.Root
      data-slot='accordion'
      type='single'
      collapsible
      value={value}
      onValueChange={setValue}
      className={cn(accordionVariants({ variant }), className)}
      {...props}
    >
      {items.map(item => (
        <AccordionPrimitive.Item
          key={item.id}
          value={String(item.id)}
          className={cn(
            accordionItemVariants({ variant }),
            variant === 'separated' && 'data-[state=open]:bg-transparent'
          )}
          {...itemProps}
        >
          <AccordionTrigger>{item.label}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
