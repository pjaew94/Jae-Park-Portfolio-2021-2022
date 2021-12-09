import { IProjectDisplay, IProjectFullInfo, IWorkExperience, IEducation, ITechnologies} from "./../types/index";
export const textStyles = {
  h1: "",
  h2: "",
  h3: ``,
  h4: "font-serif  text-2xl tracking-tight leading-7 lg:text-3xl xl:text-4xl xl:leading-10",
  p: "font-serif tracking-tight text-lg leading-6 md:tracking-normal 2xl:text-xl",
  button:
    "font-serif tracking-tight text-lg md:text-2xl lg:text-2xl xl:text-3xl xl:leading-10 ",
};

export const projectDisplayList: IProjectDisplay[] = [
  {
    imgSrc: "/tnImg.png",
    blurImgSrc: "/tnImgBlur.png",
    name: "Thankful Notes",
    genre: "Blog",
    date: "12.01.2021",
    linkHref: "/projects/thankful-notes",
  },
  {
    imgSrc: "/jlcServesImg.png",
    blurImgSrc: "/jlcServesImg.png",
    name: "JLC Serves",
    genre: "Donation",
    date: "04.06.2021",
    linkHref: "/projects/jlc-serves",
  },
  {
    imgSrc: "/jlcAcademyImg.png",
    blurImgSrc: "/jlcAcademyImgBlur.png",
    name: "JLC Academy",
    genre: "Education",
    date: "10.20.2021",
    linkHref: "/projects/jlc-academy",
  },
];

