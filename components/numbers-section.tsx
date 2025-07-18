"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "", decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = end * easeOutQuart

      if (decimals > 0) {
        setCount(Math.round(currentValue * Math.pow(10, decimals)) / Math.pow(10, decimals))
      } else {
        setCount(Math.floor(currentValue))
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration, decimals])

  return (
    <div ref={counterRef} className="inline px-0.5 text-md font-bold">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function NumbersSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          The Numbers Don't Lie
        </h2>
        <p
          className={`text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          These aren't just stats, they're clear proof of the measurable success we've delivered to every client, across
          both industries
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
        {/* Left Column - Dashboard Image */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              {/* Dashboard Header */}
              <div className="bg-gray-100 p-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-600">Analytics Dashboard</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-white">
                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-teal-500 text-white p-4 rounded-lg">
                    <div className="text-sm opacity-90">Total Impressions</div>
                    <div className="text-2xl font-bold">
                      <AnimatedCounter end={17.6} suffix="K" decimals={1} duration={2500} />
                    </div>
                  </div>
                  <div className="bg-green-500 text-white p-4 rounded-lg">
                    <div className="text-sm opacity-90">Average CTR</div>
                    <div className="text-2xl font-bold">
                      <AnimatedCounter end={1.3} suffix="%" decimals={1} duration={2500} />
                    </div>
                  </div>
                  <div className="bg-purple-500 text-white p-4 rounded-lg">
                    <div className="text-sm opacity-90">Average Position</div>
                    <div className="text-2xl font-bold">
                      <AnimatedCounter end={25.2} decimals={1} duration={2500} />
                    </div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-center p-4">
                  <svg width="100%" height="100%" viewBox="0 0 300 80" className="text-purple-500">
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      points="0,60 30,45 60,50 90,30 120,35 150,20 180,25 210,15 240,20 270,10 300,15"
                      className={`transition-all duration-2000 delay-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
                      style={{
                        strokeDasharray: "400",
                        strokeDashoffset: isVisible ? "0" : "400",
                      }}
                    />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - 2 Rows */}
        <div className="space-y-4">
          {/* Top Row - 2 Equal Metric Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Successful Campaigns Card */}
            <Card
              className={`bg-green-100 border-green-200 h-36 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <CardContent className="p-4 h-full flex flex-col justify-center">
                <div className="text-2xl font-bold text-green-700 mb-2">Successful Campaigns</div>
                <div className="text-3xl font-bold text-green-800">
                  <AnimatedCounter end={200} suffix="+" duration={2500} />
                </div>
              </CardContent>
            </Card>

            {/* Client Revenue Card */}
            <Card
              className={`bg-purple-100 border-purple-200 h-36 transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <CardContent className="p-4 h-full flex flex-col justify-center">
                <div className="text-2xl font-bold text-black mb-2">Client Revenue Generated</div>
                <div className="text-3xl font-bold text-black">
                  <AnimatedCounter end={2.4} prefix="$" suffix="M+" decimals={1} duration={2500} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row - Full Width Text */}
          <div
            className={`transition-all border rounded-xl px-4 py-5 duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-gray-700 leading-relaxed">
              We've helped brands achieve a <span className="font-semibold text-blue-600 inline">
                <AnimatedCounter end={150} suffix="%" duration={3000} />
              </span>{" "}
              average revenue increase with a{" "}
              <span className="font-semibold text-green-600">
                <AnimatedCounter end={4.2} suffix=":1" decimals={1} duration={3000} />
              </span>{" "}
              return on ad spend. Our strategies drive a{" "}
              <span className="font-semibold text-purple-600">
                <AnimatedCounter end={35} suffix="%" duration={3000} />
              </span>{" "}
              lift in conversion rates, boost customer retention by{" "}
              <span className="font-semibold text-teal-600">
                <AnimatedCounter end={45} suffix="%" duration={3000} />
              </span>, and maintain a{" "}
              <span className="font-semibold text-red-600">
                <AnimatedCounter end={98} suffix="%" duration={3000} />
              </span>{" "}
              client satisfaction score. Recognized with{" "}
              <span className="font-semibold text-orange-600">
                <AnimatedCounter end={50} suffix="+" duration={3000} />
              </span>{" "}
              industry awards, we're trusted for performance and results.
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3
          className={`text-xl font-semibold text-gray-900 mb-4 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Ready to Transform Your Growth?
        </h3>
        <Button
          className={`bg-fuchsia-950 hover:bg-fuchsia-950/50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-white px-8 py-3 rounded-md font-medium duration-500 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Request Custom Strategy
        </Button>
      </div>
    </section>
  )
}
