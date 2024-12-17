import { CheckCircle } from 'lucide-react'
import Image from 'next/image';

const features = [
    "Collaborative hackathons with real-world challenges",
    "Interactive workshops with industry experts",
    "Hands-on experience with cutting-edge tools and technologies",
    "A vibrant community of innovators and creators",
    "Opportunities to showcase your work and build a portfolio",
  ];

export function NotStuffySchoolSection() {
  return (
    <section id="" className="container py-20 px-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">This isn&apos;t a stuffy online school</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We&apos;ve created a vibrant, interactive learning environment that makes mastering the handpan enjoyable and engaging.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="text-green-500 h-5 w-5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
            <div>
                <Image
                src="/hero/medical-innovators.jpg"
                height={400}
                width={400}
                className='w-[600px] lg:h-[600px] rounded-3xl shadow-xl'
                alt='intro'
                />
            </div>
          {/* <video
            className="rounded-lg shadow-lg"
            poster="/placeholder.svg"
            controls
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>
    </section>
  )
}

