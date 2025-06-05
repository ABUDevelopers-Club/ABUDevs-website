import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Users, Target, Heart, Globe, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const milestones = [
  {
    year: "2015",
    title: "Club Establishment",
    description: "ABUDevs was founded with the vision to nurture creativity and innovation among ABU students.",
  },
  {
    year: "2018",
    title: "First Major Event",
    description: "Hosted our first major tech conference with over 200 participants.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Adapted to virtual events during the pandemic, reaching even more students online.",
  },
  {
    year: "2022",
    title: "500+ Members",
    description: "Reached a milestone of over 500 active members across all departments.",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Established as the premier tech community and innovation hub at ABU.",
  },
]

const objectives = [
  "Provide a platform for members to learn and share knowledge about various tech topics",
  "Organize workshops, seminars, and hackathons to enhance members' skills and creativity",
  "Connect members with industry professionals and potential employers",
  "Promote the use of technology for social good and community development",
  "Foster a culture of innovation and entrepreneurship among members",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
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
                <p className="text-sm text-gray-600">About Us</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-green-700">
                Home
              </Link>
              <Link href="/about" className="text-green-700 hover:text-green-900 font-medium">
                About
              </Link>
              <Link href="/events" className="text-gray-600 hover:text-green-700">
                Events
              </Link>
              <Link href="/blogs" className="text-gray-600 hover:text-green-700">
                Blogs
              </Link>
              <Link href="/team" className="text-gray-600 hover:text-green-700">
                Team
              </Link>
              <Link href="/register" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Established 2015</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About ABUDevs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our journey, mission, and the impact we're making in the tech community at Ahmadu Bello
            University, Zaria.
          </p>
        </div>

        {/* Club Overview */}
        <section className="mb-16">
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl text-green-800">Club Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Ahmadu Bello University Developers (ABUDevs) is a student-led technology club established in 2015
                    with the sole aim of propagating and nurturing creativity and innovation among students of Ahmadu
                    Bello University, Zaria – Nigeria.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With a strong and growing community of over 500 active members, the club provides a platform for
                    students to explore technology, build technical skills, and collaborate on meaningful projects.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="text-center p-4">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-gray-600">Active Members</div>
                  </Card>
                  <Card className="text-center p-4">
                    <div className="text-2xl font-bold text-green-600">9</div>
                    <div className="text-sm text-gray-600">Years Active</div>
                  </Card>
                  <Card className="text-center p-4">
                    <div className="text-2xl font-bold text-green-600">140+</div>
                    <div className="text-sm text-gray-600">Events Hosted</div>
                  </Card>
                  <Card className="text-center p-4">
                    <div className="text-2xl font-bold text-green-600">4000+</div>
                    <div className="text-sm text-gray-600">Students Trained</div>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  To build a community of tech enthusiasts, non-techies, beginners, and experts who are passionate about
                  learning, innovating, and growing together. We aim to propagate and nurture creativity and innovation
                  amongst the students of Ahmadu Bello University, Zaria.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <Globe className="h-6 w-6" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  To be technological catalysts in Ahmadu Bello University, enabling ICT proficient students who would
                  be more than just observers of technological development, and the leading tech community in ABU and
                  beyond, empowering our members to become successful tech professionals and entrepreneurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide our community and shape our approach to technology and innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
                  background or experience, can thrive and contribute.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Objectives */}
        <section className="mb-16">
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl text-green-800">Our Objectives</CardTitle>
              <CardDescription>The key goals that drive our activities and programs</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{objective}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones in our journey from a small student group to ABU's premier tech community.
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <Card className="flex-1 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-2">
                      <Badge className="bg-green-100 text-green-800">{milestone.year}</Badge>
                      <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-700">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Membership Information */}
        <section className="mb-16">
          <Card className="border-green-200 shadow-lg bg-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">Membership</CardTitle>
              <CardDescription>
                Open to all ABU students regardless of department, level, or tech experience
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    ABUDevs membership is completely free and open to all Ahmadu Bello University students regardless of
                    department, level, or tech experience. Whether you're a beginner or an experienced tech enthusiast,
                    there's a place for you at ABUDevs.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Students can join the club by signing up through our registration form. No registration fee is
                    required - membership is completely free!
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Join?</h3>
                    <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                      <Link href="/register">Register Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <Card className="border-green-200 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Have questions about ABUDevs or want to learn more about our activities? We'd love to hear from you!
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">abudevs@abu.edu.ng</p>
                  <p className="text-gray-600">abudevs2023@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+234 816 295 9073</p>
                  <p className="text-gray-600">+234 813 096 5440</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
