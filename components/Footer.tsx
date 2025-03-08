import { FOOTER_SHI } from "@/constants"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className='sm:mx-[77px] mx-5 text-center items-center grid justify-center bg-[#E0EBED] py-10 rounded-[59px]'>
      <div className="flex justify-center">
        <Image width={160} height={100} src="/logo.png" alt="logo" className=""/>
      </div>

      <div className="flex-row flex my-6 xl:my-8 mx-3 justify-between">
      {FOOTER_SHI.map((link) => (
            <p key={link.key} className="sm:px-3 font-light text-sm">
              {link.label}
            </p>
          ))}
      </div>

      <p className="bg-[#1E272E] rounded-full text-white sm:p-5 p-2 mx-5 text-xs lg:text-sm">
      © 2024 GLO Data Coupon Platform. All Rights Reserved.
      </p>


    </footer>
  )
}

export default Footer