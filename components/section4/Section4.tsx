import { Hanken_Grotesk } from "next/font/google"
import {motion} from 'framer-motion';
import img1 from '../../public/icon1.png'
import img2 from '../../public/icon2.png'
import img3 from '../../public/icon3.png'
import img4 from '../../public/icon4.png'
import Image from "next/image";
import Paragraph from "../animations/word/Word";

const Hanken600 = Hanken_Grotesk({
    weight:'600',
    subsets:['latin'],
    display:'swap'
})

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

export default function Section4(){
    return(
        <div className="w-full b-b-[1px] b-b-[#303030] p-[2rem] min-h-[100vh] flex flex-col justify-center items-center mt-[2rem]">
            <h1 className={`${Hanken600.className} mb-[2rem] text-[#6D55FF] text-center text-[2rem]`}>
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
                <h1 className={`text-white ${Hanken600} text-[2.5vw] w-[70%]`}>
                <Paragraph value={'I am proficient with various tech stacks for both web and app development, also with designing tools like Figma, other tech tools like docker, git'}/>
                </h1>
            </div>
        </div>
    )   
}