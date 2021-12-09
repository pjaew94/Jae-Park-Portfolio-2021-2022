import SlideUpText from "../Text/SlideUpText";

interface IExternalLink {
  href: string;
  text:string
  customStyles?: string;
}

const ExternalLink: React.FC<IExternalLink> = ({
  href,
  customStyles,
  text
}) => {
  return (
    
      <a
        className={`group overflow-y-hidden relative underline ${customStyles}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <SlideUpText type="button" customStyles='lg:group-hover:translate-y-full transition-all duration-500 ease-in-out'>
            {text}
        </SlideUpText>
        <SlideUpText type="button" customStyles='underline absolute -top-full lg:group-hover:top-0 transition-all duration-500 ease-in-out'>
            {text}
        </SlideUpText>
      </a>

  );
};

export default ExternalLink;
