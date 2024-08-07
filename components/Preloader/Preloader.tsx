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
        "Namaste",
        "नमस्कार",
        "Hola",
        "Bonjour",
        "Hallo",
        "Ciao",
        "こんにちは",
        "안녕하세요",
        "你好",
        "Здравствуйте",
        "नमस्कार"
    ];

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);

        return () => clearTimeout(timeout);
    }, [index])

    return(
        <motion.div 
        initial={{y:0}}
        exit={{y:'-100vh'}}
        transition={{duration:1.3,ease:[0.76,0,0.24,1]}}
        className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[9999] bg-white flex items-center justify-center">
            <div className='relative flex justify-center items-center z-[10] w-full border-solid h-full'>
            <div className='absolute top-0 h-[10vh] border-b-[#5B5B5B] border-[1px] border-solid w-full'/>
            <div className='absolute right-0 h-full border-l-[#5B5B5B] w-[10vh] border-solid border-[1px]'/>
            <div className='absolute bottom-0 h-[10vh]  border-r-[#5B5B5B] w-full border-solid border-[1px]'/>
            <div className='absolute left-0 h-full  border-t-[#5B5B5B] w-[10vh] border-solid border-[1px]'/>
            <div className='border-t-[#5B5B5B] w-[80vh] flex justify-center items-center border-solid h-[80vh] rounded-full border-[1px]'>
            <p className={`${Hanken600.className} text-[2vw] text-[#252525] z-[1000]`}>{words[index]}</p>
            </div>
            </div>
            
        </motion.div>
    )
}