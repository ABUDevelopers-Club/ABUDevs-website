# ABUDevs Website

A modern, responsive website for the Ahmadu Bello University Developers Club (ABUDevs) built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with green color scheme
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js 15 for optimal performance
- **Type Safety**: Full TypeScript implementation
- **Component Library**: Uses shadcn/ui for consistent UI components
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

\`\`\`
abudevs-website/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── admin/                    # Admin dashboard
│   ├── blogs/                    # Blog listing page
│   ├── events/                   # Events page
│   ├── past-presidents/          # Past presidents page
│   ├── register/                 # Member registration
│   ├── team/                     # Team page with tabs
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/                   # Reusable components
│   └── ui/                       # shadcn/ui components
├── public/                       # Static assets
│   └── images/                   # Image files
├── lib/                          # Utility functions
├── hooks/                        # Custom React hooks
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── next.config.mjs               # Next.js configuration
\`\`\`

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, or pnpm package manager
- VS Code (recommended) with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Prettier - Code formatter

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd abudevs-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### VS Code Setup

1. **Install recommended extensions**:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Install the extensions mentioned in prerequisites

2. **Configure VS Code settings** (optional):
   Create `.vscode/settings.json`:
   \`\`\`json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "typescript.preferences.importModuleSpecifier": "relative"
   }
   \`\`\`

## 📄 Pages Overview

### 1. Homepage (`/`)
- Hero section with call-to-action
- Mission and vision cards
- Core values showcase
- Club activities grid
- Achievement statistics
- Footer with contact information

### 2. About Page (`/about`)
- Club overview and history
- Mission, vision, and values
- Timeline of milestones
- Membership information

### 3. Events Page (`/events`)
- Upcoming events grid
- Past events showcase
- Event categories
- Registration buttons (placeholder)

### 4. Blogs Page (`/blogs`)
- Featured blog post
- Recent articles grid
- Category filtering
- Newsletter signup

### 5. Team Page (`/team`)
- Tabbed interface with four sections:
  - Core Executive Team
  - Past Presidents
  - Patrons & Advisers
  - Staff Advisers
- Collective impact statistics
- Contact information

### 6. Registration Page (`/register`)
- Multi-step registration form
- Form validation
- Success state
- Terms and conditions

### 7. Admin Dashboard (`/admin`)
- Event management
- Blog management
- Member management
- Analytics dashboard

## 🔧 Adding Backend & Database

### Option 1: Supabase (Recommended)

1. **Install Supabase**
   \`\`\`bash
   npm install @supabase/supabase-js
   \`\`\`

2. **Create Supabase project**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Get your project URL and anon key

3. **Environment variables**
   Create `.env.local`:
   \`\`\`env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   \`\`\`

4. **Database schema**
   \`\`\`sql
   -- Members table
   CREATE TABLE members (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     first_name VARCHAR(50) NOT NULL,
     last_name VARCHAR(50) NOT NULL,
     email VARCHAR(100) UNIQUE NOT NULL,
     phone VARCHAR(20),
     student_id VARCHAR(20) UNIQUE NOT NULL,
     department VARCHAR(100) NOT NULL,
     level VARCHAR(20) NOT NULL,
     tech_experience VARCHAR(20),
     interests TEXT,
     motivation TEXT,
     created_at TIMESTAMP DEFAULT NOW()
   );

   -- Events table
   CREATE TABLE events (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title VARCHAR(200) NOT NULL,
     description TEXT,
     date DATE NOT NULL,
     time TIME NOT NULL,
     location VARCHAR(200) NOT NULL,
     category VARCHAR(50) NOT NULL,
     max_attendees INTEGER,
     created_at TIMESTAMP DEFAULT NOW()
   );

   -- Blog posts table
   CREATE TABLE blog_posts (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title VARCHAR(200) NOT NULL,
     excerpt TEXT,
     content TEXT NOT NULL,
     author VARCHAR(100) NOT NULL,
     category VARCHAR(50) NOT NULL,
     tags TEXT[],
     published BOOLEAN DEFAULT FALSE,
     created_at TIMESTAMP DEFAULT NOW()
   );
   \`\`\`

5. **Supabase client setup**
   Create `lib/supabase.ts`:
   \`\`\`typescript
   import { createClient } from '@supabase/supabase-js'

   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

   export const supabase = createClient(supabaseUrl, supabaseAnonKey)
   \`\`\`

6. **API integration example**
   Update `app/register/page.tsx`:
   \`\`\`typescript
   import { supabase } from '@/lib/supabase'

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault()
     
     try {
       const { data, error } = await supabase
         .from('members')
         .insert([{
           first_name: formData.firstName,
           last_name: formData.lastName,
           email: formData.email,
           phone: formData.phone,
           student_id: formData.studentId,
           department: formData.department,
           level: formData.level,
           tech_experience: formData.techExperience,
           interests: formData.interests,
           motivation: formData.motivation
         }])

       if (error) throw error
       
       setIsSubmitted(true)
     } catch (error) {
       console.error('Error:', error)
       // Handle error (show toast, etc.)
     }
   }
   \`\`\`

### Option 2: MongoDB with Mongoose

1. **Install dependencies**
   \`\`\`bash
   npm install mongodb mongoose
   npm install -D @types/mongoose
   \`\`\`

2. **Environment variables**
   \`\`\`env
   MONGODB_URI=mongodb://localhost:27017/abudevs
   # or for MongoDB Atlas
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/abudevs
   \`\`\`

3. **Database connection**
   Create `lib/mongodb.ts`:
   \`\`\`typescript
   import mongoose from 'mongoose'

   const MONGODB_URI = process.env.MONGODB_URI!

   if (!MONGODB_URI) {
     throw new Error('Please define the MONGODB_URI environment variable')
   }

   let cached = global.mongoose

   if (!cached) {
     cached = global.mongoose = { conn: null, promise: null }
   }

   async function dbConnect() {
     if (cached.conn) {
       return cached.conn
     }

     if (!cached.promise) {
       const opts = {
         bufferCommands: false,
       }

       cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
         return mongoose
       })
     }

     cached.conn = await cached.promise
     return cached.conn
   }

   export default dbConnect
   \`\`\`

4. **Create models**
   Create `models/Member.ts`:
   \`\`\`typescript
   import mongoose from 'mongoose'

   const MemberSchema = new mongoose.Schema({
     firstName: { type: String, required: true },
     lastName: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     phone: { type: String, required: true },
     studentId: { type: String, required: true, unique: true },
     department: { type: String, required: true },
     level: { type: String, required: true },
     techExperience: String,
     interests: String,
     motivation: String,
   }, {
     timestamps: true
   })

   export default mongoose.models.Member || mongoose.model('Member', MemberSchema)
   \`\`\`

5. **API routes**
   Create `app/api/register/route.ts`:
   \`\`\`typescript
   import { NextRequest, NextResponse } from 'next/server'
   import dbConnect from '@/lib/mongodb'
   import Member from '@/models/Member'

   export async function POST(request: NextRequest) {
     try {
       await dbConnect()
       
       const body = await request.json()
       const member = await Member.create(body)
       
       return NextResponse.json({ success: true, data: member })
     } catch (error) {
       return NextResponse.json(
         { success: false, error: error.message },
         { status: 400 }
       )
     }
   }
   \`\`\`

## 🔐 Authentication Setup

### Using NextAuth.js

1. **Install NextAuth**
   \`\`\`bash
   npm install next-auth
   \`\`\`

2. **Configure NextAuth**
   Create `app/api/auth/[...nextauth]/route.ts`:
   \`\`\`typescript
   import NextAuth from 'next-auth'
   import GoogleProvider from 'next-auth/providers/google'

   const handler = NextAuth({
     providers: [
       GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
       }),
     ],
     pages: {
       signIn: '/auth/signin',
     },
     callbacks: {
       async session({ session, token }) {
         return session
       },
     },
   })

   export { handler as GET, handler as POST }
   \`\`\`

3. **Environment variables**
   \`\`\`env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_key
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   \`\`\`

## 📧 Email Integration

### Using Resend

1. **Install Resend**
   \`\`\`bash
   npm install resend
   \`\`\`

2. **Environment variable**
   \`\`\`env
   RESEND_API_KEY=your_resend_api_key
   \`\`\`

3. **Email service**
   Create `lib/email.ts`:
   \`\`\`typescript
   import { Resend } from 'resend'

   const resend = new Resend(process.env.RESEND_API_KEY)

   export async function sendWelcomeEmail(email: string, name: string) {
     try {
       await resend.emails.send({
         from: 'ABUDevs <noreply@abudevs.com>',
         to: email,
         subject: 'Welcome to ABUDevs!',
         html: `
           <h1>Welcome to ABUDevs, ${name}!</h1>
           <p>Thank you for joining our community...</p>
         `
       })
     } catch (error) {
       console.error('Email error:', error)
     }
   }
   \`\`\`

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   \`\`\`bash
   npm install -g vercel
   \`\`\`

2. **Deploy**
   \`\`\`bash
   vercel
   \`\`\`

3. **Environment variables**
   Add your environment variables in Vercel dashboard

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Connect GitHub and deploy with database
- **DigitalOcean App Platform**: Deploy with managed database

## 🧪 Testing

### Unit Testing with Jest

1. **Install testing dependencies**
   \`\`\`bash
   npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
   \`\`\`

2. **Configure Jest**
   Create `jest.config.js`:
   \`\`\`javascript
   const nextJest = require('next/jest')

   const createJestConfig = nextJest({
     dir: './',
   })

   const customJestConfig = {
     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
     moduleNameMapping: {
       '^@/components/(.*)$': '<rootDir>/components/$1',
       '^@/pages/(.*)$': '<rootDir>/pages/$1',
     },
     testEnvironment: 'jest-environment-jsdom',
   }

   module.exports = createJestConfig(customJestConfig)
   \`\`\`

3. **Add test scripts**
   \`\`\`json
   {
     "scripts": {
       "test": "jest",
       "test:watch": "jest --watch"
     }
   }
   \`\`\`

## 📱 Progressive Web App (PWA)

1. **Install next-pwa**
   \`\`\`bash
   npm install next-pwa
   \`\`\`

2. **Configure PWA**
   Update `next.config.mjs`:
   \`\`\`javascript
   import withPWA from 'next-pwa'

   const nextConfig = withPWA({
     dest: 'public',
     register: true,
     skipWaiting: true,
   })({
     // your existing config
   })

   export default nextConfig
   \`\`\`

## 🔧 Development Tips

### Code Organization

1. **Component Structure**
   \`\`\`typescript
   // Good component structure
   interface ComponentProps {
     // Define props with TypeScript
   }

   export default function Component({ prop1, prop2 }: ComponentProps) {
     // Component logic
     return (
       // JSX with proper comments
     )
   }
   \`\`\`

2. **Custom Hooks**
   \`\`\`typescript
   // hooks/useLocalStorage.ts
   import { useState, useEffect } from 'react'

   export function useLocalStorage<T>(key: string, initialValue: T) {
     // Hook implementation
   }
   \`\`\`

3. **Utility Functions**
   \`\`\`typescript
   // lib/utils.ts
   import { clsx, type ClassValue } from 'clsx'
   import { twMerge } from 'tailwind-merge'

   export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs))
   }
   \`\`\`

### Performance Optimization

1. **Image Optimization**
   \`\`\`typescript
   import Image from 'next/image'

   // Always use Next.js Image component
   <Image
     src="/images/logo.png"
     alt="Logo"
     width={100}
     height={100}
     priority // for above-the-fold images
   />
   \`\`\`

2. **Dynamic Imports**
   \`\`\`typescript
   import dynamic from 'next/dynamic'

   const DynamicComponent = dynamic(() => import('./Component'), {
     loading: () => <p>Loading...</p>,
   })
   \`\`\`

## 🐛 Troubleshooting

### Common Issues

1. **Module not found errors**
   - Check import paths
   - Verify file extensions
   - Check tsconfig.json paths

2. **Styling issues**
   - Verify Tailwind classes
   - Check CSS specificity
   - Use browser dev tools

3. **Build errors**
   - Check TypeScript errors
   - Verify environment variables
   - Check Next.js configuration

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit [shadcn/ui documentation](https://ui.shadcn.com)
- Join the ABUDevs community for support

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

Built with ❤️ by the ABUDevs team at Ahmadu Bello University, Zaria.

---

For more information, visit [abudevs.abu.edu.ng](https://abudevs.abu.edu.ng) or contact us at abudevs@abu.edu.ng.
