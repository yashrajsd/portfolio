'use client'
import { motion } from 'framer-motion'
import { ReactNode, useRef, useState, MouseEvent } from 'react'

interface MagneticProps {
    children: ReactNode;
}

export default function Magnetic({ children }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const maxDisplacement = 20

    const mouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const { clientX, clientY } = e
        const { width, height, left, top } = ref.current.getBoundingClientRect()
        let x = clientX - (left + width / 2)
        let y = clientY - (top + height / 2)

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
            transition={{ type: 'spring', stiffness: 80, damping: 10, mass: 0.9 }}
        >
            {children}
        </motion.div>
    )
}
