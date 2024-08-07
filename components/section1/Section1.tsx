'use client';
import { motion } from 'framer-motion';
import { Hanken_Grotesk } from "next/font/google";
import Magnetic from "../animations/magnetic/Magnetic";
import AnimatedButton from "../animations/button/AnimatedButton";
import FloatingCursor from '../animations/cursor/FloatingCursor';

const Hanken700 = Hanken_Grotesk({
    weight: '800',
    subsets: ['latin'],
    display: 'swap'
});

const Hanken600 = Hanken_Grotesk({
    weight: '700',
    subsets: ['latin'],
    display: 'swap'
});

const circles =[1,2,3,4,5,6,7,8]

export default function Section1() {
    return (
        <div className="w-full gap-[1rem] rounded-[2rem] border-[#303030] flex flex-col border-[1px] relative overflow-hidden h-[90vh]  justify-center items-center">
            {circles.map((num, index) => {
                const size = `${100+10 * index}vh`;
                const opacity = `0.${num}`;
  
                return (
                <motion.div 
                key={index}
                initial={{ borderColor: '#303030' }}
                animate={{ borderColor: '#1A1A1A' }}
                transition={{
                    duration: 5,
                    delay: num / 8,
                    repeat: Infinity
                }}
                style={{
                    width: size,
                    height: size,
                    opacity: opacity,
                    borderColor: '#303030',
                    zIndex: -99
                }}
                className="rounded-full absolute border-[1px]"
                />
            );
            })}

            <FloatingCursor />
            <div className='rounded-full border-1px border-[#303030]'>
                <img
                    src=''
                />
            </div>
            <h1 className={`${Hanken700.className} text-center leading-tight cursor-pointer`}>
                <div className="flex justify-center gap-[0.5rem] items-center">
                    <span className="text-[#5D5D5D] text-[2.9vh] w-fit text-right">
                        {/* UI/UX designer */}
                        &#47;&#47; UI/UX<br />designer
                    </span>
                    <motion.span
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.25,
                            delay: (2.5 / 10)+2.5
                        }}
                        className="text-[#A089FF] text-[10.5vh]">
                        DIGITAL
                    </motion.span>
                </div>
                <motion.div
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: (5 / 10)+2.5
                    }}
                    className="text-[#F5FF80] text-[10.5vh]">
                    EXPERIENCE
                </motion.div>
                <div className="text-[#FBFFCF] flex justify-center items-center gap-[2vh]">
                    <motion.span
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.25,
                            delay: (7.5 / 10)+2.5
                        }}
                        className="text-[10.5vh]">
                        DESIGNER
                    </motion.span>
                    <span className="flex">
                        <Magnetic>
                            <button className="w-[12vw] overflow-hidden h-[5vw] flex justify-center items-center text-[#56B44D] border-[#363127] border-[1px] rounded-full">
                                <Magnetic>
                                    <AnimatedButton bg={false} text={'Contact Me'}>
                                        <span>Let&apos;s Connect</span>
                                    </AnimatedButton>
                                </Magnetic>
                            </button>
                        </Magnetic>
                    </span>
                </div>
                <div className="text-[#56FFA4] flex justify-center items-center gap-[2vh]">
                    <motion.span
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.25,
                            delay: 1+2.5
                        }}
                        className="text-[10.5vh]">
                        &
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.25,
                            delay: 1+2.5
                        }}
                        className="text-[10.5vh]">
                        DEVELOPER
                    </motion.span>
                    <span className="text-[#5D5D5D] text-[2.9vh]">
                        {/* Full stack developer */}
                        &#47;&#47; Full stack<br />developer
                    </span>
                </div>
            </h1>
        </div>
    );
}
