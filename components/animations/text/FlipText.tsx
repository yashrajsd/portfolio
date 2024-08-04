import { motion } from 'framer-motion'

export default function FlipText({children}:any){
    return(
        <motion.span 
        initial={{y:0}}
        whileHover={{y:-30}}
        className="overflow-hidden relative block whitespace-nowrap">
            {children}
        </motion.span>
    )
}