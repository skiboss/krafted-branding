import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, MessageSquareIcon, Twitter } from "lucide-react";


import { PageLoader } from "@/components/page-loader"
import { useLoading } from "@/hooks/use-loading"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krafted Branding | E-commerce & Healthcare Growth",
  description:
    "Transform your revenue with data-driven strategies for e-commerce and healthcare businesses.",
  // generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Header/Navigation */}
          <header className="bg-[#f2f2f2] sm:bg-transparent dark:from-purple-900/20 dark:to-pink-900/20 shadow-sm px-1 md:px-8 lg:px-8 dark:border-gray-700 mx-auto flex justify-center z-20">
            <div className=" sm:absolute bg-[#f2f2f2] w-full max-w-6xl mx-auto dark:sm:bg-slate-700 flex items-center justify-between sm:border sm:rounded-full sm:gap-x-10 px-10 py-2 sm:mt-12 z-30">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="logo.png"
                    alt="Krafted Branding Logo"
                    width={85}
                    height={50}
                  />
                </Link>
              </div>

              <nav className="hidden md:flex items-center space-x-16">
                <Link
                  href="/about"
                  className="text-dark hover:text-gray-900 dark:text-white dark:hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-dark hover:text-gray-900 dark:text-white dark:hover:text-white"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-dark hover:text-gray-900 dark:text-white dark:hover:text-white"
                >
                  Contact Us
                </Link>
                <Link
                  href="/blog"
                  className="text-dark hover:text-gray-900 dark:text-white dark:hover:text-white"
                >
                  Blog
                </Link>
              </nav>

              <div className="hidden md:flex items-center gap-4">
                <ThemeToggle />
                <Button className="bg-[#541349] hover:bg-white border-2 border-[#541349] hover:text-[#541349] px-9 py-4 text-white rounded-full">
                  <Link
                  href="/blog">
                    Get Free Audit
                    </Link>
                </Button>
              </div>

              <MobileNav />
            </div>
          </header>

          {children}
        </ThemeProvider>

        {/* Footer Section */}
        <footer className="bg-white dark:bg-gray-900 py-12 px-4 md:px-8 lg:px-16 border-t dark:border-gray-700">
          <div className="max-w-7xl text-center sm:text-start mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Logo and Tagline */}
              <div>
                <div className="mb-4">
                  <a href="/"><Image
                    src="/logo.png"
                    alt="Krafted Branding Logo"
                    width={100}
                    height={30}
                    className="mb-4 mx-auto md:mx-0"
                  /></a>
                </div>
                <h3 className="font-bold mb-1 dark:text-white">
                  Transform Your Revenue:
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  E-commerce & Healthcare
                  <br />
                  Growth Redefined
                </p>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="font-medium text-lg mb-4 dark:text-white">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/#case-study"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="font-medium text-lg mb-4 dark:text-white">
                  Services
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/services/#ecommerce-tab"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      E-Commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/#healthcare-tab"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Healthcare
                    </Link>
                  </li>
                
                  
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="font-medium text-lg mb-4 dark:text-white">
                  Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/contact/#contact-form"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Free Audit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#process"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright and Social */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700 ">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                © 2025 Krafted Branding. All rights reserved.
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0 md:pe-8">
                <Link
                  href="https://www.facebook.com/share/1HwGA2muHx/?mibextid=wwXIfr"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <MessageSquareIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/krafted-branding"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
