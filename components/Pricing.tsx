import Image from 'next/image'


const Pricing = () => {
  return (
    <section className='sm:flex items-center justify-between md:pl-10 xl:ml-24 xl:mr-24 bg-gradient-to-r from-[#FFFDEB] to-[#FEF5C3] pb-4 rounded-3xl my-20 pt-4 mx-4'>
      <div className='mb-4 px-3 sm:mb-0 sm:container sm:p-0'>
        <p className='text-[#452203] text-3xl font-semibold'>Discover Customized Pricing Solutions</p>
        <p className='text-[#452203] font-extralight text-sm sm:text-base my-3'>Find the perfect plan for your budget and needs</p>
        <button className="text-base rounded-full py-2 px-6 bg-[#452203] font-semibold text-[#F6F6F6]">
          Request Pricing
        </button>
      </div>

      <div className=''>
      <Image src="/pricing.png" width={630} height={630} alt='hero' className='justify-self-end items-end max-w-full'/>
      </div>
    </section>
    // <section className='mx-auto flex items-center justify-between pl-24 bg-gradient-to-r from-[#FFF8E8] via-[#FFF1C7] to-[#FFDC75] rounded-3xl'>
    //   <div className=''>
    //     <p className='text-[#452203] text-3xl font-semibold'>Discover Customized Pricing Solutions</p>
    //     <p className='text-[#452203] font-extralight text-sm my-3'>Find the perfect plan for your budget and needs</p>
    //     <button className="text-base rounded-full py-2 px-6 bg-[#452203] font-semibold text-[#F6F6F6]">
    //       Request Pricing
    //     </button>
    //   </div>

    //   <div className=''>
    //   <Image src="/pricing.png" width={630} height={630} alt='hero' className='justify-self-end'/>
    //   </div>
    // </section>
    
  )
}

export default Pricing