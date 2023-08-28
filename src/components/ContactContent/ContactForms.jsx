import React from 'react'
import imageC from '../../assets/images/ss2.png'
function ContactForms() {
    return (
        <section>
            {/* ========= First  Container ========= */}
            <div className='container'>
                {/* ========= Forms section======== */}
                <div className='flex flex-col md:flex-row justify-center items-center gap-[18%]'>

                    <form className=' flex flex-col gap-4'>
                        {/* ------INFO INPUTS----- */}
                        <div className='w-full md:w-[25rem] '>
                            <input
                                type="text"
                                name='user_FirstName'
                                placeholder='Full Name'
                                className='border rounded p-3 w-full outline-primaryColor '
                            />
                        </div>


                        <div className='w-full md:w-[25rem]'>
                            <input
                                type="number"
                                name='user_number'
                                placeholder='Phone Number'

                                className='border rounded p-3 w-full  outline-primaryColor'
                            />
                        </div>

                        <div className='w-full md:w-[25rem]'>
                            <input
                                type="email"
                                name='user_email'
                                placeholder='E-Mail'
                                className=' border rounded p-3 w-full outline-primaryColor'
                            />
                        </div>
                        <div className='w-full md:w-[25rem]'>
                            <textarea
                                placeholder="Message"
                                id="input"
                                className='border rounded h-[120px] w-full p-3 outline-primaryColor'

                                name='message'
                            ></textarea>
                        </div>


                        <button
                            type='submit'
                            className=' text-white w-full p-3 rounded-[6px] bg-primaryColor border border-solid border-primaryColor cursor-pointer hover:bg-white  hover:text-primaryColor ease-in duration-200'
                        >Submit</button>
                    </form>
                    {/* ========= Image section======== */}
                    <div className="md:w-[29rem] w-[18rem] mt-6 md:mt-0">
                        <figure
                            data-aos="fade-zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1500"
                        >
                            <img src={imageC} alt="Hero image" className="w-full" />
                        </figure>
                    </div>
                </div>

            </div>

            {/* ========= second Container       ========= */} 
            <div className='justify-center mt-9'>
              <h1 className='text-center text-primaryColor text-2xl font-bold my-4'>Get In Toach us</h1>
              <div className='flex flex-col md:flex-row justify-center gap-8 w-full'>
                <div className='text-center items-center'>
                  <p  className='bg-secondaryColor  justify-center rounded-[50%] w-[60px] h-[60px] leading-[60px] text-center text-white mx-auto text-3xl'><i class="ri-map-pin-fill"></i></p>  
                  <p className='text-center pt-3 '>Mogadisho, Somalia</p>
                </div>

                <div className='justify-center items-center '>
                  <p className='bg-secondaryColor justify-center rounded-[50%] w-[60px] h-[60px] leading-[60px] text-center text-white mx-auto text-3xl'><i class="ri-mail-fill"></i></p>  
                  <p className='text-center pt-3'>school@som.so</p>
                </div>

                <div className='text-center '>
                  <p  className='bg-secondaryColor justify-center rounded-[50%] w-[60px] h-[60px] leading-[60px] text-center text-white mx-auto text-3xl'><i class="ri-phone-fill"></i></p>  
                  <p className='text-center pt-3'>+252 61 8334532 </p>
                </div>

              </div>
            </div>


        </section>
    )
}

export default ContactForms