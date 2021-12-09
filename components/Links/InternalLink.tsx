import Link from "next/link";
import SlideUpText from "../Text/SlideUpText";
import Image from 'next/image'

interface IInternalLink {
  customStyles?: string;
  route: string;
  text: string;
  dotColor: string;
}

const InternalLink: React.FC<IInternalLink> = ({
  customStyles,
  route,
  dotColor,
  text,
}) => {
  return (
    <Link href={route}>
      <a className={`group overflow-y-hidden relative ${customStyles}`}>
        <SlideUpText type="button" innerStyles="flex justify-end items-center">
        <div className="relative h-3 w-3 mr-3 lg:h-5 lg:w-5">
                <Image
                  layout="fill"
                  src="/upRightArrow.svg"
                  objectFit="contain"
                  priority={true}
                  alt="dude"
                />
              </div>

          <div className="lg:group-hover:-translate-y-full transition-all duration-500 ease-in-out">
            {text}
          </div>
          <div className="absolute -bottom-full lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
            {text}
          </div>
        </SlideUpText>
      </a>
    </Link>
  );
};

export default InternalLink;
