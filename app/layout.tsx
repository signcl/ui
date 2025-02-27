import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'signcl/ui Component Registry',
  description: 'Accessible and customizable components that you can copy and paste into new projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
