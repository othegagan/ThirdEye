import './globals.css'
import { DM_Sans } from 'next/font/google'
import Head from './head'
const dm_sans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head />
      <body className={dm_sans.className}>{children}</body>
    </html>
  )
}
