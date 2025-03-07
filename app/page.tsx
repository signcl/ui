import { getBaseUrl } from '@/utils/getBaseUrl'

import { Command } from '@/components/command'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const Home = async () => {
  const registryData = await import('@/registry.json')
  const registry = registryData.default

  return (
    <div className='mx-auto flex max-w-5xl p-4'>
      <main className='space-y-4'>
        <section className='space-y-2'>
          <h1 className='text-4xl font-bold'>signcl/ui</h1>
          <p>Accessible and customizable components that you can copy and paste into new projects</p>
          <Button tint={'rose'} asChild>
            <a href={'/storybook'}>View Storybook</a>
          </Button>
        </section>
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
                    <a href={`${getBaseUrl()}/registry/${item.name}`} target='_blank'>
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
