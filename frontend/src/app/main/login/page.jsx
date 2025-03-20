"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, Image } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log({ email, password, rememberMe })
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-black to-blue-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-blue-900 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold text-white">PixelCraft</span>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Login Card */}
          <div className="rounded-xl border border-blue-800 bg-black/70 p-6 shadow-2xl shadow-blue-500/10 backdrop-blur">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-white">Welcome back</h1>
              <p className="mt-2 text-blue-400">Sign in to your PixelCraft account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-blue-800 bg-blue-950/50 text-white placeholder:text-blue-500/50 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-blue-300">
                      Password
                    </Label>
                    <Link href="/forgot-password" className="text-xs text-blue-400 hover:text-blue-300">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-blue-800 bg-blue-950/50 text-white placeholder:text-blue-500/50 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={setRememberMe}
                    className="border-blue-700 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                  />
                  <Label htmlFor="remember" className="text-sm text-blue-300">
                    Remember me for 30 days
                  </Label>
                </div>
              </div>

              <div className="space-y-4">
                <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Sign in
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="relative flex items-center">
                  <div className="flex-grow border-t border-blue-800"></div>
                  <span className="mx-4 flex-shrink text-xs text-blue-400">OR CONTINUE WITH</span>
                  <div className="flex-grow border-t border-blue-800"></div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-blue-800 bg-transparent text-white hover:bg-blue-900/50"
                  onClick={() => console.log("GitHub login")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </form>
          </div>

          {/* Sign up link */}
          <div className="text-center text-sm text-blue-400">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-blue-300 hover:text-white">
              Sign up
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="rounded-lg border border-blue-900 bg-blue-950/30 p-4">
              <h3 className="mb-2 text-sm font-medium text-blue-300">Pro Features</h3>
              <ul className="space-y-1 text-xs text-blue-400">
                <li>• Advanced filters</li>
                <li>• Layer composition</li>
                <li>• Export in any format</li>
              </ul>
            </div>
            <div className="rounded-lg border border-blue-900 bg-blue-950/30 p-4">
              <h3 className="mb-2 text-sm font-medium text-blue-300">Enterprise Support</h3>
              <ul className="space-y-1 text-xs text-blue-400">
                <li>• 24/7 priority support</li>
                <li>• Custom integrations</li>
                <li>• Dedicated account manager</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-900 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm text-blue-500 md:text-left">
            © {new Date().getFullYear()} PixelCraft. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-blue-500 hover:text-blue-400">
              Terms
            </Link>
            <Link href="#" className="text-xs text-blue-500 hover:text-blue-400">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-blue-500 hover:text-blue-400">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

