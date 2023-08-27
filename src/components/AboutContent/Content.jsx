import React from "react";
import img from "../../assets/images/Education-bro.png";

function Content() {
  return (
    <section className="!pt-8">
      <div className="container overflow-y-hidden flex flex-col">
        {/* ======= Welcome hero start ======== */}
        <div className="flex items-center justify-between flex-col md:flex-row ">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2
              data-aos="fade-right"
              data-aos-duration="1500"
              className="font-semibold text-3xl text-primaryColor"
            >
              Welcome
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1300"
              className="text-center md:text-left text-[0.8rem] md:text-lg"
            >
              Welcome to Somaali School, where our passion for change fuels our{" "}
              <br className=" hidden md:block" />
              mission to revolutionize education and empower individuals for{" "}
              <br className=" hidden md:block" />
              success, regardless of their background{" "}
              <br className=" hidden md:block" />
            </p>
          </div>
          <figure className="md:w-[28rem] w-[18rem]">
            <img src={img} alt="" />
          </figure>
        </div>
        {/* ======= Welcome hero start ======== */}
        {/* ======= Content hero start ======== */}
        <div className="flex flex-col items-center gap-8 ">
          {/* ======= text top start ======== */}
          <div className="flex flex-col gap-2 items-center">
            <h2
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-2xl md:text-3xl font-bold text-secondaryColor"
            >
              Who We Are:
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="1200"
              className="text-[0.8rem] md:text-[1rem] text-center whitespace-normal px-0 md:px-8"
            >
              At Somali Schools, we're not just educators – we're change
              advocates. Our diverse team, including educators, innovators, and
              dreamers, shares a common goal: making quality education
              accessible to all. Education is a fundamental right, and we work
              relentlessly to ensure no one is left behind.
            </p>
          </div>
          {/* ======= text top end ======== */}
          {/* ======= boxs start ======== */}
          <div className="flex flex-wrap items-center justify-center gap-4 !overflow-hidden p-2">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="w-full md:w-[20rem] flex flex-col gap-4 items-center justify-center p-8 bg-white shadow-[0px_0px_8px_rgba(0,0,0,0.1)] rounedd"
            >
              <div className="w-[50px] h-[50px] leading-[50px] text-center bg-secondaryColor text-white text-[1.3rem] rounded-full ">
                <i class="ri-focus-2-line"></i>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <h2 className="font-semibold text-xl text-primaryColor">
                  Our Mission
                </h2>
                <p className="text-[0.7rem] text-center text-txtColor whitespace-normal">
                  We're on a mission to eliminate educational boundaries.
                  Through free schools, we nurture curiosity, ignite creativity,
                  and foster a love for learning. Our commitment to excellence
                  drives us to refine our approach using the latest
                  advancements, creating an engaging and dynamic learning
                  environment.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1300"
              className="w-full md:w-[20rem] flex flex-col gap-4 items-center justify-center p-8 bg-white shadow-[0px_0px_8px_rgba(0,0,0,0.1)] rounedd"
            >
              <div className="w-[50px] h-[50px] leading-[50px] text-center bg-secondaryColor text-white text-[1.3rem] rounded-full ">
              <i class="ri-service-fill"></i>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <h2 className="font-semibold text-xl text-primaryColor">
                  Our Vision
                </h2>
                <p className="text-[0.7rem] text-center text-txtColor whitespace-normal">
                  Our determination is fueled by the stories of transformed
                  lives. From children who surpass limited opportunities to
                  excel academically, to adults rekindling their potential,
                  these success stories underscore the significance of every
                  endeavor.
                </p>
              </div>
            </div>
            <div 
            data-aos="fade-left"
            data-aos-duration="1500"
            className="w-full md:w-[20rem] flex flex-col gap-4 items-center justify-center p-8 bg-white shadow-[0px_0px_8px_rgba(0,0,0,0.1)] rounedd">
              <div className="w-[50px] h-[50px] leading-[50px] text-center bg-secondaryColor text-white text-[1.3rem] rounded-full ">
              <i class="ri-megaphone-fill"></i>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <h2 className="font-semibold text-xl text-primaryColor">
                  Join Us
                </h2>
                <p className="text-[0.7rem] text-center text-txtColor whitespace-normal">
                  Be part of our journey. Whether you're a student, volunteer,
                  supporter, or someone who shares our vision, you have a place
                  in our community. Together, we'll build a brighter future
                  through education.
                </p>
              </div>
            </div>
          </div>
          {/* ======= boxs end ======== */}
        </div>
        {/* ======= Content hero end ======== */}
      </div>
    </section>
  );
}

export default Content;
