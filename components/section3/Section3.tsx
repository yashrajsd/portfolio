import { Hanken_Grotesk } from "next/font/google";
const Hanken600 = Hanken_Grotesk({
    weight: '700',
    subsets: ['latin'],
    display: 'swap'
});
import {motion} from 'framer-motion'
import golden from '../../public/golden.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Paragraph from "../animations/word/Word";
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Magnetic from "../animations/magnetic/Magnetic";
import Image from "next/image";

export default function Section3() {
    return (
        <div className="p-[2rem] h-[50vh] flex items-center justify-between border-t-[1px] border-b-[1px] border-t-[#303030] border-b-[#303030]">
            <div className="w-[55%] flex flex-col gap-[1rem]">
                <div className="flex items-center gap-[2rem]">
                    <span className="text-[#F8E8AC] text-[1.5rem]">{'//Design to solve'}</span>
                    <ul className="bg-[#292828] text-[#D9D79E] w-fit flex px-[1rem] py-[0.5rem] gap-[1rem] rounded-full border-[#515039] border-solid border-[1.5px]">
                        <li className="hover:scale-125 cursor-pointer">
                            <GitHubIcon />
                        </li>
                        <li className="hover:scale-125 cursor-pointer">
                            <LinkedInIcon />
                        </li>
                        <li className="hover:scale-125 cursor-pointer">
                            <InstagramIcon />
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className={`${Hanken600} text-[#FFFEE0] text-[2vw]`}>
                        <Paragraph value={'My work has often involved collaborating closely with clients to understand their unique requirements and translate them into robust, scalable applications.'} />
                    </h1>
                </div>
            </div>
            <div className="h-[80%] border-[#303030] border-[0.5px]" />
            <div className="w-[40%] h-[50vh] flex flex-col justify-center items-center relative">
                <Magnetic>
                    <button className="rounded-full relative z-[10] flex justify-center items-center gap-[1rem] py-[2rem] px-[3rem] border-[1px] border-[#515039]">
                        <span className="rounded-full bg-[#FFFEE0] p-[1rem]"><MarkunreadIcon /></span>
                        <span className={`text-[#D9D79E] text-[1.5rem] ${Hanken600.className}`}> Get in touch</span>
                    </button>
                </Magnetic>
                <motion.span
                    
                    className="absolute bottom-0 z-[-1]"
                >
                <Image
                    src={golden}
                    alt="shadow"
                    className="w-full h-auto"
                />
                </motion.span>
            </div>
        </div>
    );
}
