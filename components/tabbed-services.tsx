"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TabbedServices() {
  const ecommerceServices = [
    {
      title: "Precision Paid Advertising",
      description:
        "Meta, Google, and TikTok campaigns that turn ad spend into profitable revenue with data-driven targeting and optimization.",
    },
    {
      title: "SEO & Content Marketing",
      description:
        "Rank higher and convert more with content strategies that drive organic traffic and establish your brand as the go-to authority.",
    },
    {
      title: "Email Marketing & Automation",
      description:
        "Nurture leads and boost repeat purchases with personalized email campaigns that turn subscribers into loyal customers.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build brand awareness and drive sales through strategic social media campaigns that engage your audience and converts.",
    },
  ]

  const healthcareServices = [
    {
      title: "Patient Acquisition Campaigns",
      description:
        "Attract new patients and grow your practice with digital PPC and social media campaigns that build trust and drive appointments.",
    },
    {
      title: "Health Tech & Wellness Marketing",
      description:
        "Boost sales for health-tech and wellness brands with specialized marketing that navigates regulatory requirements while driving growth.",
    },
    {
      title: "Medical Reputation Management",
      description:
        "Build trust with positive reviews and authentic branding that positions your practice as the preferred choice in your community.",
    },
    {
      title: "Local SEO for Healthcare",
      description:
        "Dominate local search results to connect with patients in your area who are actively searching for your services.",
    },
  ]

  const additionalEcommerceServices = ["Turnkey Supply & Merchandising", "Conversion Rate Optimization"]

  const additionalHealthcareServices = ["Healthcare Content Marketing", "Telehealth Marketing"]

  return (
    <section className="py-10 px-10 max-w-5xl mx-auto mt-10">
      <Tabs defaultValue="ecommerce" className="w-full">
        {/* Custom Tab Navigation */}
        <div className="flex justify-center sm:justify-start mb-6">
          <div className="relative bg-gray-100 p-1 rounded-full">
            <TabsList className="bg-transparent p-0 h-auto space-x-1">
              <TabsTrigger
                value="ecommerce"
                className="relative z-10 px-6 py-2 rounded-full font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600 data-[state=inactive]:bg-transparent"
                id="ecommerce-tab"
              >
                E-Commerce
              </TabsTrigger>
              <TabsTrigger
                value="healthcare"
                className="relative z-10 px-6 py-2 rounded-full font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-red-500 data-[state=active]:shadow-sm data-[state=inactive]:text-gray-600 data-[state=inactive]:bg-transparent"
                id="healthcare-tab"
              >
                Healthcare
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="ecommerce" className="space-y-8">
          <div className="text-center sm:text-start mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored Marketing for <br />
              E-commerce Businesses
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Image */}
            <div className="w-full">
              <Image
                src="/ecommtab.png"
                alt="E-commerce marketing dashboard illustration"
                width={400}
                height={300}
                className="w-full h-auto rounded-[2.5rem] shadow-lg"
              />
            </div>

            {/* Right Image with Services */}
            <div className="w-full">
                <div className="space-y-6">
                {ecommerceServices.map((service, index) => (
                  <div key={index} className="space-y-2 sm:pt-2">
                    <h4 className="font-bold text-gray-900">{service.title}</h4>
                    <p className="text-base text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Services - Plain Text */}
          <div className="hidden sm:grid md:grid-cols-2 gap-8 mt-12 text-center">
            {additionalEcommerceServices.map((service, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 text-lg">{service}</h4>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="healthcare" className="space-y-8">
          <div className="text-center sm:text-start mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored Marketing for <br />
              HealthCare Brands
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Image */}
            <div className="w-full">
              <Image
                src="/hctab.png"
                alt="Healthcare marketing compliance dashboard"
                width={400}
                height={300}
                className="w-full h-auto rounded-[2.5rem] shadow-lg"
              />
            </div>

            {/* Right Image with Services */}
            <div className="w-full">
              

              <div className="space-y-6">
                {healthcareServices.map((service, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-gray-900">{service.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Services - Plain Text */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 text-center">
            {additionalHealthcareServices.map((service, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 text-lg">{service}</h4>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Transform Your Growth?</h3>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-md font-medium transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Request Custom Strategy
          </Button>
        </div>
      </Tabs>
    </section>
  )
}
