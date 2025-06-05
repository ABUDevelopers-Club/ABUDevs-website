"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

/**
 * RegisterPage Component
 *
 * This component handles member registration for ABUDevs.
 * Features:
 * - Multi-step form with validation
 * - Success state after submission
 * - Form state management with React hooks
 * - Responsive design
 *
 * TODO: Connect to backend API for form submission
 * TODO: Add form validation
 * TODO: Add email confirmation flow
 */
export default function RegisterPage() {
  // Form state management
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studentId: "",
    department: "",
    level: "",
    techExperience: "",
    interests: "",
    motivation: "",
    agreeToTerms: false,
  })

  // Success state for showing confirmation
  const [isSubmitted, setIsSubmitted] = useState(false)

  /**
   * Handle form submission
   * Currently logs to console - needs backend integration
   *
   * @param e - Form event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: Replace with actual API call
    // Example: await fetch('/api/register', { method: 'POST', body: JSON.stringify(formData) })
    console.log("Registration data:", formData)

    // Show success state
    setIsSubmitted(true)
  }

  /**
   * Handle input changes
   * Updates form state for controlled components
   *
   * @param field - Form field name
   * @param value - New value
   */
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Success state UI
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
            <p className="text-gray-600 mb-6">
              Welcome to ABUDevs! We'll be in touch soon with more information about upcoming events and activities.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/">Return to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Main registration form UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header with navigation back to home */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <Image
                src="/images/abudevs-logo.png"
                alt="ABUDevs Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h1 className="text-lg font-bold text-green-800">ABUDevs</h1>
                <p className="text-sm text-gray-600">Member Registration</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Registration Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Join ABUDevs</h1>
            <p className="text-gray-600 leading-relaxed">
              Become part of Ahmadu Bello University's premier tech community. Membership is completely free and open to
              all ABU students regardless of department, level, or tech experience.
            </p>
          </div>

          {/* Registration Form */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-800">Membership Registration</CardTitle>
              <CardDescription>Fill out the form below to join our community of 500+ active members</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information Section */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Academic Information Section */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="studentId">Student ID *</Label>
                    <Input
                      id="studentId"
                      value={formData.studentId}
                      onChange={(e) => handleInputChange("studentId", e.target.value)}
                      required
                      className="mt-1"
                      placeholder="e.g., U17CS1001"
                    />
                  </div>
                  <div>
                    <Label htmlFor="department">Department *</Label>
                    <Input
                      id="department"
                      value={formData.department}
                      onChange={(e) => handleInputChange("department", e.target.value)}
                      required
                      className="mt-1"
                      placeholder="e.g., Computer Science"
                    />
                  </div>
                </div>

                {/* Level Selection */}
                <div>
                  <Label htmlFor="level">Current Level *</Label>
                  <Select onValueChange={(value) => handleInputChange("level", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your current level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100">100 Level</SelectItem>
                      <SelectItem value="200">200 Level</SelectItem>
                      <SelectItem value="300">300 Level</SelectItem>
                      <SelectItem value="400">400 Level</SelectItem>
                      <SelectItem value="500">500 Level</SelectItem>
                      <SelectItem value="600">600 Level</SelectItem>
                      <SelectItem value="postgraduate">Postgraduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Tech Experience Level */}
                <div>
                  <Label htmlFor="techExperience">Tech Experience Level</Label>
                  <Select onValueChange={(value) => handleInputChange("techExperience", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your tech experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (No prior experience)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (Some experience)</SelectItem>
                      <SelectItem value="advanced">Advanced (Experienced)</SelectItem>
                      <SelectItem value="expert">Expert (Professional level)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Areas of Interest */}
                <div>
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <Textarea
                    id="interests"
                    value={formData.interests}
                    onChange={(e) => handleInputChange("interests", e.target.value)}
                    className="mt-1"
                    placeholder="e.g., Web Development, Mobile Apps, AI/ML, Blockchain, UI/UX Design, etc."
                    rows={3}
                  />
                </div>

                {/* Motivation */}
                <div>
                  <Label htmlFor="motivation">Why do you want to join ABUDevs?</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    className="mt-1"
                    placeholder="Tell us what motivates you to join our community..."
                    rows={4}
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the terms and conditions of ABUDevs membership and consent to receive communications
                    about club activities and events.
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!formData.agreeToTerms}
                >
                  Complete Registration
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="mt-6 border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-800 mb-2">What happens next?</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• You'll receive a welcome email with club information</li>
                <li>• Access to our WhatsApp and Telegram groups</li>
                <li>• Notifications about upcoming events and workshops</li>
                <li>• Invitation to our next general meeting</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
