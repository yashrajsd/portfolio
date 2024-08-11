import {motion, useAnimation, useScroll, useTransform, useViewportScroll } from "framer-motion"
import { useEffect, useRef } from "react";
import { Hanken_Grotesk } from "next/font/google";
import img1 from '../../../public/icon1.png'
import img2 from '../../../public/icon2.png'
import img3 from '../../../public/icon3.png'
import img4 from '../../../public/icon4.png'
import Image from "next/image";
import Paragraph from "../word/Word";

const Hanken700 = Hanken_Grotesk({
    weight: '800',
    subsets: ['latin'],
    display: 'swap'
});

const Icons=[
    {
        img:img1
    },
    {
        img:img2
    },
    {
        img:img3
    },
    {
        img:img4
    },
    {
        img:img2
    },
    {
        img:img3
    },
]

export default function ScalingDiv(){
    const element = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target:element,
        offset: ['start 0.9', 'start 0.25']
    })
    const scale = useTransform(scrollYProgress,[0,1],[0.5,1])

    return(
        <div  className="w-full overflow-hidden h-[100vh]">
            <motion.div 
                ref={element}
                style={{
                    scale,
                    width: '100%',
                    height: '100%',
                    backgroundColor:'#4A5CFF'
                }}
                className="flex flex-col justify-center items-center"
            >
            {/* <h1 className={`${Hanken700.className} mb-[2rem] text-[#DDE0FF] text-center text-[2rem]`}>
                My Skills
            </h1>
            <div className="w-[70%] fade-effect relative overflow-hidden flex">
            <motion.div 
            initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{duration:25,repeat:Infinity,ease:"linear"}}
            className=" flex justify-center items-center flex-shrink-0">
            {
                Icons.map((icon,index)=>{
                    return(
                            <span key={index} className="px-[2vw] ">
                                <Image
                                    src={icon.img}
                                    width={85}
                                    height={85}
                                    alt="image"
                                />
                            </span>
                    )
                })
            }
            </motion.div>
            <motion.div 
            initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{duration:25,repeat:Infinity,ease:"linear"}}
            className=" flex justify-center items-center flex-shrink-0">
            {
                Icons.map((icon,index)=>{
                    return(
                            <span key={index} className="px-[2vw] ">
                                <Image
                                    src={icon.img}
                                    width={85}
                                    height={85}
                                    alt="image"
                                />
                            </span>
                    )
                })
            }
            </motion.div>
            </div>
            <div className="w-full flex justify-center items-center mt-[3rem]">
                <h1 className={`text-white ${Hanken700.className} text-[2vw] w-[70%]`}>
                <Paragraph value={'I am proficient with various tech stacks for both web and app development, also with designing tools like Figma, other tech tools like docker, git'}/>
                </h1> */}
            {/* </div> */}
            </motion.div>
        </div>    
    )
}