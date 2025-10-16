import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'

const meta = {
  title: 'UI/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof Field>

// Demo
export const Demo: Story = {
  render: () => (
    <div className='w-80'>
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>All transactions are secure and encrypted</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor='checkout-7j9-card-name-43j'>Name on Card</FieldLabel>
                <Input id='checkout-7j9-card-name-43j' placeholder='Evil Rabbit' required />
              </Field>
              <Field>
                <FieldLabel htmlFor='checkout-7j9-card-number-uw1'>Card Number</FieldLabel>
                <Input id='checkout-7j9-card-number-uw1' placeholder='1234 5678 9012 3456' required />
                <FieldDescription>Enter your 16-digit card number</FieldDescription>
              </Field>
              <div className='grid grid-cols-3 gap-4'>
                <Field>
                  <FieldLabel htmlFor='checkout-exp-month-ts6'>Month</FieldLabel>
                  <Select defaultValue=''>
                    <SelectTrigger id='checkout-exp-month-ts6'>
                      <SelectValue placeholder='MM' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='01'>01</SelectItem>
                      <SelectItem value='02'>02</SelectItem>
                      <SelectItem value='03'>03</SelectItem>
                      <SelectItem value='04'>04</SelectItem>
                      <SelectItem value='05'>05</SelectItem>
                      <SelectItem value='06'>06</SelectItem>
                      <SelectItem value='07'>07</SelectItem>
                      <SelectItem value='08'>08</SelectItem>
                      <SelectItem value='09'>09</SelectItem>
                      <SelectItem value='10'>10</SelectItem>
                      <SelectItem value='11'>11</SelectItem>
                      <SelectItem value='12'>12</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor='checkout-7j9-exp-year-f59'>Year</FieldLabel>
                  <Select defaultValue=''>
                    <SelectTrigger id='checkout-7j9-exp-year-f59'>
                      <SelectValue placeholder='YYYY' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='2024'>2024</SelectItem>
                      <SelectItem value='2025'>2025</SelectItem>
                      <SelectItem value='2026'>2026</SelectItem>
                      <SelectItem value='2027'>2027</SelectItem>
                      <SelectItem value='2028'>2028</SelectItem>
                      <SelectItem value='2029'>2029</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor='checkout-7j9-cvv'>CVV</FieldLabel>
                  <Input id='checkout-7j9-cvv' placeholder='123' required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator>And</FieldSeparator>
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              {/* biome-ignore lint/a11y/useValidAnchor: demo */}
              The billing address associated with your <a href='#'>payment method</a>
            </FieldDescription>
            <FieldGroup>
              <Field orientation='horizontal'>
                <Checkbox id='checkout-7j9-same-as-shipping-wgm' defaultChecked />
                <FieldLabel htmlFor='checkout-7j9-same-as-shipping-wgm' className='font-normal'>
                  Same as shipping address
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor='checkout-7j9-optional-comments'>Comments</FieldLabel>
                <Textarea
                  id='checkout-7j9-optional-comments'
                  placeholder='Add any additional comments'
                  className='resize-none'
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation='horizontal'>
            <Button type='submit' variant='solid'>
              Submit
            </Button>
            <Button variant='outline' type='button'>
              Cancel
            </Button>
          </Field>
          <FieldError errors={[{ message: 'This is an error message' }]} />
        </FieldGroup>
      </form>
    </div>
  ),
}

// Input
export const InputExample: Story = {
  render: () => (
    <div className='w-80'>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='username'>Username</FieldLabel>
            <Input id='username' type='text' placeholder='Max Leiter' />
            <FieldDescription>Choose a unique username for your account.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor='password'>Password</FieldLabel>
            <FieldDescription>Must be at least 8 characters long.</FieldDescription>
            <Input id='password' type='password' placeholder='********' />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
}

// Textarea
export const TextareaExample: Story = {
  render: () => (
    <div className='w-80'>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='feedback'>Feedback</FieldLabel>
            <Textarea id='feedback' placeholder='Your feedback helps us improve...' rows={4} />
            <FieldDescription>Share your thoughts about our service.</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
}

// Select
export const SelectExample: Story = {
  render: () => (
    <div className='w-80'>
      <Field>
        <FieldLabel>Department</FieldLabel>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Choose department' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='engineering'>Engineering</SelectItem>
            <SelectItem value='design'>Design</SelectItem>
            <SelectItem value='marketing'>Marketing</SelectItem>
            <SelectItem value='sales'>Sales</SelectItem>
            <SelectItem value='support'>Customer Support</SelectItem>
            <SelectItem value='hr'>Human Resources</SelectItem>
            <SelectItem value='finance'>Finance</SelectItem>
            <SelectItem value='operations'>Operations</SelectItem>
          </SelectContent>
        </Select>
        <FieldDescription>Select your department or area of work.</FieldDescription>
      </Field>
    </div>
  ),
}

// Slider
export const SliderExample: Story = {
  render: () => {
    const [value, setValue] = useState([200, 800])
    return (
      <div className='w-80'>
        <Field>
          <FieldTitle>Price Range</FieldTitle>
          <FieldDescription>
            Set your budget range ($<span className='font-medium tabular-nums'>{value[0]}</span> -{' '}
            <span className='font-medium tabular-nums'>{value[1]}</span>).
          </FieldDescription>
          <Slider
            value={value}
            onValueChange={setValue}
            max={1000}
            min={0}
            step={10}
            className='mt-2 w-full'
            aria-label='Price Range'
          />
        </Field>
      </div>
    )
  },
}

// Fieldset
export const FieldsetExample: Story = {
  render: () => (
    <div className='w-80 space-y-6'>
      <FieldSet>
        <FieldLegend>Address Information</FieldLegend>
        <FieldDescription>We need your address to deliver your order.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='street'>Street Address</FieldLabel>
            <Input id='street' type='text' placeholder='123 Main St' />
          </Field>
          <div className='grid grid-cols-2 gap-4'>
            <Field>
              <FieldLabel htmlFor='city'>City</FieldLabel>
              <Input id='city' type='text' placeholder='New York' />
            </Field>
            <Field>
              <FieldLabel htmlFor='zip'>Postal Code</FieldLabel>
              <Input id='zip' type='text' placeholder='90502' />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
}

// Checkbox
export const CheckboxExample: Story = {
  render: () => (
    <div className='w-80'>
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant='label'>Show these items on the desktop</FieldLegend>
          <FieldDescription>Select the items you want to show on the desktop.</FieldDescription>
          <FieldGroup className='gap-3'>
            <Field orientation='horizontal'>
              <Checkbox id='finder-pref-9k2-hard-disks-ljj' />
              <FieldLabel htmlFor='finder-pref-9k2-hard-disks-ljj' className='font-normal' defaultChecked>
                Hard disks
              </FieldLabel>
            </Field>
            <Field orientation='horizontal'>
              <Checkbox id='finder-pref-9k2-external-disks-1yg' />
              <FieldLabel htmlFor='finder-pref-9k2-external-disks-1yg' className='font-normal'>
                External disks
              </FieldLabel>
            </Field>
            <Field orientation='horizontal'>
              <Checkbox id='finder-pref-9k2-cds-dvds-fzt' />
              <FieldLabel htmlFor='finder-pref-9k2-cds-dvds-fzt' className='font-normal'>
                CDs, DVDs, and iPods
              </FieldLabel>
            </Field>
            <Field orientation='horizontal'>
              <Checkbox id='finder-pref-9k2-connected-servers-6l2' />
              <FieldLabel htmlFor='finder-pref-9k2-connected-servers-6l2' className='font-normal'>
                Connected servers
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation='horizontal'>
          <Checkbox id='finder-pref-9k2-sync-folders-nep' defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor='finder-pref-9k2-sync-folders-nep'>Sync Desktop & Documents folders</FieldLabel>
            <FieldDescription>
              Your Desktop & Documents folders are being synced with iCloud Drive. You can access them from other
              devices.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  ),
}

// Radio
export const RadioExample: Story = {
  render: () => (
    <div className='w-80'>
      <FieldSet>
        <FieldLabel>Subscription Plan</FieldLabel>
        <FieldDescription>Yearly and lifetime plans offer significant savings.</FieldDescription>
        <RadioGroup defaultValue='monthly'>
          <Field orientation='horizontal'>
            <RadioGroupItem value='monthly' id='plan-monthly' />
            <FieldLabel htmlFor='plan-monthly' className='font-normal'>
              Monthly ($9.99/month)
            </FieldLabel>
          </Field>
          <Field orientation='horizontal'>
            <RadioGroupItem value='yearly' id='plan-yearly' />
            <FieldLabel htmlFor='plan-yearly' className='font-normal'>
              Yearly ($99.99/year)
            </FieldLabel>
          </Field>
          <Field orientation='horizontal'>
            <RadioGroupItem value='lifetime' id='plan-lifetime' />
            <FieldLabel htmlFor='plan-lifetime' className='font-normal'>
              Lifetime ($299.99)
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    </div>
  ),
}

// Switch
export const SwitchExample: Story = {
  render: () => (
    <div className='w-80'>
      <Field orientation='horizontal'>
        <FieldContent>
          <FieldLabel htmlFor='2fa'>Multi-factor authentication</FieldLabel>
          <FieldDescription>
            Enable multi-factor authentication. If you do not have a two-factor device, you can use a one-time code sent
            to your email.
          </FieldDescription>
        </FieldContent>
        <Switch id='2fa' />
      </Field>
    </div>
  ),
}

// Choice Card
export const ChoiceCard: Story = {
  render: () => (
    <div className='w-80'>
      <FieldGroup>
        <FieldSet>
          <FieldLabel htmlFor='compute-environment-p8w'>Compute Environment</FieldLabel>
          <FieldDescription>Select the compute environment for your cluster.</FieldDescription>
          <RadioGroup defaultValue='kubernetes'>
            <FieldLabel htmlFor='kubernetes-r2h'>
              <Field orientation='horizontal'>
                <FieldContent>
                  <FieldTitle>Kubernetes</FieldTitle>
                  <FieldDescription>Run GPU workloads on a K8s configured cluster.</FieldDescription>
                </FieldContent>
                <RadioGroupItem value='kubernetes' id='kubernetes-r2h' />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor='vm-z4k'>
              <Field orientation='horizontal'>
                <FieldContent>
                  <FieldTitle>Virtual Machine</FieldTitle>
                  <FieldDescription>Access a VM configured cluster to run GPU workloads.</FieldDescription>
                </FieldContent>
                <RadioGroupItem value='vm' id='vm-z4k' />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  ),
}

// Field Group
export const FieldGroupExample: Story = {
  render: () => (
    <div className='w-120'>
      <FieldGroup>
        <FieldSet>
          <FieldLabel>Responses</FieldLabel>
          <FieldDescription>
            Get notified when ChatGPT responds to requests that take time, like research or image generation.
          </FieldDescription>
          <FieldGroup data-slot='checkbox-group'>
            <Field orientation='horizontal'>
              <Checkbox id='push' defaultChecked disabled />
              <FieldLabel htmlFor='push' className='font-normal'>
                Push notifications
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLabel>Tasks</FieldLabel>
          <FieldDescription>
            {/* biome-ignore lint/a11y/useValidAnchor: demo */}
            Get notified when tasks you&apos;ve created have updates. <a href='#'>Manage tasks</a>
          </FieldDescription>
          <FieldGroup data-slot='checkbox-group'>
            <Field orientation='horizontal'>
              <Checkbox id='push-tasks' />
              <FieldLabel htmlFor='push-tasks' className='font-normal'>
                Push notifications
              </FieldLabel>
            </Field>
            <Field orientation='horizontal'>
              <Checkbox id='email-tasks' />
              <FieldLabel htmlFor='email-tasks' className='font-normal'>
                Email notifications
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  ),
}

// Responsive
export const Responsive: Story = {
  render: () => (
    <div className='w-[calc(100vw-4rem)] max-w-4xl'>
      <form>
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>Fill in your profile information.</FieldDescription>
          <FieldSeparator />
          <FieldGroup>
            <Field orientation='responsive'>
              <FieldContent>
                <FieldLabel htmlFor='name'>Name</FieldLabel>
                <FieldDescription>Provide your full name for identification</FieldDescription>
              </FieldContent>
              <Input id='name' placeholder='Evil Rabbit' required />
            </Field>
            <FieldSeparator />
            <Field orientation='responsive'>
              <FieldContent>
                <FieldLabel htmlFor='lastName'>Message</FieldLabel>
                <FieldDescription>
                  You can write your message here. Keep it short, preferably under 100 characters.
                </FieldDescription>
              </FieldContent>
              <Textarea
                id='message'
                placeholder='Hello, world!'
                required
                className='min-h-[100px] resize-none sm:min-w-[300px]'
              />
            </Field>
            <FieldSeparator />
            <Field orientation='responsive'>
              <Button type='submit' variant='solid'>
                Submit
              </Button>
              <Button type='button' variant='ghost'>
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  ),
}
