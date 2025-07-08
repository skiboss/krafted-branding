"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideData {
  id: number
  image: string
  title: string
  highlightedWords: string[]
  subtitle: string
  primaryButton: string
  secondaryButton: string
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/images/hero-slide-1.png",
    title: "Skyrocket Your {E-commerce} or {Healthcare} Business with Precision Marketing",
    highlightedWords: ["E-commerce", "Healthcare"],
    subtitle:
      "We craft data-driven, results-obsessed strategies to grow your revenue and your brand in the e-commerce and healthcare industries",
    primaryButton: "Book Consultation",
    secondaryButton: "Explore Services",
  },
  {
    id: 2,
    image: "/images/hero-slide-2.png",
    title: "Attract More {Patients} and Build {Trust} with Strategic Healthcare Marketing",
    highlightedWords: ["Patients", "Trust"],
    subtitle:
      "We help healthcare brands grow with HIPAA-compliant campaigns, local SEO, and patient-focused messaging that builds credibility and drives results.",
    primaryButton: "Book Consultation",
    secondaryButton: "Explore Services",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=800&width=1200",
    title: "Transform Your {Digital Presence} with {Data-Driven} Marketing Solutions",
    highlightedWords: ["Digital Presence", "Data-Driven"],
    subtitle:
      "From conversion optimization to brand positioning, we deliver measurable results that scale your business and maximize your ROI across all channels.",
    primaryButton: "Book Consultation",
    secondaryButton: "Explore Services",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const renderTitle = (title: string, highlightedWords: string[]) => {
    let processedTitle = title
    highlightedWords.forEach((word) => {
      processedTitle = processedTitle.replace(`{${word}}`, `<span class="text-red-500">${word}</span>`)
    })
    return <span dangerouslySetInnerHTML={{ __html: processedTitle }} />
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`Hero slide ${slide.id}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {renderTitle(slide.title, slide.highlightedWords)}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-md font-medium text-lg shadow-lg"
                >
                  {slide.primaryButton}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-md font-medium text-lg bg-transparent"
                >
                  {slide.secondaryButton}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-1 bg-white/20">
          <div
            className="h-full bg-red-500 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}