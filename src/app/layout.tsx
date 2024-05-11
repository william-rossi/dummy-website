import '../styles/globals.scss'
import { Nunito } from 'next/font/google'
import Header from '@/components/Header/Header'
import WebsiteConfig from '@/components/FloatButtons/WebsiteConfig/WebsiteConfig'
import { ThemeProvider } from '@/context/ThemeContext'
import WhatsApp from '@/components/FloatButtons/WhatsApp/WhatsApp'

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
          <WhatsApp />
        </body>
      </ThemeProvider>
    </html>
  )
}