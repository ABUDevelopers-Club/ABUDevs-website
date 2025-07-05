"use client"

import type React from "react";
import axios from "axios";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, CheckCircle, CircleUserRound, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { is } from "date-fns/locale";
import ErrorCard from "@/components/ui/ErrorCard";

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

  const [ isProcessing, setIsProcessing ] = useState(false);
  // Processing state for form submission

  // Success state for showing confirmation
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Error state for handling errors
  const [ processError, setProcessError] = useState<string | null>(null);
  const [ showError, setShowError ] = useState(false);
  const [ memberId, setMemberId ] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phone,
      student_id: formData.studentId,
      department: formData.department,
      current_level: formData.level,
      tech_experience_level: formData.techExperience,
      area_of_interest: formData.interests,
      reason_for_joining: formData.motivation
    }

    try {
      setIsProcessing(true);
      // Make API request to register the student
      const response = await axios.post("https://abudevs-website-api.onrender.com/students/register", data);
      if (response.status === 200 || response.status === 201) {
        setMemberId(response.data?.student?.abudevs_id);
        // Show success state
        console.log("Registration successful:", response.data);
        setIsProcessing(false);
        setIsSubmitted(true);
      } else {
        // Log the error or show a message to the user
        console.error("Registration failed with status:", response.status);
        handleError(`Registration failed with status: ${response.status}`);
        return
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Axios-specific error
        console.error("Registration failed:", error?.message);
        handleError(`Registration failed: ${error?.response?.data?.error ?? "Unknown server error"}`);
      } else if (error instanceof Error) {
        // General JS error
        console.error("Registration failed:", error?.message);
        handleError(`Registration failed: ${error?.message}`);
      } else {
        // Unknown error type
        console.error("Registration failed with an unknown error:", error);
        handleError("Registration failed: An unexpected error occurred.");
      }
    }

  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  const handleError = (error: string) => {
    // Handle error state, e.g., show an error message
    console.error("Error:", error);
    setProcessError(error);
    setIsProcessing(false);
    setIsSubmitted(false);
    setShowError(true); // Show the error state in the UI

    setTimeout(() => {
      setShowError(false); // Hide the error after a delay
    }, 5000); 

    document.documentElement.scrollTop = 0; // Scroll to top on error
  }

  // Success state UI
  if (isSubmitted && !isProcessing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
            <p className="text-gray-600 mb-4">
              Welcome to the ABU Developers Club, <strong>{formData.firstName}</strong>! Your membership has been successfully created.
            </p>
            <div className="flex flex-col text-start border-[0.5px] bg-blue-50 border-blue-300 py-3 px-2 justify-start items-start">
                <span><span className="font-semibold text-blue-800">🆔 Membership ID</span>: {memberId}</span>
                <span className="text-[10px] text-gray-600">(Please keep this ID safe — you&nbsp;ll need it for all club activities and identification.)</span>
            </div>
            <CardContent className="p-2 mt-3 text-start">
              <h3 className="font-semibold text-green-800 mb-2">What happens next?</h3>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• Access to our WhatsApp and Telegram groups</li>
                <li>• Follow us on instagram: <Link className="underline text-blue-600" href="https://www.instagram.com/abudevs_?igsh=ZjJtZ2xyNGtyNm9u">@abudevs_</Link></li>
                <li>• Click here to check upcoming events: <Link className="underline text-blue-500" href={"/events"}>See events</Link></li>
              </ul>
            </CardContent>
            <Button asChild className="bg-green-600 mt-4 hover:bg-green-700">
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

      <div className="container mx-auto px-4 pb-12 pt-5">
        <div className="max-w-2xl mx-auto">
          {/* Registration Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <CircleUserRound className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join ABUDevs</h1>
            <p className="text-gray-600 leading-relaxed">
              Become part of Ahmadu Bello University's premier tech community. Membership is completely free and open to
              all ABU students regardless of department, level, or tech experience.
            </p>
          </div>

          {/* Registration Form */}
          <Card className="border-green-600 shadow-lg">
            <CardHeader className="bg-green-600 text-white p-6">
              <CardTitle className="">Membership Registration</CardTitle>
              <CardDescription className="text-white">Fill out the form below to join our community of 500+ active members</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                { showError && processError ? (
                  <ErrorCard error={processError} />
                ) : null }
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
                  { isProcessing ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Loader className="h-4 w-4 text-white animate-spin" />
                      <span>Processing...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <CheckCircle strokeWidth={1} className="h-4 text-white w-4" />
                      <span>Complete Registration</span>
                    </span>
                  )}
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
