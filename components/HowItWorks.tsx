import { HOW_IT_WORKS } from "@/constants"
import Image from "next/image"


const HowItWorks = () => {  
  return (
    <section className="my-12 px-5 xl:pl-24">
      <div className="mb-3 md:pl-10">
        <button className="text-lg rounded-full py-2 px-6 bg-[#1E272E] font-semibold text-white">
          How It Works
        </button>
        <p className="sm:my-4 my-3 font-semibold text-[#0D260F] text-3xl ">Streamlined Integration Process</p>
        <p className="font-light text-[#0D260F] tracking-tight text-sm sm:text-base  ">Effortlessly Implement Data Coupon Solutions</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-16 justify-between my-8">
      {HOW_IT_WORKS.map((box) => (
        <div 
          key={box.key} 
          className={`border rounded-2xl ${box.bgcolor} ${box.border} px-5 py-8`}>
          <Image 
            src={`${box.icon}`} 
            width={60} 
            height={60} 
            alt={`${box.key}`} 
            className="mb-3"
          />
          <p className="text-sm font-semibold">{box.label}</p>
        </div>      
      ))}
      </div>
      
    </section>
  )
}

// {NAV_LINKS.map((link) => (
//   <Link href={link.href} key={link.key} className="text-base flexCenter cursor-pointer px-3 transition-all hover:font-bold font-light">
//     {link.label}
//   </Link>
// ))}

export default HowItWorks