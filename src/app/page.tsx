'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ComputerCanvas from './components/ComputerModel'
import { motion } from 'framer-motion'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import StarsCanvas from './components/Starts'
import Starts2 from './components/Starts2'
import Technologies from './components/Technologies'
import Work from './components/Work'
const HomePage = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className='bg-[#050816] text-white'>
      <div className='  bg-[url("/herobg.png")] bg-cover bg-no-repeat bg-center relative '>
        <div
          className={`  px-6  py-5 fixed top-0 w-full z-50  ${
            scrolled ? 'bg-[#050816]' : 'bg-transparent '
          }`}
        >
          <nav
            className={` flex items-center justify-between max-w-7xl mx-auto `}
          >
            <div className='flex items-center  font-extrabold'>
              <img
                src='/logo.png'
                alt='LOgo'
                className=' shrink-0 object-cover w-36 h-16  '
              />
              <h1 className='hidden lg:block text-white text-2xl'>
                Saad Irfan Mughal
              </h1>
            </div>

            <div className='flex gap-10 text-lg text-[#aaa6c3] font-medium'>
              <a href='#about'>About</a>
              <a href='#experience'>Work</a>
              <a href='#contact'>Contact</a>
            </div>
          </nav>
        </div>
        <div className=' relative h-screen'>
          <div className='absolute inset-0 max-w-7xl mt-40 px-10 mx-auto flex'>
            <div className='flex flex-col max-w-fit  items-center '>
              <div className='w-5 h-5  rounded-full bg-violet-600 ' />
              <div className='w-1 h-96 bg-gradient-to-b from-[#804dee]' />
            </div>
            <div>
              <h1 className='font-black text-white lg:text-[60px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
                Hi, I&apos;m <span className='text-[#915eff]'>Saad</span>
              </h1>
              <p className='text-[#dfd9ff] font-medium lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>
                I develop 3d visuals, user <br /> interfaces and Full Stack
                Applications <br />
                for the Modern Web
              </p>
            </div>
          </div>
          <ComputerCanvas />
          <div className='absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center'>
            <a href='#about'>
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start p-2'>
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className='w-3 h-3 rounded-full bg-[#aaa6c3] mb-1'
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <About />
      <Experience />
      <Technologies />
      <Work />
      <div className='z-0 relative'>
        <Contact />
        {/* <Starts2 /> */}
        <StarsCanvas />
      </div>
    </div>
  )
}

export default HomePage
