import React from 'react'
import BallsModel from './BallsModel'
const technologies = [
  {
    name: 'HTML 5',
    image: '/html.png',
  },
  {
    name: 'CSS 3',
    image: '/css.png',
  },
  {
    name: 'JavaScript',
    image: '/javascript.png',
  },
  {
    name: 'TypeScript',
    image: '/typescript.png',
  },
  {
    name: 'React JS',
    image: '/reactjs.png',
  },
  {
    name: 'Redux Toolkit',
    image: '/redux.png',
  },
  {
    name: 'Tailwind CSS',
    image: '/tailwind.png',
  },
  {
    name: 'Node JS',
    image: '/nodejs.png',
  },
  {
    name: 'MongoDB',
    image: '/mongodb.png',
  },
  {
    name: 'Three JS',
    image: '/threejs.svg',
  },
  {
    name: 'git',
    image: '/git.png',
  },
  {
    name: 'figma',
    image: '/figma.png',
  },
  {
    name: 'docker',
    image: '/docker.png',
  },
]
const Technologies = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 max-w-7xl mx-auto mt-32'>
      <span className='mt-5' id='technologies'>
        &nbsp;
      </span>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallsModel image={technology.image} />
        </div>
      ))}
    </div>
  )
}

export default Technologies
