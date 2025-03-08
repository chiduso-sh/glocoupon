import { UNIVERSAL_COUPON } from '@/constants'


const UniversalCoupon = () => {
  return (
    <section className='md:px-10 lg:pr-0 xl:px-24 my-10'>
      <div className='container max-w-[80%] sm:max-w-[68%] text-center justify-self-center'>
        <p className='text-3xl font-bold text-[#1E272E]'>Unlock Flexibility with Universal Coupons</p>
        <p className='font-light text-base sm:text-lg my-4'>Reach Every Network, Delight Every Customer</p>
        <p className='text-sm leading-1 font-extralight tracking-tighter'>Discover the convenience of our Universal Coupons, valid across Glo, MTN, Airtel, and 9mobile. Streamline your promotions and reach a broader audience with a single, versatile solution that enhances customer satisfaction.</p>
      </div>

      <div className='mx-5 sm:mx-0 grid md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-20 my-10 xl:my-20 lg:my-12'>        
        {UNIVERSAL_COUPON.map((universe) => (
          <div className='rounded-3xl border border-[#CCCCCC] px-6 py-8' key={universe.key}>
            <p className='font-bold text-sm'>{universe.header}</p>
            <p className='text-sm tracking-tighter font-light mt-2'>{universe.label}</p>
        </div>
        ))}

      </div>

      <div className='justify-self-center'>
          <button className="text-sm sm:text-lg rounded-full py-3 px-4 sm:py-4 sm:px-6 bg-[#49B14E] border border-[#49B14E] font-semibold text-white">
                Get Started with Universal Coupons
          </button>
      </div>
    </section>
  )
}

export default UniversalCoupon