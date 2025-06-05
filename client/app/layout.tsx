import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ABUDevs - Ahmadu Bello University Developers Club",
  description:
    "Ahmadu Bello University Developers Club (ABUDevs) - Propagating and nurturing creativity and innovation among students of ABU, Zaria.",
  keywords: ["ABUDevs", "Ahmadu Bello University", "Developers Club", "Tech Community", "Programming", "Innovation"],
  authors: [{ name: "ABUDevs Team" }],
  openGraph: {
    title: "ABUDevs - Ahmadu Bello University Developers Club",
    description: "Join ABU's premier tech community. 500+ active members, workshops, hackathons, and innovation.",
    url: "https://abudevs.abu.edu.ng",
    siteName: "ABUDevs",
    images: [
      {
        url: "/images/abudevs-logo.png",
        width: 1200,
        height: 630,
        alt: "ABUDevs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABUDevs - Ahmadu Bello University Developers Club",
    description: "Join ABU's premier tech community. 500+ active members, workshops, hackathons, and innovation.",
    images: ["/images/abudevs-logo.png"],
    creator: "@Abu_Devs",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
