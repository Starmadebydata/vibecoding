"use client";

import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ToolsShowcase from '@/components/CodeEditor'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import Blog from '@/components/Blog'
import Community from '@/components/Community'
import Footer from '@/components/Footer'

export default function LegacyHomePage() {
  return (
    <Layout>
      <Hero />
      <Features />
      <ToolsShowcase />
      <ProjectsShowcase />
      <Blog />
      <Community />
      <Footer />
    </Layout>
  )
}
