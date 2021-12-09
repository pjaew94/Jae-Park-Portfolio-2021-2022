import { motion } from "framer-motion";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { fadeInQuickVariant, fadeInVariant } from "../../animation";
import InternalLink from "../../components/Links/InternalLink";
import Text from "../../components/Text";
import SlideDownText from "../../components/Text/SlideDownText";
import { IContactForm } from "../../types";
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from "react";

const Contact: NextPage = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [sendSuccess, setSendSuccess] = useState<string | null>(null);
  return (
    <div className="flex flex-col w-screen h-screen">
      <ContactHeader />
      <ContactDisplay />
      {sendSuccess ? <ContactSuccess sendSuccess={sendSuccess}/>:<ContactForm 
        setIsLoading={setIsLoading}
        setSendSuccess={setSendSuccess}
      />}

        <ContactLinks />
      
      {isLoading && <ContactLoading />}

    </div>
  );
};

const ContactHeader: React.FC = () => {
  return (
    <div className=" fixed top-0 right-0 w-full flex justify-end px-5 py-5">
      <SlideDownText type="h4">Contact</SlideDownText>
    </div>
  );
};

const ContactDisplay: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-24 lg:py-48">
      <SlideDownText type="h1">Inquiry</SlideDownText>
    </div>
  );
};

const ContactLinks: React.FC = () => {
  return (
    <div className="grid grid-rows-3 lg:gap-2 absolute bottom-5 right-5">
      <InternalLink text="Info" route="/" dotColor="bg-black" />
      <InternalLink text="Projects" route="/projects" dotColor="bg-gray-500" />
      <InternalLink text="Resume" route="/resume" dotColor="bg-gray-400" />
    </div>
  );
};

interface IContactFormComponent {
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setSendSuccess: Dispatch<SetStateAction<string | null>>
}

const ContactForm: React.FC<IContactFormComponent> = ({setIsLoading, setSendSuccess}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>();

  const onSubmit = async (data: IContactForm) => {
    setIsLoading(true)
      console.log(data)
      const res = await fetch('https://jaepark.dev/api/contact', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
      })

      const done = await res.json();
      console.log(done)
      setIsLoading(false)
      setSendSuccess(data.name.split(' ')[0])
  };

  return (
      
    <motion.form onSubmit={handleSubmit(onSubmit)}  className='flex justify-center w-screen border-t border-b border-black 2xl:border-b-2 2xl:border-t-2'
        variants={fadeInVariant}
        initial='initial'
        animate='animate'
        exit='exit'
    >
      <div className="flex flex-col w-full  md:w-8/12 md:border-r md:border-l md:border-black xl:w-6/12 2xl:w-4/12 2xl:border-r-2 2xl:border-l-2">
        <input className='px-5 py-5 border-b border-black placeholder-black 2xl:border-b-2  focus:outline-none' {...register ("name", {required: "Please enter your name."})} placeholder="Enter your name" />
        <input className='px-5 py-5 border-b border-black placeholder-black 2xl:border-b-2  focus:outline-none' {...register ("email", {required: "Please enter your email address."})} placeholder="Enter your email address" />
        <input className='px-5 py-5 border-b border-black placeholder-black 2xl:border-b-2  focus:outline-none' {...register ("company", {required: "Please enter your company name."})} placeholder="Enter your company name" />
        <textarea rows={4} className='px-5 py-5 border-b border-black resize-none 2xl:border-b-2 overflow-y-scroll placeholder-black  focus:outline-none' {...register ("message", {required: "Please enter your message."})} placeholder="Enter message" />
        <button className='flex justify-end items-center px-5 py-5 hover:line-through hover:text-customOrange' type='submit'><Text type='h4'>SEND</Text> <div className="relative h-3 w-3 ml-3 lg:h-5 lg:w-5">
                <Image
                  layout="fill"
                  src="/upRightArrow.svg"
                  objectFit="contain"
                  priority={true}
                  alt="dude"
                />
              </div></button>
      </div>
    </motion.form>
  );
};

interface IContactSuccess {
  sendSuccess: string | null
}
const ContactSuccess:React.FC<IContactSuccess> = ({sendSuccess}) => {
  return <motion.div className='flex justify-center w-screen border-t border-b border-black 2xl:border-b-2 2xl:border-t-2'
  variants={fadeInVariant}
  initial='initial'
  animate='animate'
  exit='exit'
  >
      <Text type='p' customStyles='py-5'>Thank you for reaching out {sendSuccess}. I will get back to you shortly.</Text>
  </motion.div>
}

const ContactLoading = () => {
  return <motion.div className='fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-50 bg-white bg-opacity-90'
  variants={fadeInQuickVariant}
  initial='initial'
  animate='animate'
  exit='exit'>
  

      
      <motion.div
      className='w-px h-10 bg-black'
      animate={{rotate: [0, 360]}}
        transition={{repeat: Infinity, duration: 2, repeatType:"loop", delay: 0}}
      >
      </motion.div>

        <Text type='p' customStyles='mt-5'>Processing</Text>

  </motion.div>
}
export default Contact;
