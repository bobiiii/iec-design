import Image from "next/image"
import bg1 from "../assets/images/Main/bg1.png"


function Main() {
  return (
    <div className=" bg-slate-600 md:h-screen ">
      <div className=" bg-slate-200 md:h-3/4">

        <div className="relative h-full " style={{ backgroundBlendMode: "color-dodge" }}>
          <Image src={bg1} width={400} alt="main-img" className="w-full h-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#12125A] opacity-80">
            <div className="text-white  w-4/5 h-full  flex flex-col mx-auto  justify-center">
              <h1 className="text-3xl font-bold my-2 " >Ignite Your Future with Advanced Skills for Success in the Digital Era</h1>
              <p className="font-normal text-xl" >Unlock your potential and gain a competitive edge with our featured courses, designed to provide you with practical skills, industry-relevant knowledge, and a pathway to excel in your desired field.</p>
              <div className="mt-14">
                <button className="me-3 font-bold text-lg w-56 h-12 rounded-md bg-opacity-100 border border-red-500  bg-white text-red-600">Explore Courses</button>
                <button className="ms-3 font-bold text-lg  w-56 h-12 rounded-md bg-opacity-100 bg-red-600 text-white">Apply Now</button>
              </div>

            </div>
            <div className="absolute top-[90%] left-0 w-full  h-full ">
              <h2 className="text-white w-4/5 mx-auto h-1/5  bg-yellow-300">another box</h2>
            </div>
            
          </div>
          

        </div>
      </div>
      <div className="md:h-1/4 bg-red-400">

      </div>
    </div>
  )
}

export default Main