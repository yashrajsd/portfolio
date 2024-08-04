'use client'
import { motion } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'

export default function Magnetic({ children }:any) {
    const ref = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const maxDisplacement = 20

    const mouseMove = (e:any) => {
        const { clientX, clientY } = e
        const { width, height, left, top } = ref.current.getBoundingClientRect()
        let x = clientX - (left + width / 2)
        let y = clientY - (top + height / 2)

        // Clamp the x and y values
        x = Math.max(-maxDisplacement, Math.min(x, maxDisplacement))
        y = Math.max(-maxDisplacement, Math.min(y, maxDisplacement))

        setPosition({ x, y })
    }

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position
    return (
        <motion.div 
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            ref={ref}
            animate={{ x, y }}
            transition={{type:'spring',stiffness:80,damping:10,mass:0.9}}
        >
            {children}
        </motion.div>
    )
}
