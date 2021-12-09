import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState } from "react";
import InternalLink from "../../components/Links/InternalLink";
import SlideDownText from "../../components/Text/SlideDownText";
import { IProjectDisplayComponent } from "../../types";
import Text from "../../components/Text";
import SlideUpText from "../../components/Text/SlideUpText";
import { projectDisplayList } from "../../util/variables";
import { projectDispContainerVariant } from "../../animation";
import ScrollContainer from 'react-indiana-drag-scroll'
import { myLoader } from "../../lib/helperFunc";

const Projects: NextPage = () => {

  const [hovered, setHovered] = useState<"Thankful Notes" | "JLC Serves" | "JLC Academy" | null>(null)

  useEffect(() => {
    var item = document.getElementById("main")!;
    window.addEventListener("wheel", function (e) {
      if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });

  }, []);

  return (
    <div id="main" className="flex items-center min-w-screen overflow-x-hidden h-screen">
      <ProjectsHeader />
      <ProjectLinks />
    
    <ScrollContainer  className='flex h-full items-center overflow-x-visible px-10 pr-16 2xl:pr-28' style={{cursor: "grab"}}>
      
      <div className='mr-16 mb-10 md:mr-20 2xl:mr-48'>
        <ProjectDisplay
          imgSrc={projectDisplayList[0].imgSrc}
          blurImgSrc={projectDisplayList[0].blurImgSrc}
          name={projectDisplayList[0].name!}
          genre={projectDisplayList[0].genre}
          date={projectDisplayList[0].date}
          linkHref={projectDisplayList[0].linkHref}
          setHovered={setHovered}
          hovered={hovered}
        />
      </div>
      <div className='mr-16 mb-10 md:mr-20 2xl:mr-48'>
        <ProjectDisplay
          imgSrc={projectDisplayList[1].imgSrc}
          blurImgSrc={projectDisplayList[1].blurImgSrc}
          name={projectDisplayList[1].name!}
          genre={projectDisplayList[1].genre}
          date={projectDisplayList[1].date}
          linkHref={projectDisplayList[1].linkHref}
          setHovered={setHovered}
          hovered={hovered}
        />
      </div>
      <div className='mb-10'>
        <ProjectDisplay
          imgSrc={projectDisplayList[2].imgSrc}
          blurImgSrc={projectDisplayList[2].blurImgSrc}
          name={projectDisplayList[2].name!}
          genre={projectDisplayList[2].genre}
          date={projectDisplayList[2].date}
          linkHref={projectDisplayList[2].linkHref}
          setHovered={setHovered}
          hovered={hovered}
        />
      </div>

      </ScrollContainer>
    </div>
  );
};

const ProjectsHeader: React.FC = () => {
  return (
    <div className="fixed top-5 right-5 flex flex-col mb-10 items-end">
      <SlideDownText type="h4">Projects</SlideDownText>
    </div>
  );
};

const ProjectLinks: React.FC = () => {
  return (
    <div className="grid grid-rows-3 fixed bottom-5 right-5 lg:gap-2">
      <InternalLink text="Info" route="/" dotColor="bg-black" />
      <InternalLink text="Resume" route="/resume" dotColor="bg-gray-500" />
      <InternalLink text="Contact" route="/contact" dotColor="bg-gray-400" />
    </div>
  );
};


const ProjectDisplay: React.FC<IProjectDisplayComponent> = ({
  imgSrc,
  name,
  genre,
  date,
  linkHref,
  setHovered,
  hovered
}) => {
  return (
    <Link href={linkHref}>
      <a >
        <motion.figure className="flex flex-col relative" variants={projectDispContainerVariant} initial='initial' animate='animate' exit='exit'
          onMouseEnter={() => setHovered(name)}
          onMouseLeave={() => setHovered(null)}
        >

            <motion.div className="relative w-[250px] h-[450px] md:w-[600px] 2xl:w-[750px] 2xl:h-[550px] transition-all duration-500 ease-in-out"
            style={{filter: hovered !== null && hovered !== name ? "grayscale(100%)" : "" }}
            >
         
              <Image
                placeholder='blur'
                blurDataURL={imgSrc}
                src={imgSrc}
                layout="fill"
                objectFit="cover"
                priority={true}
                alt="dude"
              />
 
            </motion.div>
            <div className="flex justify-between items-center w-full mt-2">
              <SlideUpText type="p">{name}</SlideUpText>
              <SlideUpText type="sm">{genre}</SlideUpText>
            </div>
            <div className='flex absolute -right-2 w-auto  h-24 ml-px md:-right-6 2xl:-right-8'>

            <Text type='sm' customStyles='leading-none rotate-90 w-auto pl-2 overflow-hidden'>{date}</Text>
            </div>
        </motion.figure>
      </a>
    </Link>
  );
};

export default Projects;
