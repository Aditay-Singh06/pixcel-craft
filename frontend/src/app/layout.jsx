import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Roboto({ subsets: ["latin"] })

export const metadata = {
  title: "PixelCraft - React Image Utility Library",
  description: "A powerful React library for image manipulation, optimization, and effects",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

