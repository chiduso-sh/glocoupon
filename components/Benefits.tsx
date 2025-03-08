import Image from 'next/image'

const Benefits = () => {
  return (
    <section className='my-16 '>
      <div className='text-center sm:max-w-[50%]  items-center justify-self-center my-8 mx-4'>
      <button className="text-lg rounded-full py-2 px-5 bg-[#1E272E] font-semibold text-white">
          Benefits
        </button>
        <p className='font-semibold leading-9 text-3xl my-3 md:my-4'>Simplify Data Management with Data Coupon Platform</p>
        <p className='font-light text-sm'>Streamline data coupon management for seamless redemption</p>
      </div>
      
      <div className="grid sm:grid-cols-4 gap-4 p-6 max-w-6xl mx-auto">
      {/* Row 1 */}
        <div className="sm:col-span-1 border rounded-2xl border-[#7098A4] bg-[#F3F8F8] px-5 py-8">
          <Image src={`/muscle.png`} width={60} height={60} alt={`icon`} className="mb-3"/>
          <p className="text-sm font-semibold">Effortless Coupon Management</p>
        </div>
        <div className="sm:col-span-2 border rounded-2xl border-[#7098A4] bg-[#F3F8F8] px-5 py-8">
          <Image src={`/calc.png`} width={60} height={60} alt={`icon`} className="mb-3"/>
          <p className='text-sm font-semibold'>Easily create, edit and track your data coupons from one centralized platform</p>          
        </div>
        <div className="sm:col-span-1 border rounded-2xl border-[#7098A4] bg-[#F3F8F8] px-5 py-8">
          <Image src={`/charge.png`} width={60} height={60} alt={`icon`} className="mb-3"/>
          <p className='text-sm font-semibold'>Smooth Redemption process</p>
          
        </div>

        {/* Row 2 */}
        <div className="sm:col-span-1 border rounded-2xl border-[#7098A4] bg-[#F3F8F8] px-5 py-8">
          <Image src={`/ball.png`} width={60} height={60} alt={`icon`} className="mb-3"/>
          <p className='text-sm font-semibold'>Transparent Data Allocation</p>
          
        </div>
        <div className="sm:col-span-1 border rounded-2xl border-[#7098A4] bg-[#F3F8F8] px-5 py-8">
          <Image src={`/ink.png`} width={60} height={60} alt={`icon`} className="mb-3"/>
          <p className='text-sm font-semibold'>Customizable Coupon Creation</p>          
        </div>
        <div className="sm:col-span-2 border rounded-2xl border-[#7098A4] bg-[#F3F8F8] px-5 py-8">
          <Image src={`/scissor.png`} width={60} height={60} alt={`icon`} className="mb-3"/>
          <p className='text-sm font-semibold'>Tailor your Coupons To Suit Your Business Needs With Customizable Options</p>          
        </div>

        {/* Row 3 */}
        <div className="sm:col-span-2 border rounded-2xl border-[#7098A4] bg-[#F3F8F8] px-5 py-8">
          <Image src={`/greensmiley.png`} width={60} height={60} alt={`icon`} className="mb-3"/>
          <p className='text-sm font-semibold'>Ensure Hassle-free redemption for your customers with our seamless process</p>
          
        </div>
        <div className="sm:col-span-2 border rounded-2xl border-[#7098A4] bg-[#F3F8F8] px-5 py-8">
          <Image src={`/chart.png`} width={60} height={60} alt={`icon`} className="mb-3"/>
          <p className='text-sm font-semibold'>Gain Insights Into Data Allocation And Usage With Transparent Reporting Features</p>          
        </div>
    </div>
    <div className='justify-self-center my-6'>
      <button className="text-lg rounded-full py-2 px-5 bg-[#49B14E] border border-[#49B14E] font-semibold text-white">
            Get Started
      </button>

    </div>


    </section>
  )
}

export default Benefits