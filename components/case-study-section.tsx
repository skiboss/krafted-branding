"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }: AnimatedCounterProps) {
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

      // Easing function for smooth animation
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
    <div ref={counterRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function CaseStudySection() {
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

  const metrics = [
    {
      label: "Conversion",
      value: 89,
      prefix: "+",
      suffix: "%",
      description: "Improvement in rate",
    },
    {
      label: "Sales",
      value: 5000,
      prefix: "",
      suffix: "+",
      description: "Products sold",
    },
    {
      label: "Impressions",
      value: 1.2,
      prefix: "",
      suffix: "M",
      description: "Ad impressions",
    },
    {
      label: "Revenue",
      value: 500,
      prefix: "$",
      suffix: "k+",
      description: "Generated revenue",
    },
  ]

  return (
    <section ref={sectionRef} className="py-4 px-6 max-w-5xl mx-auto mb-16" id="case-study">
      {/* Header Badge */}
      <div className="flex mb-12">
        <div
          className={`bg-[#3730A3] text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
          <span className="font-medium text-sm uppercase tracking-wide">CASE STUDY</span>
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Left Column - Problem Statement */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Spending $15k/month on ads, a wellness brand faced low conversions and rising acquisition costs.
          </h2>
        </div>

        {/* Right Column - Solution Description */}
        <div
          className={`flex items-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <p className="text-gray-600 leading-relaxed text-lg">
            Over a 6-month period, we helped a premium wellness e-commerce brand overcome rising ad costs and low
            conversions. We refined their funnel, optimized ad targeting, and improved onsite conversion, leading to
            stronger ROI and scalable growth.
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`text-center lg:text-left transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${600 + index * 150}ms` }}
          >
            <div className="mb-2">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">{metric.label}</h3>
              <AnimatedCounter end={metric.value} prefix={metric.prefix} suffix={metric.suffix} duration={2500} />
              <p className="text-sm text-gray-600">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
