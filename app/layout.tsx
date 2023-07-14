import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './context/AuthProvider'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recall',
  description: 'A Revision App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={`${inter.className}`}>
        <AuthProvider>
          <NavBar />
          <main className="min-h-screen">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}