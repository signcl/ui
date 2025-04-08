import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './resizable'

const meta = {
  title: 'UI/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    direction: 'vertical',
  },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

// Basic horizontal resizable panels
export const Basic: Story = {
  render: () => (
    <div className='bg-bg h-[400px] w-[600px] rounded-lg border p-4'>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={25} minSize={20}>
          <div className='flex h-full items-center justify-center rounded bg-red-500/10 p-6'>
            <span className='font-medium'>Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className='flex h-full items-center justify-center rounded bg-blue-500/10 p-6'>
            <span className='font-medium'>Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

// Vertical resizable panels
export const Vertical: Story = {
  render: () => (
    <div className='bg-bg h-[400px] w-[600px] rounded-lg border p-4'>
      <ResizablePanelGroup direction='vertical'>
        <ResizablePanel defaultSize={25} minSize={15}>
          <div className='flex h-full items-center justify-center rounded bg-green-500/10 p-6'>
            <span className='font-medium'>Header</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <div className='flex h-full items-center justify-center rounded bg-purple-500/10 p-6'>
            <span className='font-medium'>Content</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={15}>
          <div className='flex h-full items-center justify-center rounded bg-amber-500/10 p-6'>
            <span className='font-medium'>Footer</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

// Nested resizable panels
export const NestedWithHandles: Story = {
  render: () => (
    <div className='bg-bg h-[500px] w-[800px] rounded-lg border p-4'>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={20} minSize={15}>
          <div className='flex h-full items-center justify-center rounded bg-red-500/10 p-6'>
            <span className='font-medium'>Navigation</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction='vertical'>
            <ResizablePanel defaultSize={60}>
              <div className='flex h-full items-center justify-center rounded bg-blue-500/10 p-6'>
                <span className='font-medium'>Main Content</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={40}>
              <div className='flex h-full items-center justify-center rounded bg-green-500/10 p-6'>
                <span className='font-medium'>Details</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={30}>
          <div className='flex h-full items-center justify-center rounded bg-purple-500/10 p-6'>
            <span className='font-medium'>Properties</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

// Code editor layout example
export const CodeEditorLayout: Story = {
  render: () => (
    <div className='bg-bg h-[600px] w-[900px] overflow-hidden rounded-lg border'>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={15} minSize={10}>
          <div className='flex h-full flex-col bg-gray-100 dark:bg-gray-800'>
            <div className='p-3 font-medium'>Explorer</div>
            <div className='flex-1 border-t'></div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction='vertical'>
            <ResizablePanel defaultSize={70}>
              <div className='flex h-full flex-col'>
                <div className='border-b p-3 font-medium'>main.tsx</div>
                <div className='flex-1 bg-white p-4 dark:bg-gray-950'>
                  <pre className='font-mono text-sm'>
                    <code>
                      {`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}
                    </code>
                  </pre>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={30}>
              <div className='flex h-full flex-col'>
                <div className='border-b p-3 font-medium'>Terminal</div>
                <div className='flex-1 bg-black p-4 text-green-400'>
                  <pre className='font-mono text-xs'>
                    {`$ npm run dev
> project@0.0.0 dev
> vite

VITE v4.5.1 ready in 237 ms

➜ Local: http://localhost:5173/
➜ Network: use --host to expose
➜ press h to show help`}
                  </pre>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25}>
          <div className='flex h-full flex-col'>
            <div className='p-3 font-medium'>Properties</div>
            <div className='flex-1 border-t bg-gray-50 p-4 dark:bg-gray-900'>
              <div className='space-y-4'>
                <div>
                  <h3 className='text-sm font-medium'>Component</h3>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>App.tsx</p>
                </div>
                <div>
                  <h3 className='text-sm font-medium'>Size</h3>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>1.2 KB</p>
                </div>
                <div>
                  <h3 className='text-sm font-medium'>Last modified</h3>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}
