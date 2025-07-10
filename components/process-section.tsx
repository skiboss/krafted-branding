"use client"

import { SearchCheck, BrainCircuit, RefreshCcwDot, Rocket, ArrowDown, ArrowBigRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])


  const steps = [
    {
      icon: SearchCheck,
      title: "Discovery",
      description: "We dive deep into your business, audience, and goals.",
      color: "bg-[#EBEBEB]",
      borderColor: "border-dark",
      bgColor: "bg-white",
    },
    {
      icon: BrainCircuit,
      title: "Strategy",
      description: "Craft a custom plan tailored to your e-commerce or healthcare needs.",
      color: "bg-[#EBEBEB]",
      borderColor: "border-dark",
      bgColor: "bg-white",
    },
    {
      icon: Rocket,
      title: "Execution",
      description: "Launch high-impact campaigns with precision and creativity.",
      color: "bg-[#EBEBEB]",
      borderColor: "border-dark",
      bgColor: "bg-white",
    },
    {
      icon: RefreshCcwDot,
      title: "Optimization",
      description: "Continuously analyze and refine to maximize ROI.",
      color: "bg-[#EBEBEB]",
      borderColor: "border-dark",
      bgColor: "bg-white",
    },
  ]

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, index])
            }, index * 200) // Stagger animations
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="process">
      {/* <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How We Do This?</h2>
        <p className="text-lg text-gray-600">Here's Our Proven Growth Formula</p>
      </div> */}
        {/* Header Badge */}
      <div className="flex mb-8">
        <div
          className={`bg-[#3730A3] text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all duration-1000 opacity-100 translate-y-0`}
        >
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
          <span className="font-medium text-sm uppercase tracking-wide">How We Do This</span>
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center md:text-start md:w-3/5 mb-12 text-gray-900 leading-tight">
        Here's Our Proven Growth Formula
      </h2>

      <div className="relative" >
        {steps.map((step, index) => {
          const Icon = step.icon
          const isEven = index % 2 === 1
          const isVisible = visibleSteps.includes(index)
          const isLast = index === steps.length - 1

          return (
            <div key={step.title} className="relative mb-16 last:mb-0">
              {/* Step Container */}
              <div ref={(el) => { stepRefs.current[index] = el }}
                className={`flex items-center gap-8 lg:gap-16 ${
                  isEven ? "lg:flex-row-reverse" : ""
                } transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                {/* Title Side */}
                <div className={`flex-1 ${isEven ? "lg:text-right" : ""}`}>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{step.title}</h3>
                </div>

                {/* Arrow */}
                <div className="hidden lg:block flex-shrink-0">
                  <div
                    className={`transform transition-transform duration-500 ${
                      isVisible ? "scale-100" : "scale-0"
                    } ${isEven ? "rotate-180" : ""}`}
                  >
                    <ArrowBigRight className="w-8 h-8 text-black" />
                  </div>
                </div>

                {/* Description Box */}
                <div className="flex-2 relative">
                  <div
                    className={`relative ${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-6 md:mx-8 md:my-3 lg:p-8 transition-all duration-500 ${
                      isVisible ? "transform translate-y-0 shadow-lg" : "transform translate-y-4 shadow-none"
                    }`}
                  >
                    {/* Floating Icon */}
                    <div
                      className={`absolute -top-6 ${isEven ? "right-8" : "left-8"} transition-all duration-700 ${
                        isVisible ? "transform translate-y-0 rotate-0" : "transform translate-y-4 rotate-12"
                      }`}
                    >
                      <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-purple-800" />
                      </div>
                    </div>

                    {/* Description Text */}
                    <p className={`text-gray-700 leading-relaxed text-lg ${isEven ? "lg:text-right" : ""} pt-2`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting Line for Mobile */}
              {!isLast && (
                <div className="lg:hidden flex justify-center mt-8">
                  <div
                    className={`transition-all duration-500 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  >
                    <ArrowDown className="w-6 h-6 text-pink-400" />
                  </div>
                </div>
              )}

              {/* Connecting Curved Line for Desktop */}
              {!isLast && (
                <div className="hidden absolute left-1/2 transform -translate-x-1/2 mt-8">
                  <div
                    className={`transition-all duration-700 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  >
                    <svg width="100" height="60" viewBox="0 0 100 60" className="text-pink-200">
                      <path
                        d="M20 10 Q50 40 80 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Enhanced Bottom Section */}
      {/* <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-pink-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our proven 4-step process has helped over 50,000+ businesses achieve their digital goals. Let's discuss how
            we can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
            <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div> */}
    </section>
  )
}
