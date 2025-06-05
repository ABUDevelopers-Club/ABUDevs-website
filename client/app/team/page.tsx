import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone, Linkedin, Twitter, Users, Award, TrendingUp, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

// Team data based on the provided information
const teamMembers = [
  {
    id: 1,
    name: "Toheeb Olaitan",
    role: "President",
    image: "/placeholder.svg?height=300&width=300",
    description: "Leading the club with passion and expertise in making big changes.",
    email: "toheeb@abu.edu.ng",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Fatima Muhammad",
    role: "Vice President",
    image: "/placeholder.svg?height=300&width=300",
    description: "Supporting the vision and driving innovation across all initiatives.",
    email: "fatima@abu.edu.ng",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Aliyu Muh'd Sani",
    role: "Secretary General",
    image: "/placeholder.svg?height=300&width=300",
    description: "Ensuring smooth operations and effective communication.",
    email: "aliyu@abu.edu.ng",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Abubakar Auwal Muktar",
    role: "Finance & Operation Lead",
    image: "/placeholder.svg?height=300&width=300",
    description: "Managing financial resources and operational excellence.",
    email: "abubakar@abu.edu.ng",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Oyabure Zakari",
    role: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
    description: "Driving technical excellence and innovation in all projects.",
    email: "oyabure@abu.edu.ng",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Ibrahim Aminu",
    role: "Project Manager",
    image: "/placeholder.svg?height=300&width=300",
    description: "Coordinating projects and ensuring successful delivery.",
    email: "ibrahim@abu.edu.ng",
    linkedin: "#",
  },
  {
    id: 7,
    name: "Ahmad Mukhtar",
    role: "Design & Creative Lead",
    image: "/placeholder.svg?height=300&width=300",
    description: "Creating beautiful and functional designs for all club materials.",
    email: "ahmad@abu.edu.ng",
    linkedin: "#",
  },
  {
    id: 8,
    name: "Phinehas Nehemiah",
    role: "Media & Publicity Lead",
    image: "/placeholder.svg?height=300&width=300",
    description: "Managing our online presence and community engagement.",
    email: "phinehas@abu.edu.ng",
    linkedin: "#",
  },
  {
    id: 9,
    name: "Ahmed I. Alimam",
    role: "Web Developer",
    image: "/placeholder.svg?height=300&width=300",
    description: "Building and maintaining our digital platforms.",
    email: "ahmed@abu.edu.ng",
    linkedin: "#",
  },
]

// Past presidents data (simplified for team page)
const pastPresidents = [
  {
    id: 1,
    name: "Muhammad Hussain",
    tenure: "2023/2024",
    description: "Immediate Past President who led ABUDevs to achieve 500+ members milestone.",
    image: "/placeholder.svg?height=300&width=300",
    email: "hussain@abu.edu.ng",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Mubarak Aminu",
    tenure: "2022/2023",
    description: "Digitized club operations and launched the first ABUDevs mobile application.",
    image: "/placeholder.svg?height=300&width=300",
    email: "mubarak@abu.edu.ng",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Usman Fori",
    tenure: "2021/2022",
    description: "Successfully navigated the club through the COVID-19 pandemic with virtual events.",
    image: "/placeholder.svg?height=300&width=300",
    email: "usman@abu.edu.ng",
    linkedin: "#",
  },
]

// Patrons and advisers data
const patrons = [
  {
    name: "Prof. Adamu Abubakar",
    title: "Grand Patron",
    organization: "Ahmadu Bello University",
    bio: "Distinguished professor and former Vice-Chancellor providing high-level guidance and institutional support to ABUDevs.",
    expertise: ["Higher Education", "Technology Policy", "Innovation"],
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Dr. Fatima Aliyu",
    title: "Industry Adviser",
    organization: "TechAdvance Nigeria",
    bio: "Senior technology executive with over 15 years of experience in software development and tech entrepreneurship.",
    expertise: ["Software Development", "Entrepreneurship", "Tech Leadership"],
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Eng. Ibrahim Musa",
    title: "Technical Adviser",
    organization: "Microsoft Nigeria",
    bio: "Principal Software Engineer at Microsoft with expertise in cloud computing and enterprise software solutions.",
    expertise: ["Cloud Computing", "Enterprise Software", "DevOps"],
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Mrs. Aisha Garba",
    title: "Career Adviser",
    organization: "Google Developer Expert",
    bio: "Google Developer Expert and career coach helping students transition into successful tech careers.",
    expertise: ["Career Development", "Mobile Development", "Mentorship"],
    image: "/placeholder.svg?height=100&width=100",
  },
]

// Staff advisers data
const staffAdvisers = [
  {
    name: "Dr. Aliyu Muhammad",
    title: "Faculty Adviser",
    department: "Computer Science Department",
    bio: "Associate Professor specializing in artificial intelligence and machine learning research.",
    email: "aliyu.muhammad@abu.edu.ng",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Dr. Khadija Abdullahi",
    title: "Academic Coordinator",
    department: "Mathematics Department",
    bio: "Senior lecturer with expertise in computational mathematics and data science.",
    email: "khadija.abdullahi@abu.edu.ng",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "Mr. Sani Umar",
    title: "Technical Coordinator",
    department: "ICT Directorate",
    bio: "IT specialist managing technical infrastructure and providing technical guidance to student projects.",
    email: "sani.umar@abu.edu.ng",
    image: "/placeholder.svg?height=150&width=150",
  },
]

