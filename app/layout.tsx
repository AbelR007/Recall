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
      
      <body className={`${inter.className} min-h-screen`}>
        <AuthProvider>
          <NavBar />
          <main className="">
            {/* py-6 px-4 sm:p-6 md:py-10 md:px-8 */}
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}