export const projectInfoList: IProjectFullInfo[] = [
  {
    index: "1",
    nameLine1: "Thankful",
    nameLine2: "Notes",
    genre: "Social / Blog",
    date: "12.01.2021",
    liveLink: "http://www.thankfulnotes.blog",
    githubLink: "https://github.com/pjaew94/Thankful-Notev2",
    landingImgSrc: "https://portfolio-final-jae.s3.amazonaws.com/tnImg1.png",
    summary:
      "A blogging platform created to help us see the good in our lives. Gradually enforcing a worthwhile habit for mental and emotional stability that every person needs. Thankful Notes allows users to share and reflect their thankfulness in their lives with their close ones.",
    techStack: [
      {
        tech: "ReactJS",
        purpose: "Front End JS. Library",
      },
      {
        tech: "NextJS",
        purpose: "React Framework",
      },
      {
        tech: "Typescript",
        purpose: "Programming Language",
      },
      {
        tech: "Postgre",
        purpose: "SQL Database",
      },
      {
        tech: "Prisma",
        purpose: "ORM",
      },
      {
        tech: "Recoil",
        purpose: "Global State Management",
      },
      {
        tech: "TailwindCSS",
        purpose: "Styling / Animations",
      },
      {
        tech: "Framer Motion",
        purpose: "Advanced Animations",
      },
      {
        tech: "JWT",
        purpose: "Authentication",
      },
      {
        tech: "Heroku",
        purpose: "Database Hosting",
      },
      {
        tech: "Vercel",
        purpose: "Client Hosting",
      },
      
    ],
    summaryImg: "https://portfolio-final-jae.s3.amazonaws.com/tnImg2.png",
    history: "The idea of Thankful Notes spurred after discovering a Korean journal named 감사노트(Thankful Notes). The distinct journal focused on daily messages and asked to list five ways the writer was thankful for each day for 153 days.",
    problem: "The paper copy provided the spaces to write, but lacked a way for groups to share and inspire each other during the 153 day journey. As a result, individuals were falling short of forming the habit of having a grateful mindset. This considerable risk of failure prevented groups who were interested to take the plunge into purchasing bulk order of the journals.",
    role: "Fortunately, I was able to plan, create, and deploy Thankful Notes successfully to solve this problem. The web application was deployed for use on November 30, 2021 and is currently being maintained by me. Notably, language toggle allows users to flip between Korean and English to their preference.",
    impact: "Since launch, the blog attracted 200+ users, 20+ groups, and has over 1000 journal logs. To my surprise, Thankful Notes continues to receive support and stories from our users about the benefits they've experienced since beginning their journeys with their loved ones.",
    ctxImg1: "https://portfolio-final-jae.s3.amazonaws.com/tnCtxImg1.png",
    ctxImg2: "https://portfolio-final-jae.s3.amazonaws.com/tnCtxImg2.png",
    ctxImg3: "https://portfolio-final-jae.s3.amazonaws.com/tnCtxImg3.png",
  
  },
  {
    index: "2",
    nameLine1: "JLC",
    nameLine2: "Serves",
    genre: "Non-Profit / Donation",
    date: "04.06.2021",
    liveLink: "https://www.jlcserves.org/",
    githubLink: "https://github.com/pjaew94/JLC-Serves-v2-FrontEnd",
    landingImgSrc: "https://portfolio-final-jae.s3.amazonaws.com/jlcServesImg1.png",
    summary:
      "A platform to aid Jesus Love Church in developing valuable connections with those who hold the same mission: to help and serve others who are in need. The site has generated thousands of dollars and much more to fuel the congregation spread the gospel and feed hungry mouths.",
    techStack: [
      {
        tech: "ReactJS",
        purpose: "Front End JS. Library",
      },
      {
        tech: "Redux",
        purpose: "Global State Management",
      },
      {
        tech: "ExpressJS",
        purpose: "Back End Framework",
      },
      {
        tech: "MongoDB",
        purpose: "NoSQL Database",
      },
      {
        tech: "Mongoose",
        purpose: "MongoDB Framework",
      },
      {
        tech: "AWS S3",
        purpose: "Cloud Storage",
      },
      {
        tech: "Stripe / PayPal",
        purpose: "Payment Methods",
      },
      {
        tech: "Styled-Components",
        purpose: "Styling",
      },
      {
        tech: "Netlify",
        purpose: "Client Hosting",
      },
      {
        tech: "Heroku",
        purpose: "Server Hosting",
      },
      
    ],
    summaryImg: "https://portfolio-final-jae.s3.amazonaws.com/jlcServesImg2.png",
    history: "Jesus Love Church is a small congregation located in Lansdale, PA with just over 30 active members. In the summer of 2020, with the small amount of funds from its members, the church set out to distribute 100 goodie bags containing a hot dog, mask, chips, and water in Philadelphia. After seeing firsthand how many people were in need, the pastor and the church decided to commit to handing out 100 goodie bags every Sunday. Although the church began to struggle financially and physically from the trips, the congregation has yet to miss a Sunday since the first trip to the city.",
    problem: "The church was finally fulfilling their duty of helping the community. Additionally, local churches, donation centers, and supermarkets gained notice of the church’s mission. JLC were able to receive donations from locals via. cash and checks. However, as the congregation’s mission gained notice from more distant places, it was harder for those to contribute as there were no efficient ways of receiving the donations. In addition, JLC quickly realized how much the mission could scale by spreading their message. However, the only way the small church’s mission was being spread was through the word of mouth.",
    role: "My contribution to the church’s mission was simple: create a platform that told JLC’s message and received donations. The website displays the church’s mission as well as images to capture the work the small congregation is doing. It also tells the history and the upcoming of the church. Finally, I was able to implement various payment methods to consider the donor’s location and preference.",
    impact: "Since the launch of the site in beginning of 2021, the church gained considerable recognition and thousands in donations from all around the world. JLC was able to increase their weekly goodie bag portions from 100 to 200. They also have provided hundreds of sleeping bags to the homeless. The congregation also built 3 schools in Haiti and funds the meals/teachers located in those schools as well as missionaries in Russia to this day.",
    ctxImg1: "https://portfolio-final-jae.s3.amazonaws.com/jlcServesCtxImg1.png",
    ctxImg2: "https://portfolio-final-jae.s3.amazonaws.com/jlcServesCtxImg2.png",
    ctxImg3: "https://portfolio-final-jae.s3.amazonaws.com/jlcServesCtxImg3.png",
  
  },
  {
    index: "3",
    nameLine1: "JLC",
    nameLine2: "Academy",
    genre: "Education",
    date: "10.20.2020",
    liveLink: "https://www.jlcacademy.com/",
    githubLink: "https://github.com/pjaew94/JLC-Tutor-FrontEnd",
    landingImgSrc: "https://portfolio-final-jae.s3.amazonaws.com/jlcAcademyImg1.png",
    summary:
      "An educational platform for teachers to easily communicate any homework or upcoming exams as well as questions with their students. The simple website proved to significantly enhance the students' performance.",
    techStack: [
      {
        tech: "ReactJS",
        purpose: "Front End JS. Library",
      },
      {
        tech: "Redux",
        purpose: "Global State Management",
      },
      {
        tech: "ExpressJS",
        purpose: "Back End Framework",
      },
      {
        tech: "MongoDB",
        purpose: "NoSQL Database",
      },
      {
        tech: "Mongoose",
        purpose: "MongoDB Framework",
      },
      {
        tech: "AWS S3",
        purpose: "Cloud Storage",
      },
      {
        tech: "Stripe / PayPal",
        purpose: "Payment Methods",
      },
      {
        tech: "SCSS",
        purpose: "Styling",
      },
      {
        tech: "Netlify",
        purpose: "Client Hosting",
      },
      {
        tech: "Heroku",
        purpose: "Server Hosting",
      },
      
    ],
    summaryImg: "https://portfolio-final-jae.s3.amazonaws.com/jlcAcademyImg2.png",
    history: "Jesus Love Church began the Saturday school for students in the summer of 2020. The program was created to help students reach their full academic potential. Teachers assisted the students with standardized tests as well as school subjects varying from math, reading, and writing. Though the brand-new program was created with little to no funding or planning, it proved to make drastic impacts on the students’ performances.",
    problem: "The Saturday school program went smoothly during the summer. However, when the new school year started for the students, their performances in the program suffered. It was suspected the students were not able to balance their schoolwork along with the Saturday school work. After a couple of weeks, the teachers came to realize the reason the students were performing poorly was because they were forgetting the homework and topics they were assigned during the week. After all, they were reminded once a week and expected to remember.",
    role: "As one of the teachers, I saw this opportunity to use my programming skill set to use. Thus, JLCAcademy was born! The application is simple: it provides a platform for teachers to post reminders such as homework or tests coming up for the program. The students are then able to interact with the posts by liking or commenting any comments or questions. In addition, the platform also provides a pomodoro timer. As a firm believer of the method, the timer was created to introduce the students to the method. That way, they’re able to get the most out of their time studying.",
    impact: "Since the launch of the site, the homework completion of the students increased from 42% to 95% in a span of 2 weeks. The average grade for a student increased by 12% during the program. Moreover, the students said they experiences the benefits of the pomodoro method as they were able to focus and not burnout during study sessions.",

    ctxImg2: "https://portfolio-final-jae.s3.amazonaws.com/jlcAcademyCtxImg1.png",
  },

];


