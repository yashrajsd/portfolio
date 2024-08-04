'use client'
import Image from "next/image"
import face1 from '../../public/assets/face1.jpg'
import face2 from '../../public/assets/face2.jpg'
import face3 from '../../public/assets/face3.jpg'
import {motion} from 'framer-motion'
import AnimatedButton from "../animations/button/AnimatedButton"



const reviews=[
    {
        img:face1,
        userid:'@arunaverse',
        comment:'hire him. you will not be disappointed',
        work:'Generate.one'
    },
    {
        img:face2,
        userid:'@shahriarmuttalib',
        comment:'Very friendly guy to work with. Quick turn around. Understand the requirement. Highly recommended',
        work:'Real Estate site'
    },
    {
        img:face1,
        userid:'@arunaverse',
        comment:'Great designer. Will hire again',
        work:'Dextapp.io'
    },
    {
        img:face3,
        userid:'@samcim',
        comment:'Amazing talent, will work again',
        work:'Modelsty.com'
    }
]

export default function Reviews(){
    return(
        <div className="w-full h-[8vw] flex  overflow-hidden ">
            <motion.div 
            initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{duration:25,repeat:Infinity,ease:"linear"}}
            className=" flex justify-center items-center flex-shrink-0">
            {
                reviews.map((review,index)=>{
                    return(
                       
                            <span key={index} className="py-[10vh] overflow-hidden text-[#C6C6C6] px-[2vw] border-[#303030] cursor-pointer border-[1px] text-white flex">
                            <AnimatedButton text={review.work} bg={null}>
                            <span className="flex flex-col">
                                <span>
                                    {review.userid}
                                </span>
                                <span className="whitespace-nowrap">
                                    {review.comment}
                                </span>
                            </span>
                            </AnimatedButton>
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
                reviews.map((review,index)=>{
                    return(
                        <span key={index} className="py-[10vh] overflow-hidden text-[#C6C6C6] cursor-pointer px-[2vw] border-[#303030] border-[1px] text-white flex">
                            <AnimatedButton text={review.work} bg={null}>
                            <span className="flex flex-col">
                                <span>
                                    {review.userid}
                                </span>
                                <span className="whitespace-nowrap">
                                    {review.comment}
                                </span>
                            </span>
                            </AnimatedButton>
                            </span>
                    )
                })
            }
            </motion.div>
        </div>
    )
}