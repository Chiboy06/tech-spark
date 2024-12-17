'use client'
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-100">
  <div className="container py-12 px-10">
    <div className="grid gap-8 lg:grid-cols-4">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">About Us</h3>
        <p className="text-sm text-muted-foreground">
          The Innovation Club is dedicated to fostering a culture of creativity, collaboration, and cutting-edge technology. We empower individuals to explore, learn, and grow through hackathons, workshops, and a vibrant community.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="space-y-2">
          <li><Link href="/events" className="text-sm hover:underline">Upcoming Events</Link></li>
          <li><Link href="/training" className="text-sm hover:underline">Training & Workshops</Link></li>
          <li><Link href="/projects" className="text-sm hover:underline">Innovation Projects</Link></li>
          <li><Link href="/contact" className="text-sm hover:underline">Contact Us</Link></li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Legal</h3>
        <ul className="space-y-2">
          <li><Link href="/terms" className="text-sm hover:underline">Terms of Service</Link></li>
          <li><Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link></li>
          <li><Link href="/cookies" className="text-sm hover:underline">Cookie Policy</Link></li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Stay Connected</h3>
        <p className="text-sm text-muted-foreground">Subscribe to our newsletter to receive updates on upcoming events, innovation tips, and more.</p>
        <form className="flex gap-2">
          <Input type="email" placeholder="Enter your email" className="max-w-[200px]" />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground">© 2023 Innovation Club. All rights reserved.</p>
      <div className="flex gap-4">
        <Button variant="ghost" size="icon" aria-label="Facebook">
          <Facebook className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Twitter">
          <Twitter className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </Button>
      </div>
    </div>
  </div>
</footer>

  )
}

