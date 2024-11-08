import React, { useState, useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import { supabase } from '../services/supabase'
import { ChevronRight, Lock } from 'lucide-react'
import { Session } from '@supabase/supabase-js'

interface Lesson {
  id: string
  title: string
  chapter: string
  content: string
  videoUrl?: string
}

const CurriculumPage = () => {
  const [session, setSession] = useState<Session | null>(null)
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
  }, [])

  if (!session) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background dark:bg-slate-950">
        <Lock className="h-12 w-12 text-cyan-500 mb-4" />
        <h1 className="text-2xl font-bold text-white mb-4">
          Please login to access the course curriculum
        </h1>
        <Link
          to="/login"
          className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white hover:from-cyan-600 hover:to-blue-600"
        >
          Go to Login
        </Link>
      </div>
    )
  }

  const lessons = [
    {
      chapter: "1. The Product",
      lessons: [
        { id: "1.1", title: "The Product We'll Be Building", chapter: "1. The Product", content: "" }
      ]
    },
    {
      chapter: "2. The Frontend - Getting Started",
      lessons: [
        { id: "2.1", title: "Introduction to the Frontend", chapter: "2. The Frontend - Getting Started", content: "" },
        { id: "2.2", title: "Bootstrap the Frontend With Gatsby V3", chapter: "2. The Frontend - Getting Started", content: "" },
        { id: "2.3", title: "Clean Up the Gatsby Default Starter", chapter: "2. The Frontend - Getting Started", content: "" },
        { id: "2.4", title: "Setup a Bitbucket Repository for the Frontend", chapter: "2. The Frontend - Getting Started", content: "" },
        { id: "2.5", title: "Use Netlify for the Frontend DevOps Framework", chapter: "2. The Frontend - Getting Started", content: "" },
        { id: "2.6", title: "Add a Primary Domain to Netlify via Namecheap", chapter: "2. The Frontend - Getting Started", content: "" }
      ]
    },
    {
      chapter: "3. The Frontend - Implementation",
      lessons: [
        { id: "3.1", title: "Running the Frontend via the Netlify CLI", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.2", title: "Adding SCSS and Bootstrap as the Styling Framework", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.3", title: "Creating React Components for Your Site's Layout", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.4", title: "Setup Intellisense for Sass Modules", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.5", title: "Creating an Interactive Code Editor Widget", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.6", title: "Some Styling for the Editors", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.7", title: "Adding a Custom Theme to the Editor", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.8", title: "Recipe: Creating a Production-Ready SVG", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.9", title: "Recipe: Adding API Helper Functions", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.10", title: "Recipe: Robust API Error Message Handling", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.11", title: "Recipe: Toast Helper Functions", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.12", title: "Styling Toasts to Match the Application Styles", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.13", title: "Setting Up an API GET Request", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.14", title: "Setting Up a Contract-Based API POST Request", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.15", title: "Adding Redux to the Application", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.16", title: "Completing the API Call Setup", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.17", title: "Creating a New Action to Set Code Returned by API", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.18", title: "Merging Arrays the TypeScript Way", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.19", title: "Adding Netlify Functions with TypeScript", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.20", title: "Building an App Page", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.21", title: "Add a Mailchimp Signup Form to the App Page", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.22", title: "Define a Custom Subscription Success Redirect URL", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.23", title: "Recipe: Handling URL Search Parameters Robustly with TypeScript", chapter: "3. The Frontend - Implementation", content: "" },
        { id: "3.24", title: "Review of the Frontend Implementation", chapter: "3. The Frontend - Implementation", content: "" }
      ]
    },
    {
      chapter: "4. The Backend - Getting Started",
      lessons: [
        { id: "4.1", title: "Introduction to the Backend", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.2", title: "Bootstrap the Backend With the .NET CLI", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.3", title: "Clean Up the Backend Boilerplate Code", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.4", title: "Setup a Bitbucket Repository for the Backend", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.5", title: "Create a Digital Ocean Droplet", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.6", title: "Use Bitbucket Pipelines for the DevOps Framework", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.7", title: "Adding an SSH Key in Bitbucket Pipelines", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.8", title: "Adding an Access Key in Bitbucket Pipelines", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.9", title: "Adding Scripts and Scaffolding on the Digital Ocean Droplet", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.10", title: "Create the ReduxPlate System Service", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.11", title: "Create the ReduxPlate Api folder", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.12", title: "Install .NET Runtime and SDK on the Droplet", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.13", title: "Create a Slack Bot and Enable Webhooks", chapter: "4. The Backend - Getting Started", content: "" },
        { id: "4.14", title: "Try Out the Continous Integration Pipeline", chapter: "4. The Backend - Getting Started", content: "" }
      ]
    },
    {
      chapter: "5. The Backend - Implementation",
      lessons: [
        { id: "5.1", title: "Writing the First Endpoint for the Custom API", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.2", title: "The First Full Stack Look: View the API Response from the Frontend", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.3", title: "Update Netlify DNS Records Through the Netlify UI", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.4", title: "Maintaining the API URL Environment Variable on Netlify", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.5", title: "Install and Configure NGINX", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.6", title: "Installing Certbot and Retrieving an HTTPS Certificate", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.7", title: "Test the API in a Production Environment", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.8", title: "Writing the Generate Endpoint", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.9", title: "Building a Code Generator Service Class", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.10", title: "Parsing the Code Editor's Source Code with the TypeScript compiler API", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.11", title: "Add the Microservice Build Process to the CI/CD Flow", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.12", title: "Microservice Review", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.13", title: "Implementing CodeGeneratorService", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.14", title: "Use CodeGeneratorService in CodeGeneratorController", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.15", title: "Add Specific Node.js Version to the PATH Variable", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.16", title: "Calling the new CodeGenerator endpoint from the Frontend", chapter: "5. The Backend - Implementation", content: "" },
        { id: "5.17", title: "Backend Recap", chapter: "5. The Backend - Implementation", content: "" }
      ]
    },
    {
      chapter: "6. Building a Staging (or Testing) Environment",
      lessons: [
        { id: "6.1", title: "The Essential need for a Testing Environment", chapter: "6. Building a Staging (or Testing) Environment", content: "" },
        { id: "6.2", title: "Staging CI / CD for the Frontend", chapter: "6. Building a Staging (or Testing) Environment", content: "" },
        { id: "6.3", title: "Create a Staging Branch for the Frontend", chapter: "6. Building a Staging (or Testing) Environment", content: "" },
        { id: "6.4", title: "Configure Netlify to Build According to the Staging Branch", chapter: "6. Building a Staging (or Testing) Environment", content: "" },
        { id: "6.5", title: "Configure Dynamic Environment Variables", chapter: "6. Building a Staging (or Testing) Environment", content: "" },
        { id: "6.6", title: "Recap", chapter: "6. Building a Staging (or Testing) Environment", content: "" },
        { id: "6.7", title: "Staging CI / CD for the Backend", chapter: "6. Building a Staging (or Testing) Environment", content: "" },
        { id: "6.8", title: "Create a Staging Branch for the Backend", chapter: "6. Building a Staging (or Testing) Environment", content: "" },
        { id: "6.9", title: "Adding Staging API URL to Netlify", chapter: "6. Building a Staging (or Testing) Environment", content: "" },
        { id: "6.10", title: "Adding a Staging API Postbuild script", chapter: "6. Building a Staging (or Testing) Environment", content: "" },
        { id: "6.11", title: "Staging Environment Recap", chapter: "6. Building a Staging (or Testing) Environment", content: "" }
      ]
    },
    {
      chapter: "7. Building Full Stack Testing Suite",
      lessons: [
        { id: "7.1", title: "Frontend - Installing Cypress", chapter: "7. Building Full Stack Testing Suite", content: "" },
        { id: "7.2", title: "Backend - Installing xUnit", chapter: "7. Building Full Stack Testing Suite", content: "" }
      ]
    },
    {
      chapter: "8. The Frontend - Advanced Implementation",
      lessons: [
        { id: "8.1", title: "Building a Warning", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.2", title: "Building the App Page", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.3", title: "Build a Download Button", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.4", title: "Adding Code Sync Functionality", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.5", title: "Adding Project Functionality", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.6", title: "Adding New Slice of State Generator", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.7", title: "Adding File Add Functionality", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.8", title: "Extending the Code Generator API Contract", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.9", title: "Leverage Builder Pattern for CodeGeneratorService", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.10", title: "Add Netlify Identity as the Authentication and Authorization Platform", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.11", title: "Adding Netlify State to Redux", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.12", title: "Use Stripe for the First Payments Platform", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.13", title: "Use Netlify Serverless Functions", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.14", title: "Set Up FaunaDB for User Management", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.15", title: "Building a Pricing Section", chapter: "8. The Frontend - Advanced Implementation", content: "" },
        { id: "8.16", title: "Dynamically Setting Animations", chapter: "8. The Frontend - Advanced Implementation", content: "" }
      ]
    },
    {
      chapter: "9. The Backend - Advanced Implementation",
      lessons: [
        { id: "9.1", title: "Further Options for the Code Generate endpoint", chapter: "9. The Backend - Advanced Implementation", content: "" },
        { id: "9.2", title: "Building the ReduxDoc Endpoint", chapter: "9. The Backend - Advanced Implementation", content: "" }
      ]
    },
    {
      chapter: "10. Recipe: Additional Payment Platform Integrations",
      lessons: [
        { id: "10.1", title: "Introduction", chapter: "10. Recipe: Additional Payment Platform Integrations", content: "" }
      ]
    },
    {
      chapter: "11. Recipe: Add Application-Wide Logging",
      lessons: [
        { id: "11.1", title: "Application-Wide Logging", chapter: "11. Recipe: Add Application-Wide Logging", content: "" }
      ]
    },
    {
      chapter: "12. Recipe: Adding Custom Emails",
      lessons: [
        { id: "12.1", title: "Custom Emails", chapter: "12. Recipe: Adding Custom Emails", content: "" }
      ]
    },
    {
      chapter: "13. Recipe: Adding Automation",
      lessons: [
        { id: "13.1", title: "Adding Automation", chapter: "13. Recipe: Adding Automation", content: "" }
      ]
    },
    {
      chapter: "14. Recipe: SEO Optimization",
      lessons: [
        { id: "14.1", title: "Two Final SEO Quick Wins", chapter: "14. Recipe: SEO Optimization", content: "" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background dark:bg-slate-950">
      <div className="p-4">
        <Link to="/" className="text-2xl font-semibold dark:text-white font-gentium">SaaS from Scratch™</Link>
      </div>
      <div className="flex h-screen">
        {/* Left sidebar - Course navigation */}
        <div className="w-1/3 border-r border-gray-800 overflow-y-auto p-4">
          <h2 className="text-xl font-bold text-white mb-6">Curriculum</h2>
          <div className="space-y-6">
            {lessons.map((chapter) => (
              <div key={chapter.chapter}>
                <h3 className="text-lg font-semibold text-cyan-500 mb-2">
                  {chapter.chapter}
                </h3>
                <ul className="space-y-2">
                  {chapter.lessons.map((lesson) => (
                    <li 
                      key={lesson.id}
                      className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                        selectedLesson?.id === lesson.id
                          ? 'bg-cyan-500/20 text-white'
                          : 'text-gray-400 hover:bg-gray-800'
                      }`}
                      onClick={() => setSelectedLesson(lesson)}
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span>{lesson.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Content viewer */}
        <div className="flex-1 overflow-y-auto">
          {selectedLesson ? (
            <div className="h-full">
              {/* Video player section */}
              <div className="h-1/2 bg-gray-900 p-4">
                {selectedLesson.videoUrl ? (
                  <video
                    className="h-full w-full"
                    controls
                    src={selectedLesson.videoUrl}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-gray-500">
                    Video coming soon
                  </div>
                )}
              </div>
              
              {/* Interactive editor section */}
              <div className="h-1/2 p-4">
                <div className="h-full rounded-lg border border-gray-800 bg-gray-900 p-4">
                  {/* Add your code editor component here */}
                  <div className="text-gray-400">
                    Interactive code editor will be displayed here
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-gray-500">
              Select a lesson to begin
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CurriculumPage 