import React from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  XAxis,
  YAxis,
} from 'recharts'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconChartBar, IconChartLine } from '@tabler/icons-react'

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from './chart'

const meta = {
  args: {},
  title: 'UI/Chart',
  component: ChartContainer,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

// Sample data sets
const lineChartData = [
  { month: 'Jan', revenue: 1200, expenses: 900, profit: 300 },
  { month: 'Feb', revenue: 1900, expenses: 1200, profit: 700 },
  { month: 'Mar', revenue: 1500, expenses: 1000, profit: 500 },
  { month: 'Apr', revenue: 2000, expenses: 1500, profit: 500 },
  { month: 'May', revenue: 2500, expenses: 1800, profit: 700 },
  { month: 'Jun', revenue: 3000, expenses: 2000, profit: 1000 },
  { month: 'Jul', revenue: 2800, expenses: 2100, profit: 700 },
  { month: 'Aug', revenue: 3500, expenses: 2400, profit: 1100 },
  { month: 'Sep', revenue: 3700, expenses: 2600, profit: 1100 },
  { month: 'Oct', revenue: 3000, expenses: 2300, profit: 700 },
  { month: 'Nov', revenue: 2500, expenses: 1900, profit: 600 },
  { month: 'Dec', revenue: 3800, expenses: 2800, profit: 1000 },
]

const barChartData = [
  { category: 'Electronics', sales: 4200, returns: 400 },
  { category: 'Clothing', sales: 3000, returns: 450 },
  { category: 'Books', sales: 2000, returns: 200 },
  { category: 'Home & Kitchen', sales: 2800, returns: 350 },
  { category: 'Sports', sales: 1800, returns: 250 },
]

const pieChartData = [
  { name: 'Social Media', value: 35 },
  { name: 'Direct', value: 25 },
  { name: 'Email', value: 20 },
  { name: 'Referral', value: 15 },
  { name: 'Organic Search', value: 5 },
]

const radialBarChartData = [
  { name: 'Goal 1', value: 85, fill: '#8884d8' },
  { name: 'Goal 2', value: 67, fill: '#83a6ed' },
  { name: 'Goal 3', value: 92, fill: '#8dd1e1' },
  { name: 'Goal 4', value: 45, fill: '#82ca9d' },
]

const areaChartData = [
  { month: 'Jan', mobile: 800, desktop: 1400, tablet: 600 },
  { month: 'Feb', mobile: 950, desktop: 1600, tablet: 700 },
  { month: 'Mar', mobile: 1100, desktop: 1800, tablet: 800 },
  { month: 'Apr', mobile: 1200, desktop: 2000, tablet: 900 },
  { month: 'May', mobile: 1300, desktop: 2200, tablet: 1000 },
  { month: 'Jun', mobile: 1500, desktop: 2500, tablet: 1200 },
]

export const CompleteChartExample: Story = {
  args: {
    config: {},
    children: <React.Fragment />,
  },
  render: () => {
    // Chart configuration for theming and labeling
    const lineChartConfig = {
      revenue: {
        label: 'Revenue',
        theme: {
          light: 'var(--color-blue-500)',
          dark: 'var(--color-blue-500)',
        },
      },
      expenses: {
        label: 'Expenses',
        theme: {
          light: 'var(--color-red-500)',
          dark: 'var(--color-red-500)',
        },
      },
      profit: {
        label: 'Profit',
        theme: {
          light: 'var(--color-emerald-500)',
          dark: 'var(--color-emerald-500)',
        },
      },
    } satisfies ChartConfig

    const barChartConfig = {
      sales: {
        label: 'Sales',
        icon: IconChartBar,
        theme: {
          light: 'var(--color-violet-500)',
          dark: 'var(--color-violet-500)',
        },
      },
      returns: {
        label: 'Returns',
        icon: IconChartBar,
        theme: {
          light: 'var(--color-amber-500)',
          dark: 'var(--color-amber-500)',
        },
      },
    } satisfies ChartConfig

    const pieChartConfig = {
      'Social Media': {
        label: 'Social Media',
        theme: {
          light: 'var(--color-blue-500)',
          dark: 'var(--color-blue-500)',
        },
      },
      'Direct': {
        label: 'Direct',
        theme: {
          light: 'var(--color-emerald-500)',
          dark: 'var(--color-emerald-500)',
        },
      },
      'Email': {
        label: 'Email',
        theme: {
          light: 'var(--color-amber-500)',
          dark: 'var(--color-amber-500)',
        },
      },
      'Referral': {
        label: 'Referral',
        theme: {
          light: 'var(--color-violet-500)',
          dark: 'var(--color-violet-500)',
        },
      },
      'Organic Search': {
        label: 'Organic Search',
        theme: {
          light: 'var(--color-pink-500)',
          dark: 'var(--color-pink-500)',
        },
      },
    } satisfies ChartConfig

    const areaChartConfig = {
      mobile: {
        label: 'Mobile',
        icon: IconChartLine,
        theme: {
          light: 'var(--color-indigo-500)',
          dark: 'var(--color-indigo-500)',
        },
      },
      desktop: {
        label: 'Desktop',
        icon: IconChartLine,
        theme: {
          light: 'var(--color-teal-500)',
          dark: 'var(--color-teal-500)',
        },
      },
      tablet: {
        label: 'Tablet',
        icon: IconChartLine,
        theme: {
          light: 'var(--color-orange-500)',
          dark: 'var(--color-orange-500)',
        },
      },
    } satisfies ChartConfig

    const radialBarConfig = {
      'Goal 1': {
        label: 'Goal 1',
        theme: {
          light: 'var(--color-purple-500)',
          dark: 'var(--color-purple-500)',
        },
      },
      'Goal 2': {
        label: 'Goal 2',
        theme: {
          light: 'var(--color-blue-500)',
          dark: 'var(--color-blue-500)',
        },
      },
      'Goal 3': {
        label: 'Goal 3',
        theme: {
          light: 'var(--color-cyan-500)',
          dark: 'var(--color-cyan-500)',
        },
      },
      'Goal 4': {
        label: 'Goal 4',
        theme: {
          light: 'var(--color-green-500)',
          dark: 'var(--color-green-500)',
        },
      },
    } satisfies ChartConfig

    return (
      <div className='w-full max-w-[900px] space-y-12 p-6'>
        <div>
          <h2 className='mb-4 text-xl font-semibold'>Line Chart</h2>
          <p className='text-muted-foreground mb-4'>
            Line charts are perfect for showing trends over time, like revenue and expenses.
          </p>
          <ChartContainer config={lineChartConfig} className='h-[300px]'>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='month' />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                type='monotone'
                dataKey='revenue'
                stroke='var(--color-revenue)'
                strokeWidth={2}
                dot={{ strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
              <Line
                type='monotone'
                dataKey='expenses'
                stroke='var(--color-expenses)'
                strokeWidth={2}
                dot={{ strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
              <Line
                type='monotone'
                dataKey='profit'
                stroke='var(--color-profit)'
                strokeWidth={2}
                dot={{ strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ChartContainer>
        </div>

        <div>
          <h2 className='mb-4 text-xl font-semibold'>Bar Chart</h2>
          <p className='text-muted-foreground mb-4'>
            Bar charts are excellent for comparing quantities across different categories.
          </p>
          <ChartContainer config={barChartConfig} className='h-[300px]'>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='category' />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey='sales' fill='var(--color-sales)' radius={[4, 4, 0, 0]} />
              <Bar dataKey='returns' fill='var(--color-returns)' radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div>
            <h2 className='mb-4 text-xl font-semibold'>Pie Chart</h2>
            <p className='text-muted-foreground mb-4'>Pie charts show the proportion of categories within a whole.</p>
            <ChartContainer config={pieChartConfig} className='h-[300px]'>
              <PieChart>
                <Pie data={pieChartData} dataKey='value' nameKey='name' cx='50%' cy='50%' outerRadius={80} label>
                  {pieChartData.map(entry => {
                    // Get the color directly from the config instead of using CSS variables
                    const isDarkMode = document.documentElement.classList.contains('dark')
                    // Type assertion to ensure entry.name is treated as a key of pieChartConfig
                    const entryName = entry.name as keyof typeof pieChartConfig
                    const configItem = pieChartConfig[entryName]
                    const fillColor = configItem?.theme
                      ? isDarkMode
                        ? configItem.theme.dark
                        : configItem.theme.light
                      : undefined

                    return <Cell key={`cell-${entry.name}`} fill={fillColor} />
                  })}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </div>

          <div>
            <h2 className='mb-4 text-xl font-semibold'>Radial Bar Chart</h2>
            <p className='text-muted-foreground mb-4'>
              Radial bar charts show progress toward goals in a circular layout.
            </p>
            <ChartContainer config={radialBarConfig} className='h-[300px]'>
              <RadialBarChart
                innerRadius='20%'
                outerRadius='80%'
                data={radialBarChartData}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  background
                  dataKey='value'
                  cornerRadius={10}
                  label={{ fill: '#666', position: 'insideStart' }}
                >
                  {radialBarChartData.map(entry => {
                    // Get the color directly from the config instead of using CSS variables
                    const isDarkMode = document.documentElement.classList.contains('dark')
                    // Type assertion to ensure entry.name is treated as a key of radialBarConfig
                    const entryName = entry.name as keyof typeof radialBarConfig
                    const configItem = radialBarConfig[entryName]
                    const fillColor = configItem?.theme
                      ? isDarkMode
                        ? configItem.theme.dark
                        : configItem.theme.light
                      : undefined

                    return <Cell key={`cell-${entry.name}`} fill={fillColor} />
                  })}
                </RadialBar>
                <ChartLegend content={<ChartLegendContent />} />
                <ChartTooltip content={<ChartTooltipContent />} />
              </RadialBarChart>
            </ChartContainer>
          </div>
        </div>

        <div>
          <h2 className='mb-4 text-xl font-semibold'>Area Chart</h2>
          <p className='text-muted-foreground mb-4'>
            Area charts emphasize volume change over time, great for showing stacked metrics.
          </p>
          <ChartContainer config={areaChartConfig} className='h-[300px]'>
            <AreaChart data={areaChartData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='month' />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Area
                type='monotone'
                dataKey='desktop'
                stackId='1'
                stroke='var(--color-desktop)'
                fill='var(--color-desktop)'
                fillOpacity={0.6}
              />
              <Area
                type='monotone'
                dataKey='mobile'
                stackId='1'
                stroke='var(--color-mobile)'
                fill='var(--color-mobile)'
                fillOpacity={0.6}
              />
              <Area
                type='monotone'
                dataKey='tablet'
                stackId='1'
                stroke='var(--color-tablet)'
                fill='var(--color-tablet)'
                fillOpacity={0.6}
              />
            </AreaChart>
          </ChartContainer>
        </div>

        <div>
          <h2 className='mb-4 text-xl font-semibold'>Custom Tooltip Features</h2>
          <p className='text-muted-foreground mb-4'>
            Demonstrating different tooltip configurations with line indicators.
          </p>
          <ChartContainer config={lineChartConfig} className='h-[300px]'>
            <LineChart data={lineChartData.slice(0, 6)}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='month' />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent indicator='line' />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                type='monotone'
                dataKey='revenue'
                stroke='var(--color-revenue)'
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
              <Line
                type='monotone'
                dataKey='expenses'
                stroke='var(--color-expenses)'
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
              <Line
                type='monotone'
                dataKey='profit'
                stroke='var(--color-profit)'
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ChartContainer>
        </div>

        <div>
          <h2 className='mb-4 text-xl font-semibold'>Dashed Line Indicator</h2>
          <p className='text-muted-foreground mb-4'>Tooltip with dashed line indicator style.</p>
          <ChartContainer config={barChartConfig} className='h-[300px]'>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='category' />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent indicator='dashed' />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey='sales' fill='var(--color-sales)' radius={[4, 4, 0, 0]} />
              <Bar dataKey='returns' fill='var(--color-returns)' radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    )
  },
}
