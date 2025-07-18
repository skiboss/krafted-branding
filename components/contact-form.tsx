"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Mail } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Check if all fields are filled
  const isFormValid =
    Object.values(formData).every((value) => value.trim().length > 0) && formData.message.trim().length >= 10

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) return

    // Compose email content
    const subject = `Contact Form Submission from ${formData.firstName} ${formData.lastName}`
    const body = `
Hello,

You have received a new contact form submission from your website.

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Company: ${formData.company}

Message:
${formData.message}

---
This email was generated from the Krafted contact form on ${new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}

Please reply directly to ${formData.email} to respond to this inquiry.
    `.trim()

    // Create mailto URL
    const mailtoUrl = `mailto:aoghenemeru@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open default email client
    window.location.href = mailtoUrl

    // Show confirmation message
    setShowConfirmation(true)

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      })
      setShowConfirmation(false)
    }, 5000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Confirmation Message */}
        {showConfirmation && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Your default email client should have opened with your message. Please send the email to complete your
              inquiry. We'll get back to you within 24 hours!
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company *
            </label>
            <Input
              id="company"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message * <span className="text-gray-500">(minimum 10 characters)</span>
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
              minLength={10}
            />
            <div className="flex justify-between items-center mt-1">
              <p className="text-sm text-gray-500">{formData.message.length}/1000 characters</p>
            </div>
          </div>

          <Button
            type="submit"
            className={`w-full transition-all duration-200 ${
              isFormValid ? "bg-red-500 hover:bg-red-600 cursor-pointer" : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            <Mail className="w-4 h-4 mr-2" />
            Send Message
          </Button>

          {!isFormValid && (
            <p className="text-sm text-gray-500 text-center">Please fill in all required fields to send your message</p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
