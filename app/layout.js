import { Inter } from 'next/font/google'
import './globals.css'
import { StoreProvider } from '@/context/StoreContext'
import StoreApp from '@/components/StoreApp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Fresh Coffee',
    template: 'Fresh Coffee - %s',
  },
  description: 'Store of various drinks, snacks and hamburgers',
  icons: {
    icon: '/icon.png'
  },
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <StoreApp>
            {children}
          </StoreApp>
        </StoreProvider>
      </body>
    </html>
  )
}
