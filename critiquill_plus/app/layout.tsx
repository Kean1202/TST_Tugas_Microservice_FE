import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Providers from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CritiQuill Plus',
  description: 'Your Debate Pen and Paper ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
          <Providers>
            <div className="main">
                <div className='gradient'/>
            </div>
            {/**Calls the navbar to be present in all the pages */}
            <main className='app'>
                <Navbar/>
                {children}
            </main>
            </Providers>
        </body>
        </html>
  )
}
