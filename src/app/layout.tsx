import '../styles/globals.scss'
import { Nunito } from 'next/font/google'
import Header from '@/components/Header/Header'
import WebsiteConfig from '@/components/FloatButtons/WebsiteConfig/WebsiteConfig'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata = {
  title: 'Your brand',
  description: 'Landing page website for your brand',
}

const font = Nunito({
  subsets: ['latin'],
  style: 'normal'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={font.className}>
      <ThemeProvider>
        <body>
          <Header />
          <main>
            {children}
          </main>
          <WebsiteConfig />
        </body>
      </ThemeProvider>
    </html>
  )
}