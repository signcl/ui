import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import * as React from 'react'
import { Bar, BarChart, ResponsiveContainer } from 'recharts'

import { cn } from '@/lib/cn'

import { useMediaQuery } from '@/hooks/use-media-query'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer'

const meta = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof Drawer>

// Demo
export const Demo: Story = {
  render: () => {
    const data = [
      {
        goal: 400,
      },
      {
        goal: 300,
      },
      {
        goal: 200,
      },
      {
        goal: 300,
      },
      {
        goal: 200,
      },
      {
        goal: 278,
      },
      {
        goal: 189,
      },
      {
        goal: 239,
      },
      {
        goal: 300,
      },
      {
        goal: 200,
      },
      {
        goal: 278,
      },
      {
        goal: 189,
      },
      {
        goal: 349,
      },
    ]

    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
      setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant='outline'>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className='mx-auto w-full max-w-sm'>
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div className='p-4 pb-0'>
              <div className='flex items-center justify-center space-x-2'>
                <Button
                  variant='outline'
                  size='icon'
                  className='h-8 w-8 shrink-0 rounded-full'
                  onClick={() => onClick(-10)}
                  disabled={goal <= 200}
                >
                  <IconMinus />
                  <span className='sr-only'>Decrease</span>
                </Button>
                <div className='flex-1 text-center'>
                  <div className='text-7xl font-bold tracking-tighter'>{goal}</div>
                  <div className='text-muted-foreground text-[0.70rem] uppercase'>Calories/day</div>
                </div>
                <Button
                  variant='outline'
                  size='icon'
                  className='h-8 w-8 shrink-0 rounded-full'
                  onClick={() => onClick(10)}
                  disabled={goal >= 400}
                >
                  <IconPlus />
                  <span className='sr-only'>Increase</span>
                </Button>
              </div>
              <div className='mt-3 h-[120px]'>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart data={data}>
                    <Bar
                      dataKey='goal'
                      style={
                        {
                          fill: 'hsl(var(--foreground))',
                          opacity: 0.9,
                        } as React.CSSProperties
                      }
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <DrawerFooter>
              <Button variant={'solid'}>Submit</Button>
              <DrawerClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    )
  },
}

// Responsive Dialog
export const ResponsiveDialog: Story = {
  render: () => {
    function ProfileForm({ className }: React.ComponentProps<'form'>) {
      return (
        <form className={cn('grid items-start gap-6', className)}>
          <div className='grid gap-3'>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' defaultValue='shadcn@example.com' />
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='username'>Username</Label>
            <Input id='username' defaultValue='@shadcn' />
          </div>
          <Button type='submit' variant={'solid'}>
            Save changes
          </Button>
        </form>
      )
    }

    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery('(min-width: 768px)')

    if (isDesktop) {
      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant='outline'>Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <ProfileForm />
          </DialogContent>
        </Dialog>
      )
    }

    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant='outline'>Edit Profile</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className='text-left'>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here. Click save when you&apos;re done.</DrawerDescription>
          </DrawerHeader>
          <ProfileForm className='px-4' />
          <DrawerFooter className='pt-2'>
            <DrawerClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}
