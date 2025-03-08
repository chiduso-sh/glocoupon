'use client'

import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from 'lucide-react';



const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="w-full z-20 flex items-center py-7 px-5 lg:px-[77px] border-b border-[#9DBBC3] navbar-shadow">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <Image src="/logo.png" alt="logo" className="" width={150} height={26}/>
        </Link>

        <Link href="/" className="hidden lg:block">
          {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="text-base flexCenter cursor-pointer px-3 transition-all hover:font-bold font-light">
                  {link.label}
                </Link>
              ))}
        <button className="text-lg text-[#49B14E] rounded-full border border-[#49B14E] ml-3 py-2 px-8 bg-[#E3F5E3] font-bold">
          Sign Up
        </button>
        </Link>

      </div>

      <div className="relative lg:hidden">
        <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-900 focus:outline-none z-50"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
        
        {isOpen && (
          <div
            className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg flex flex-col items-start p-4 space-y-4 
            transition-all duration-300 ease-in-out transform z-20 
            ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"}`}
        >
            <Link href="/benefits" className=" text-gray-700 hover:bg-gray-100">Benefits</Link>
            <Link href="/about" className=" text-gray-700 hover:bg-gray-100">How It Works</Link>
            <Link href="/services" className=" text-gray-700 hover:bg-gray-100">Pricing</Link>
            <Link href="/contact" className=" text-gray-700 hover:bg-gray-100">Redeem Coupon</Link>
            <Link href="/contact" className="block text-[#49B14E] rounded-full border border-[#49B14E] ml-3 my-2 py-1 px-5 text-center bg-[#E3F5E3] font-bold   hover:bg-gray-100">Sign Up</Link>
          </div>
        )}

      </div>

      {/* <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt={menu} className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)}/>

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex flex-col gap-4 items-start justify-end">
              {NAV_LINKS.map((link) => (
                <li key={link.key} className={`font-medium cursor-pointer text-[16px]`} >
                  <a href={`#${link.key}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}

    </nav>
  )
}




export default Navbar