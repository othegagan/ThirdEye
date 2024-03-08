import './globals.css'
import { DM_Sans } from 'next/font/google'
import Head from './head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
const dm_sans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
       <title>ThirdEye</title>
            <meta
                content="width=device-width, initial-scale=1.0"
                name="viewport"
            />
            <meta name="description" content="ThirdEye is a cutting-edge educational platform that seamlessly integrates assessment management, resource sharing, and personalized learning capabilities. Our platform serves as a central nexus, fostering collaboration among teachers, students, and parents, all while creating an immersive and interactive learning atmosphere." />
      <body className={dm_sans.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
