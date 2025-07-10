"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content (50%) */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Solutions Built for <br />
                Visionaries{" "}
                <span className="text-red-500">
                  Scale <br />
                  Smarter
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Explore custom-built solutions for brands ready to scale
              </p>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request a Custom Strategy
              </Button>
            </div>
          </div>

          {/* Right Column - Image (50%) */}
          <div className="relative flex items-center justify-center h-full">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-lg">
              <Image
                src="/hero-meeting.png"
                alt="Professional business meeting with team discussing strategy around a conference table"
                width={600}
                height={400}
                className="w-full h-auto object-cover bg-[url(../public/hero-meeting.png)]"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}