import { Hanken_Grotesk } from "next/font/google"
import MailIcon from '@mui/icons-material/Mail';
const Hanken700 = Hanken_Grotesk({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

export default function TopText() {
  return (
    <div className="relative w-full bg-white text-[#494949] text-[0.6rem] rounded-[0.5rem] h-[4vh] flex justify-center items-center">
        <p className={`${Hanken700.className} z-[88] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            Think | Design | Develop | Solve
        </p>
        <div className="flex w-full h-full px-[1rem] justify-between items-center">
          <span className="flex justify-center items-center gap-[0.5rem]">
            <MailIcon className="text-[#494949] text-[1rem]"/>  yashrajdeshmukh707@gmail.com
          </span>
          <span>

          </span>
        </div>
    </div>
  )
}
