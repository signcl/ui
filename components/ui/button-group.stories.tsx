import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IconChevronDown, IconCopy, IconDownload, IconMinus, IconPlus, IconSend, IconShare } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const meta = {
  title: 'UI/Button Group',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

// Default demo
export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroup>
  ),
}

// Orientation examples
export const Horizontal: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button>Horizontal 1</Button>
      <Button>Horizontal 2</Button>
      <Button>Horizontal 3</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button>Vertical 1</Button>
      <Button>Vertical 2</Button>
      <Button>Vertical 3</Button>
    </ButtonGroup>
  ),
}

// Size variations
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button size="sm">Small</Button>
        <Button size="sm">Small</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="default">Default</Button>
        <Button size="default">Default</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="lg">Large</Button>
        <Button size="lg">Large</Button>
      </ButtonGroup>
    </div>
  ),
}

// Nested button groups
export const Nested: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Group 1 - A</Button>
        <Button variant="outline">Group 1 - B</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Group 2 - A</Button>
        <Button variant="outline">Group 2 - B</Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
}

// Separator example
export const WithSeparator: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button>Primary</Button>
        <ButtonGroupSeparator />
        <Button>Primary</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">Secondary</Button>
        <ButtonGroupSeparator />
        <Button variant="secondary">Secondary</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="ghost">Ghost</Button>
        <ButtonGroupSeparator />
        <Button variant="ghost">Ghost</Button>
      </ButtonGroup>
    </div>
  ),
}

// Split button
export const SplitButton: Story = {
  render: () => (
    <ButtonGroup>
      <Button>
        <IconSend className="size-4" />
        Send
      </Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="Options">
        <IconChevronDown className="size-4" />
      </Button>
    </ButtonGroup>
  ),
}

// Input integration
export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button size="icon" variant="secondary">
          <IconMinus className="size-4" />
        </Button>
        <Input type="number" defaultValue="1" className="w-20 text-center" />
        <Button size="icon" variant="secondary">
          <IconPlus className="size-4" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Input placeholder="Enter URL..." />
        <Button>
          <IconDownload className="size-4" />
          Download
        </Button>
      </ButtonGroup>
    </div>
  ),
}

// Input group with text
export const InputGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <ButtonGroupText>https://</ButtonGroupText>
        <Input placeholder="example.com" />
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText asChild>
          <Label htmlFor="email">Email</Label>
        </ButtonGroupText>
        <Input id="email" type="email" placeholder="name@example.com" />
        <Button>Subscribe</Button>
      </ButtonGroup>
    </div>
  ),
}

// Dropdown menu integration
export const WithDropdown: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button>
          <IconSend className="size-4" />
          Send
        </Button>
        <ButtonGroupSeparator />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" aria-label="More options">
              <IconChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Send now</DropdownMenuItem>
            <DropdownMenuItem>Schedule send</DropdownMenuItem>
            <DropdownMenuItem>Save as draft</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
      
      <ButtonGroup>
        <Button variant="outline">
          <IconCopy className="size-4" />
          Copy
        </Button>
        <ButtonGroupSeparator orientation="vertical" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Copy options">
              <IconChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Copy text</DropdownMenuItem>
            <DropdownMenuItem>Copy HTML</DropdownMenuItem>
            <DropdownMenuItem>Copy Markdown</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  ),
}

// Select integration
export const WithSelect: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Select defaultValue="public">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="public">Public</SelectItem>
            <SelectItem value="private">Private</SelectItem>
            <SelectItem value="team">Team only</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <IconShare className="size-4" />
          Share
        </Button>
      </ButtonGroup>
      
      <ButtonGroup>
        <Button variant="outline">Export</Button>
        <Select defaultValue="pdf">
          <SelectTrigger className="w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pdf">PDF</SelectItem>
            <SelectItem value="csv">CSV</SelectItem>
            <SelectItem value="xlsx">XLSX</SelectItem>
          </SelectContent>
        </Select>
      </ButtonGroup>
    </div>
  ),
}

// Popover integration
export const WithPopover: Story = {
  render: () => (
    <ButtonGroup>
      <Input placeholder="Type a message..." />
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Emoji</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Select an emoji</h4>
              <p className="text-sm text-muted-foreground">
                Choose an emoji to add to your message.
              </p>
            </div>
            <div className="grid grid-cols-8 gap-2">
              {['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣'].map((emoji) => (
                <Button key={emoji} variant="ghost" size="sm" className="h-8 w-8 p-0">
                  {emoji}
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <Button>Send</Button>
    </ButtonGroup>
  ),
}

// Complex example with multiple features
export const ComplexExample: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <Label className="mb-2 block">File operations</Label>
        <ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">New</Button>
            <Button variant="outline">Open</Button>
            <Button variant="outline">Save</Button>
          </ButtonGroup>
          <ButtonGroupSeparator orientation="vertical" />
          <ButtonGroup>
            <Button variant="outline">Cut</Button>
            <Button variant="outline">Copy</Button>
            <Button variant="outline">Paste</Button>
          </ButtonGroup>
        </ButtonGroup>
      </div>
      
      <div>
        <Label className="mb-2 block">Text formatting</Label>
        <ButtonGroup>
          <Button variant="outline" size="sm">B</Button>
          <Button variant="outline" size="sm">I</Button>
          <Button variant="outline" size="sm">U</Button>
          <ButtonGroupSeparator orientation="vertical" />
          <Select defaultValue="12">
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10pt</SelectItem>
              <SelectItem value="12">12pt</SelectItem>
              <SelectItem value="14">14pt</SelectItem>
              <SelectItem value="16">16pt</SelectItem>
            </SelectContent>
          </Select>
          <ButtonGroupSeparator orientation="vertical" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                More
                <IconChevronDown className="ml-1 size-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Strikethrough</DropdownMenuItem>
              <DropdownMenuItem>Subscript</DropdownMenuItem>
              <DropdownMenuItem>Superscript</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </div>
    </div>
  ),
}

// Accessibility example
export const AccessibilityExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup aria-label="Text alignment options">
        <Button variant="outline" aria-label="Align left">Left</Button>
        <Button variant="outline" aria-label="Align center">Center</Button>
        <Button variant="outline" aria-label="Align right">Right</Button>
        <Button variant="outline" aria-label="Justify">Justify</Button>
      </ButtonGroup>
      
      <ButtonGroup aria-label="Playback controls">
        <Button variant="secondary" aria-label="Previous track">Previous</Button>
        <Button variant="secondary" aria-label="Play or pause">Play</Button>
        <Button variant="secondary" aria-label="Next track">Next</Button>
      </ButtonGroup>
    </div>
  ),
}

// Button variants in groups
export const VariantCombinations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button>Default</Button>
        <Button>Default</Button>
        <Button>Default</Button>
      </ButtonGroup>
      
      <ButtonGroup>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary">Secondary</Button>
      </ButtonGroup>
      
      <ButtonGroup>
        <Button variant="outline">Outline</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="outline">Outline</Button>
      </ButtonGroup>
      
      <ButtonGroup>
        <Button variant="ghost">Ghost</Button>
        <ButtonGroupSeparator />
        <Button variant="ghost">Ghost</Button>
        <ButtonGroupSeparator />
        <Button variant="ghost">Ghost</Button>
      </ButtonGroup>
    </div>
  ),
}
