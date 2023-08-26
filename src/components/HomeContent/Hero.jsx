import React from 'react'
import HeroImg from '../../images/hero.png'
function Hero() {
  return (
    <section>
     
        <div className='container'>
        
        <div className='flex flex-wrap w-full items-center justify-center  gap-[14%]'>
         {/* hero text */}
         <div className='py-6 '>
            <h2 className='font-bold text-[#FFC300] text-[2.2rem]'>Investing in <span className='block text-black'>knowledge and your <span className='text-[#005EFF]'>Future</span></span></h2>
            <p className='pt-3'>At our organization, we are dedicated to empowering <br className=' hidden md:block'/>
              students with the tools, knowledge, and resources they <br  className=' hidden md:block'/>
              need to achieve their career aspirations and <br  className=' hidden md:block'/>
               reach their full potential.</p>
               <button className='  bg-[#005EFF]  text-white rounded-[4px] p-2 mt-3 shadow-[0px_4px_0px_0px_#FFC300] hover:shadow-[0px_-4px_0px_0px_#FFC300] '>Get In Toach</button>
         </div>

         {/* hero img */}
         <div className='md:w-[34rem] w-[18rem]'>
            <img src={HeroImg} alt="Hero image"  className='w-full'/>
         </div>
        </div>

           
        </div>

    </section>
  )
}

export default Hero