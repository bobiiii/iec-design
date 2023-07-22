import React from 'react'
import box1 from "../assets/images/main3/box1.png"
import box2 from "../assets/images/main3/box2.png"
import box3 from "../assets/images/main3/box3.png"

function Main3() {
    return (
        <div className='bg-[#EFEFFF] w-full py-5 my-5
        '>
            <div className=' w-4/5 mx-auto'>
            <div className='flex justify-between items-center'>
                <div className=''>
                    <h3 className='text-xl '>Our Offerings</h3>
                    <h3 className='text-3xl font-bold'>Featured Tech Courses</h3>
                    <h3>Explore our featured Tech programs, focused on delivering high-demand skills.</h3>
                    
                </div>
                <div>
                    <button className='px-3 py-1 text-[#155289]  border border-[#155289]'>View all</button>
                </div>
            </div>
            <div>Cards</div>
            </div>
        </div>
    )
}

export default Main3