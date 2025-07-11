"use client"

import { useEffect, useState } from "react"
import { LoadingSpinner } from "./loading-spinner"

interface PageLoaderProps {
  isLoading: boolean
  text?: string
}

export function PageLoader({ isLoading, text = "Loading..." }: PageLoaderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <LoadingSpinner size="lg" text={text} showProgress />
      </div>
    </div>
  )
}
