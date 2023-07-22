import React from 'react'
import Image from 'next/image'
import img2 from "../assets/images/main2/img2.png"

function Main2() {
  return (
    <div className=' h-auto w-full'>
        <div className='md:w-4/5 mx-auto max-w-[1440px]  md:flex items-center justify-between'>
        <div className='flex-1 px-5'>
            <h3 className='font-bold text-3xl py-3'>Tech Apprenticeship Program</h3>
            <p>Registration for our Tech Apprenticeship Program is now open! Dont miss the opportunity to gain hands-on experience, mentorship, and industry-relevant skills. Apply now to secure your spot and embark on a rewarding tech journey.</p>
            <h3 className='py-5 my-4 text-xl text-[#12125A] font-bold'>Deadline: 7th Aug, 2023</h3>
            <button className=" font-bold text-lg  w-56 h-12 rounded-md bg-opacity-100 bg-red-600 text-white">Apply Now</button>
        </div>
        <div className='hidden md:block '>
            <Image src={img2}/>
        </div>
        </div>
    </div>
  )
}

export default Main2