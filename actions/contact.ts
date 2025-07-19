"use server"

import { z } from "zod"
import { sendContactEmail } from "@/lib/email"

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name is too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name is too long"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required").max(100, "Company name is too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
})

export interface ContactFormState {
  success?: boolean
  message?: string
  errors?: {
    firstName?: string[]
    lastName?: string[]
    email?: string[]
    company?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    // Extract form data
    const rawData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedFields = contactSchema.safeParse(rawData)

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Please fix the errors below",
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    // Send email
    const emailResult = await sendContactEmail(validatedFields.data)

    if (!emailResult.success) {
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}
