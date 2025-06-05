import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Lightbulb, Heart, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/page-parts/heroSection"
import Header from "@/components/page-parts/header"
import MobileHeader from "@/components/page-parts/mobileHeader"

/**
 * HomePage Component
 *
 * This is the main landing page of the ABUDevs website.
 * It includes:
 * - Navigation header with logo and menu items
 * - Hero section with main call-to-action
 * - Mission & Vision cards
 * - Core values section
 * - Club activities grid
 * - Achievement statistics
 * - Call-to-action section
 * - Footer with contact information
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* 
        Header Section
        - Contains the main navigation
        - Logo and club name
        - Navigation links to other pages
        - Join Us button for member registration
      */}
      <Header/>
      <MobileHeader/>

      {/* 
        Hero Section
        - Main value proposition
        - Club statistics badge
        - Primary and secondary call-to-action buttons
      */}
      <HeroSection/>

      {/* 
        Mission & Vision Section
        - Two-column layout with cards
        - Icons for visual appeal
        - Clear distinction between mission and vision
      */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800 font-bold flex items-center gap-2">
                  <Lightbulb className="h-6 w-6" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed">
                  To propagate and nurture creativity and innovation amongst the students of Ahmadu Bello University,
                  Zaria, building a community of tech enthusiasts, non-techies, beginners, and experts who are
                  passionate about learning, innovating, and growing together.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800 font-bold flex items-center gap-2">
                  <Globe className="h-6 w-6" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed">
                  To be technological catalysts in Ahmadu Bello University, enabling ICT proficient students who would
                  be more than just observers of technological development, and the leading tech community in ABU and
                  beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 
        Core Values Section
        - Three-column grid layout
        - Icon-based visual design
        - Consistent card structure
      */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our community and drive our mission forward
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Innovation Value */}
            <Card className="text-center border-green-200 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We foster a culture of creativity and forward-thinking, encouraging members to explore, experiment,
                  and build transformative solutions.
                </p>
              </CardContent>
            </Card>

            {/* Collaboration Value */}
            <Card className="text-center border-green-200 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We believe in the power of community, teamwork, and shared knowledge to drive growth and success for
                  all members.
                </p>
              </CardContent>
            </Card>

            {/* Inclusivity Value */}
            <Card className="text-center border-green-200 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We are committed to creating an open and diverse environment where every student, regardless of
                  background or experience, can thrive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 
        Club Activities Section
        - Grid layout showcasing different activities
        - Hover effects for interactivity
        - Bullet point design for visual consistency
      */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Club Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diverse programs designed to enhance your technical skills and foster innovation
            </p>
          </div>

          {/* Activities Grid - Dynamic generation from array */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Weekly Dev Study Jam",
              "Technical Workshops",
              "Tech Talks",
              "Dev4Teens",
              "Bootcamps",
              "Meetups",
              "Ideathons",
              "Hackathons",
              "Summits",
              "Conferences",
              "Open Source Contributions",
            ].map((activity, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-gray-800">{activity}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 
        Achievements Section
        - Statistics showcase
        - Four-column grid layout
        - Prominent numbers with descriptions
      */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Making significant strides in building a vibrant tech community at ABU
            </p>
          </div>

          {/* Achievement Statistics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-green-200 shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">4000+</div>
                <p className="text-gray-700">Students Trained</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200 shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">80+</div>
                <p className="text-gray-700">Online Events</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200 shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">60+</div>
                <p className="text-gray-700">Physical Events</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200 shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
                <p className="text-gray-700">Startups Launched</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 
        Call-to-Action Section
        - Prominent background color
        - Final conversion opportunity
        - Clear value proposition
      */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
            <p className="text-green-100 mb-8 text-lg">
              Membership is completely free and open to all ABU students regardless of department, level, or tech
              experience.
            </p>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/register">Join ABUDevs Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 
        Footer Section
        - Three-column layout
        - Contact information
        - Quick links
        - Social media links
        - Copyright notice
      */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Club Information */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/abudevs-logo.png"
                  alt="ABUDevs Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">ABUDevs</h3>
                  <p className="text-sm text-gray-400">Ahmadu Bello University</p>
                </div>
              </div>
              <p className="text-gray-400">Building the next generation of tech leaders and innovators at ABU.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-white">
                    Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: abudevs@abu.edu.ng</li>
                <li>Phone: +234 816 295 9073</li>
                <li>Website: abudevs.abu.edu.ng</li>
                <li>Facebook: @Abudevs</li>
                <li>Twitter: @Abu_Devs</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ABUDevs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
