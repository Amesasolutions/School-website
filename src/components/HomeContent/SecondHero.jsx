import React from "react";
import heroImg from "../../assets/images/imgHero.png";
import Countup from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

function SecondHero() {
  const [counter, setCounter] = useState(false);

  return (
    <section>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center">
          {/* ====== Second hero img start ====== */}
          <figure
            data-aos="fade-zoom-in"
            data-aos-delay="50"
            data-oas-duration="1000"
            className="md:w-[34rem] w-[18rem]"
          >
            <img src={heroImg} alt="" className="w-full" />
          </figure>
          {/* ====== Second hero img end ====== */}
          {/* ====== Second hero text img end ====== */}
          <div className="flex flex-col gap-6">
            {/* ======= text start ======== */}
            <div className="flex flex-col gap-4">
              <h2
                data-aos="fade-right"
                data-aos-duration="1300"
                className="text-3xl sm:text-4xl font-bold text-primaryColor text-center md:text-left"
              >
                We help students grow <br className=" hidden md:block" />
                <span
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  className="font-medium text-secondaryColor"
                >
                  their careers
                </span>
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1300"
                className="text-sm text-center md:text-left"
              >
                Our team of experienced professionals, educators, and industry
                <br className=" hidden md:block" />
                experts collaborate to create a curriculum that blends
                <br className=" hidden md:block" />
                theoretical knowledge with practical insights.
                <br className=" hidden md:block" />
              </p>
            </div>
            {/* ======= text end ======== */}

            {/* ======= Counter start ======== */}
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <div className="flex items-center justify-center md:justify-start gap-5">
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl sm:text-3xl font-medium text-secondaryColor">
                    {counter && (
                      <Countup start={0} end={20} duration={3} suffix="K+" />
                    )}
                  </h2>
                  <h2 className="text-xl font-medium text-primaryColor ">
                    Students
                  </h2>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl sm:text-3xl font-medium text-secondaryColor">
                    {counter && (
                      <Countup start={0} end={199} duration={3} suffix="+" />
                    )}
                  </h2>
                  <h2 className="text-xl font-medium text-primaryColor ">
                    Schools
                  </h2>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl sm:text-3xl font-medium text-secondaryColor">
                    {counter && (
                      <Countup start={0} end={120} duration={3} suffix="+" />
                    )}
                  </h2>
                  <h2 className="text-xl font-medium text-primaryColor ">
                    Teachers
                  </h2>
                </div>
              </div>
            </ScrollTrigger>

            {/* ======= Counter end ======== */}
          </div>
          {/* ====== Second hero text end ====== */}
        </div>
      </div>
    </section>
  );
}

export default SecondHero;
