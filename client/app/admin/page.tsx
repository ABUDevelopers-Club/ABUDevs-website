"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Edit, Trash2, Plus, FileText, Settings, BarChart3 } from "lucide-react"
import Image from "next/image"

// Mock data
const mockEvents = [
  {
    id: 1,
    title: "Flutter Forward Extended Zaria",
    date: "2024-02-10",
    time: "9:00 AM",
    location: "Iya Abubakar Hall",
    attendees: 150,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Blockchain Summit",
    date: "2024-02-15",
    time: "10:00 AM",
    location: "Assembly Hall",
    attendees: 200,
    status: "upcoming",
  },
]

const mockBlogs = [
  {
    id: 1,
    title: "The Future of Web Development",
    author: "Toheeb Olaitan",
    publishDate: "2024-01-15",
    status: "published",
    views: 1250,
  },
  {
    id: 2,
    title: "Building Your First Mobile App",
    author: "Fatima Muhammad",
    publishDate: "2024-01-10",
    status: "draft",
    views: 0,
  },
]

const mockMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@abu.edu.ng",
    department: "Computer Science",
    level: "300",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@abu.edu.ng",
    department: "Mathematics",
    level: "200",
    joinDate: "2024-01-10",
  },
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [eventForm, setEventForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
  })
  const [blogForm, setBlogForm] = useState({
    title: "",
    content: "",
    excerpt: "",
    category: "",
    tags: "",
  })

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Event submitted:", eventForm)
    // Reset form
    setEventForm({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      category: "",
    })
  }

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Blog submitted:", blogForm)
    // Reset form
    setBlogForm({
      title: "",
      content: "",
      excerpt: "",
      category: "",
      tags: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/abudevs-logo.png"
                alt="ABUDevs Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h1 className="text-lg font-bold text-green-800">ABUDevs Admin</h1>
                <p className="text-sm text-gray-600">Content Management System</p>
              </div>
            </div>
            <Button variant="outline">Logout</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Events
            </TabsTrigger>
            <TabsTrigger value="blogs" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Blogs
            </TabsTrigger>
            <TabsTrigger value="members" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Members
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Members</p>
                      <p className="text-3xl font-bold text-green-600">500+</p>
                    </div>
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
                      <p className="text-3xl font-bold text-blue-600">3</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Published Blogs</p>
                      <p className="text-3xl font-bold text-purple-600">12</p>
                    </div>
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Views</p>
                      <p className="text-3xl font-bold text-orange-600">15.2K</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockEvents.slice(0, 3).map((event) => (
                      <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-gray-600">
                            {event.date} • {event.location}
                          </p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">{event.attendees} registered</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Blog Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockBlogs.slice(0, 3).map((blog) => (
                      <div key={blog.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{blog.title}</p>
                          <p className="text-sm text-gray-600">
                            By {blog.author} • {blog.publishDate}
                          </p>
                        </div>
                        <Badge variant={blog.status === "published" ? "default" : "secondary"}>{blog.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Events Management */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Events Management</h2>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New Event
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Add Event Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Create New Event</CardTitle>
                  <CardDescription>Add a new event to the ABUDevs calendar</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleEventSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="eventTitle">Event Title</Label>
                      <Input
                        id="eventTitle"
                        value={eventForm.title}
                        onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                        placeholder="Enter event title"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="eventDescription">Description</Label>
                      <Textarea
                        id="eventDescription"
                        value={eventForm.description}
                        onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                        placeholder="Enter event description"
                        rows={3}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="eventDate">Date</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={eventForm.date}
                          onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="eventTime">Time</Label>
                        <Input
                          id="eventTime"
                          type="time"
                          value={eventForm.time}
                          onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="eventLocation">Location</Label>
                      <Input
                        id="eventLocation"
                        value={eventForm.location}
                        onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                        placeholder="Enter event location"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="eventCategory">Category</Label>
                      <Select onValueChange={(value) => setEventForm({ ...eventForm, category: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="workshop">Workshop</SelectItem>
                          <SelectItem value="tech-talk">Tech Talk</SelectItem>
                          <SelectItem value="hackathon">Hackathon</SelectItem>
                          <SelectItem value="meetup">Meetup</SelectItem>
                          <SelectItem value="summit">Summit</SelectItem>
                          <SelectItem value="conference">Conference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Create Event
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Events List */}
              <Card>
                <CardHeader>
                  <CardTitle>Existing Events</CardTitle>
                  <CardDescription>Manage your current events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockEvents.map((event) => (
                      <div key={event.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{event.title}</h3>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            {event.attendees} registered
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Blogs Management */}
          <TabsContent value="blogs" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Blog Management</h2>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New Blog Post
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Add Blog Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Create New Blog Post</CardTitle>
                  <CardDescription>Write and publish a new blog post</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBlogSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="blogTitle">Blog Title</Label>
                      <Input
                        id="blogTitle"
                        value={blogForm.title}
                        onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                        placeholder="Enter blog title"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="blogExcerpt">Excerpt</Label>
                      <Textarea
                        id="blogExcerpt"
                        value={blogForm.excerpt}
                        onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                        placeholder="Brief description of the blog post"
                        rows={2}
                      />
                    </div>
                    <div>
                      <Label htmlFor="blogContent">Content</Label>
                      <Textarea
                        id="blogContent"
                        value={blogForm.content}
                        onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                        placeholder="Write your blog content here..."
                        rows={8}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="blogCategory">Category</Label>
                      <Select onValueChange={(value) => setBlogForm({ ...blogForm, category: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select blog category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="mobile-development">Mobile Development</SelectItem>
                          <SelectItem value="blockchain">Blockchain</SelectItem>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="open-source">Open Source</SelectItem>
                          <SelectItem value="career">Career</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="blogTags">Tags</Label>
                      <Input
                        id="blogTags"
                        value={blogForm.tags}
                        onChange={(e) => setBlogForm({ ...blogForm, tags: e.target.value })}
                        placeholder="Enter tags separated by commas"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                        Publish Post
                      </Button>
                      <Button type="button" variant="outline" className="flex-1">
                        Save as Draft
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Blogs List */}
              <Card>
                <CardHeader>
                  <CardTitle>Existing Blog Posts</CardTitle>
                  <CardDescription>Manage your published and draft posts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockBlogs.map((blog) => (
                      <div key={blog.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{blog.title}</h3>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>Author: {blog.author}</p>
                          <p>Published: {blog.publishDate}</p>
                          <p>Views: {blog.views}</p>
                          <Badge variant={blog.status === "published" ? "default" : "secondary"}>{blog.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Members Management */}
          <TabsContent value="members" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Members Management</h2>
              <Button className="bg-green-600 hover:bg-green-700">Export Members</Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Registered Members</CardTitle>
                <CardDescription>View and manage club members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Name</th>
                        <th className="text-left p-2">Email</th>
                        <th className="text-left p-2">Department</th>
                        <th className="text-left p-2">Level</th>
                        <th className="text-left p-2">Join Date</th>
                        <th className="text-left p-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockMembers.map((member) => (
                        <tr key={member.id} className="border-b">
                          <td className="p-2">{member.name}</td>
                          <td className="p-2">{member.email}</td>
                          <td className="p-2">{member.department}</td>
                          <td className="p-2">{member.level}</td>
                          <td className="p-2">{member.joinDate}</td>
                          <td className="p-2">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">Settings</h2>

            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Manage general website settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input id="siteName" defaultValue="ABUDevs" />
                </div>
                <div>
                  <Label htmlFor="siteDescription">Site Description</Label>
                  <Textarea id="siteDescription" defaultValue="Ahmadu Bello University Developers Club" rows={3} />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input id="contactEmail" defaultValue="abudevs@abu.edu.ng" />
                </div>
                <Button className="bg-green-600 hover:bg-green-700">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
