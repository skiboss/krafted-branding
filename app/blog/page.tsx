import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Check, TrendingUp, BarChart3, Target, HouseIcon, CheckCircle } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BlogCard } from "@/components/blog-card"
import { getFeaturedPost, getRegularPosts } from "@/lib/blog"

export default function BlogPage() {
  const featuredPost = getFeaturedPost()
  const regularPosts = getRegularPosts()
  return (
    <main className="min-h-screen">
    
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Skyrocket Your <span className="text-purple-700 dark:text-purple-400">E-commerce</span> or{" "}
            <span className="text-purple-700 dark:text-purple-400">Healthcare Business</span> with Precision Marketing
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
            <Button className="bg-purple-700 hover:bg-purple-800 text-white">Book Consultation</Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-pink-200 dark:bg-pink-800 rounded-full opacity-50"></div>
      </section>

      <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Recent Blog Posts</h1>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <BlogCard post={featuredPost} featured />
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {regularPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
      

      <ScrollToTop />
    </main>
  )
}
