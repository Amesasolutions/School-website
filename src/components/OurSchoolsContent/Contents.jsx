import React from "react";
import img1 from "../../assets/images/school-1.jpg";

function Contents() {
  return (
    <section className="pt-8">
      <div className="container flex flex-col items-center">
        {/* ======== title start ======== */}
        <p className="text-[0.8rem] sm:text-lg text-center whitespace-normal text-txtColor">
          <span className="font-medium text-primaryColor">
            Somali <span className="text-secondaryColor">School</span>
          </span>{" "}
          Arts, Design & Architecture is home to six schools specialising in a
          range of degrees and programs, study areas, research and engagement.
          We’re a diverse community of students, staff, alumni and industry
          partners working a wide range of disciplines.
        </p>
        {/* ======== title end ======== */}
        {/* ======== boxs start ======== */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 overflow-hidden">

          <div 
          data-aos="fade-right"
          data-aos-duration="1200"
          className="bg-white w-full md:w-[22rem] flex flex-col gap-3 overflow-hidden shadow-[0px_0px_8px_rgba(0,0,0,0.1)] rounded">
            <figure className="w-full">
              <img src={img1} alt="" />
            </figure>
            <div className="flex flex-col gap-3 px-4">
              <h3 className="text-lg font-semibold">Banaadir zone School</h3>
              <p className="whitespace-normal text-[0.8rem] ">
                We lead the study and practice of education nationally and
                internationally through excellence in learning, teaching and
                research. Learn with us to influence public policy and improve
                community life. We seek to nurture global and ethical citizens
                who are passionately committed to the continuous improvement of
                education worldwide.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2 px-4 pb-5">
            <h1 className='text-txtColor text-sm font-medium'>Contact info</h1>
            <div className='flex flex-col gap-1 '>
              <p className='text-secondaryColor '><i class="ri-map-pin-line"><span className='text-gray-500 ml-2 '>44 daarta, Somalia, 70-102</span> </i></p>
              <p className='text-secondaryColor '><i class="ri-mail-send-line"><span className='text-gray-500 ml-2 '>somalischool@somaali.so</span></i></p>
              <p className='text-secondaryColor '><i class="ri-phone-line"><span className='text-gray-500 ml-2 '>+585-656-658-22</span></i></p>
            </div>
            </div>
          </div>

          <div 
          data-aos="fade-up"
          data-aos-duration="1200"
          className="bg-white w-full md:w-[22rem] flex flex-col gap-3 overflow-hidden shadow-[0px_0px_8px_rgba(0,0,0,0.1)] rounded">
            <figure className="w-full">
              <img src={img1} alt="" />
            </figure>
            <div className="flex flex-col gap-3 px-4">
              <h3 className="text-lg font-semibold">Banaadir zone School</h3>
              <p className="whitespace-normal text-[0.8rem] ">
                We lead the study and practice of education nationally and
                internationally through excellence in learning, teaching and
                research. Learn with us to influence public policy and improve
                community life. We seek to nurture global and ethical citizens
                who are passionately committed to the continuous improvement of
                education worldwide.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2 px-4 pb-5">
            <h1 className='text-txtColor text-sm font-medium'>Contact info</h1>
            <div className='flex flex-col gap-1 '>
              <p className='text-secondaryColor '><i class="ri-map-pin-line"><span className='text-gray-500 ml-2 '>44 daarta, Somalia, 70-102</span> </i></p>
              <p className='text-secondaryColor '><i class="ri-mail-send-line"><span className='text-gray-500 ml-2 '>somalischool@somaali.so</span></i></p>
              <p className='text-secondaryColor '><i class="ri-phone-line"><span className='text-gray-500 ml-2 '>+585-656-658-22</span></i></p>
            </div>
            </div>
          </div>

          <div 
          data-aos="fade-left"
          data-aos-duration="1200"
          className="bg-white w-full md:w-[22rem] flex flex-col gap-3 overflow-hidden shadow-[0px_0px_8px_rgba(0,0,0,0.1)] rounded">
            <figure className="w-full">
              <img src={img1} alt="" />
            </figure>
            <div className="flex flex-col gap-3 px-4">
              <h3 className="text-lg font-semibold">Banaadir zone School</h3>
              <p className="whitespace-normal text-[0.8rem] ">
                We lead the study and practice of education nationally and
                internationally through excellence in learning, teaching and
                research. Learn with us to influence public policy and improve
                community life. We seek to nurture global and ethical citizens
                who are passionately committed to the continuous improvement of
                education worldwide.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2 px-4 pb-5">
            <h1 className='text-txtColor text-sm font-medium'>Contact info</h1>
            <div className='flex flex-col gap-1 '>
              <p className='text-secondaryColor '><i class="ri-map-pin-line"><span className='text-gray-500 ml-2 '>44 daarta, Somalia, 70-102</span> </i></p>
              <p className='text-secondaryColor '><i class="ri-mail-send-line"><span className='text-gray-500 ml-2 '>somalischool@somaali.so</span></i></p>
              <p className='text-secondaryColor '><i class="ri-phone-line"><span className='text-gray-500 ml-2 '>+585-656-658-22</span></i></p>
            </div>
            </div>
          </div>
        </div>
        {/* ======== boxs end ======== */}
      </div>
    </section>
  );
}

export default Contents;
