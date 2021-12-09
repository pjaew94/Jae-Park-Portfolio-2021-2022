import { motion } from "framer-motion";
import { fadeInVariant, fadeInWhileInView } from "../../animation";
import useResponsive from "../../hooks/useResponsive";
import { IProjectFullInfo } from "../../types";
import Text from "../Text";
import Image from "next/image";

interface IProjectSummary {
  summary: IProjectFullInfo["summary"];
  techStack: IProjectFullInfo["techStack"];
  summaryImg: IProjectFullInfo["summaryImg"];
}

const ProjectSummary: React.FC<IProjectSummary> = ({
  summary,
  techStack,
  summaryImg,
}) => {
  const responsive = useResponsive();
  return (
    <motion.div
      className="relative flex flex-col-reverse w-full bg-faintBlack px-5 pt-10 pb-5 md:flex-row md:justify-between md:pt-20 xl:pt-36"
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Left Side */}
      {responsive !== "sm" && (
        <div className="w-1/2 mr-5 flex items-end lg:w-auto">
          <div className="relative w-full h-[450px] lg:h-[520px] lg:w-[400px] 2xl:h-[700px] 2xl:w-[500px] lg:mr-20">
            <Image
              layout="fill"
              src={summaryImg}
              objectFit="cover"
              priority={true}
              alt="dude"
              placeholder="blur"
              blurDataURL="https://portfolio-final-jae.s3.amazonaws.com/filler.png"
            />
          </div>
        </div>
      )}

      {/* Right Side */}
      <div className="w-full flex flex-col text-white md:w-1/2 md:pl-5 lg:w-full pb-10 xl:w-8/12">
        <div className="md:w-10/12 xl:w-10/12 2xl:w-8/12">
          <Text type="h3">&emsp;&emsp;{summary}</Text>
        </div>
        <div className="flex flex-col mt-10">
          <Text
            type="sm"
            customStyles="h-12 border-b border-white flex items-center font-light md:h-16"
          >
            Tech Stack
          </Text>
          {techStack.map((tech, i) => {
            return (
              <div
                key={i}
                className="h-12 flex w-full justify-between items-center border-b border-white md:h-16"
              >
                <Text type="p">{tech.tech}</Text>
                <Text type="p" customStyles="font-light">
                  {tech.purpose}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSummary;
