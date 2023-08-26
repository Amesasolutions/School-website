import React from "react";
import {Link} from 'react-router-dom'

function Divider() {
  return (
    <section className="w-full bg-primaryColor">
      <div className="container flex flex-col gap-4 items-center justify-center">
        <h3 className="text-xl sm:text-2xl text-center text-white font-semibold">
          Transforming Futures: Embrace Free Education and Support Our Vision!
        </h3>
        <Link to="/Contact-us">
          <span
            className="bg-secondaryColor border border-solid border-secondaryColor text-white py-2 px-4 
              rounded-[8px] cursor-pointer hover:bg-primaryColor  hover:text-secondaryColor ease-in duration-300"
          >
            <i class="ri-hand-heart-line"></i>
            <span className="pl-2">Help Us</span>
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Divider;
