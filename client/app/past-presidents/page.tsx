import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Past presidents data
const pastPresidents = [
  {
    id: 1,
    name: "Muhammad Hussain",
    tenure: "2023/2024",
    period: "Immediate Past President",
    image: "/placeholder.svg?height=300&width=300",
    achievements: [
      "Led the club to achieve 500+ active members milestone",
      "Organized the largest tech summit in ABU history",
      "Established partnerships with major tech companies",
      "Launched the mentorship program for junior members",
      "Increased event attendance by 150%",
    ],
    quote:
      "Technology is not just about coding; it's about solving real-world problems and making a positive impact in our community.",
    legacy:
      "Under Muhammad's leadership, ABUDevs transformed into ABU's premier tech community, setting new standards for student-led innovation and establishing lasting partnerships with industry leaders.",
    keyEvents: [
      "ABUDevs Tech Summit 2024",
      "Blockchain Developers Conference",
      "International Women's Day Tech Celebration",
      "Flutter Forward Extended Zaria",
    ],
  },
  {
    id: 2,
    name: "Mubarak Aminu",
    tenure: "2022/2023",
    period: "Past President",
    image: "/placeholder.svg?height=300&width=300",
    achievements: [
      "Digitized club operations and member management",
      "Launched the first ABUDevs mobile application",
      "Established the weekly Dev Study Jam program",
      "Created the club's first scholarship program",
      "Expanded outreach to other Northern universities",
    ],
    quote:
      "Innovation thrives when we create an inclusive environment where every student can contribute their unique perspective to technology.",
    legacy:
      "Mubarak's tenure was marked by digital transformation and inclusivity. He modernized club operations and ensured that technology education reached students from all backgrounds and departments.",
    keyEvents: [
      "ABUDevs Mobile App Launch",
      "Northern Nigeria Tech Connect",
      "Digital Literacy Workshop Series",
      "First Virtual Hackathon",
    ],
  },
  {
    id: 3,
    name: "Usman Fori",
    tenure: "2021/2022",
    period: "Past President",
    image: "/placeholder.svg?height=300&width=300",
    achievements: [
      "Navigated the club through the COVID-19 pandemic",
      "Pioneered virtual tech events and online learning",
      "Established the club's online presence and social media strategy",
      "Created the foundation for remote collaboration tools",
      "Maintained member engagement during lockdowns",
    ],
    quote:
      "Challenges are opportunities in disguise. The pandemic taught us that innovation knows no boundaries when we adapt and embrace change.",
    legacy:
      "Usman's leadership during the pandemic era demonstrated remarkable resilience and adaptability. He successfully transitioned ABUDevs to a digital-first approach, ensuring continuity and growth during challenging times.",
    keyEvents: [
      "First Virtual Tech Week",
      "Online Coding Bootcamp Series",
      "Digital Skills for Remote Work Workshop",
      "Virtual Career Fair",
    ],
  },
]

const timelineEvents = [
  {
    year: "2021-2022",
    president: "Usman Fori",
    highlight: "Digital Transformation Era",
    description: "Successfully adapted to virtual events and online learning during the pandemic.",
  },
  {
    year: "2022-2023",
    president: "Mubarak Aminu",
    highlight: "Innovation & Inclusion Era",
    description: "Modernized operations and expanded accessibility to all students.",
  },
  {
    year: "2023-2024",
    president: "Muhammad Hussain",
    highlight: "Growth & Partnership Era",
    description: "Achieved unprecedented growth and established industry partnerships.",
  },
  {
    year: "2024-2025",
    president: "Toheeb Olaitan",
    highlight: "Current Leadership",
    description: "Continuing the legacy of innovation and community building.",
  },
]

function PresidentCard({ president }: { president: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
          <Image
            src={president.image || "/placeholder.svg"}
            alt={president.name}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-green-600 text-white">{president.tenure}</Badge>
        </div>
      </div>

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl">{president.name}</CardTitle>
        <CardDescription className="text-green-600 font-medium">{president.period}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Quote */}
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-gray-700 italic">"{president.quote}"</p>
        </div>

        {/* Key Achievements */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Award className="h-4 w-4 text-green-600" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {president.achievements.slice(0, 3).map((achievement: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Legacy */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Legacy</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{president.legacy}</p>
        </div>

        {/* Key Events */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Notable Events</h4>
          <div className="flex flex-wrap gap-2">
            {president.keyEvents.slice(0, 2).map((event: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                {event}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function PastPresidentsPage() {
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
                <p className="text-sm text-gray-600">Past Presidents</p>
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
              <Link href="/team" className="text-gray-600 hover:text-green-700">
                Team
              </Link>
              <Link href="/past-presidents" className="text-green-700 hover:text-green-900 font-medium">
                Past Presidents
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
          <Badge className="mb-4 bg-green-100 text-green-800">Legacy of Leadership</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Past Presidents</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Honoring the visionary leaders who shaped ABUDevs into the thriving tech community it is today. Each
            president brought unique innovations and left lasting impacts on our club's growth and mission.
          </p>
        </div>

        {/* Leadership Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Timeline</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A chronological overview of ABUDevs presidential leadership and the eras they defined.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-green-200"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-green-200 shadow-lg">
                      <CardContent className="p-6">
                        <Badge className="mb-2 bg-green-100 text-green-800">{event.year}</Badge>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.president}</h3>
                        <h4 className="text-green-600 font-medium mb-2">{event.highlight}</h4>
                        <p className="text-gray-600 text-sm">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Presidents Cards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Presidential Hall of Fame</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the exceptional leaders who guided ABUDevs through different eras of growth, innovation, and
              community building.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pastPresidents.map((president) => (
              <PresidentCard key={president.id} president={president} />
            ))}
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="mb-16">
          <Card className="border-green-200 shadow-lg bg-green-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-800">Collective Impact</CardTitle>
              <CardDescription>The combined achievements of our past presidential leadership</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                  <p className="text-gray-700">Presidential Terms</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <p className="text-gray-700">Members Recruited</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                  <p className="text-gray-700">Events Organized</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <p className="text-gray-700">Partnerships Formed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Presidential Qualities */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Presidential Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The qualities and values that define exceptional leadership in ABUDevs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-green-200 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Visionary Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Each president brought forward-thinking ideas that propelled ABUDevs to new heights and expanded our
                  impact in the tech community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our past presidents excelled at fostering inclusive environments where every member could thrive and
                  contribute to our shared mission.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Innovation Drive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  From digital transformation to industry partnerships, our leaders consistently pushed boundaries and
                  embraced innovative approaches.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-green-200 shadow-lg bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Inspired by Their Legacy?</h2>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                The legacy of our past presidents continues to inspire new generations of tech leaders. Join ABUDevs
                today and be part of writing the next chapter of our story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Link href="/register">Join Our Community</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-600"
                >
                  <Link href="/team">Meet Current Team</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
