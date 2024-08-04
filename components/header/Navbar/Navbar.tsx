import AnimatedButton from "@/components/animations/button/AnimatedButton";


export default function Navbar () {
  return (
    <div className="flex">
        <div className="w-[7%] h-[7.5vh] rounded-[13px] border-[#303030] flex justify-center items-center border-[1px]">
            <p className="text-white">YSD</p>
        </div>
        <div className={`w-[86%] h-[7.5vh] rounded-[13px] border-[#303030] flex justify-center items-center border-[1px]`}>
          <div className="w-fit flex justify-center items-center h-[90%] rounded-full border-[#303030]  border-[1px] ">
            <ul className=" px-[2rem] flex text-[0.8rem] gap-[2rem] text-white">
              <li>Skills</li>
              <li>Projects</li>
              <li>About Me</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="w-[7%] h-[7.5vh] cursor-pointer rounded-[13px] border-[#303030] flex justify-center items-center border-[1px]">
            <AnimatedButton bg={'#5350FF'} text={'Hire'}>
            <p className="text-white">Hire</p>
            </AnimatedButton>
        </div>
    </div>
  )
}
