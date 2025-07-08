export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  imageUrl: string
  author: string
  publishedAt: string
  slug: string
  featured?: boolean
}

// Mock data for demonstration
export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Strategies, Trends & Thought Leadership",
    excerpt: "Explore data-backed articles, case studies, and expert tips in healthcare and e-commerce marketing.",
    content: "Full blog post content would go here...",
    imageUrl: "/placeholder.svg?height=400&width=600",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "strategies-trends-thought-leadership",
    featured: true,
  },
  {
    id: "2",
    title: "Cracking the Code of Healthcare SEO in 2025",
    excerpt: "Smart SEO strategies are transforming patient discovery and bookings.",
    content: "Full blog post content would go here...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "healthcare-seo-2025",
  },
  {
    id: "3",
    title: "TikTok Ads and Gen Z Sales Growth",
    excerpt: "TikTok is outperforming traditional ads for Gen Z conversions.",
    content: "Full blog post content would go here...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "tiktok-ads-gen-z-growth",
  },
  {
    id: "4",
    title: "Healthcare Funnels That Actually Work",
    excerpt: "See what top-performing healthcare funnels have in common.",
    content: "Full blog post content would go here...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "healthcare-funnels-that-work",
  },
  {
    id: "5",
    title: "Case Study: 40% Booking Increase",
    excerpt: "Local SEO and reputation growth helped bookings soar.",
    content: "Full blog post content would go here...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "case-study-40-percent-booking-increase",
  },
  {
    id: "6",
    title: "Cart Abandonment Fixes for 2025",
    excerpt: "Discover what's working to recover lost e-commerce sales.",
    content: "Full blog post content would go here...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "cart-abandonment-fixes-2025",
  },
  {
    id: "7",
    title: "Content Marketing in Modern Healthcare",
    excerpt: "How modern content is reshaping patient engagement.",
    content: "Full blog post content would go here...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "content-marketing-modern-healthcare",
  },
]

export function getBlogPosts(): BlogPost[] {
  return mockBlogPosts
}

export function getFeaturedPost(): BlogPost | null {
  return mockBlogPosts.find((post) => post.featured) || null
}

export function getRegularPosts(): BlogPost[] {
  return mockBlogPosts.filter((post) => !post.featured)
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return mockBlogPosts.find((post) => post.slug === slug) || null
}