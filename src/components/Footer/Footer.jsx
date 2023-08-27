import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    const date = new Date()
    setYear(date.getFullYear())
  }, [year])

  return (
    <footer className='bg-[#005EFF] mt-8 shadow-lg py-9'>
      <div className='container '>
        {/* general container */}
        <div className='flex flex-wrap  justify-start  md:justify-center gap-6  md:gap-[15%] items-center w-full '>
          {/* first container */}
          <div>
            <h1 className='text-white text-2xl font-semibold'>Somali School</h1>
            <p className='py-2 text-gray-300'>Our team of experienced
              professionals, <br className=" hidden md:block" /> educators, and
              industry experts collaborate <br className=" hidden md:block" /> to
              create a curriculum that
              blendss.</p>
            {/* social icons */}
            <div className='flex flex-row gap-4 mt-2'>
              <p className='bg-white rounded-[50%] w-[30px] h-[30px] leading-[30px] text-center  text-secondaryColor '><i class="ri-facebook-fill"></i></p>
              <p className='bg-white rounded-[50%] w-[30px] h-[30px] leading-[30px] text-center  text-secondaryColor '><i class="ri-twitter-fill"></i></p>
              <p className='bg-white rounded-[50%] w-[30px] h-[30px] leading-[30px] text-center  text-secondaryColor '><i class="ri-instagram-fill"></i></p>
            </div>
          </div>

          {/* second container */}
          <div className='flex flex-col gap-1'>
            <h1 className='text-white text-[1.5rem] font-medium'>Quick links</h1>
            <div className='flex flex-col'>
              <Link to='/'><p className='text-secondaryColor '><i class="ri-arrow-right-s-line"> <span className='text-gray-300 hover:text-secondaryColor'>Home</span> </i></p> </Link>
              <Link to='/About-us'><p className='text-secondaryColor '><i class="ri-arrow-right-s-line"> <span className='text-gray-300 hover:text-secondaryColor'>About us</span> </i></p> </Link>
              <Link to='/Our-Schools'> <p className='text-secondaryColor '><i class="ri-arrow-right-s-line"> <span className='text-gray-300 hover:text-secondaryColor'>Our Schools</span> </i></p> </Link>
              <Link to='/Contact-us'><p className='text-secondaryColor '><i class="ri-arrow-right-s-line"> <span className='text-gray-300 hover:text-secondaryColor'>Help us</span> </i></p> </Link>
            </div>
          </div>

          {/* third container */}
          <div className='flex flex-col'>
            <h1 className='text-white text-2xl mb-3 font-medium'>Contact info</h1>
            <div className='flex flex-col gap-3 '>
              <p className='text-secondaryColor '><i class="ri-map-pin-line"><span className='text-gray-300 ml-2 '>44 daarta,  Br City, Somalia, 70-102</span> </i></p>
              <p className='text-secondaryColor '><i class="ri-mail-send-line"><span className='text-gray-300 ml-2 '>somalischool@somaali.so</span></i></p>
              <p className='text-secondaryColor '><i class="ri-phone-line"><span className='text-gray-300 ml-2 '>+585-656-658-22</span></i></p>
            </div>
          </div>

        </div>

      </div>
      <div className='w-full h-[1px] bg-[#5e98fc]  mt-5'></div>
      <p className='text-center mt-9 pb-0 text-white'> © {year} Somali School . All rigths reserved</p>
    </footer>
  )
}

export default Footer