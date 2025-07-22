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
    imageUrl: "/images/blog-head.png",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "strategies-trends-thought-leadership",
    featured: true,
  },
  {
    id: "2",
    title: "Cracking the Code of Healthcare SEO in 2025",
    excerpt: "Smart SEO strategies are transforming patient discovery and bookings.",
    content: "Praesent eleifend justo ut ultricies luctus. Aliquam egestas accumsan metus, ut sodales magna dapibus a. Duis blandit id odio sit amet tincidunt. Nullam a mi ac neque aliquam scelerisque. Suspendisse consequat ipsum vel imperdiet finibus. Quisque auctor mattis augue, vitae ullamcorper erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget lacus pellentesque, sollicitudin lacus quis, gravida nunc. Suspendisse dignissim rutrum nibh et condimentum. Nam sed placerat augue. Nulla consequat aliquam aliquet. Nam feugiat egestas sodales. Cras sagittis ante ut justo malesuada vehicula. Nullam sed leo magna. Pellentesque elit lacus, pharetra eu eros nec, malesuada ullamcorper elit. Cras commodo, tellus interdum dignissim accumsan, tellus purus venenatis lectus, vitae lobortis risus sapien a ex.Integer sollicitudin mi lobortis, suscipit ligula at, ornare lorem.Fusce porta, velit non euismod rhoncus, leo neque hendrerit purus, id interdum ex ex non diam.Proin quis metus non augue pretium semper.Nulla facilisi.Duis erat magna, tincidunt in velit vitae, dapibus fermentum arcu.Suspendisse placerat nisi ac ligula aliquet pellentesque.",
    imageUrl: "/images/blog1.png",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "healthcare-seo-2025",
    // featured: true,
  },
  {
    id: "3",
    title: "TikTok Ads and Gen Z Sales Growth",
    excerpt: "TikTok is outperforming traditional ads for Gen Z conversions.",
    content: "Praesent eleifend justo ut ultricies luctus. Aliquam egestas accumsan metus, ut sodales magna dapibus a. Duis blandit id odio sit amet tincidunt. Nullam a mi ac neque aliquam scelerisque. Suspendisse consequat ipsum vel imperdiet finibus. Quisque auctor mattis augue, vitae ullamcorper erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget lacus pellentesque, sollicitudin lacus quis, gravida nunc. Suspendisse dignissim rutrum nibh et condimentum. Nam sed placerat augue. Nulla consequat aliquam aliquet. Nam feugiat egestas sodales. Cras sagittis ante ut justo malesuada vehicula. Nullam sed leo magna. Pellentesque elit lacus, pharetra eu eros nec, malesuada ullamcorper elit.",
    imageUrl: "/images/blog2.png",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "tiktok-ads-gen-z-growth",
  },
  {
    id: "4",
    title: "Healthcare Funnels That Actually Work",
    excerpt: "See what top-performing healthcare funnels have in common.",
    content: "Praesent eleifend justo ut ultricies luctus. Aliquam egestas accumsan metus, ut sodales magna dapibus a. Duis blandit id odio sit amet tincidunt. Nullam a mi ac neque aliquam scelerisque. Suspendisse consequat ipsum vel imperdiet finibus. Quisque auctor mattis augue, vitae ullamcorper erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget lacus pellentesque, sollicitudin lacus quis, gravida nunc. Suspendisse dignissim rutrum nibh et condimentum. Nam sed placerat augue. Nulla consequat aliquam aliquet. Nam feugiat egestas sodales. Cras sagittis ante ut justo malesuada vehicula. Nullam sed leo magna. Pellentesque elit lacus, pharetra eu eros nec, malesuada ullamcorper elit.",
    imageUrl: "/images/blog3.png",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "healthcare-funnels-that-work",
  },
  {
    id: "5",
    title: "Case Study: 40% Booking Increase",
    excerpt: "Local SEO and reputation growth helped bookings soar.",
    content: "Praesent eleifend justo ut ultricies luctus. Aliquam egestas accumsan metus, ut sodales magna dapibus a. Duis blandit id odio sit amet tincidunt. Nullam a mi ac neque aliquam scelerisque. Suspendisse consequat ipsum vel imperdiet finibus. Quisque auctor mattis augue, vitae ullamcorper erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget lacus pellentesque, sollicitudin lacus quis, gravida nunc. Suspendisse dignissim rutrum nibh et condimentum. Nam sed placerat augue. Nulla consequat aliquam aliquet. Nam feugiat egestas sodales. Cras sagittis ante ut justo malesuada vehicula. Nullam sed leo magna. Pellentesque elit lacus, pharetra eu eros nec, malesuada ullamcorper elit.",
    imageUrl: "/images/blog4.png",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "case-study-40-percent-booking-increase",
  },
  {
    id: "6",
    title: "Cart Abandonment Fixes for 2025",
    excerpt: "Discover what's working to recover lost e-commerce sales.",
    content: "Praesent eleifend justo ut ultricies luctus. Aliquam egestas accumsan metus, ut sodales magna dapibus a. Duis blandit id odio sit amet tincidunt. Nullam a mi ac neque aliquam scelerisque. Suspendisse consequat ipsum vel imperdiet finibus. Quisque auctor mattis augue, vitae ullamcorper erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget lacus pellentesque, sollicitudin lacus quis, gravida nunc. Suspendisse dignissim rutrum nibh et condimentum. Nam sed placerat augue. Nulla consequat aliquam aliquet. Nam feugiat egestas sodales. Cras sagittis ante ut justo malesuada vehicula. Nullam sed leo magna. Pellentesque elit lacus, pharetra eu eros nec, malesuada ullamcorper elit.Nulla finibus nunc a lectus tincidunt, in cursus risus aliquet.Curabitur at risus in erat efficitur egestas.Ut rutrum tempus aliquet.Mauris pretium leo eu suscipit venenatis.Nulla lacinia imperdiet sollicitudin.Fusce pharetra ultricies tellus, sit amet sodales enim maximus sit amet.Duis finibus mi felis, at fermentum urna feugiat quis.Proin eros magna, rutrum vel mauris in, vestibulum accumsan nulla.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Suspendisse potenti.Nunc porttitor nisl nec tincidunt suscipit.Nunc sollicitudin magna nisl. usce sit amet eleifend diam, in pellentesque ante.Morbi eu orci ex.In nibh odio, dignissim et tincidunt non, cursus eget nunc.Nunc et nunc sapien.Pellentesque a consectetur augue, et accumsan lacus.Curabitur consequat condimentum elit eget eleifend.Integer porttitor nunc vitae tempus mollis.",
    imageUrl: "/images/blog5.png",
    author: "Henry Okafor",
    publishedAt: "2025-06-02",
    slug: "cart-abandonment-fixes-2025",
  },
  {
    id: "7",
    title: "Content Marketing in Modern Healthcare",
    excerpt: "How modern content is reshaping patient engagement.",
    content: "Praesent eleifend justo ut ultricies luctus. Aliquam egestas accumsan metus, ut sodales magna dapibus a. Duis blandit id odio sit amet tincidunt. Nullam a mi ac neque aliquam scelerisque. Suspendisse consequat ipsum vel imperdiet finibus. Quisque auctor mattis augue, vitae ullamcorper erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget lacus pellentesque, sollicitudin lacus quis, gravida nunc. Suspendisse dignissim rutrum nibh et condimentum. Nam sed placerat augue. Nulla consequat aliquam aliquet. Nam feugiat egestas sodales. Cras sagittis ante ut justo malesuada vehicula. Nullam sed leo magna. Pellentesque elit lacus, pharetra eu eros nec, malesuada ullamcorper elit. tetur et.Morbi vel fermentum ante.Nunc placerat laoreet libero vel ultricies.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis rhoncus metus sit amet nunc tincidunt, ut bibendum eros lobortis.Fusce ac tincidunt ex.Suspendisse mollis vehicula libero ut suscipit.Nulla nec diam et magna iaculis efficitur ut sed augue.Fusce sit amet eleifend diam, in pellentesque ante.Morbi eu orci ex.In nibh odio, dignissim et tincidunt non, cursus eget nunc.Nunc et nunc sapien.Pellentesque a consectetur augue, et accumsan lacus.Curabitur consequat condimentum elit eget eleifend.Integer porttitor nunc vitae tempus mollis.",
    imageUrl: "/images/blog6.png",
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