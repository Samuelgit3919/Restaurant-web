import { Inter } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gojjo Ethiopian Bar, Cafe & Restaurant",
  description: "Authentic Ethiopian cuisine in a warm and welcoming atmosphere",
  developer: 'saminew3919@gmail.com'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
