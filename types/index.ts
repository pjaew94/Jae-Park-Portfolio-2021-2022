import { Dispatch, SetStateAction } from "react"


export type ITextType = "h1"| "h2" | "h3" | "h4" | "p" | "md" | "sm" | "button"


export type IProjectDisplayHoverState = "Thankful Notes" | "JLC Academy" | "JLC Serves" | null



export interface IProjectDisplay {
    imgSrc: string,
    blurImgSrc: string,
    name: IProjectDisplayHoverState,
    genre: string,
    date: string,
    linkHref: string,
}


  export interface IProjectDisplayComponent {
    setHovered: Dispatch<SetStateAction<IProjectDisplayHoverState>>
    hovered: IProjectDisplayHoverState,
    imgSrc: string,
    blurImgSrc: string,
    name: IProjectDisplayHoverState,
    genre: string,
    date: string,
    linkHref: string,
  }

interface ITechStack {
    tech: string,
    purpose: string
  }

export interface IProjectFullInfo {
  index: string,
  nameLine1: string,
  nameLine2?: string,
  genre: string,
  date: string,
  liveLink: string,
  githubLink: string,
  landingImgSrc: string,
  summary: string,
  techStack: ITechStack[],
  summaryImg: string,
  history: string
  problem: string
  role: string
  impact: string
  ctxImg1?: string,
  ctxImg2: string,
  ctxImg3?: string,
}

export interface IContactForm {
  name: string,
  email: string,
  company: string,
  message: string
}



export interface IWorkExperience {
  startDate: string,
  endDate: string,
  jobTitle: string,
  company: string,
  companyLocation: string
}

export interface IEducation {
  education: string,
  where: string,
  endDate: string
}

export interface ITechnologies {
  languages: string[],
  frameworks: string[],
  database: string[],
  ORMODM: string[],
  cloud: string[],
  stateManagement: string[],
  styles: string[],
  animation: string[],
  hosting: string[],
  versionControl: string[]
}
