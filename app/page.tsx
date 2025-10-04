import { getBaseUrl } from '@/utils/getBaseUrl'

import PokemonPage from '@/components/blocks/complex-component/page'
import { ExampleForm } from '@/components/blocks/example-form/example-form'
import { Command } from '@/components/command'
import { OpenInV0Button } from '@/components/open-in-v0-button'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const Home = async () => {
  const registryData = await import('@/registry.json')
  const registry = registryData.default

  return (
    <div className='mx-auto flex max-w-3xl px-4 py-8'>
      <main className='space-y-6'>
        <section className='space-y-2'>
          <h1 className='text-4xl font-bold'>signcl/ui</h1>
          <p>Accessible and customizable components that you can copy and paste into new projects</p>
          <Button tint={'rose'} asChild>
            <a href={'/storybook'}>View Storybook</a>
          </Button>
        </section>

        <div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative'>
          <div className='flex items-center justify-between'>
            <h2 className='text-sm text-fg/60'>A contact form with Zod validation.</h2>
            <OpenInV0Button name='example-form' className='w-fit' />
          </div>
          <div className='flex items-center justify-center min-h-[500px] relative'>
            <ExampleForm />
          </div>
        </div>

        <div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative'>
          <div className='flex items-center justify-between'>
            <h2 className='text-sm text-fg/60'> A complex component showing hooks, libs and components.</h2>
            <OpenInV0Button name='complex-component' className='w-fit' />
          </div>
          <div className='flex items-center justify-center min-h-[500px] relative'>
            <PokemonPage />
          </div>
        </div>

        <h2 className='text-xl font-semibold mb-3'>Component Registry</h2>

        <Table className='table-fixed'>
          <TableCaption>signc/ui component registry</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-40'>Component</TableHead>
              <TableHead className='w-20'>Stories</TableHead>
              <TableHead className='w-20'>Schema</TableHead>
              <TableHead className=''>Command</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registry.items.map(item => (
              <TableRow key={item.name}>
                <TableCell className='font-medium'>{item.title}</TableCell>
                <TableCell>
                  <Button tint={'rose'} size={'sm'} asChild>
                    <a href={`${getBaseUrl()}/storybook/?path=/docs/ui-${item.name}--docs`} target='_blank'>
                      Story
                    </a>
                  </Button>
                </TableCell>
                <TableCell>
                  <Button tint={'accent'} size={'sm'} asChild>
                    <a href={`${getBaseUrl()}/r/${item.name}.json`} target='_blank'>
                      Link
                    </a>
                  </Button>
                </TableCell>
                <TableCell>
                  <Command command={`bunx shadcn@latest add ${getBaseUrl()}/r/${item.name}.json`} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  )
}

export default Home
