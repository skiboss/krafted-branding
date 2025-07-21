"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
}

function AnimatedCounter({ end, suffix = "", duration = 2000 }: AnimatedCounterProps) {
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
      setCount(Math.floor(end * easeOutQuart))

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
  }, [isVisible, end, duration])

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-bold">
      {count}
      {suffix}
    </div>
  )
}

export function GetToKnowSection() {
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
        {/* <p
          className={`text-gray-600 font-medium text-xl mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Get to Know Us
        </p> */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-900 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Built to Empower E-commerce, Healthcare and wellness brands to market leaders
        </h2>
      </div>

      {/* Main Grid: 5 columns total */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {/* Top Row */}
        {/* Satisfied Customer Card - Column 1 */}
        <Card
          className={`bg-green-100 rounded-3xl border-green-200 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-2 md:mb-10">Satisfied Customers</h3>
            <div className="text-green-800">
              <AnimatedCounter end={32} suffix="+" duration={2500} />
            </div>
          </CardContent>
        </Card>

        {/* Analytics Dashboard Image - Column 2 */}
        <div
          className={`relative overflow-hidden rounded-3xl shadow-lg transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="/images/gtk1.jpg"
            alt="Analytics dashboard showing business metrics and charts"
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mission Card - Column 3 */}
        <div
          className={`relative overflow-hidden rounded-3xl shadow-lg transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="/images/gtkt2.png"
            alt="Analytics dashboard showing business metrics and charts"
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mission Card - Columns 4-5 (spans 2 columns) */}
        <Card
          className={`md:col-span-2 rounded-3xl relative overflow-hidden transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mission</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              To empower e-commerce and healthcare businesses with innovative marketing that drives growth, builds
              trust, and delivers lasting results.
            </p>
          </CardContent>
        </Card>

        {/* Bottom Row */}
        {/* About Us Card - Columns 1-3 (spans 3 columns) */}
        <Card
          className={`md:col-span-3 transition-all rounded-3xl duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">About Us</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Born from the visionaries behind <a className="text-[#455dbd] hover:text-gray-600" href="https://matchplug.com" target="_blank">Matchplug Agency</a>, Krafted Branding exists to help growth-hungry
              businesses scale. Whether you're running an online store or managing a clinic, we bring strategy,
              creativity, and execution together to help you win.
            </p>
          </CardContent>
        </Card>

        {/* Column 4 */}
        <div
          className={`relative overflow-hidden rounded-3xl shadow-lg transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="/images/gtkb.jpg"
            alt="Analytics dashboard showing business metrics and charts"
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Projects Card - Column 5 */}
        <Card
          className={`bg-blue-100 rounded-3xl border-blue-200 transition-all duration-1000 delay-1600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-blue-800 mb-2 md:mb-24">Projects</h3>
            <div className="text-blue-800">
              <AnimatedCounter end={88} suffix="+" duration={2500} />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
