"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Check, TrendingUp, BarChart3, Target, HouseIcon, CheckCircle, PhoneCall, Trello, Wind } from "lucide-react"
import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BookCall } from "@/components/book-call"
import { ContactForm } from "@/components/contact-us"
import ServicesSection from "@/components/services-section"
import { HeroSlider } from "@/components/hero-slider"
import { GetToKnowSection } from "@/components/get-to-know-us"
import ProcessSection from "@/components/process-section"


import { PageLoader } from "@/components/page-loader"
import { useLoading } from "@/hooks/use-loading"

export default function HomePage() {
  
  const { isLoading } = useLoading()

  return (
    <main className="min-h-screen">

      <PageLoader isLoading={isLoading} text="Loading your experience..." />
      {/* Hero Section */}
      {/* <section className="bg-[#f2f2f2] dark:from-purple-900/20 dark:to-pink-900/20 py-20 px-4 sm:pt-32 md:px-8 lg:px-16
       overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Skyrocket Your <span className="text-[#541349] dark:text-purple-400">E-commerce</span> or{" "}
            <span className="text-[#541349] dark:text-purple-400">Healthcare Business</span> with Precision Marketing
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We craft data-driven, results-obsessed strategies to grow your revenue and your brand in the e-commerce and
            healthcare industries
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Explore Services
            </Button>
            <Button className="bg-[#541349] hover:bg-white hover:border border-[#541349] text-white hover:text-[#541349]">Book Consultation</Button>
          </div>
        </div> */}

        {/* Decorative elements */}
        {/* <div className="absolute top-20 right-10 w-20 h-20 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-pink-200 dark:bg-pink-800 rounded-full opacity-50"></div> */}
      {/* </section> */}

      {/* Hero Slider */}
      <HeroSlider />

      {/* Get To Know Us Section */}
      <GetToKnowSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Client Testimonials Section */}
      <section className="bg-white dark:bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say...</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Hear how our clients turned marketing into measurable momentum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Client"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold dark:text-white">Jenny</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CMO, Focallure</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "Overall, Krafted Branding's blend of creativity, analytics, and relentless optimization across Meta and Google ads has been the backbone
                of our brand's success. They've not only delivered measurable ROI but also empowered us to focus more on satisfying our customers."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Client"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold dark:text-white">Neesh R.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Founder, HealthActivator</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "Krafted's email management, local ads, and content marketing hit all worked. They revamped our product
                pages and boosted our conversion rate by 41% in 3 weeks."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Client"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold dark:text-white">Susan M.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Founder, HoneyGlow Skincare</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "We got more patients, better reviews, and a stronger online presence. Krafted's ad strategy literally
                changed the trajectory of our store. They helped us scale Google Ads while optimizing our email funnel.
                We went from $10k/month to over $40k."
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Client"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold dark:text-white">Chris</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Founder, Klex Beauty</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "We started working with Krafted branding for our first brand - Klex Beauty and we were blown by their Meta and Goodle
                Ads mastery delivering consistent great ROAS and scaling us to six figure revenue in months and this success funded two 
                new brands - our launches of Dank brand (fragrance diffusers) and Tiblends (wellness brand), where they adapted strategies
                seamlessly - creative led campaigns for Dank yielding 5+ ROAS and fitness-focused shopping ads for Tiblends boosting conversions
                40%. Krafted's data-driven tweaks turned ads into profit machines across all brands."
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Client"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold dark:text-white">Alex A.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Co-founder, SteelTrend</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "We saw a 220% revenue increase in just 3 months. Our cart abandonment rate dropped by 40% in 6 weeks."
              </p>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Client"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold dark:text-white">Sarah M.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Founder, Balding</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "They navigated HIPAA compliance, designed targeted campaigns, and helped us build patient trust."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white dark:bg-gray-800 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg dark:text-gray-400 max-w-2xl mx-auto">
              We are not just another agency. We are specialized growth partners invested in your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-[#f5f6f9] dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-white dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 dark:text-purple-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Deep knowledge of e-commerce and healthcare markets.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f5f6f9] dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-white dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 dark:text-purple-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Track record of measurable growth.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f5f6f9] dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-white dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Trello className="w-6 h-6 dark:text-purple-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Every decision backed by data and analytics.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#f5f6f9] dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-white dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 dark:text-purple-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                No cookie-cutter approaches, 100% custom strategies
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">Ready to Transform Your Growth?</p>
            <Button className="bg-[#eb4e5f] hover:bg-white hover:text-[#eb4e5f] border border-[#eb4e5f] text-white md:px-8">Request Custom Strategy</Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* FAQ/Consultation Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 px-4 md:px-8 lg:px-16">
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
            {/* <div className="bg-[url(../public/book-section.png)] bg-cover bg-center rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Book a <span className="text-[#541349] dark:text-purple-400">30-min</span>
                </h3>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex gap-2">Consultation Call <i><PhoneCall /></i></h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-2xl">Get a quick audit of your business.</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What we'd be doing for 30 mins</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-transparent flex items-center justify-center">
                      <CheckCircle className="w-full text-dark" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Actionable Insights, Fast</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-transparent flex items-center justify-center">
                      <CheckCircle className="w-full text-dark" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Industry-Specific Growth Strategy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-transparent flex items-center justify-center">
                      <CheckCircle className="w-full text-dark" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Zero-Pressure Strategy Preview</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-[#541349] border border-[#541349] hover:bg-white text-white hover:text-[#541349]">Book Call</Button>
            </div> */}
            <BookCall />

            {/* Right Column - FAQ */}
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="services"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900"
                >
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    What services does Krafted Branding offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    We offer comprehensive digital marketing services including e-commerce optimization, healthcare
                    marketing, PPC campaigns, SEO, and custom growth strategies.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="success"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900"
                >
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    How do you measure success for your clients?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    We track key performance indicators specific to your industry, including revenue growth, conversion
                    rates, customer acquisition costs, and ROI metrics.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="timeline"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900"
                >
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    How soon can I expect to see results?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Results vary by strategy, but most clients see initial improvements within 30-60 days, with
                    significant growth typically occurring within 3-6 months.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="custom"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900"
                >
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    Do you offer custom strategies or pre-built packages?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    We create fully customized strategies tailored to your specific business needs, industry
                    requirements, and growth objectives.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="hipaa"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900"
                >
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    Are your services HIPAA-compliant for healthcare providers?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Yes, all our healthcare marketing services are fully HIPAA-compliant, ensuring patient privacy and
                    regulatory compliance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="business-size"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900"
                >
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    Do you work with startups or only established brands?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    We work with businesses of all sizes, from startups to established enterprises, adapting our
                    strategies to match your current stage and growth goals.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="onboarding"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900"
                >
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    What's your onboarding process like?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Our onboarding includes a comprehensive business audit, strategy development, goal setting, and
                    implementation planning, typically completed within 1-2 weeks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="getting-started"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white dark:bg-gray-900"
                >
                  <AccordionTrigger className="text-left font-medium dark:text-white">
                    How do I get started?
                  </AccordionTrigger>
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

      {/* Contact Form Section */}
      {/* <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16 px-4 md:px-8 lg:px-16"> */}
      <ContactForm />


      <ScrollToTop />
    </main>
  )
}
