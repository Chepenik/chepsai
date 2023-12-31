import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '@fortawesome/fontawesome-svg-core/styles.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anon AI',
  description: 'If 4chan had an AI, this would be it.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}