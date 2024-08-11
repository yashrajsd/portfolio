import {motion} from 'framer-motion';
import { useEffect, useState } from 'react';
import { Hanken_Grotesk } from 'next/font/google';
const Hanken600 = Hanken_Grotesk({
    weight: '600',
    subsets: ['latin'],
    display: 'swap'
});

export default function Preloader(){
    const [index,setIndex] = useState(0);
    const words = [
        "0%",
        "20%",
        "25%",
        "30%",
        "54%",
        "63%",
        "72%",
        "80%",
        "89%",
        "95%",
        "100%"
    ];

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 600 : 150);

        return () => clearTimeout(timeout);
    }, [index])

    return(
        <motion.div 
        initial={{y:0}}
        exit={{y:'-100vh'}}
        transition={{duration:1.3,ease:[0.76,0,0.24,1]}}
        className="fixed overflow-hidden top-0 left-0 w-[100vw] h-[100vh] z-[9999] bg-white flex items-center justify-center">
            <div className='relative flex justify-center items-center w-full h-full'>
            <div className='absolute top-0 h-[10vh] border-b-[#DBDBDB] border-b-[1px] border-solid w-full'/>
            <div className='absolute right-0 h-full border-l-[#DBDBDB] w-[10vh] border-solid border-l-[1px]'/>
            <div className='absolute bottom-0 h-[10vh]  border-t-[#DBDBDB] w-full border-solid border-t-[1px]'/>
            <div className='absolute left-0 h-full  border-r-[#DBDBDB] w-[10vh] border-solid border-r-[1px]'/>
            <motion.div 
            initial={{width:'0vh',height:'0vh'}}
            animate={{width:'200vh',height:'200vh'}}
            transition={{duration:3,ease:[0.76,0,0.24,1]}}
            className=' w-[80vh] h-[80vh] flex justify-center items-center border-[#DBDBDB] rounded-full border-[1px]'>
            <p className={`${Hanken600.className} text-[2vw] text-[#252525] z-[1000]`}>{words[index]}</p>
            </motion.div>
            </div>
            
        </motion.div>
    )
}