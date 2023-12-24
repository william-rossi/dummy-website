import '../styles/globals.scss'
import { Nunito } from 'next/font/google'
import Header from '@/components/Header/Header'
import WebsiteConfig from '@/components/FloatButtons/WebsiteConfig/WebsiteConfig'

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


  // const scanAndReplaceThemes = async () => {
  //   const fs = require('fs-extra');
  //   const glob = require('glob');

  //   const files = glob.sync('src/**/*.scss'); // Substitua pelo padrão correto para seus arquivos SCSS

  //   for (const file of files) {
  //     try {
  //       let content = await fs.readFile(file, 'utf-8');
  //       content = content.replace("theme-a", "theme-b");
  //       await fs.writeFile(file, content, 'utf-8');
  //     } catch (error) {
  //       console.error(`Erro ao processar o arquivo ${file}:`, error);
  //     }
  //   }

  //   console.log('Substituição concluída.');
  // };

  // scanAndReplaceThemes()


  return (
    <html lang="pt-BR" className={font.className}>
      <body>
        <WebsiteConfig />
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}