function TeamMemberCard({ member }: { member: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          width={300}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="text-center">
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <Badge className="mx-auto bg-green-100 text-green-800 w-fit">{member.role}</Badge>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600 mb-4">{member.description}</p>
        <div className="flex justify-center space-x-3">
          <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-green-600 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href={member.linkedin} className="text-gray-400 hover:text-green-600 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TeamPage() {
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
                <p className="text-sm text-gray-600">Our Team</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-green-700">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-700">
                About
              </Link>
              <Link href="/events" className="text-gray-600 hover:text-green-700">
                Events
              </Link>
              <Link href="/blogs" className="text-gray-600 hover:text-green-700">
                Blogs
              </Link>
              <Link href="/team" className="text-green-700 hover:text-green-900 font-medium">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Introducing our core team for the 2024/2025 session - a team of passionate individuals with expertise in
            making big changes in the tech community.
          </p>
        </div>

        {/* Tabbed Team Sections */}
        <section className="mb-16">
          <Tabs defaultValue="current-team" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="current-team">Core Executive</TabsTrigger>
              <TabsTrigger value="past-presidents">Past Presidents</TabsTrigger>
              <TabsTrigger value="patrons">Patrons & Advisers</TabsTrigger>
              <TabsTrigger value="staff">Staff Advisers</TabsTrigger>
            </TabsList>

            {/* Current Core Executive Team */}
            <TabsContent value="current-team" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Executive Team 2024/2025</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Meet the dedicated leaders who manage the day-to-day operations and drive the vision of ABUDevs
                  forward.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Past Presidents */}
            <TabsContent value="past-presidents" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Presidents</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Honoring the visionary leaders who shaped ABUDevs into the thriving community it is today.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastPresidents.map((president) => (
                  <Card key={president.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                      <Image
                        src={president.image || "/placeholder.svg"}
                        alt={president.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">{president.name}</CardTitle>
                      <Badge className="mx-auto bg-green-100 text-green-800 w-fit">{president.tenure}</Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 mb-4">{president.description}</p>
                      <div className="flex justify-center space-x-3">
                        <a
                          href={`mailto:${president.email}`}
                          className="text-gray-400 hover:text-green-600 transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href={president.linkedin} className="text-gray-400 hover:text-green-600 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link href="/past-presidents">View Detailed Profiles</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Patrons & Advisers */}
            <TabsContent value="patrons" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Patrons & Advisers</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Industry professionals and academic leaders who provide guidance and mentorship to our community.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {patrons.map((patron, index) => (
                  <Card key={index} className="border-green-200 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <Image
                            src={patron.image || "/placeholder.svg"}
                            alt={patron.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-green-800">{patron.name}</CardTitle>
                          <p className="text-sm text-gray-600">{patron.title}</p>
                          <p className="text-xs text-gray-500">{patron.organization}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{patron.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {patron.expertise.map((skill: string) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Staff Advisers */}
            <TabsContent value="staff" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Staff Advisers</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Dedicated faculty members who provide academic guidance and institutional support to ABUDevs.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {staffAdvisers.map((adviser, index) => (
                  <Card key={index} className="text-center border-green-200 shadow-lg">
                    <CardHeader>
                      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Image
                          src={adviser.image || "/placeholder.svg"}
                          alt={adviser.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <CardTitle className="text-green-800">{adviser.name}</CardTitle>
                      <p className="text-sm text-gray-600">{adviser.title}</p>
                      <p className="text-xs text-gray-500">{adviser.department}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{adviser.bio}</p>
                      <div className="flex justify-center space-x-3">
                        <a
                          href={`mailto:${adviser.email}`}
                          className="text-gray-400 hover:text-green-600 transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Join Our Team CTA */}
        <section className="bg-green-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our leadership team. If you're interested in taking
            on a leadership role and making a difference in the tech community, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Become a Member First
            </Link>
            <Link
              href="mailto:abudevs@abu.edu.ng"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
            >
              Contact Leadership
            </Link>
          </div>
        </section>

        {/* Collective Impact Section */}
        <section className="mb-16">
          <Card className="border-green-200 shadow-lg bg-gradient-to-r from-green-50 to-green-100">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-green-800 mb-4">Collective Impact</CardTitle>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The combined achievements and influence of our leadership team across all levels of the organization
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <p className="text-gray-700">Active Members Led</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">140+</div>
                  <p className="text-gray-700">Events Organized</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <p className="text-gray-700">Partnerships Formed</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">4000+</div>
                  <p className="text-gray-700">Students Impacted</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-green-800 mb-2">Leadership Excellence</h3>
                  <p className="text-gray-600 text-sm">
                    Our team brings together diverse expertise from technical leadership to creative design and
                    strategic planning.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-green-800 mb-2">Community Building</h3>
                  <p className="text-gray-600 text-sm">
                    Through collaborative efforts, we've built the largest and most active tech community at ABU.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-green-800 mb-2">Innovation Drive</h3>
                  <p className="text-gray-600 text-sm">
                    Our leadership consistently pushes boundaries, introducing new programs and pioneering tech
                    initiatives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="border-green-200">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">abudevs@abu.edu.ng</p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+234 816 295 9073</p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-6 text-center">
                <Twitter className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Follow Us</h3>
                <p className="text-gray-600">@Abu_Devs</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
