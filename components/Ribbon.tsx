import Image from "next/image"

const Ribbon = () => {
  return (
    <section className='border mx-4 rounded-3xl lg:rounded-[75px] justify-between border-[#9DBBC3] grid sm:grid-cols-2 items-center bg-[#F3F8F8] pt-10 lg:pt-10 sm:pt-5'>
      <div className="md:pl-10 xl:pl-24 px-5 sm:pr-0">
        <p className="font-semibold text-2xl sm:text-3xl text-[#0D260F] mb-3 lg:mb-5 ">Revolutionizing Customer Rewards with Data</p>
        <p className="text-[#0D260F]/6 text-sm pb-3 lg:pr-12 font-normal">Empower your business with our Data Coupon Platform. Simplifying data management and enhancing customer engagement, it's ideal for businesses of all sizes. Offering immediate value to subscribers, we transform customer interactions.</p>
      </div>

      <div className="justify-self-end">
        <Image src="/ribbon.png" width={600} height={600} className="" alt="ribbon shi" />

      </div>
      
    </section>

  )
}

export default Ribbon