import { motion } from "framer-motion"
import Text from "."
import { slideUpTextVariant } from "../../animation"
import { ITextType } from "../../types"


interface ISlideDownText {
    type: ITextType,
    customStyles?: string
    innerStyles?: string
}

const SlideUpText:React.FC<ISlideDownText> = ({type, children, customStyles, innerStyles }) => {
    return (
        <div className={`flex overflow-hidden ${customStyles}`}>
            <motion.div className='' variants={slideUpTextVariant} initial='initial' animate='animate' exit='exit'>
            <Text customStyles={`${innerStyles}`} type={type}>
                {children}
            </Text>
            </motion.div>
        </div>
    )
}

export default SlideUpText
