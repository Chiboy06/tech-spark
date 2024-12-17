'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { CircleCheck } from 'lucide-react'

function InfoSection() {
  return (
    <div>
        <section id='about' className="py-14 px-10 lg:px-20 w-full flex flex-col lg:flex-row">
            <div className='lg:w-2/4 px-16 items-center justify-center flex flex-col'>
                <h2 className="text-4xl font-semibold font-mono">Discover the Future of Innovation</h2>
                <div className='py-20 text-xl flex flex-col gap-y-5'>
                    <p className='font-normal font-sans text-gray-500'>
                    Are you ready to break through the noise and explore the latest in tech? 
                    From emerging tools to game-changing concepts, our club is your gateway to mastering cutting-edge innovations.
                    Whether you&apos;re a beginner or a seasoned pro, our expertly crafted resources, interactive workshops, 
                    and vibrant community will guide you from where you are to where you want to be.
                    </p>
                    <div className='font-light text-lg text-gray-500'>
                    <Button className='p-5 rounded-3xl bg-orange-500 text-semibold text-white'>Join us today and start exploring</Button> —your journey to the future begins now.
                    </div>
                </div>
            </div>
            {/* Video section content would go here */}
            <div>
            <Image
            src="/hero/k-12-tech.jpeg"
            height={400}
            width={400}
            className='w-[600px] lg:h-[600px] rounded-3xl shadow-xl'
            alt='intro'
            />
            </div>
        </section>

        <section className="py-14 px-10 lg:px-20 w-full flex">
            <div className='w-full bg-orange-100 py-16 rounded-2xl shadow-xl px-16 space-y-5 gap-5 items-center justify-center flex flex-col lg:flex-row gap-x-3'>
                <div className=' px-2 lg:px-5'>
                    <h2 className="text-xl font-semibold font-mono">Learn Innovation by Doing Innovation</h2>
                    <p className='font-medium py-3 font-sans text-gray-600'>Sounds simple, right? Dive in with a no-nonsense, hands-on approach to mastering the latest in tech.</p>
                </div>
                <div className=' px-2 lg:px-5'>
                    <h2 className="text-xl font-semibold font-mono">Learn Innovation by Doing Innovation</h2>
                    <p className='font-medium py-3 font-sans text-gray-600'>Sounds simple, right? Dive in with a no-nonsense, hands-on approach to mastering the latest in tech.</p>
                </div>
                <div className=' px-2 lg:px-5'>
                    <h2 className="text-xl font-semibold font-mono">Learn Innovation by Doing Innovation</h2>
                    <p className='font-medium py-3 font-sans text-gray-600'>Sounds simple, right? Dive in with a no-nonsense, hands-on approach to mastering the latest in tech.</p>
                </div>
                <div className=' px-2 lg:px-5'>
                    <h2 className="text-xl font-semibold font-mono">Learn Innovation by Doing Innovation</h2>
                    <p className='font-medium py-3 font-sans text-gray-600'>Sounds simple, right? Dive in with a no-nonsense, hands-on approach to mastering the latest in tech.</p>
                </div>
            </div>
        </section>

        <section className="py-14 px-5 lg:px-20 w-full flex flex-col lg:flex-row">
            <div className='lg:w-2/4 px-16 items-center overflow-hidden'>
                <h1 className='my-4 text-blue-500 justify-start font-mono font-semibold text-lg'>Learn fast</h1>
                <div className=' justify-center flex  flex-col '>
                    <h2 className="text-4xl font-semibold font-mono">Everything You Need to Master Innovation, All in One Place</h2>
                    <div className='py-20 text-xl flex flex-col gap-y-3 text-gray-500'>
                        <p className='font-medium font-sans text-gray-500'>
                            Whether you&apos;re just starting out or already an experienced innovator, our ever-expanding library of resources is designed to help you grow. Led by industry experts
                            and top innovators, our programs cover everything from the basics of creative problem-solving to advanced innovation strategies.
                        </p>
                        <div className='flex flex-col space-y-3 gap-y-2 pt-4'>
                            <p className='text-lg font-sans flex '><span><CircleCheck color="#00ff40" className='text-white mx-3' /></span>For all levels: from newcomers to seasoned innovators</p>
                            <p className='text-lg font-sans flex '><span><CircleCheck color="#00ff40" className='text-white mx-3' /></span>No need to be an expert: Our programs are designed to be accessible and engaging</p>
                            <p className='text-lg font-sans flex '><span><CircleCheck color="#00ff40" className='text-white mx-3' /></span>In-depth innovation training and challenges for every skill level</p>
                        </div>
                        <div className="flex my-3 flex-col sm:flex-row gap-4">
                            <Button size="lg" className="text-lg">
                            Explore the Community
                            </Button>
                            {/* <Button size="lg" variant="outline" className="text-lg">
                            Explore courses
                            </Button> */}
                        </div>
                    </div>
                </div>
                </div>
                {/* Video section content would go here */}
                <div>
                    <Image
                    src="/hero/k-12-tech.jpeg"
                    height={400}
                    width={400}
                    className='w-[600px] lg:h-[600px] rounded-3xl shadow-xl'
                    alt='intro'
                    />
                </div>
        </section>

        <section className="py-14 px-5 lg:px-20 w-full flex flex-col lg:flex-row">
            <div className='lg:w-2/4 px-16 items-center overflow-hidden'>
                <h1 className='my-4 text-blue-500 justify-start font-mono font-semibold text-lg'>Connect</h1>
                <div className=' justify-center flex  flex-col '>
                    <h2 className="text-4xl font-semibold font-mono">Be Part of Our Innovation Family, Where Everyone&apos;s Got Your Back</h2>
                    <div className='py-20 text-xl flex flex-col gap-y-3 text-gray-500'>
                        <p className='font-normal font-sans text-gray-500'>
                            The Innovation Club is more than just events and training. It&apos;s a thriving community built on mutual support, where members collaborate, share ideas, and inspire each other. 
                            Whether you&apos;re looking for feedback on a project or need a spark of creativity, 
                            you&apos;ve come to the right place. Welcome to your innovation home.
                        </p>
                        <div className='flex flex-col space-y-3 gap-y-2 pt-4'>
                            <p className='text-lg font-sans flex '><CircleCheck color="#00ff40" className='text-white mx-3' />Private and Supportive Community</p>
                            <p className='text-lg font-sans flex '><CircleCheck color="#00ff40" className='text-white mx-3' />Share, Collaborate, and Grow Together</p>
                            <p className='text-lg font-sans flex '><CircleCheck color="#00ff40" className='text-white mx-3' />From Anywhere, Yet Never Alone</p>
                        </div>
                        <div className="flex my-3 flex-col sm:flex-row gap-4">
                            <Button size="lg" className="text-lg">
                            Join the Community
                            </Button>
                            {/* <Button size="lg" variant="outline" className="text-lg">
                            Explore courses
                            </Button> */}
                        </div>
                    </div>
                    
                </div>
                </div>
                {/* Video section content would go here */}
                <div>
                <Image
                src="/hero/k-12-tech.jpeg"
                height={400}
                width={400}
                className='w-[600px] lg:h-[600px] rounded-3xl shadow-xl'
                alt='intro'
                />
            </div>
        </section>

    </div>
  )
}

export default InfoSection