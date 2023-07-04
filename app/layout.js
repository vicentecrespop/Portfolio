import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vicente Crespo | Full Stack Developer',
  description: 'Vicente Crespo. Full Stack Developer - JavaScript | HTML | CSS | Python | ReactJS | NodeJS | VueJS | MongoDB... Florianópolis, SC - Brasil. vicentecrespo45@gmail.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
