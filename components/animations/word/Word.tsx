'use client';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ParagraphProps {
    value: string;
}

interface WordProps {
    children: string;
    range: [number, number];
    progress: MotionValue<number>;
}

const WORD = ({ children, range, progress }: WordProps) => {
    const opacity = useTransform(progress, range, [0.3, 1]);
    return (
        <motion.span style={{ opacity }}>
            {children}
        </motion.span>
    );
};

export default function Paragraph({ value }: ParagraphProps) {
    const element = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    });

    const words = value.split(' ');

    return (
        <p ref={element} className='flex flex-wrap gap-[0.5rem]'>
            {words.map((word: string, i: number) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                console.log([start, end]);
                return (
                    <WORD key={i} range={[start, end]} progress={scrollYProgress}>
                        {word}
                    </WORD>
                );
            })}
        </p>
    );
}
