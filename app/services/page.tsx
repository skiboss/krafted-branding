import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  BarChart3,
  Target,
} from "lucide-react";
import { ScrollToTop } from "@/components/scroll-to-top";
import { HeroSection } from "@/components/hero-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabbedServices from "@/components/tabbed-services";
import { CaseStudySection } from "@/components/case-study-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { NumbersSection } from "@/components/numbers-section";
import { GetToKnowSection } from "@/components/get-to-know-us";

export default function ServicePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center">
            <div className="max-w-6xl mx-auto pt-12 sm:pt-32 px-4 sm:px-6 lg:px-12 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                {/* Left Column - Content (50%) */}
                <div className="space-y-8 flex flex-col justify-center">
                  <div className="space-y-11">
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight sm:leading-relaxed">
                      Solutions Built for <br />
                        <span className="text-red-500">
                        Growth
                      </span>-Driven <br />
                      Businesses
                    </h1>
      
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                      Explore custom-built solutions for brands ready to scale
                    </p>
                  </div>
      
                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-md font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Request a Custom Strategy
                    </Button>
                  </div>
                </div>
      
                {/* Right Column - Image (50%) */}
                <div className="relative flex items-center justify-center h-full">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-lg">
                    <Image
                      src="/hero-meeting.png"
                      alt="Professional business meeting with team discussing strategy around a conference table"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover bg-[url(../public/hero-meeting.png)]"
                      priority
                    />
                  </div>
      
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>
      </section>

      {/* Tabbed Services */}
      <TabbedServices />

      {/* Case Study Section */}
      <div className="pt-16">
        <CaseStudySection />
      </div>

      {/* Numbers Section */}
      <NumbersSection />
      <GetToKnowSection />

      {/* Additional Case Studies Section */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">More Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across different industries achieve remarkable growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* E-commerce Case Study */}
            <CaseStudyCard
              title="E-commerce Brand Achieves 300% Revenue Growth in 8 Months"
              description="A struggling online retailer transformed their business with our comprehensive digital marketing strategy, focusing on conversion optimization and targeted advertising campaigns."
              metrics={[
                {
                  label: "Revenue Growth",
                  value: "300%",
                  description: "Increase in 8 months",
                },
                {
                  label: "Conversion Rate",
                  value: "4.2%",
                  description: "Up from 1.1%",
                },
                {
                  label: "ROAS",
                  value: "6.8x",
                  description: "Return on ad spend",
                },
                {
                  label: "Customer LTV",
                  value: "$180",
                  description: "Average lifetime value",
                },
              ]}
              className="hover:shadow-xl transition-shadow duration-300"
            />

            {/* Healthcare Case Study */}
            <CaseStudyCard
              title="Medical Practice Doubles Patient Bookings with Local SEO"
              description="A family practice clinic expanded their patient base through strategic local SEO, reputation management, and HIPAA-compliant digital marketing campaigns."
              metrics={[
                {
                  label: "Patient Bookings",
                  value: "120%",
                  description: "Increase in bookings",
                },
                {
                  label: "Online Reviews",
                  value: "4.9★",
                  description: "Average rating",
                },
                {
                  label: "Local Rankings",
                  value: "#1",
                  description: "In local search",
                },
                {
                  label: "Website Traffic",
                  value: "85%",
                  description: "Organic growth",
                },
              ]}
              className="hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </section>

      {/* Client Testimonials Section */}
      <section className="bg-white dark:bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say...
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Hear how our clients turned
              marketing into measurable momentum
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
                  <h4 className="font-semibold dark:text-white">Neesh R.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Founder, HealthActivator
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "Krafted's email management, local ads, and content marketing
                hit all worked. They revamped our product pages and boosted our
                conversion rate by 41% in 3 weeks."
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
                  <h4 className="font-semibold dark:text-white">Susan M.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Founder, HoneyGlow Skincare
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "We got more patients, better reviews, and a stronger online
                presence. Krafted's ad strategy literally changed the trajectory
                of our store. They helped us scale Google Ads while optimizing
                our email funnel. We went from $10k/month to over $40k."
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
                  <h4 className="font-semibold dark:text-white">Alex A.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Co-founder, SteelTrend
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "We saw a 220% revenue increase in just 3 months. Our cart
                abandonment rate dropped by 40% in 6 weeks."
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
                  <h4 className="font-semibold dark:text-white">Sarah M.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Founder, HoneyGlow Skincare
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "They navigated HIPAA compliance, designed targeted campaigns,
                and helped us build patient trust."
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
                  <h4 className="font-semibold dark:text-white">Emily</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Email marketing went from an afterthought to our #1 sales
                    driver
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "We now drive 28% of our monthly revenue from email. Krafted
                Branding automated our campaigns and revised cold leads
                effortlessly."
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
                  <h4 className="font-semibold dark:text-white">David U.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    CMO, PetRock Supplies
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                "Krafted helped us rethink our messaging targeting and user
                experience. We saw a 2x revenue and 3x engagement."
              </p>
            </div>
          </div>
        </div>
      </section>

  

      {/* CTA Section */}
      <section className="bg-[#1f0104] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#fee5f8] mb-6">
            Ready to Trasform Your Marketing Results Too?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Join the brands that chose specialization over generalization
          </h2>
          <Button className="bg-[#fee5f8] text-[#1f0104] hover:bg-gray-100 px-16">
            Get Started
          </Button>
        </div>
      </section>

      <ScrollToTop />
    </main>
  );
}
