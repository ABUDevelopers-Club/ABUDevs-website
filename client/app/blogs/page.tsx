import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
    content: "Full blog content would go here...",
    author: "Toheeb Olaitan",
    authorRole: "President, ABUDevs",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    tags: ["JavaScript", "React", "AI", "PWA"],
    image: "/placeholder.svg?height=300&width=600",
    featured: true,
  },
  {
    id: 2,
    title: "Building Your First Mobile App: A Beginner's Guide",
    excerpt: "Step-by-step guide to creating your first mobile application using React Native and Flutter.",
    content: "Full blog content would go here...",
    author: "Fatima Muhammad",
    authorRole: "Vice President, ABUDevs",
    publishDate: "2024-01-10",
    readTime: "8 min read",
    category: "Mobile Development",
    tags: ["React Native", "Flutter", "Mobile", "Beginner"],
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
  },
  {
    id: 3,
    title: "Understanding Blockchain Technology: Beyond Cryptocurrency",
    excerpt: "Dive deep into blockchain technology and discover its applications beyond digital currencies.",
    content: "Full blog content would go here...",
    author: "Oyabure Zakari",
    authorRole: "Technical Lead, ABUDevs",
    publishDate: "2024-01-05",
    readTime: "12 min read",
    category: "Blockchain",
    tags: ["Blockchain", "Cryptocurrency", "DeFi", "Smart Contracts"],
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
  },
  {
    id: 4,
    title: "UI/UX Design Principles Every Developer Should Know",
    excerpt: "Essential design principles that will help you create better user experiences in your applications.",
    content: "Full blog content would go here...",
    author: "Ahmad Mukhtar",
    authorRole: "Design & Creative Lead, ABUDevs",
    publishDate: "2024-01-01",
    readTime: "6 min read",
    category: "Design",
    tags: ["UI/UX", "Design", "User Experience", "Figma"],
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
  },
  {
    id: 5,
    title: "Getting Started with Open Source Contributions",
    excerpt:
      "Learn how to make your first contribution to open source projects and become part of the global developer community.",
    content: "Full blog content would go here...",
    author: "Ahmed I. Alimam",
    authorRole: "Web Developer, ABUDevs",
    publishDate: "2023-12-28",
    readTime: "7 min read",
    category: "Open Source",
    tags: ["Open Source", "Git", "GitHub", "Community"],
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
  },
  {
    id: 6,
    title: "Mental Health in Tech: Finding Balance as a Developer",
    excerpt:
      "Addressing the importance of mental health in the tech industry and strategies for maintaining work-life balance.",
    content: "Full blog content would go here...",
    author: "Phinehas Nehemiah",
    authorRole: "Media & Publicity Lead, ABUDevs",
    publishDate: "2023-12-20",
    readTime: "10 min read",
    category: "Career",
    tags: ["Mental Health", "Work-Life Balance", "Career", "Wellness"],
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
  },
]

const categories = ["All", "Web Development", "Mobile Development", "Blockchain", "Design", "Open Source", "Career"]

function BlogCard({ post, featured = false }: { post: any; featured?: boolean }) {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${featured ? "md:col-span-2" : ""}`}>
      <div
        className={`${featured ? "aspect-[2/1]" : "aspect-video"} bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center`}
      >
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={featured ? 800 : 400}
          height={featured ? 400 : 200}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge className="bg-green-100 text-green-800">{post.category}</Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
        </div>
        <CardTitle className={featured ? "text-2xl" : "text-lg"}>{post.title}</CardTitle>
        <CardDescription className={featured ? "text-base" : ""}>{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-xs">{post.authorRole}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag: string) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Button variant="outline" className="w-full group">
          Read More
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  )
}

export default function BlogsPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
                <p className="text-sm text-gray-600">Tech Blog</p>
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
              <Link href="/blogs" className="text-green-700 hover:text-green-900 font-medium">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ABUDevs Tech Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and stories from our community of developers, designers, and tech enthusiasts at Ahmadu
            Bello University.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-green-600 hover:bg-green-700" : "hover:bg-green-50"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Featured Post</h2>
              <Badge className="ml-3 bg-yellow-100 text-yellow-800">Featured</Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <BlogCard post={featuredPost} featured={true} />
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
            <Badge className="bg-green-100 text-green-800">{regularPosts.length} Articles</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-white rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest tech insights, tutorials, and updates from the ABUDevs
            community delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
          </div>
        </section>

        {/* Popular Tags */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Tags</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "JavaScript",
              "React",
              "Python",
              "Mobile Development",
              "UI/UX",
              "Blockchain",
              "AI/ML",
              "Open Source",
              "Career",
              "Mental Health",
            ].map((tag) => (
              <Badge key={tag} variant="outline" className="hover:bg-green-50 cursor-pointer">
                #{tag}
              </Badge>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-green-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Share your knowledge and experiences with the ABUDevs community. We welcome guest posts from our members on
            various tech topics.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="/register">Join Our Community</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
