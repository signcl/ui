import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { InputNumber } from '@/components/ui/input-number'

const meta = {
  title: 'Components/Input Number',
  component: InputNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputNumber>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <div className='w-80'>
        <InputNumber value={value} onChange={e => setValue(Number(e.target.value))} placeholder='Enter a number' />
      </div>
    )
  },
}

export const WithDefaultValue: Story = {
  render: () => {
    const [value, setValue] = useState(10)
    return (
      <div className='w-80'>
        <InputNumber
          value={value}
          defaultValue={10}
          onChange={e => setValue(Number(e.target.value))}
          placeholder='Enter a number'
        />
      </div>
    )
  },
}

export const WithMinMax: Story = {
  render: () => {
    const [value, setValue] = useState(5)
    return (
      <div className='w-80'>
        <InputNumber
          value={value}
          min={0}
          max={10}
          onChange={e => setValue(Number(e.target.value))}
          placeholder='0-10 only'
        />
      </div>
    )
  },
}

export const WithStep: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <div className='w-80'>
        <InputNumber
          value={value}
          step={5}
          onChange={e => setValue(Number(e.target.value))}
          placeholder='Increments by 5'
        />
      </div>
    )
  },
}

export const WithDefaultAndMinMax: Story = {
  render: () => {
    const [value, setValue] = useState(50)
    return (
      <div className='w-80'>
        <InputNumber
          value={value}
          defaultValue={50}
          min={0}
          max={100}
          step={10}
          onChange={e => setValue(Number(e.target.value))}
          placeholder='0-100, step 10, default 50'
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState(42)
    return (
      <div className='w-80'>
        <InputNumber
          value={value}
          defaultValue={42}
          disabled
          onChange={e => setValue(Number(e.target.value))}
          placeholder='Disabled'
        />
      </div>
    )
  },
}

export const HideControls: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <div className='w-80'>
        <InputNumber
          value={value}
          hideControls
          onChange={e => setValue(Number(e.target.value))}
          placeholder='No controls shown'
        />
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [valueSm, setValueSm] = useState(10)
    const [valueMd, setValueMd] = useState(20)
    const [valueLg, setValueLg] = useState(30)

    return (
      <div className='flex flex-col gap-4 w-80'>
        <InputNumber
          inputSize='sm'
          value={valueSm}
          defaultValue={10}
          onChange={e => setValueSm(Number(e.target.value))}
          placeholder='Small'
        />
        <InputNumber
          inputSize='md'
          value={valueMd}
          defaultValue={20}
          onChange={e => setValueMd(Number(e.target.value))}
          placeholder='Medium'
        />
        <InputNumber
          inputSize='lg'
          value={valueLg}
          defaultValue={30}
          onChange={e => setValueLg(Number(e.target.value))}
          placeholder='Large'
        />
      </div>
    )
  },
}

export const DecimalNumbers: Story = {
  render: () => {
    const [value, setValue] = useState(0.5)
    return (
      <div className='w-80'>
        <InputNumber
          value={value}
          defaultValue={0.5}
          step={0.1}
          min={0}
          max={1}
          onChange={e => setValue(Number(e.target.value))}
          placeholder='Decimal input'
        />
      </div>
    )
  },
}
