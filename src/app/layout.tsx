import Providers from '@/components/Provider'
import './globals.css'
import { Inter } from 'next/font/google'
import AppBar from '@/components/AppBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-Auth',
  description: 'Generated By SQ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppBar/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
