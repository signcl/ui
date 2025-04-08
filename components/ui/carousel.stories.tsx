import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconCode, IconHeartFilled, IconInfoCircle, IconPhoto } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

const meta = {
  title: 'UI/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <div className='w-full max-w-md'>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='flex aspect-square items-center justify-center p-6 text-4xl font-semibold'>
                {index + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const MultipleItems: Story = {
  render: () => (
    <div className='w-full max-w-md'>
      <Carousel opts={{ align: 'start', loop: true }}>
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className='basis-1/2 md:basis-1/3'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const CustomControls: Story = {
  render: () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
      if (!api) {
        return
      }

      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap())

      api.on('select', () => {
        setCurrent(api.selectedScrollSnap())
      })
    }, [api])

    return (
      <div className='w-full max-w-md'>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className='mt-2 flex items-center justify-center gap-2'>
          <Button
            variant='outline'
            size='sm'
            className='size-8 rounded-full p-0'
            disabled={current === 0}
            onClick={() => api?.scrollPrev()}
          >
            <IconCode className='h-4 w-4' />
            <span className='sr-only'>Previous slide</span>
          </Button>
          <div className='text-sm font-medium'>
            Slide {current + 1} of {count}
          </div>
          <Button
            variant='outline'
            size='sm'
            className='size-8 rounded-full p-0'
            disabled={current === count - 1}
            onClick={() => api?.scrollNext()}
          >
            <IconCode className='h-4 w-4 rotate-180' />
            <span className='sr-only'>Next slide</span>
          </Button>
        </div>
      </div>
    )
  },
}

export const ContentCarousel: Story = {
  render: () => (
    <div className='w-full max-w-4xl'>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {[
            {
              title: 'Feature One',
              description: "This is the first feature of our product. It's amazing!",
              icon: <IconHeartFilled className='h-10 w-10 text-red-500' />,
            },
            {
              title: 'Feature Two',
              description: "This is the second feature of our product. It's even better!",
              icon: <IconPhoto className='h-10 w-10 text-blue-500' />,
            },
            {
              title: 'Feature Three',
              description: "This is the third feature of our product. You won't believe it!",
              icon: <IconInfoCircle className='h-10 w-10 text-green-500' />,
            },
          ].map((item, index) => (
            <CarouselItem key={index}>
              <Card className='border-none shadow-none'>
                <CardContent className='flex flex-col items-center justify-center gap-4 p-6 text-center'>
                  {item.icon}
                  <h3 className='text-2xl font-bold'>{item.title}</h3>
                  <p className='text-fg/70'>{item.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-0' />
        <CarouselNext className='right-0' />
      </Carousel>
    </div>
  ),
}

export const AutoplayCarousel: Story = {
  render: () => {
    // Note: In a real implementation, you would use Embla Carousel's autoplay plugin
    // This is a simplified version for demonstration purposes
    const [api, setApi] = React.useState<CarouselApi>()

    React.useEffect(() => {
      if (!api) return

      const interval = setInterval(() => {
        api.scrollNext()
      }, 3000)

      return () => clearInterval(interval)
    }, [api])

    return (
      <div className='w-full max-w-md'>
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p className='text-fg/70 mt-4 text-center text-sm'>This carousel automatically advances every 3 seconds.</p>
      </div>
    )
  },
}
