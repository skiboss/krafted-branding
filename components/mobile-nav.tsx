"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  className?: string
}

export function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn("md:hidden", className)}>
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 text-gray-700 dark:text-gray-300"
        onClick={() => setIsOpen(true)}
        aria-label="Open mobile menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900">
          <div className="flex h-full flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-4 border-b dark:border-gray-700">
              <p className="text-lg font-medium dark:text-white">Menu</p>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-gray-700 dark:text-gray-300"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="/"
                className="text-lg font-medium py-2 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium py-2 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium py-2 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium py-2 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium py-2 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Button
                className="bg-purple-700 hover:bg-purple-800 text-white mt-4 w-full"
                onClick={() => setIsOpen(false)}
              >
                Get Free Audit
              </Button>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
