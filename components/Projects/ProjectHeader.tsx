import Link from "next/link";
import Image from "next/image";
import SlideUpText from "../../components/Text/SlideUpText";
import React from "react";
import { motion } from "framer-motion";
import { borderLineFadeInVariant } from "../../animation";

interface IProjectHeader {
  projectIndex: string;
}
const ProjectHeader: React.FC<IProjectHeader> = ({ projectIndex }) => {
  return (
    <div className="fixed top-0 left-0 px-5 w-full bg-white z-50">
      <div className="relative w-full flex items-center justify-between h-16 md:h-20 lg:h-24">
        <Link href="/projects">
          <a className="flex items-center group">
            <SlideUpText type="p" customStyles="mt-1 mr-2 xl:mr-4">
              <Image src="/leftArrow.svg" alt="" height={20} width={30} />
            </SlideUpText>
            <SlideUpText type={"h4"} customStyles="group-hover:line-through">
              All Projects
            </SlideUpText>
          </a>
        </Link>
        <SlideUpText type="h4">{projectIndex}/3</SlideUpText>

        {/* Border bottom */}
        <motion.div
          className="w-full absolute bottom-0 left-0 h-px bg-black"
          variants={borderLineFadeInVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
