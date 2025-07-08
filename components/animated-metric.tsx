"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedMetricProps {
  label: string
  value: number
  prefix?: string
  suffix?: string
  description: string
  delay?: number
}

export function AnimatedMetric({
  label,
  value,
  prefix = "",
  suffix = "",
  description,
  delay = 0,
}: AnimatedMetricProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const metricRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.3 },
    )

    if (metricRef.current) {
      observer.observe(metricRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible, delay])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / 2500, 1)

      // Smooth easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(value * easeOutCubic))

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
  }, [isVisible, value])

  return (
    <div
      ref={metricRef}
      className={`text-center lg:text-left transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      }`}
    >
      <div className="mb-2">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">{label}</h3>
        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 tabular-nums">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
