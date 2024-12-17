'use client'
import { Star } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className=" relative w-full bg-[#FFE5B4] flex items-center px-20 py-5 lg:py-10 overflow-x-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col px-2 gap-6 max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Bring dreams into reality made simple like never before
          </h1>
          <p className="text-xl text-muted-foreground">
            Welcome to the future of technology! Whether you&apos;re just &apos;starting or aiming to refine your skills&apos;,
            explore cutting-edge innovations through hands-on courses, 
            expert-led tutorials, and a thriving community to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg">
              Get in Touch
            </Button>
            {/* <Button size="lg" variant="outline" className="text-lg">
              Explore courses
            </Button> */}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground underline">639 reviews</span>
            </div>
            {/* <p className="font-medium">Trusted by 500 players</p> */}
          </div>
        </div>
        {/* <div className="relative hidden lg:block"> */}
          {/* Circular image layout */}
          <div className="absolute w-[600px] h-[600px] animate-slow-spin">
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/placeholder.svg"
                alt="Handpan player"
                width={200}
                height={200}
                className="rounded-full object-cover w-32 h-32 border-4 border-background"
              />
            </div>
            <div className="absolute top-1/4 right-0 translate-x-1/2">
              <Image
                src="/placeholder.svg"
                alt="Handpan player"
                width={200}
                height={200}
                className="rounded-full object-cover w-32 h-32 border-4 border-background"
              />
            </div>
            <div className="absolute top-3/4 right-0 translate-x-1/2">
              <Image
                src="/placeholder.svg"
                alt="Handpan player"
                width={200}
                height={200}
                className="rounded-full object-cover w-32 h-32 border-4 border-background"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <Image
                src="/placeholder.svg"
                alt="Handpan player"
                width={200}
                height={200}
                className="rounded-full object-cover w-32 h-32 border-4 border-background"
              />
            </div>
            <div className="absolute top-3/4 left-0 -translate-x-1/2">
              <Image
                src="/placeholder.svg"
                alt="Handpan player"
                width={200}
                height={200}
                className="rounded-full object-cover w-32 h-32 border-4 border-background"
              />
            </div>
            <div className="absolute top-1/4 left-0 -translate-x-1/2">
              <Image
                src="/placeholder.svg"
                alt="Handpan player"
                width={200}
                height={200}
                className="rounded-full object-cover w-32 h-32 border-4 border-background"
              />
            </div>
          </div>
          {/* Center image 
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/placeholder.svg"
              alt="Handpan"
              width={300}
              height={300}
              className="rounded-full object-cover w-48 h-48 border-8 border-background"
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}

