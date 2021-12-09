import { motion } from "framer-motion";
import { NextPage } from "next";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { fadeInQuickVariant, fadeInVariant } from "../../animation";
import InternalLink from "../../components/Links/InternalLink";
import Text from "../../components/Text";
import SlideDownText from "../../components/Text/SlideDownText";
import useResponsive from "../../hooks/useResponsive";
import { education, technologies, workExperience } from "../../util/variables";

const Resume: NextPage = ({}) => {
  const [selected, setSelected] = useState<"edu" | "work" | "tech">("edu");

  return (
    <div>
      <ResumeHeader />
      <ResumeLinks />
      <ResumeSelection selected={selected} setSelected={setSelected} />
      {selected === "edu" && <ResumeEducation />}
      {selected === "tech" && <ResumeTechnologies />}
      {selected === "work" && <ResumeWork />}
    </div>
  );
};

const ResumeHeader: React.FC = () => {
  return (
    <div className=" fixed top-0 right-0 w-full flex justify-end px-5 py-5">
      <SlideDownText type="h4">Contact</SlideDownText>
    </div>
  );
};

const ResumeLinks: React.FC = () => {
  return (
    <div className="grid grid-rows-3 lg:gap-2 fixed bottom-5 right-5">
      <InternalLink text="Info" route="/" dotColor="bg-black" />
      <InternalLink text="Projects" route="/projects" dotColor="bg-gray-500" />
      <InternalLink text="Contact" route="/contact" dotColor="bg-gray-400" />
    </div>
  );
};

interface IResumeSelection {
  selected: "edu" | "work" | "tech";
  setSelected: Dispatch<SetStateAction<"edu" | "work" | "tech">>;
}
const ResumeSelection: React.FC<IResumeSelection> = ({
  selected,
  setSelected,
}) => {
  return (
    <div className="w-full flex justify-center items-center py-24 lg:py-48">
      <div className="flex flex-col md:flex-row">
        <button onClick={() => setSelected("edu")}>
          <SlideDownText
            type="h1"
            customStyles={`cursor-pointer hover:line-through ${
              selected === "edu" ? "line-through text-black" : "text-gray-300"
            }`}
          >
            Education.
          </SlideDownText>
        </button>
        <button onClick={() => setSelected("tech")}>
          <SlideDownText
            type="h1"
            customStyles={`cursor-pointer hover:line-through ${
              selected === "tech" ? "line-through text-black" : "text-gray-300"
            }`}
          >
            Technologies.
          </SlideDownText>
        </button>
        <button onClick={() => setSelected("work")}>
          <SlideDownText
            type="h1"
            customStyles={`cursor-pointer hover:line-through ${
              selected === "work" ? "line-through text-black" : "text-gray-300"
            }`}
          >
            Work.
          </SlideDownText>
        </button>
      </div>
    </div>
  );
};