export const workExperience: IWorkExperience[] = [
  {
    startDate: "Aug 2019",
    endDate: "Current",
    jobTitle: "Private Tutor",
    company: "Independent",
    companyLocation: "North Wales, PA",
  },
  {
    startDate: "Feb 2019",
    endDate: "Sep 2019",
    jobTitle: "Biomanufacturing Associate",
    company: "Endo Pharmaceuticals",
    companyLocation: "Horsham, PA",
  },
  {
    startDate: "Jan 2018",
    endDate: "Aug 2019",
    jobTitle: "Tutor/Teacher/Mentor",
    company: "GO Learning Center",
    companyLocation: "Blue Bell, PA",
  },
  {
    startDate: "Mar 2017",
    endDate: "Aug 2017",
    jobTitle: "Medial Assistant Intern",
    company: "Bucks County Orthopedics",
    companyLocation: "DoylesTown/Warrington, PA",
  },
  {
    startDate: "Jun 2015",
    endDate: "Aug 2016",
    jobTitle: "Pharmacy Technician",
    company: "CVS Pharmacy",
    companyLocation: "Hatfield, PA",
  },
]

export const education: IEducation[] = [
  {
    education: "Bachelors in Sciences in Biochemistry",
    where: "Temple University",
    endDate: "January 2018",
  },
  {
    education: "Complete 2021 Web Dev. Bootcamp",
    where: "Udemy",
    endDate: "February 2021",
  },
  {
    education: "Understanding Typescript - 2021 ed.",
    where: "Udemy",
    endDate: "March 2021",
  },
  {
    education: "React and Typescript",
    where: "Udemy",
    endDate: "March 2021",
  },
  {
    education: "MERN Stack Front To Back",
    where: "Udemy",
    endDate: "December 2020",
  },
]


export const technologies: ITechnologies = {
  languages: ['Typescript', 'Javascript', 'Python 3'],
  frameworks: ['ReactJS', "NextJS", "ExpressJS", "jQuery"],
  database: ["PostgreSQL", "MongoDB", "Firebase"],
  ORMODM: ["Prisma", "MongooseJS"],
  cloud: ["AWS S3"],
  stateManagement: ["Redux", "Recoil"],
  styles: ["TailwindCSS", "CSS", "SCSS", "Styled-Components"],
  animation: ["Framer Motion", "GSAP"],
  hosting: ["Vercel", "Netlify", "Heroku"],
  versionControl: ["Git"]
}