'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Globe, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DialogTitle } from '@radix-ui/react-dialog'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center py-2 px-3 gap-2">
          {/* <Image
            src="/placeholder.svg"
            alt="Master the Handpan"
            width={40}
            height={40}
            className="h-10 w-auto"
          /> */}
          <span className="font-bold text-black">Tech <span className='text-orange-400'>Spark</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium">
            About
          </Link>
          <Link href="#faq" className="text-sm font-medium">
            FAQ&apos;s
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
              Tools
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DropdownMenuItem>Tuner</DropdownMenuItem>
              <DropdownMenuItem>Scale finder</DropdownMenuItem>
              <DropdownMenuItem>Resources</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost">Log in</Button>
          <Button>Get in Touch</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link href="#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="#faq" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                FAQ&apos;s
              </Link>
              <button className="flex items-center justify-between text-lg font-medium">
                Tools
                <ChevronDown className="h-4 w-4" />
              </button>
              <Button className="w-full">Start learning</Button>
              <Button variant="outline" className="w-full">
                Get in Touch
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

