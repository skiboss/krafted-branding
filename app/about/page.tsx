"use client"

import Image from "next/image";
import { Shield, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Users,
  Lightbulb,
  Target,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollToTop } from "@/components/scroll-to-top";

import { PageLoader } from "@/components/page-loader"
import { useLoading } from "@/hooks/use-loading"

export default function AboutPage() {

      const { isLoading } = useLoading()
  return (
    <main className="min-h-screen">

      <PageLoader isLoading={isLoading} text="Loading your experience..." />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center">
        <div className="max-w-6xl mx-auto pt-12 sm:pt-32 px-4 sm:px-6 pb-4 sm:pb-16 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Content (50%) */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-11">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-normal sm:leading-loose">
                  Built to Help <br />
                  Visionaries{" "}
                  <span className="text-red-500">
                    Scale
                    <br />
                    Smarter{" "}
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  We exist to help purpose-drive brands grow with clarity and
                  impact
                </p>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-md font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book a Free Audit Call
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

      {/* Mission Statement Section with Background Image */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-950 dark:to-slate-800">
          <Image
            src="/mission.png"
            alt="Team collaboration"
            fill
            className="object-cover opacity-30 dark:opacity-20"
          />
        </div>

        {/* Mission Statement Card */}
        <div className="relative -bottom-24 max-w-5xl mx-auto">
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-8 max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white">
                Mission Statement
              </h2>
            </div>
            <p className="text-white/90 leading-relaxed">
              To empower e-commerce and healthcare businesses with innovative
              marketing that drives growth, builds trust, and delivers lasting
              results.
            </p>
          </div>
        </div>
      </section>

      {/* How Are We Different Section */}
      <section className="dark:bg-gray-900 py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              How Are We Different?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
              We stands at the intersection of data, creativity, and deep
              industry focus, exclusively serving e-commerce and healthcare
              brands
            </p>
          </div>

          {/* How Are We Different Section */}
          <div className="rounded-xl sm:rounded-2xl sm:p-6 bg-transparent">
            {/* Feature Grid - Mobile: All cards stack, Desktop: Complex layout */}
            <div className="mb-8 sm:mb-12">
              {/* Mobile Layout - All cards stacked */}
              <div className="flex flex-col gap-3 sm:hidden">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                    <Target className="w-4 h-4 text-purple-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We believe strategy should be simple and focused. Every
                    campaign we build is rooted in clarity, not chaos.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                    <Lightbulb className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We bring fresh thinking, creativity and modern tools to
                    every project.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We're partners, not vendors. We grow when you grow, and your
                    goals guide every decision we make.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center mb-3">
                    <Shield className="w-4 h-4 text-orange-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We scale brands the right way: transparency at every step.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center mb-3">
                    <Anchor className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Big ideas mean nothing without precision. We take pride in
                    delivering consistently excellent results.
                  </p>
                </div>
              </div>

              {/* Desktop Layout - Complex grid (hidden on mobile) */}
              <div
                className="hidden sm:grid sm:grid-cols-2 gap-4"
                style={{ gridTemplateColumns: "1.5fr 3.5fr" }}
              >
                {/* Left Column - Two stacked cards (6:4 ratio) */}
                <div className="flex flex-col gap-4">
                  {/* Top card - 60% height */}
                  <div className="bg-gray-50 rounded-xl p-5 min-h-[180px] ">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                      <Target className="w-4 h-4 text-purple-600" />
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      We believe strategy should be simple and focused. Every
                      campaign we build is rooted in clarity, not chaos.
                    </p>
                  </div>

                  {/* Bottom card - 40% height */}
                  <div className="bg-gray-50 rounded-xl p-5 min-h-[120px]">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                      <Lightbulb className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      We bring fresh thinking, creativity and modern tools to
                      every project.
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4">
                  {/* Top card - Full width */}
                  <div className="bg-gray-50 rounded-xl p-5 min-h-[180px]">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      We're partners, not vendors. We grow when you grow, and
                      your goals guide every decision we make.
                    </p>
                  </div>

                  {/* Bottom section - Two cards side by side (3:5 ratio) */}
                  <div className="flex gap-3 flex-[4]">
                    {/* Left smaller card - 30% width */}
                    <div className="bg-gray-50 rounded-lg p-4  min-h-[100px]">
                      <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center mb-2">
                        <Shield className="w-4 h-4 text-orange-600" />
                      </div>
                      <p className="text-sm text-gray-700 leading-tight">
                        We scale brands the right way: transparency at every
                        step.
                      </p>
                    </div>

                    {/* Right larger card - 50% width */}
                    <div className="bg-gray-50 rounded-lg p-4 ">
                      <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center mb-2">
                        <Anchor className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-sm text-gray-700 leading-tight">
                        Big ideas mean nothing without precision. We take pride
                        in delivering consistently excellent results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-4">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                Ready to Transform Your Growth?
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-md font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Request Custom Strategy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="bg-white dark:bg-gray-800 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center sm:text-left mb-3">
            <h2 className="d text-gray-900 dark:text-white mb-4 text-4xl sm:text-5xl font-normal leading-normal">
              Founder's Note
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
              Hear our story from our Founder
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
            <blockquote className="text-lg border p-3 rounded-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              <span className="text-6xl text-[#000] dark:text-[#541349] ">
                “
              </span>
              We started Krafted Branding with one belief — performance
              marketing should be both intelligent and intentional."
              <br />
              <br />
              After growing MatchPlug Agency into a trusted name, our founders
              launched Krafted Branding to serve businesses that want more than
              just impressions — they want measurable growth. Our journey has been
              built on curiosity, experimentation, and relentless care for
              client outcomes.
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1f0104] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#fee5f8] mb-6">
            Marketing isn't magic, it's maths and messaging
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Ready To Get Solutions That Drive Sales, Bookings And Brand Loyalty?
          </h2>
          <Button className="bg-[#fee5f8] text-[#1f0104] hover:bg-gray-100 px-16 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started
          </Button>
        </div>
      </section>

      <ScrollToTop />
    </main>
  );
}
