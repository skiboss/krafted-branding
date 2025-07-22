"use client"

import { useEffect, useRef, useState } from "react"
import { Plus } from "lucide-react"

export function UniqueFormula() {
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

  const step1Items = [
    "Low CAC: Proven Formats",
    "Message Testing First",
    "Proven Playbook",
    "Ads That Don't Look like Ads",
  ]

  const step2Items = ["Scalable Ads: Creative Volume", "Creative Diversity", "Creative Refresh (Velocity)"]

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 bg-[#541349] text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Here's our unique formula
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block space-y-16">
          {/* Step 1 */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Step 1 Label */}
              <div className="flex justify-center mb-8">
                <div className="bg-fuchsia-700/50 backdrop-blur-sm border border-purple-400/30 rounded-full px-8 py-3 relative z-20">
                  <span className="text-lg font-semibold">Step 1</span>
                </div>
              </div>

              {/* Curved lines extending from Step 1 */}
              <div className="absolute top-6 left-0 right-0 h-32 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  {/* Left curved line */}
                  <path
                    d="M600,0 Q200,0 120,80 Q50,500 100, 800"
                    stroke="#fff"
                    strokeWidth="1"
                    fill="none"
                    className="animate-pulse"
                  />
                  {/* Right curved line */}
                  <path
                    d="M600,0 Q800,0 1000,70 Q1050,100 1000,800"
                    stroke="#fff"
                    strokeWidth="1"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-4 gap-6 relative z-10 mt-8">
                {step1Items.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`bg-fuchsia-900/70 backdrop-blur-sm border border-fuchsia-800/30 rounded-2xl p-6 text-center hover:bg-fuchsia-900/60 transition-all duration-300 transform hover:scale-105 ${
                        isVisible ? "animate-fade-in-up" : ""
                      }`}
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      <p className="font-medium text-sm lg:text-base leading-tight">{item}</p>
                    </div>
                    {index < step1Items.length - 1 && (
                      <div className="flex justify-center mx-4">
                        <Plus className="w-6 h-6 text-fuchsia-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Step 2 Label */}
              <div className="flex justify-center mb-8">
                <div className="bg-fuchsia-700/50 backdrop-blur-sm border border-purple-400/30 rounded-full px-8 py-3 relative z-20">
                  <span className="text-lg font-semibold">Step 2</span>
                </div>
              </div>

              {/* Curved lines extending from Step 2 */}
              <div className="absolute top-6 left-0 right-0 h-32 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 120" preserveAspectRatio="none">
                  {/* Left curved line */}
                  <path
                    d="M500,0 Q250,0 150,100 Q250,80 180,800"
                    stroke="#fff"
                    strokeWidth="1"
                    fill="none"
                    className="animate-pulse"
                  />
                  {/* Right curved line */}
                  <path
                    d="M500,0 Q750,0 800,100 Q850,80 900,800"
                    stroke="#fff"
                    strokeWidth="1"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-3 gap-8 relative z-10 max-w-5xl mx-auto mt-8">
                {step2Items.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`bg-fuchsia-900/70 backdrop-blur-sm border border-fuchsia-800/30 rounded-2xl p-6 text-center hover:bg-fuchsia-900/60 transition-all duration-300 transform hover:scale-105 ${
                        isVisible ? "animate-fade-in-up" : ""
                      }`}
                      style={{ animationDelay: `${800 + index * 100}ms` }}
                    >
                      <p className="font-medium text-sm lg:text-base leading-tight">{item}</p>
                    </div>
                    {index < step2Items.length - 1 && (
                      <div className="flex justify-center mx-6">
                        <Plus className="w-6 h-6 text-fuchsia-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-12">
          {/* Step 1 Mobile */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Step 1 Label */}
              <div className="flex justify-center mb-8">
                <div className="bg-fuchsia-700/50 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2 relative z-20">
                  <span className="text-base font-semibold">Step 1</span>
                </div>
              </div>

              {/* Shorter curved lines for mobile */}
              <div className="absolute top-4 left-0 right-0 h-24 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                  {/* Left curved line */}
                  <path
                    d="M200,10 Q150,10 100,40 Q80,55 60,70"
                    stroke="rgba(168, 85, 247, 0.6)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  {/* Right curved line */}
                  <path
                    d="M200,10 Q250,10 300,40 Q320,55 340,70"
                    stroke="rgba(168, 85, 247, 0.6)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              {/* Step 1 Cards Vertical */}
              <div className="space-y-4 max-w-sm mx-auto mt-6">
                <div className="grid grid-cols-2 gap-4">
                  {step1Items.slice(0, 2).map((item, index) => (
                    <div
                      key={index}
                      className={`bg-fuchsia-900/70 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4 text-center hover:bg-purple-700/40 transition-all duration-300 ${
                        isVisible ? "animate-fade-in-up" : ""
                      }`}
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      <p className="font-medium text-sm leading-tight">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Plus className="w-5 h-5 text-fuchsia-300" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {step1Items.slice(2, 4).map((item, index) => (
                    <div
                      key={index + 2}
                      className={`bg-fuchsia-900/70 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4 text-center hover:bg-purple-700/40 transition-all duration-300 ${
                        isVisible ? "animate-fade-in-up" : ""
                      }`}
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <p className="font-medium text-sm leading-tight">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 Mobile */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Step 2 Label */}
              <div className="flex justify-center mb-8">
                <div className="bg-fuchsia-700/50 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2 relative z-20">
                  <span className="text-base font-semibold">Step 2</span>
                </div>
              </div>

              {/* Shorter curved lines for mobile */}
              <div className="absolute top-4 left-0 right-0 h-24 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                  {/* Left curved line */}
                  <path
                    d="M200,10 Q150,10 100,40 Q80,55 60,70"
                    stroke="rgba(168, 85, 247, 0.6)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  {/* Right curved line */}
                  <path
                    d="M200,10 Q250,10 300,40 Q320,55 340,70"
                    stroke="rgba(168, 85, 247, 0.6)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              {/* Step 2 Cards Vertical */}
              <div className="space-y-4 max-w-sm mx-auto mt-6">
                {step2Items.map((item, index) => (
                  <div key={index}>
                    <div
                      className={`bg-fuchsia-900/70 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4 text-center hover:bg-purple-700/40 transition-all duration-300 ${
                        isVisible ? "animate-fade-in-up" : ""
                      }`}
                      style={{ animationDelay: `${800 + index * 100}ms` }}
                    >
                      <p className="font-medium text-sm leading-tight">{item}</p>
                    </div>
                    {index < step2Items.length - 1 && (
                      <div className="flex justify-center my-4">
                        <Plus className="w-5 h-5 text-fuchsia-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
