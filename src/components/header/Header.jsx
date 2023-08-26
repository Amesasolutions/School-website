import React from 'react'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header className='bg-white w-full h-[70px] leading-[70px] flex items-center shadow-xl'>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/* ===== logo start ====== */}
          <div>
            <figure className='w-[9rem]'>
              <img src={logo} alt="somali school" />
            </figure>
          </div>
          {/* ===== logo end ====== */}
          {/* ===== menu links start ====== */}
          <div>
            <ul className="flex gap-8 ">
              <li><a href="#" className='text-[#222] font-medium hover:text-primaryColor '>Home</a></li>
              <li><a href="#" className='text-[#222] font-medium hover:text-primaryColor '>About Us</a></li>
              <li><a href="#" className='text-[#222] font-medium hover:text-primaryColor '>Our School</a></li>
              <li><a href="#" className='text-[#222] font-medium hover:text-primaryColor '>Contact Us</a></li>
            </ul>
          </div>
          {/* ===== menu links end ====== */}
          {/* ===== menu right start ====== */}
          <div className='flex items-center gap-4'>
            {/* button right */}
            <a href='#'>
              <span className='bg-white border border-solid border-primaryColor text-primaryColor py-2 px-4 
              rounded-[8px] cursor-pointer hover:bg-primaryColor hover:text-white ease-in duration-300'>
               <i class="ri-mail-send-line"></i>
                <span className='pl-2'>Contact</span>
              </span>
            </a>

            {/* Menu toggle */}
            <span className="flex md:hiddenbg-primaryColor w-[40px] h-[40px] leading-[40px] text-center text-white 
            text-2xl rounded-[5px] cursor-pointer">
             <i class="ri-menu-line"></i>
            </span>
          </div>
          {/* ===== menu right end ====== */}
        </div>
      </div>
    </header>
  )
}

export default Header