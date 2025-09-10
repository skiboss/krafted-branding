import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)
const resend = new Resend("re_PXzKwrFd_HuEafDVtfbigrFrrb1T5BZzq")

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  company: string
  industry: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "Krafted Contact Form <noreply@kraftedbranding.com>",
      to: ["skiboss4life@gmail.com"], // Replace with your actual email
      subject: `New Contact Form Submission from ${data.firstName} ${data.lastName} - ${data.industry}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 20px;">
              <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #9333ea, #ec4899); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                <span style="color: white; font-weight: bold; font-size: 24px; text-align: center; width: 100%; margin: 0 auto; display: flex; justify-content: center;">K</span>
              </div>
              <h1 style="color: #1f2937; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${data.firstName} ${data.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;">
                    <a href="mailto:${data.email}" style="color: #ef4444; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Company:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${data.company}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Industry:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${data.industry}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border-left: 4px solid #541349;">
              <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 16px;">Message:</h3>
              <p style="color: #1f2937; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This email was sent from the Krafted contact form on ${new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Company: ${data.company}

Message:
${data.message}

Sent on: ${new Date().toLocaleString()}
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Email service error:", error)
    return { success: false, error: "Email service unavailable" }
  }
}
