"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "./actions"

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, null)

  return (
    <form action={action} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Full Name *
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1"
          placeholder="Enter your full name"
          disabled={isPending}
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address *
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1"
          placeholder="Enter your email address"
          disabled={isPending}
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1"
          placeholder="Enter your phone number (optional)"
          disabled={isPending}
        />
      </div>

      <div>
        <Label htmlFor="description" className="text-sm font-medium text-gray-700">
          Message *
        </Label>
        <Textarea
          id="description"
          name="description"
          required
          rows={5}
          className="mt-1"
          placeholder="Tell us about your business and marketing challenges..."
          disabled={isPending}
        />
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Sending..." : "Send Message"}
      </Button>

      {state && (
        <div
          className={`mt-4 p-4 rounded-lg flex items-center ${
            state.success
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {state.success ? (
            <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          )}
          <p>{state.message}</p>
        </div>
      )}

      <p className="text-sm text-gray-500 mt-4">* Required fields. We'll respond within 24 hours.</p>
    </form>
  )
}
