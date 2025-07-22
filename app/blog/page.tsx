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
      <section className="">
        <div className="w-full mx-auto relative z-10">
          {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <BlogCard post={featuredPost} featured />
          </div>
        )}
          </div>
      </section>

      <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-11">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Recent Blog Posts</h1>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
