import Image from "next/image"
import bg1 from "../assets/images/Main/bg1.png"


function Main() {
  return (
    <div className="container bg-slate-600 md:h-screen ">
        <div className="container bg-slate-200 md:h-3/4">

        <div className="relative">
      <Image src={bg1} width={400} alt="main-img" className=" h-full" />
      <div className="absolute top-0 left-0 w-full h-full bg-[#12125A] opacity-80">
        <h1 className="text-white">helloaa</h1>
      </div>
    </div>
</div>
        <div className="md:h-1/4 bg-red-400">

        </div>
        </div>
  )
}

export default Main