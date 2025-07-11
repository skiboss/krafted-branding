"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Simulate loading time

    return () => clearTimeout(timer)
  }, [pathname])

  return { isLoading, setIsLoading }
}