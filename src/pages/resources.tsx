import React from 'react'
import { Link } from 'gatsby'
import { Card, CardHeader, CardTitle, CardContent } from '../components/utils/Card'
import { ExternalLink, Book, Code } from 'lucide-react'

const ResourcesPage = () => {
  const resources = [
    {
      title: "Full Stack SaaS Product Cookbook",
      description: "The original guide that inspired this course. A comprehensive collection of recipes for building modern SaaS applications.",
      url: "https://github.com/Full-Stack-SaaS-Product-Cookbook",
      icon: <Book className="h-6 w-6 text-cyan-500" />
    },
    {
      title: "Chris Frewin's Blog",
      description: "Technical articles, SaaS insights, and development tips from the course instructor.",
      url: "https://chrisfrew.in",
      icon: <Code className="h-6 w-6 text-cyan-500" />
    },
    {
      title: "The Good Parts of AWS",
      description: "A practical guide to AWS cloud services most useful for SaaS founders.",
      url: "https://gumroad.com/l/aws-good-parts",
      icon: <Code className="h-6 w-6 text-cyan-500" />
    },
    {
      title: "SaaS Boilerplate",
      description: "Production-ready starter kit for rapid SaaS development with Next.js.",
      url: "https://github.com/boxyhq/saas-starter-kit",
      icon: <Code className="h-6 w-6 text-cyan-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-background dark:bg-slate-950">
      <nav className="fixed top-0 z-30 flex h-16 w-full items-center justify-center border-b dark:bg-slate-950 dark:border-b-slate-500 pl-4 pr-3">
        <div className="flex w-full items-center justify-between">
          <Link to="/" className="text-2xl font-semibold dark:text-white font-gentium">
            SaaS from Scratch™
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-white mb-8">Resources</h1>
        <p className="text-xl text-gray-400 mb-12">
          A curated collection of resources to help you on your SaaS journey.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource, index) => (
            <Card key={index} className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {resource.icon}
                  <CardTitle className="text-xl text-white">{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400"
                >
                  Learn more <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

export default ResourcesPage