const ResumeEducation: React.FC = ({}) => {
  const responsive = useResponsive();

  return (
    <motion.div
      className="flex justify-center w-screen border-t border-b border-black mb-32  lg:mb-56"
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {responsive !== "sm" && <div className="w-1/2"></div>}
      <div className="flex flex-col w-full md:w-1/2 md:border-l md:border-black">
        {education.map((edu, i) => {
          return (
            <div
              key={i}
              className={`w-full flex flex-col py-5 px-5 ${
                i !== education.length - 1 ? "border-b border-black" : ""
              }`}
            >
              <Text type="md">{edu.education.toUpperCase()}</Text>
              <div className="w-full flex justify-between">
                <Text type="md">{edu.where}</Text>
                <Text type="md">{edu.endDate}</Text>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const ResumeTechnologies: React.FC = () => {
  const responsive = useResponsive();
  return (
    <motion.div
      className="flex justify-center w-screen border-t border-b border-black mb-32 lg:mb-56"
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="w-full flex flex-col md:flex-row justify-center">
        <div className="w-full flex flex-col md:w-4/12 md:border-r md:border-l md:border-black">
          <Text type="md" customStyles="px-5 py-3 border-b border-black">
            LANGUAGES
          </Text>
          {technologies.languages.map((item, i) => {
            return (
              <div key={i} className="px-10 py-3 lg:px-16 border-b border-black">
                <Text type="md">{item}</Text>
              </div>
            );
          })}
          <Text type="md" customStyles="px-5 py-3 border-b border-black">
            FRAMEWORKS
          </Text>
          {technologies.frameworks.map((item, i) => {
            return (
              <div key={i} className="px-10 py-3 lg:px-16 border-b border-black">
                <Text type="md">{item}</Text>
              </div>
            );
          })}
          <Text type="md" customStyles="px-5 py-3 border-b border-black">
            DATABASE
          </Text>
          {technologies.database.map((item, i) => {
            return (
              <div key={i} className="px-10 py-3 lg:px-16 border-b border-black">
                <Text type="md">{item}</Text>
              </div>
            );
          })}
          <Text type="md" customStyles="px-5 py-3 border-b border-black">
            ORM / ODM
          </Text>
          {technologies.ORMODM.map((item, i) => {
            return (
              <div key={i} className="px-10 py-3 lg:px-16 border-b border-black">
                <Text type="md">{item}</Text>
              </div>
            );
          })}
          <Text type="md" customStyles="px-5 py-3 border-b border-black">
            Cloud / Storage
          </Text>
          {technologies.cloud.map((item, i) => {
            return (
              <div key={i} className="px-10 py-3 lg:px-16 border-b border-black md:border-none">
                <Text type="md">{item}</Text>
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-col md:w-4/12 md:border-r md:border-black">
          <Text type="md" customStyles="px-5 py-3 border-b border-black">
            STATE MANAGEMENT
          </Text>
          {technologies.stateManagement.map((item, i) => {
            return (
              <div key={i} className="px-10 py-3 lg:px-16 border-b border-black">
                <Text type="md">{item}</Text>
              </div>
            );
          })}

          <Text type="md" customStyles="px-5 py-3 border-b border-black">
            STYLES
          </Text>
          {technologies.styles.map((item, i) => {
            return (
              <div key={i} className="px-10 py-3 lg:px-16 border-b border-black">
                <Text type="md">{item}</Text>
              </div>
            );
          })}
          <Text type="md" customStyles="px-5 py-3 border-b border-black">
            ANIMATION
          </Text>
          {technologies.animation.map((item, i) => {
            return (
              <div key={i} className="px-10 py-3 lg:px-16 border-b border-black">
                <Text type="md">{item}</Text>
              </div>
            );
          })}
          <Text type="md" customStyles="px-5 py-3 border-b border-black">
            HOSTING
          </Text>
          {technologies.hosting.map((item, i) => {
            return (
              <div key={i} className="px-10 py-3 lg:px-16 border-b border-black">
                <Text type="md">{item}</Text>
              </div>
            );
          })}
          <Text type="md" customStyles="px-5 py-3 border-b border-black">
            VERSION CONTROL
          </Text>
          {technologies.versionControl.map((item, i) => {
            return (
              <div key={i} className="px-10 py-3 lg:px-16 border-black md:border-b">
                <Text type="md">{item}</Text>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const ResumeWork: React.FC = () => {
  const responsive = useResponsive();
  return     <motion.div
  className="flex justify-center w-screen border-t border-b border-black mb-32  lg:mb-56"
  variants={fadeInVariant}
  initial="initial"
  animate="animate"
  exit="exit"
>
  <div className='w-full flex flex-col md:w-1/2 md:border-r md:border-black'>
    {workExperience.map((work, i) => {
      return <div key={i} className={`flex flex-col w-full py-3 px-5 ${i !== (workExperience.length - 1) ? "border-b border-black" : ""}`}>
          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <Text type='md'>{work.jobTitle.toUpperCase()}</Text>
            <Text type='md' customStyles='ml-5'>{work.company}</Text>
            
          </div>
          <div className='flex flex-col ml-5 lg:flex-row lg:justify-between'>
          <Text type='md' >{work.startDate} &#8212; {work.endDate}</Text>
            <Text type='md'>{work.companyLocation}</Text>
          </div>
      </div>
    })}
  </div>
  {responsive !== "sm" && <div className='w-1/2 ' />}
  </motion.div>
}
export default Resume;
