import React from "react";
import { Image, Github, BookText, SquareMenu } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";



const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <Image className="h-6 w-6" /> */}
          <BookText />

          <span className="text-3xl font-bold">
            <Link href="/">PixelCraft</Link>
          </span>
        </div>
        <nav className="md:flex md:justify-center md:items-center hidden gap-6">
          <Link
            href="#features"
            className="text-lg font-medium hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#examples"
            className="text-lg font-medium hover:text-primary"
          >
            Examples
          </Link>
          <Link
            href="#installation"
            className="text-lg font-medium hover:text-primary"
          >
            Installation
          </Link>
          <Link href="#docs" className="text-lg font-medium hover:text-primary">
            Documentation
          </Link>

          {/* <DropdownMenu>
            <DropdownMenuTrigger className="text-lg font-medium hover:text-primary">
              <SquareMenu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>More</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/main/login"}>Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/main/signup"}>Signup</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/main/about"}>About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/main/contact"}>Contact Us</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </nav>

        <div className="flex items-center">
        <Input />

          <DropdownMenu>
            <DropdownMenuTrigger className="text-lg font-medium hover:text-primary p-2">
              <SquareMenu className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/main/login" className="w-full">
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/main/signup" className="w-full">
                  Signup
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/main/about" className="w-full">
                  About Us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/main/contact" className="w-full">
                  Contact Us
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
