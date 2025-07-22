import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog"
import { Card, CardContent } from "@/components/ui/card"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`}>
        <Card className="relative overflow-hidden cursor-pointer group h-96 md:min-h-screen rounded-none">
          <div className="absolute inset-0">
            <Image
              src={post.imageUrl || "/images/blog-head.png"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 max-w-6xl mx-auto text-white sm:pb-16">
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">K</span>
                </div>
              </div>
            </div>
            <h2 className="text-2xl md:text-6xl font-semibold mb-4 sm:mb-6 leading-normal sm:w-3/5">{post.title}</h2>
            <p className="text-gray-200 text-sm md:text-2xl leading-relaxed sm:w-4/5">{post.excerpt}</p>
          </CardContent>
        </Card>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center text-xs text-gray-500">
            <span className="font-medium">{post.author}</span>
            <span className="mx-2">•</span>
            <span>{formattedDate}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
