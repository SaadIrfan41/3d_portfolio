'use client'
import React from 'react'
import { motion } from 'framer-motion'
//@ts-ignore
import Tilt from 'react-tilt'
import { fadeIn, textVariant } from '@/utils/animations'

const services = [
  {
    title: 'Web Developer',
    image: '/web.png',
  },
  {
    title: 'React Native Developer',
    image: '/mobile.png',
  },
  {
    title: 'Backend Developer',
    image: '/backend.png',
  },
  {
    title: 'Content Creator',
    image: '/creator.png',
  },
]

const text = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
    },
  },
}

const boxVariants = {
  initial: { opacity: 0, x: '-100%' },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.5,
      ease: 'easeInOut',
      duration: 0.75,
      type: 'spring',
    },
  },
}

const textVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
    },
  },
}
const textVariantsFadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      type: 'spring',
      duration: 1,
    },
  },
}

const About = () => {
  return (
    <div id='about' className='max-w-7xl mx-auto px-16 py-10 mt-24'>
      {' '}
      <>
        <motion.div
          variants={textVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ amount: 0.25 }}
        >
          <p className='sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider'>
            Introduction
          </p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            Overview.
          </h2>
        </motion.div>

        <motion.p
          variants={textVariantsFadeIn}
          initial='initial'
          whileInView='animate'
          viewport={{ amount: 0.25 }}
          className='mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'
        >
          I&apos;m a skilled software developer with experience in TypeScript
          and JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I&apos;m a quick learner and collaborate closely with
          clients to create efficient, scalable, and user-friendly solutions
          that solve real-world problems. Let&apos;s work together to bring your
          ideas to life!
        </motion.p>

        <motion.div
          className='mt-20 flex gap-10 flex-wrap justify-center '
          variants={boxVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, amount: 0.25 }}
        >
          {services.map(({ image, title }, index) => (
            <motion.div
              key={index}
              variants={boxVariants}
              className='max-w-[248px]'
            >
              <Tilt className='xs:w-[250px] w-full'>
                <motion.div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                  <div className='bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                    <img
                      src={image}
                      alt='web-development'
                      className='w-16 h-16 object-contain'
                    />

                    <h3 className='text-white text-[20px] font-bold text-center'>
                      {title}
                    </h3>
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </>
    </div>
  )
}

export default About
