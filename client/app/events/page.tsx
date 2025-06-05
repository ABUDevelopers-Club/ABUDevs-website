import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for events
const upcomingEvents = [
  {
    id: 1,
    title: "Flutter Forward Extended Zaria",
    description: "Discover the cutting-edge of Flutter technology with hands-on workshops and expert talks.",
    date: "2024-02-10",
    time: "9:00 AM",
    location: "Iya Abubakar Hall, ABU Zaria",
    category: "Workshop",
    attendees: 150,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Blockchain Developers Summit",
    description: "Stimulating blockchain adoption in Nigeria with industry experts and developers.",
    date: "2024-02-15",
    time: "10:00 AM",
    location: "Assembly Hall, ABU Zaria",
    category: "Summit",
    attendees: 200,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Weekly Dev Study Jam",
    description: "Join our weekly coding session where we learn, build, and grow together.",
    date: "2024-02-08",
    time: "4:00 PM",
    location: "Computer Science Lab",
    category: "Study Jam",
    attendees: 50,
    image: "/placeholder.svg?height=200&width=400",
  },
]

const pastEvents = [
  {
    id: 4,
    title: "International Women's Day 2023",
    description: "Celebrating women in tech with inspiring talks and networking opportunities.",
    date: "2023-03-08",
    time: "9:00 AM",
    location: "PA Ishaku Lecture Theatre",
    category: "Conference",
    attendees: 180,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Bitcoin Pizza Day Celebration",
    description: "Commemorating the first real-world Bitcoin transaction with education and fun.",
    date: "2023-05-22",
    time: "4:30 PM",
    location: "DLC Garden, ABU Zaria",
    category: "Meetup",
    attendees: 75,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Mental Health Awareness Tech Talk",
    description: "Addressing mental health in the tech industry with expert speakers.",
    date: "2023-10-10",
    time: "6:00 PM",
    location: "Online (MS Teams)",
    category: "Tech Talk",
    attendees: 120,
    image: "/placeholder.svg?height=200&width=400",
  },
]

function EventCard({ event, isPast = false }: { event: any; isPast?: boolean }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant={isPast ? "secondary" : "default"} className={isPast ? "" : "bg-green-100 text-green-800"}>
            {event.category}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-1" />
            {event.attendees}
          </div>
        </div>
        <CardTitle className="text-lg">{event.title}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(event.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
        </div>
        {!isPast && <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Register for Event</Button>}
      </CardContent>
    </Card>
  )
}

export default function EventsPage() {
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
                <p className="text-sm text-gray-600">Events & Activities</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-green-700">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-700">
                About
              </Link>
              <Link href="/events" className="text-green-700 hover:text-green-900 font-medium">
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Events & Activities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for workshops, tech talks, hackathons, and community events designed to enhance your skills and
            connect you with fellow tech enthusiasts.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
            <Badge className="bg-green-100 text-green-800">{upcomingEvents.length} Events</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Past Events</h2>
            <Badge variant="secondary">{pastEvents.length} Events</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
        </section>

        {/* Event Categories */}
        <section className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Event Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Workshops", count: 25, color: "bg-blue-100 text-blue-800" },
              { name: "Tech Talks", count: 30, color: "bg-green-100 text-green-800" },
              { name: "Hackathons", count: 8, color: "bg-purple-100 text-purple-800" },
              { name: "Meetups", count: 15, color: "bg-orange-100 text-orange-800" },
            ].map((category) => (
              <div key={category.name} className="text-center">
                <div className={`inline-flex items-center px-4 py-2 rounded-full ${category.color} font-medium mb-2`}>
                  {category.name}
                </div>
                <p className="text-gray-600">{category.count} events hosted</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-green-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Stay updated with our latest events and activities. Join our community to receive notifications about
            upcoming workshops, tech talks, and networking opportunities.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="/register">Join ABUDevs Community</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
