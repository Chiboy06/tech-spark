import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import InfoSection from '@/components/info-section'
import { NavBar } from '@/components/nav-bar'
import { NotStuffySchoolSection } from '@/components/not-stuffy-school-section'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        
        <HeroSection />
        <InfoSection />
        <NotStuffySchoolSection/>
        <FAQSection/>
      </main>
      <Footer/>
    </>
  )
}

