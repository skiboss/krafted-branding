"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
// import { CheckCircle, Mail } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

import { useActionState, useEffect, useState } from "react"
import { submitContactForm, type ContactFormState } from "@/actions/contact"
import { CheckCircle, AlertCircle, Loader2, Mail } from "lucide-react"

const initialState: ContactFormState = {}

export function ContactForm() {
    const [state, formAction, isPending ] = useActionState(submitContactForm, initialState)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })
//   const [showConfirmation, setShowConfirmation] = useState(false)

  // Check if all fields are filled
  const isFormValid =
    Object.values(formData).every((value) => value.trim().length > 0) && formData.message.trim().length >= 10

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Reset form after a delay
    useEffect(() => {
        if (state.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      })
    }
}, [state.success])

  // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!isFormValid) return

    // Compose email content
//     const subject = `Contact Form Submission from ${formData.firstName} ${formData.lastName}`
//     const body = `
// Hello,

// You have received a new contact form submission from your website.

// Contact Information:
// - Name: ${formData.firstName} ${formData.lastName}
// - Email: ${formData.email}
// - Company: ${formData.company}

// Message:
// ${formData.message}

// ---
// This email was generated from the Krafted contact form on ${new Date().toLocaleDateString("en-US", {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     })}

// Please reply directly to ${formData.email} to respond to this inquiry.
//     `.trim()

//     // Create mailto URL
//     const mailtoUrl = `mailto:aoghenemeru@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

//     // Open default email client
//     window.location.href = mailtoUrl

//     // Show confirmation message
//     setShowConfirmation(true)

//     // Reset form after a delay
//     setTimeout(() => {
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         company: "",
//         message: "",
//       })
//       setShowConfirmation(false)
//     }, 5000)
//   }

  return (
    <Card className="bg-white/5 border-none">
      <CardHeader>
        <CardTitle className="text-white">Send us a message</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Confirmation Message */}
        {state.message && (
          <Alert className={`mb-6 ${state.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
            {state.success ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
            <AlertDescription className={state.success ? "text-green-800" : "text-red-800"}>
              {state.message}
            </AlertDescription>
          </Alert>
        )}

        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                First Name *
              </label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Susan"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className={state.errors?.firstName ? "border-red-300 focus:border-red-500" : ""}
                disabled={isPending}
              />
              {state.errors?.firstName && <p className="mt-1 text-sm text-red-600">
                {state.errors.firstName[0]}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                Last Name *
              </label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Grey"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={state.errors?.lastName ? "border-red-300 focus:border-red-500" : ""}
                disabled={isPending}
              />
              {state.errors?.lastName && <p className="mt-1 text-sm text-red-600">
                {state.errors.lastName[0]}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={state.errors?.email ? "border-red-300 focus:border-red-500" : ""}
              disabled={isPending}
            />

            {state.errors?.email && <p className="mt-1 text-sm text-red-600">
                {state.errors.email[0]}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company *
            </label>
            <Input
              id="company"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              className={state.errors?.company ? "border-red-300 focus:border-red-500" : "bg-white/5 border-white/20 text-white placeholder:text-[#bcbcbc]/60"}
              disabled={isPending}
            />

            {state.errors?.company && <p className="mt-1 text-sm text-red-600">
                {state.errors.company[0]}</p>}
            </div>

            <div>
                              <label className="block mb-2 text-sm">Industry</label>
                              <Select>
                                <SelectTrigger className="bg-white/5 border-white/20 text-white">
                                  <SelectValue placeholder="Select Industry" className="text-blue" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="ecommerce">E-Commerce</SelectItem>
                                  <SelectItem value="healthcare">Healthcare</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
          </div>
          

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message * <span className="text-gray-500">(minimum 10 characters)</span>
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={state.errors?.message ? "border-red-300 focus:border-red-500" : "min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-[#bcbcbc]/60"}
              disabled={isPending}
            //   minLength={10}
            />
            <div className="flex justify-between items-center mt-1">
              {state.errors?.message ? (
                <p className="text-sm text-red-600">{state.errors.message[0]}</p>
              ) : (
                <p className="text-sm text-gray-500">{formData.message.length}/1000 characters</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className={`w-full transition-all duration-200 ${
              isFormValid && !isPending ? "bg-[#541349] hover:bg-[#541369] cursor-pointer" : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!isFormValid || isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
                <><Mail className="w-4 h-4 mr-2" /> Send Message </>
            )}
          </Button>

          {!isFormValid && (
            <p className="text-sm text-gray-500 text-center">Please fill in all required fields to send your message</p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
