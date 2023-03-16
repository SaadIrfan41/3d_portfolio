import React from 'react'
import { motion } from 'framer-motion'
const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    image: '/starbucks.png',
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    image: '/tesla.png',
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    image: '/shopify.png',
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    image: '/meta.png',
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]
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
const timelineFadeIn = (direction: string) => {
  return {
    initial: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      // y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      // y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
        ease: 'easeOut',
      },
    },
  }
}

const Experience = () => {
  return (
    <div
      id='experience'
      className='max-w-7xl mx-auto px-8 md:px-16  py-10 mt-24 overflow-hidden'
    >
      <motion.div
        variants={textVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ amount: 0.25 }}
        className='text-center'
      >
        <p className='sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider'>
          What I have done so far
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Work Experience.
        </h2>
      </motion.div>

      <div className=' relative before:content-[""] before:w-1 before:absolute    before:left-0 xl:before:left-[50%]   before:h-full before:bg-white mt-20'>
        {experiences.map(
          ({ company_name, date, image, points, title }, index) => (
            <div key={index} className=' min-h-96 grid grid-cols-12 py-8'>
              <motion.img
                whileInView={{
                  scale: [0, 1],
                  transition: {
                    type: 'spring',
                    duration: 1,
                  },
                }}
                viewport={{ amount: 0.25 }}
                src={image}
                className=' absolute h-14 w-14 rounded-full ring-2 ring-white order-2 left-0 xl:left-[50%] z-10 bg-black p-1 -ml-6'
                alt=''
              />
              <motion.div
                variants={timelineFadeIn(index % 2 == 0 ? 'right' : 'left')}
                initial='initial'
                whileInView='animate'
                viewport={{ amount: 0.25 }}
                className={`xl:max-w-md  bg-[#1d1836] border-b-2 border-white rounded-md p-6   ${
                  index % 2 == 0
                    ? 'order-1  xl:col-span-5 col-span-12 ml-14 xl:ml-auto'
                    : 'order-3 xl:col-span-5 col-span-12 ml-14 xl:ml-0 '
                }`}
              >
                <div>
                  <h3 className='text-white text-[24px] font-bold'>{title}</h3>
                  <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                  >
                    {company_name}
                  </p>
                </div>

                <ul className='mt-5 list-disc ml-5 space-y-2'>
                  {points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.p
                variants={timelineFadeIn(index % 2 == 0 ? 'right' : 'left')}
                initial='initial'
                whileInView='animate'
                viewport={{ amount: 0.25 }}
                className={` hidden xl:block  mt-4 text-[14px] font-bold text-[#aaa6c3] uppercase tracking-wider ${
                  index % 2 == 0
                    ? 'order-3 col-span-5 ml-[35%]'
                    : 'order-1 col-span-7 ml-[50%] '
                }`}
              >
                {date}
              </motion.p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Experience
