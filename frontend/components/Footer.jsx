import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t py-6 md:py-0  bg-[#07091C]">
    <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row ">
      <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
        © {new Date().getFullYear()} PixelCraft. All rights reserved.
      </p>
      <div className="flex gap-4">
        <Link
          href="/terms"
          className="text-sm text-muted-foreground hover:underline"
        >
          Terms
        </Link>
        <Link
          href="/privacy"
          className="text-sm text-muted-foreground hover:underline"
        >
          Privacy
        </Link>
        <Link
          href="/main/contact"
          className="text-sm text-muted-foreground hover:underline"
        >
          Contact
        </Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer;