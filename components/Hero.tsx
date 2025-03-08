import Image from 'next/image'


const Hero = () => {
  return (
    <section className='my-7 grid lg:grid-cols-2 items-center '>
      <div className='xl:pl-24 mx-10'>
        <p className='text-4xl/[3rem] font-bold text-[#1E272E]'>Create and Manage Data Coupons Effortlessly</p>
        <p className='font-light my-3 text-base'>Simplify data coupon creation, tracking, and redemption with our intuitive platform.</p>
        <button className='text-base text-[#49B14E] rounded-full border border-[#49B14E] py-2 px-8 bg-[#E3F5E3] font-bold '>Get Started</button>
      </div>

      <div className=' justify-self-center'>
        <Image src="/hero.png" width={630} height={630} alt='hero' className='max-w-full'/>
      </div>
    </section>
  )
}

export default Hero