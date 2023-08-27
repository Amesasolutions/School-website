import React from "react";

function CarauselItems({ item }) {
  return (
    <div className="carausel-item">
      <img
        className="carausel-img w-[5rem] md:w-[8rem]"
        src={item.img}
        alt=""
      />
      <div className="carausel-item-text">
        <h2 className="text-[0.7rem] md:text-xl font-semibold text-txtColor">
          {item.Name} 
          <span className="pl-1 text-[#00befe] font-normal">
            <i class="ri-verified-badge-fill"></i>
          </span>
        </h2>
        <p className="text-[0.5rem] max-[370px]:text-[0.4rem] md:text-[0.7rem] text-gray-500">
          {item.Description}
        </p>
        <p className="text-gray-800 text-[0.6rem] ">- {item.Date}</p>
      </div>
    </div>
  );
}

export default CarauselItems;
