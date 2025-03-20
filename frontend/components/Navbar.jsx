import React from 'react'
import { Image, Github } from 'lucide-react'
import Link from "next/link"
import { Button, } from "@/components/ui/button"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <Image className="h-6 w-6" />
        <span className="text-xl font-bold">PixelCraft</span>
      </div>
      <nav className="hidden md:flex gap-6">
        <Link href="#features" className="text-sm font-medium hover:text-primary">
          Features
        </Link>
        <Link href="#examples" className="text-sm font-medium hover:text-primary">
          Examples
        </Link>
        <Link href="#installation" className="text-sm font-medium hover:text-primary">
          Installation
        </Link>
        <Link href="#docs" className="text-sm font-medium hover:text-primary">
          Documentation
        </Link>
        <Link href="/main/contact" className="text-sm font-medium hover:text-primary">
          Contact
        </Link><Link href="#docs" className="text-sm font-medium hover:text-primary">
          Documentation
        </Link><Link href="#docs" className="text-sm font-medium hover:text-primary">
          Documentation
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="https://github.com/yourusername/pixel-craft" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Button>Get Started</Button>
      </div>
    </div>
  </header>
  )
}

export default Navbar