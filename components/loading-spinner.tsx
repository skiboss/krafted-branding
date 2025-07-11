"use client"

import { useEffect, useState } from "react"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
  showProgress?: boolean
}

export function LoadingSpinner({ size = "md", text = "Loading...", showProgress = false }: LoadingSpinnerProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!showProgress) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(interval)
  }, [showProgress])

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Animated Logo Spinner */}
      <div className="relative">
        <div
          className={`${sizeClasses[size]} border-4 border-gray-200 border-t-red-500 rounded-full animate-spin`}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">K</span>
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <p className="text-gray-600 font-medium">{text}</p>
        {showProgress && (
          <div className="mt-2">
            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{Math.round(progress)}%</p>
          </div>
        )}
      </div>

      {/* Pulsing Dots */}
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  )
}
