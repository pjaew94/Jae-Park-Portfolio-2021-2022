import { IProjectFullInfo } from "../../types";
import Image from "next/image";
import Text from "../Text";
import useResponsive from "../../hooks/useResponsive";

interface IProjectContact {
  history: IProjectFullInfo["history"];
  problem: IProjectFullInfo["problem"];
  role: IProjectFullInfo["role"];
  impact: IProjectFullInfo["impact"];
  ctxImg1: IProjectFullInfo["ctxImg1"];
  ctxImg2: IProjectFullInfo["ctxImg2"];
  ctxImg3: IProjectFullInfo["ctxImg3"];
}

const ProjectContext: React.FC<IProjectContact> = ({
  history,
  problem,
  role,
  impact,
  ctxImg1,
  ctxImg2,
  ctxImg3,
}) => {

  const responsive = useResponsive();
  return (
    <div className="flex flex-col w-full py-16 px-5 md:flex-row">
      {/* Text */}
      <div className="flex flex-col md:w-1/2 md:pr-10 md:py-10 lg:items-center">
        <div className="flex flex-col mb-12 w-10/12 md:w-11/12 lg:w-9/12">
          <Text type="md" customStyles="mb-12">
            STORY
          </Text>
          <Text type="md">&emsp;&emsp;{history}</Text>
        </div>
        <div className="flex flex-col mb-12 w-10/12 md:w-11/12 lg:w-9/12">
          <Text type="md" customStyles="mb-12">
            PROBLEM
          </Text>
          <Text type="md">&emsp;&emsp;{problem}</Text>
        </div>
        <div className="flex flex-col mb-12 w-10/12 md:w-11/12 lg:w-9/12">
          <Text type="md" customStyles="mb-12">
            MY ROLE
          </Text>
          <Text type="md">&emsp;&emsp;{role}</Text>
        </div>
        <div className="flex flex-col mb-12 w-10/12 md:w-11/12 lg:w-9/12">
          <Text type="md" customStyles="mb-12">
            IMPACT
          </Text>
          <Text type="md">&emsp;&emsp;{impact}</Text>
        </div>
      </div>

      <div className="relative flex flex-col md:w-1/2 md:pl-10 md:py-10 items-center">
        {ctxImg1 && <div className="relative w-full h-[300px] md:mb-10 lg:h-[430px] 2xl:h-[500px]">
          <Image
            layout="fill"
            src={ctxImg1}
            objectFit="contain"
            priority={true}
            alt="dude"
            placeholder="blur"
            blurDataURL="https://portfolio-final-jae.s3.amazonaws.com/filler.png"
          />
        </div>}
        <div className={ctxImg1 ? "relative w-full h-[550px] md:mb-10 lg:h-[650px] xl:w-[360px]": "relative w-full h-[550px] md:mb-10 lg:h-[850px] lg:w-[500px]"}>
          <Image
            layout="fill"
            src={ctxImg2}
            objectFit="cover"
            priority={true}
            alt="dude"
            placeholder="blur"
            blurDataURL="https://portfolio-final-jae.s3.amazonaws.com/filler.png"
          />
        </div>
        {ctxImg3 && <div className="relative w-full h-[300px] lg:h-[430px] 2xl:h-[500px]">
          <Image
            layout="fill"
            src={ctxImg3}
            objectFit="contain"
            priority={true}
            alt="dude"
            placeholder="blur"
            blurDataURL="https://portfolio-final-jae.s3.amazonaws.com/filler.png"
          />
        </div>}
        {responsive !== "sm" && <div className="h-px w-10/12 absolute top-0 right-0 bg-black" />}
        {responsive !== "sm" &&  <div className="h-px w-full absolute bottom-0 right-0 bg-black" />}
        {responsive !== "sm" &&  <div className="h-[94%] w-px absolute left-0 top-0 bg-black" />}
      </div>
    </div>
  );
};

export default ProjectContext;
