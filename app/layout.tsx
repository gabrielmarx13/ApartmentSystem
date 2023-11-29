import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apartment System',
  description: 'CMPSC487W Project #3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
