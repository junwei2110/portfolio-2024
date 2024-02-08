import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ParticlesBackground } from './Components/ParticlesBackground/ParticlesBackground'
import { Navbar } from './Components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ng Jun Wei Resume Portfolio Website',
  description: 'Ng Jun Wei is a software developer from Singapore. He is currently working with DBS, the largest local bank in Singapore.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBackground />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
