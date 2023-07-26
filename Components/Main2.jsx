import React from 'react'
import Image from 'next/image'
import img2 from "../assets/images/main2/img2.png"

function Main2() {
  return (
    <div className=' h-auto w-full  max-w-[1440px] mx-auto'>
        <div className='w-5/6 mx-auto    md:flex items-center justify-between'>
        <div className='flex-1  '>
            <h3 className='font-bold text-sm md:text-2xl  lg:text-3xl py-3'>Tech Apprenticeship Program</h3>
            <p className='text-xs md:text-base md:w-4/5'>Registration for our Tech Apprenticeship Program is now open! Dont miss the opportunity to gain hands-on experience, mentorship, and industry-relevant skills. Apply now to secure your spot and embark on a rewarding tech journey.</p>
            <h3 className='py-5 md:my-2 my-2 text-sm md:text-xl text-[#12125A] font-bold'>Deadline: 7th Aug, 2023</h3>
            <button className=" font-bold text-xs md:text-lg w-32 px-1 py-2  md:w-56 md:px-5 md:py-4 rounded-md bg-opacity-100 bg-red-600 text-white">Apply Now</button>
        </div>
        <div className='hidden md:block md:w-2/5 '>
            <Image src={img2}/>
        </div>
        </div>
    </div>
  )
}

export default Main2