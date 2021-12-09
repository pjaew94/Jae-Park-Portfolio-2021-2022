import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import React from 'react'
import { fadeInVariant } from '../animation'

import ExternalLink from '../components/Links/ExternalLink'
import InternalLink from '../components/Links/InternalLink'

import Text from '../components/Text'
import SlideDownText from '../components/Text/SlideDownText'



const Home: NextPage = () => {
  return (
    <div className='flex flex-col justify-between w-screen min-h-screen overflow-hidden px-5 py-5'>
      {/* Top Parts of Page */}
      <div className='flex flex-col md:flex-row-reverse md:w-full overflow-hidden  md:justify-between'>
          <HomeHeader />
          <HomeDescription />
      </div>

      {/* Bottom Parts of Page */}
      <div className='flex justify-between overflow-hidden items-end  w-full mt-10'>
        <HomeLinks />
        <div className='flex flex-col'>
          <InternalLink text='Projects' route='/projects' dotColor='bg-black' customStyles='lg:mb-2'/>
          <InternalLink text='Resume' route='/resume' dotColor='bg-gray-500' customStyles='lg:mb-2'/>
          <InternalLink text='Contact' route='/contact' dotColor='bg-gray-400' />

        </div>
      </div>
    </div>
  )
}

const HomeHeader:React.FC = () => {
  return <div className='flex flex-col mb-10 items-end'>
      <SlideDownText type='h4'>Jae Park</SlideDownText>
      <SlideDownText type='h4'>Full Stack Web Developer</SlideDownText>
      <SlideDownText type='h4'>Portfolio &#8212; 2021, 2022</SlideDownText>
  </div>
}

const HomeDescription: React.FC = () => {
  return <motion.div className='w-[293px] text-justify break-words 2xl:w-[350px]' variants={fadeInVariant} initial='initial' animate='animate' exit='exit'>
      <Text type='p' customStyles='mb-5'>Located in Philadelphia, I&apos;ve dedicated the last two years learning web development. Through the journey, I was able to design and produce variety of web applications that made huge impacts, one including raising money for a non-profit organization.</Text>
      <Text type='p' customStyles='mb-5'>I&apos;m always fascinated by the vast amount of information in the tech field and always inspired to learn more. Whether it be the latest frameworks, different types of databases, or new methods, I&apos;m constantly eager to learn whatever I can to become a better developer day by day.</Text>
      <Text type='p'>To collaborate with me on a project or to hire me, please feel free to shoot an email or reach out on any of the platforms below.</Text>
  </motion.div>
}

const HomeLinks:React.FC = () => {
  return <div className='flex flex-col'>
      <ExternalLink text='GitHub' href='https://github.com/pjaew94' customStyles='lg:mb-2' />
      <ExternalLink  text='LinkedIn' href='https://www.linkedin.com/in/jae-park-dev/' />
  </div>
}




export default Home
