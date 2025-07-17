"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Check } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BookCall } from "@/components/book-call"
import { ContactForm } from "@/components/contact-us"


import { PageLoader } from "@/components/page-loader"
import { useLoading } from "@/hooks/use-loading"

export default function ContactPage() {
  
    const { isLoading } = useLoading()
  return (
    <div className="min-h-screen">
  
            <PageLoader isLoading={isLoading} text="Loading your experience..." />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl sm:pt-24 mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight sm:leading-normal">Contact <span className="text-[#eb4e5f]">Us</span></h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-md sm:text-xl pt-5 md:py-6">
            Let’s create a custom marketing plan to take your e-commerce or healthcare brand to the next level.  
          </p>

          <div className="">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 md:px-12 py-4 rounded-md font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <a href="https://calendly.com/chris-ojukoko-jnr/30min" target="_blank">Book Consultation</a>

            </Button>
          </div>
        </div>
      </section>

      {/* FAQ/Consultation Section */}
      <section className="bg-white dark:bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Got Questions?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We've answered the most common ones here, and if you need tailored advice, you can also book a quick call
              for a free business audit.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Consultation Booking */}
            <BookCall />

            {/* Right Column - FAQ */}
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="services" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900">
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    What services does Krafted Branding offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    We offer comprehensive digital marketing services including e-commerce optimization, healthcare
                    marketing, PPC campaigns, SEO, and custom growth strategies.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="success" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900">
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    How do you measure success for your clients?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    We track key performance indicators specific to your industry, including revenue growth, conversion
                    rates, customer acquisition costs, and ROI metrics.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="timeline" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900">
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    How soon can I expect to see results?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Results vary by strategy, but most clients see initial improvements within 30-60 days, with
                    significant growth typically occurring within 3-6 months.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="custom" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900">
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    Do you offer custom strategies or pre-built packages?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    We create fully customized strategies tailored to your specific business needs, industry
                    requirements, and growth objectives.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hipaa" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900">
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    Are your services HIPAA-compliant for healthcare providers?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Yes, all our healthcare marketing services are fully HIPAA-compliant, ensuring patient privacy and
                    regulatory compliance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="business-size" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900">
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    Do you work with startups or only established brands?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    We work with businesses of all sizes, from startups to established enterprises, adapting our
                    strategies to match your current stage and growth goals.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="onboarding" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900">
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    What's your onboarding process like?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Our onboarding includes a comprehensive business audit, strategy development, goal setting, and
                    implementation planning, typically completed within 1-2 weeks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="getting-started" className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900">
                  <AccordionTrigger className="text-left font-medium dark:text-white">How do I get started?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Simply book a free 30-minute consultation call or fill out our contact form. We'll discuss your
                    needs and create a customized proposal for your business.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>  
      </section>
      
      <ContactForm />
      <ScrollToTop />
  </div>
  )
}
