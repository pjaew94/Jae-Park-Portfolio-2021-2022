import Text from "../Text";
import Link from "next/link";
import Image from "next/image";
import { IProjectFullInfo } from "../../types";

interface IProjectFooter {
    proj1Name: string,
    proj1date: string,
    proj1Href: string,
    proj2Name: string,
    proj2date: string,
    proj2Href: string,
    liveLink: IProjectFullInfo["liveLink"],
    githubLink: IProjectFullInfo["githubLink"];
}

const ProjectFooter: React.FC<IProjectFooter> = ({proj1Name, proj1Href, proj1date, proj2Href, proj2Name, proj2date, liveLink, githubLink}) => {
  return (
    <div className="w-full flex flex-col mt-24 items-center justify-center">
      {/* Contact Rec */}
      <div className="flex flex-col w-full px-5 mb-10 md:w-1/2 lg:py-28">
        <Text type="h3" customStyles="w-8/12 xl:w-7/12">
          Looking to collaborate or get in touch?
        </Text>
        <div className="relative w-full py-2 border-t border-b border-black mt-5 lg:py-4 lg:mt-10">
          <Link href="/contact">
            <a className="w-full flex justify-between hover:line-through">
              <Text type="sm">Contact</Text>
              <Text type="sm">Jae Park</Text>
            </a>
          </Link>
        </div>
        <div className='flex relative w-full border-b border-black'>
        <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="relative pr-5 py-2 lg:py-4 hover:line-through border-r border-black"
            >
              <Text type="sm">Live Site</Text>

            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="relative px-5 py-2 lg:py-4 hover:line-through border-r border-black"
            >
              <Text type="sm">Github</Text>

            </a>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col w-full justify-center px-5 py-10 bg-customOrange md:flex-row md:items-end lg:py-28">
        <div className="relative h-32 w-32 mb-10 md:mb-0 md:mr-10 lg:mr-28 lg:h-44 lg:w-44">
          <Image
            layout="fill"
            src="/downRightArrow.svg"
            objectFit="contain"
            priority={true}
            alt="dude"
          />
        </div>

        <div className="flex flex-col md:w-1/2">
          <Text type="sm">MORE PROJECTS</Text>
          <Link href={proj1Href}>
            <a className="flex py-4 w-full justify-between items-center mt-3 border-b border-black group lg:mt-10 lg:py-7">
              <div className="flex items-start">
                <Text type="sm" customStyles="mr-3 font-light lg:mr-10">
                  {proj1date}
                </Text>
                <Text type="h4" customStyles='group-hover:line-through group-hover:text-white'>{proj1Name}</Text>
              </div>
              <div className="relative h-5 w-5">
                <Image
                  layout="fill"
                  src="/upRightArrow.svg"
                  objectFit="contain"
                  priority={true}
                  alt="dude"
                />
              </div>
            </a>
          </Link>
          <Link href={proj2Href}>
            <a className="flex py-4 w-full justify-between items-center mt-3 border-b border-black group lg:py-7">
              <div className="flex items-start">
                <Text type="sm" customStyles="mr-3 font-light lg:mr-10">
                  {proj2date}
                </Text>
                <Text type="h4" customStyles='group-hover:line-through group-hover:text-white'>{proj2Name}</Text>
              </div>
              <div className="relative h-5 w-5 ">
                <Image
                  layout="fill"
                  src="/upRightArrow.svg"
                  objectFit="contain"
                  priority={true}
                  alt="dude"
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectFooter;
