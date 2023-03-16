'use client'
import React from 'react'
import { motion } from 'framer-motion'

import Tilt from 'react-parallax-tilt'

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'text-blue-500',
      },
      {
        name: 'mongodb',
        color: 'text-green-500',
      },
      {
        name: 'tailwind',
        color: 'text-red-500',
      },
    ],
    image: '/carrent.png',
    source_code_link: 'https://github.com/SaadIrfan41?tab=repositories',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'text-blue-500',
      },
      {
        name: 'restapi',
        color: 'text-green-500',
      },
      {
        name: 'scss',
        color: 'text-red-500',
      },
    ],
    image: '/jobit.png',
    source_code_link: 'https://github.com/SaadIrfan41?tab=repositories',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'text-blue-500',
      },
      {
        name: 'supabase',
        color: 'text-green-500',
      },
      {
        name: 'css',
        color: 'text-red-500',
      },
    ],
    image: '/tripguide.png',
    source_code_link: 'https://github.com/SaadIrfan41?tab=repositories',
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

const Work = () => {
  return (
    <div className='max-w-7xl mx-auto px-16 py-10 mt-48 ' id='work'>
      <span className='mt-10'>&nbsp;</span>
      <>
        <motion.div
          variants={textVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ amount: 0.25 }}
        >
          <p className='sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider'>
            My work
          </p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            Projects.
          </h2>
        </motion.div>

        <motion.p
          variants={textVariantsFadeIn}
          initial='initial'
          whileInView='animate'
          viewport={{ amount: 0.25 }}
          className='mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>

        <motion.div
          className='mt-20 flex gap-9 flex-wrap justify-center  '
          variants={boxVariants}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, amount: 0.25 }}
        >
          {projects.map(
            ({ image, source_code_link, name, description, tags }, index) => (
              <motion.div key={index} variants={boxVariants} className=''>
                <Tilt
                  scale={1.2}
                  className='bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full'
                >
                  <div className='relative w-full h-[230px]'>
                    <img
                      src={image}
                      alt='project_image'
                      className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                      <div
                        onClick={() => window.open(source_code_link, '_blank')}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                      >
                        <img
                          src={'/github.png'}
                          alt='source code'
                          className='w-1/2 h-1/2 object-contain'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>
                      {description}
                    </p>
                  </div>

                  <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                      <p
                        key={`${name}-${tag.name}`}
                        className={`text-[14px] ${tag.color}`}
                      >
                        #{tag.name}
                      </p>
                    ))}
                  </div>
                </Tilt>
              </motion.div>
            )
          )}
        </motion.div>
      </>
    </div>
  )
}

export default Work
