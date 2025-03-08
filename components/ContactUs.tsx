import Image from "next/image"


const ContactUs = () => {
  return (
    <section className=" relative overflow-hidden h-[80vh] items-center flex justify-center">
      {/* <Image src="/contactusbg.png" width={100} height={100}
       alt="Background Gradient"
       className="absolute inset-0 w-full h-full object-cover opacity-100" /> */}
       {/* <div className=" bg-[url(/contactusbg.png)]  bg-cover bg-center  absolute inset-0 w-full h-full object-cover opacity-100"></div> */}

       <div className="absolute inset-0 md:bg-[url(/contactusbg.png)] bg-contain bg-center bg-no-repeat"></div>

      <div className="relative z-10 justify-self-center  items-center text-center sm:max-w-[70%] max-w-[80%] ">
        <Image src={`/giftcard.png`} width={60} height={60} alt={`icon`} className="mb-3 max-w-full justify-self-center"/>
        <p className="text-2xl font-medium">Ready To Revolutionize Your Data Management?</p>
        <p className="font-extralight my-4">Experience the power of streamlined data coupon management and seamless redemption today.</p>
        <button className="text-lg rounded-full py-4 px-6 md:bg-[#FFFFFF] bg-[#E0EBED] font-semibold text-[#49B14E]">
            Contact Us      
        </button>

      </div>
    </section>
  )
}

export default ContactUs