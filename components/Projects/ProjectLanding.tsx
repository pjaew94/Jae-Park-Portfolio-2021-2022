import Image from "next/image";
import SlideUpText from "../../components/Text/SlideUpText";
import React from "react";
import { motion } from "framer-motion";
import {
  borderLineFadeInVariant,
  downRightArrowVariant,
  fadeInVariant,
} from "../../animation";
import { IProjectFullInfo } from "../../types";

interface IProjectLanding {
  nameLine1: IProjectFullInfo["nameLine1"];
  nameLine2?: IProjectFullInfo["nameLine2"];
  genre: IProjectFullInfo["genre"];
  date: IProjectFullInfo["date"];
  liveLink: IProjectFullInfo["liveLink"];
  imgSrc: IProjectFullInfo["landingImgSrc"];
  githubLink: IProjectFullInfo["githubLink"];
}
const ProjectLanding: React.FC<IProjectLanding> = ({
  nameLine1,
  nameLine2,
  genre,
  date,
  liveLink,
  imgSrc,
  githubLink,
}) => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row pb-5  mt-16 md:mt-20 lg:mt-24">
      {/* Left/Bottom side of desktop/mobile respectively */}
      <motion.div
        className="relative w-full h-[700px] px-5 mt-5 lg:w-1/3 lg:h-[80vh]"
        variants={fadeInVariant}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Image
          layout="fill"
          src={imgSrc}
          objectFit="cover"
          priority={true}
          alt="dude"
          placeholder="blur"
          blurDataURL="https://portfolio-final-jae.s3.amazonaws.com/filler.png"
        />
      </motion.div>
      {/* Right/Top side of desktop/mobile respectively */}
      <div className="relative flex w-full flex-col items-center justify-center md:pl-5 lg:w-2/3">
        {/* Arrow */}
        <div className="absolute left-0 top-5 md:left-5 overflow-x-hidden">
          <motion.div
            className="relative h-16 w-16 mb-10 lg:h-28 lg:w-28 2xl:h-36 2xl:w-36"
            variants={downRightArrowVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Image
              layout="fill"
              src="/downRightArrow.svg"
              objectFit="contain"
              priority={true}
              alt="dude"
            />
          </motion.div>
        </div>

        <div className="flex flex-col h-[400px] items-center justify-center md:h-full">
          <div className="flex flex-col items-center justify-center mb-8">
            <SlideUpText type="h2" customStyles="text-center">
              {nameLine1}
            </SlideUpText>
            <SlideUpText type="h2" customStyles="text-center">
              {nameLine2}
            </SlideUpText>
          </div>
          <SlideUpText type="p" customStyles="text-center">
            {genre}
          </SlideUpText>
        </div>

        {/* Strip of info and links */}
        <div className="relative flex justify-between items-center w-full">
          <div className="flex ">
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="relative pr-5 py-2 lg:py-4 hover:line-through"
            >
              <SlideUpText type="sm">&#8212;&nbsp;&nbsp; Live Site</SlideUpText>
              <motion.div
                className="h-full w-px bg-black absolute top-0 right-0"
                variants={borderLineFadeInVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="relative px-5 py-2 lg:py-4 hover:line-through"
            >
              <SlideUpText type="sm">&#8212;&nbsp;&nbsp; Github</SlideUpText>
              <motion.div
                className="h-full w-px bg-black absolute top-0 right-0"
                variants={borderLineFadeInVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </a>
          </div>
          <SlideUpText type="sm">{date}</SlideUpText>

          {/* Border bottom */}
          <motion.div
            className="w-full absolute bottom-0 left-0 h-px bg-black"
            variants={borderLineFadeInVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          />
          {/* Border top */}
          <motion.div
            className="w-full absolute top-0 left-0 h-px bg-black"
            variants={borderLineFadeInVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectLanding;
