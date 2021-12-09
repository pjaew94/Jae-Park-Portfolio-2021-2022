import { ITextType } from "../../types"




interface IText {
    type: ITextType
    customStyles?: string
  }
  export const textStyles = {
    h1: 'font-serif text-3xl md:text-5xl lg:text-6xl lg:leading-12',
    h2: 'font-serif text-6xl word-break font-medium lg:text-7xl xl:text-9xl',
    h3: `font-serif text-3xl md:text-xl md:leading-6 lg:text-3xl xl:text-4xl 2xl:text-5xl`,
    h4: 'font-serif  text-2xl tracking-tight leading-6 lg:text-3xl xl:text-4xl xl:leading-10',
    p: 'font-serif tracking-tight text-lg leading-6 md:tracking-normal 2xl:text-xl',
    md: 'font-serif tracking-tight text-md xl:text-lg 2xl:text-xl',
    sm: 'font-serif tracking-tight text-sm md:text-lg 2xl:text-xl',
    button: 'font-serif tracking-tight text-lg md:text-2xl lg:text-2xl xl:text-3xl xl:leading-10'

  }



const Text:React.FC<IText> = ({type, customStyles, children }) => {

    return (
        <div className={`${textStyles[type]} ${customStyles}`}>
            {children}
        </div>
    )
}

export default Text
