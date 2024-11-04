"use client"

import PageTransition from '@/components/PageTransition'
import Header from '@/components/header'
import ExpandableSections from '@/components/expandable-sections'
import Footer from '@/components/footer'
import About from '@/components/about'
import Contact from '@/components/contact'
import Team from '@/components/team'

const sections = [
  {
    title: 'Hardware',
    items: [
      { title: 'SPCT', description: 'Description for SPCT', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/spct' },
      { title: 'Alarm Cock', description: 'Description for Alarm Cock', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/alarm-cock' },
      { title: 'Butt Bowls', description: 'Description for Butt Bowls', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/butt-bowls' },
    ],
  },
  {
    title: 'Apps',
    items: [
      { title: 'DFTM', description: 'Doorframe Timemachine - DFTM - is a tool for parents to track the growth of their children, giving them an easy way to keep the memories of these changing times.', image: '/placeholder.svg?height=200&width=300', link: 'https://www.doorframetimemachine.com' },
      { title: 'Kost', description: 'Description for Kost', image: '/placeholder.svg?height=200&width=300', link: 'https://kost-landing.vercel.app/' },
      { title: 'Daily Profit', description: 'Description for Daily Profit', image: '/placeholder.svg?height=200&width=300', link: 'https://dp-landing-hazel.vercel.app/' },
      { title: 'Supplia', description: 'Description for Supplia', image: '/placeholder.svg?height=200&width=300', link: 'https://supplia-landing.vercel.app/' },
      { title: 'Energy', description: 'Description for Energy', image: '/placeholder.svg?height=200&width=300', link: 'https://energy-landing-alpha.vercel.app/' },
    ],
  },
  {
    title: 'Toys',
    items: [
      { title: 'Example', description: 'Description for Example', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/build-a-bitch' },
    ],
  },
  {
    title: 'World Changing',
    items: [
      { title: 'Starlink-for-All', description: 'Description for Starlink-for-All', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/starlink-for-all' },
      { title: 'Lentil', description: 'Description for Lentil', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/lentil' },
      { title: 'Last Step', description: 'Description for Last Step', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/last-step' },
      { title: 'Mel & Monaco', description: 'Description for Mel & Monaco', image: '/placeholder.svg?height=200&width=300', link: 'https://example.com/mel-and-monaco' },
    ],
  },
]

export default function Home() {
  return (
    <PageTransition>
      <main className="bg-primary-brown-dark min-h-screen">
        <Header />
        <div id="projects" className="relative py-20 bg-primary-brown-light/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <ExpandableSections sections={sections} />
          </div>
        </div>
        <About />
        <Team />
        <Contact />
        <Footer />
      </main>
    </PageTransition>
  )
}
