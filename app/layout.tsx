import Providers from './_providers/Providers'
import PageLayout from './components/PageLayout'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next13 Web3',
  description: 'A Web3 Example on using NextJs 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='h-full w-full' lang='en'>
      <body className='bg-earth bg-no-repeat bg-center bg-cover h-full w-full'>
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  )
}
