'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function AnimatedButton({ children,text ,bg}:{
    children:any,text:string,bg:boolean
}) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <motion.div
            className="relative w-full flex justify-center items-center h-full overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className={`absolute w-full rounded-[13px] ${bg && ([`bg-[#5E5BFF] text-white`])} h-full flex items-center  justify-center   z-10`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                {text}
            </motion.div>
            <motion.div
                className="relative z-20 w-full h-full flex justify-center items-center"
                initial={{ y: 0 }}
                animate={{ y: isHovered ? -60 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}
