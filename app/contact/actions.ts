"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const description = formData.get("description") as string

  // Basic validation
  if (!name || !email || !description) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString()
    const rowData = [
      timestamp,
      name,
      email,
      phone || "Not provided",
      description,
      "New", // Status column
    ]

    // Send to Google Sheets via Google Apps Script Web App
    const response = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: rowData,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (result.success) {
      return {
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      }
    } else {
      throw new Error(result.error || "Failed to save data")
    }
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error)

    // Fallback: Log the data locally for manual processing
    console.log("Contact form submission (fallback):", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone || "Not provided",
      description,
      status: "New",
    })

    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly at jonathan@pipelinemarketing.io",
    }
  }
}
