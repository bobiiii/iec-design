import Image from "next/image"
import icon1 from "@/assets/images/main4/icon1.svg"
import icon2 from "@/assets/images/main4/icon2.svg"
import icon3 from "@/assets/images/main4/icon3.svg"
import icon4 from "@/assets/images/main4/icon4.svg"
import icon5 from "@/assets/images/main4/icon5.svg"
import icon6 from "@/assets/images/main4/icon6.svg"
import icon7 from "@/assets/images/main4/icon7.svg"
import icon8 from "@/assets/images/main4/icon8.svg"

function Main4() {
  return (
    <div className="bg-white w-full max-w-[1440px] mx-auto sm:py-2 md:py-5  md:my-5">
        <div className="w-full h-full  bg-gradient-to-t from-white via-red-50 to-white  mx-auto">
        <div className="w-5/6 py-5  text-center sm:py-10 md:py-16 mx-auto">
            
                <h1 className=" md:text-2xl  py-3 md:py-5 lg:text-[32px] font-bold">What is IEC Apprentice Program?</h1>
                <p className="md:w-2/3 text-xs md:text-base font-medium mx-auto">Unlock your potential and advance your career through the IEC Apprenticeship Program, offering practical skills, industry exposure, and expert guidance for success in today&apos;s competitive job market. IEC Apprenticeship orogram is all about</p>
        </div>
        
        </div>
        <div className="w-5/6  mx-auto py-3">
            <div className="flex lg:justify-evenly xl:justify-between  items-center  flex-wrap">
            <div className="bg-white sm:flex-grow  lg:w-[30%] xl:w-[18rem] px-3 py-5 my-3 rounded-md  " style={{ boxShadow: '0px 0px 15px #D9D9D9' }}>
                <Image src={icon1} className="" alt="icon"/>
                <h3 className="lg:text-xl py-2 font-bold">Hands-on-Practice</h3>
                <p className="text-xs text-xs lg:text-sm">Experience the power of hands-on practice as you develop essential skills and cultivate practical expertise.</p>
            </div>
            <div className="bg-white sm:flex-grow lg:w-[30%] xl:w-[18rem] px-3 py-5 my-3 rounded-md  " style={{ boxShadow: '0px 0px 15px #D9D9D9' }}>
                <Image src={icon2} className="" alt="icon"/>
                <h3 className="lg:text-xl py-2 font-bold">World Class Faculty</h3>
                <p className="text-xs lg:text-sm">Learn from world-class faculty who bring unrivaled expertise and insights to your educational journey.</p>
            </div>
            <div className="bg-white sm:flex-grow lg:w-[30%] xl:w-[18rem] px-3 py-5 my-3 rounded-md  " style={{ boxShadow: '0px 0px 15px #D9D9D9' }}>
                <Image src={icon3} className="" alt="icon"/>
                <h3 className="lg:text-xl py-2 font-bold">Project Based Learning</h3>
                <p className="text-xs lg:text-sm">Learn by doing with project-based learning, fostering practical skills and real-world problem-solving.</p>
            </div>
            <div className="bg-white sm:flex-grow lg:w-[30%] xl:w-[18rem] px-4 py-7 my-3 rounded-md  " style={{ boxShadow: '0px 0px 15px #D9D9D9' }}>
                <Image src={icon4} className="" alt="icon"/>
                <h3 className="lg:text-xl py-2 font-bold">Personalized Coaching</h3>
                <p className="text-xs lg:text-sm">Unleash your potential with personalized coaching for tailored growth and goal attainment.</p>
            </div>
            <div className="bg-white sm:flex-grow lg:w-[30%] xl:w-[18rem] px-3 py-5 my-3 rounded-md  " style={{ boxShadow: '0px 0px 15px #D9D9D9' }}>
                <Image src={icon5} className="" alt="icon"/>
                <h3 className="lg:text-xl py-2 font-bold">Accelerate Hiring </h3>
                <p className="text-xs lg:text-sm">Accelerate your career prospects with our program designed to enhance your hiring potential.</p>
            </div>
            <div className="bg-white sm:flex-grow lg:w-[30%] xl:w-[18rem] px-3 py-5 my-3 rounded-md  " style={{ boxShadow: '0px 0px 15px #D9D9D9' }}>
                <Image src={icon6} className="" alt="icon"/>
                <h3 className="lg:text-xl py-2 font-bold">Mentoring </h3>
                <p className="text-xs lg:text-sm">Empower your growth with valuable mentorship and unlocking new heights of professional excellence.</p>
            </div>
            <div className="bg-white sm:flex-grow lg:w-[30%] xl:w-[18rem] px-3 py-5 my-3 rounded-md  " style={{ boxShadow: '0px 0px 15px #D9D9D9' }}>
                <Image src={icon7} className="" alt="icon"/>
                <h3 className="lg:text-xl py-2 font-bold">Professional Development</h3>
                <p className="text-xs lg:text-sm">Expand your expertise and boost your career through targeted professional development classes.</p>
            </div>
            <div className="bg-white  sm:flex-grow lg:w-[30%] xl:w-[18rem] px-3 py-5 my-3 rounded-md  " style={{ boxShadow: '0px 0px 15px #D9D9D9' }}>
                <Image src={icon8} className="" alt="icon"/>
                <h3 className="lg:text-xl py-2 font-bold line-clamp-1">Globally Recognized Degree</h3>
                <p className="text-xs lg:text-sm">Expand your horizons with a globally recognized degree, unlocking worldwide career prospects.</p>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Main4