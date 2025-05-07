import Link from 'next/link'
import type { Meta, StoryObj } from '@storybook/react'
import { IconCircle, IconRocket, IconSettings } from '@tabler/icons-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './navigation-menu'

const meta = {
  title: 'UI/Navigation Menu',
  component: NavigationMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof NavigationMenu>

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

// Basic example with dropdown menu
export const Basic: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className='grid w-[400px] gap-3 p-4'>
              <div className='grid grid-cols-[20px_1fr] items-start gap-2'>
                <IconRocket className='h-5 w-5' />
                <div>
                  <NavigationMenuLink asChild>
                    <a href='#' className='font-medium'>
                      Introduction
                    </a>
                  </NavigationMenuLink>
                  <p className='text-fg/60 text-sm'>A quick overview of the platform and its features.</p>
                </div>
              </div>
              <div className='grid grid-cols-[20px_1fr] items-start gap-2'>
                <IconSettings className='h-5 w-5' />
                <div>
                  <NavigationMenuLink asChild>
                    <a href='#' className='font-medium'>
                      Configuration
                    </a>
                  </NavigationMenuLink>
                  <p className='text-fg/60 text-sm'>Learn how to configure the system to your needs.</p>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className='grid w-[400px] gap-3 p-4'>
              <div className='grid grid-cols-[20px_1fr] items-start gap-2'>
                <IconCircle className='h-5 w-5' />
                <div>
                  <NavigationMenuLink asChild>
                    <a href='#' className='font-medium'>
                      Feature 1
                    </a>
                  </NavigationMenuLink>
                  <p className='text-fg/60 text-sm'>Description of the first feature.</p>
                </div>
              </div>
              <div className='grid grid-cols-[20px_1fr] items-start gap-2'>
                <IconCircle className='h-5 w-5' />
                <div>
                  <NavigationMenuLink asChild>
                    <a href='#' className='font-medium'>
                      Feature 2
                    </a>
                  </NavigationMenuLink>
                  <p className='text-fg/60 text-sm'>Description of the second feature.</p>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href='#'>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// Example with horizontal links
export const HorizontalLinks: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <a
                    className='from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md'
                    href='/'
                  >
                    <div className='mt-4 mb-2 text-lg font-medium'>shadcn/ui</div>
                    <p className='text-muted-foreground text-sm leading-tight'>
                      Beautifully designed components that you can copy and paste into your apps. Accessible.
                      Customizable. Open Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <Link href='/docs' title='Introduction'>
                Re-usable components built using Radix UI and Tailwind CSS.
              </Link>
              <Link href='/docs/installation' title='Installation'>
                How to install dependencies and structure your app.
              </Link>
              <Link href='/docs/primitives/typography' title='Typography'>
                Styles for headings, paragraphs, lists...etc
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
              {components.map(component => (
                <Link key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
