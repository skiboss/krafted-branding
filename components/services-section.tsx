"use client"

import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showMoreEcommerce, setShowMoreEcommerce] = useState(false)
  const [showMoreHealthcare, setShowMoreHealthcare] = useState(false)
  const serviceRef = useRef<HTMLElement>(null)

    // Intersection Observer to detect when the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true)
            }
          },
          { threshold: 0.2 },
        )
    
        if (serviceRef.current) {
          observer.observe(serviceRef.current)
        }
    
        return () => observer.disconnect()
      }, [])

  const ecommerceServices = [
    "Paid Ads",
    "SEO & Content",
    "Email Marketing",
    "Turnkey Supply",
  ]

  const additionalEcommerceServices = [
    "Conversion Rate Optimization",
    "Retargeting Campaigns",
  ]

  const healthcareServices = [
    "Local SEO",
    "Content Marketing",
    "Health Tech Growth",
    "Reputation Management",
  ]

  const additionalHealthcareServices = [
    "Patient Acquisition Funnels",
    "Healthcare Analytics",
  ]

  return (
    <section ref={serviceRef} className="sm:py-16 px-4 max-w-5xl mx-auto">
      {/* Header Badge */}
      <div className="flex mb-8">
        <div
          className={`bg-[#3730A3] text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
          <span className="font-medium text-sm uppercase tracking-wide">OUR SERVICES</span>
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center md:text-start md:w-3/5 mb-12 text-gray-900 leading-tight">
        Tailored Marketing for E-commerce and Healthcare
      </h2>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* E-commerce Marketing */}
        <div className="p-[1px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-lg shadow-lg">
          <Card className="border-0 bg-white rounded-lg h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">E-commerce Marketing</h3>
              <div className="space-y-4">
                {ecommerceServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}

                {showMoreEcommerce && (
                  <>
                    {additionalEcommerceServices.map((service, index) => (
                      <div key={`additional-${index}`} className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          <Check className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowMoreEcommerce(!showMoreEcommerce)}
                  className="text-red-500 hover:text-red-600 font-medium text-sm transition-colors flex items-center gap-1"
                >
                  {showMoreEcommerce ? "See Less" : "See More"}
                  {showMoreEcommerce ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Healthcare Marketing */}
        <div className="p-[1px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-lg shadow-lg">
          <Card className="border-0 bg-white rounded-lg h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Healthcare Marketing</h3>
              <div className="space-y-4">
                {healthcareServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}

                {showMoreHealthcare && (
                  <>
                    {additionalHealthcareServices.map((service, index) => (
                      <div key={`additional-${index}`} className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          <Check className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowMoreHealthcare(!showMoreHealthcare)}
                  className="text-red-500 hover:text-red-600 font-medium text-sm transition-colors flex items-center gap-1"
                >
                  {showMoreHealthcare ? "See Less" : "See More"}
                  {showMoreHealthcare ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Book Consultation Button */}
      <div className="flex justify-center">
        <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium shadow-lg">
          Book Consultation
        </Button>
      </div>
    </section>
  )
}
