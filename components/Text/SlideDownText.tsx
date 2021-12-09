import { motion } from "framer-motion"
import Text from "."
import { slideDownTextVariant } from "../../animation"
import { ITextType } from "../../types"


interface ISlideDownText {
    type: ITextType,
    customStyles?: string
}

const SlideDownText:React.FC<ISlideDownText> = ({type, children, customStyles }) => {
    return (
        <div className={`flex overflow-hidden ${customStyles}`}>
            <motion.div variants={slideDownTextVariant} initial='initial' animate='animate' exit='exit'>
            <Text type={type} customStyles='py-1'>
                {children}
            </Text>
            </motion.div>
        </div>
    )
}

export default SlideDownText
