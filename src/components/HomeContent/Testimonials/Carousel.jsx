import React, { useState } from "react";
import CarauselItems from "./CarauselItems";
import parent1 from "../../../assets/images/parent-1.jpg";
import parent2 from "../../../assets/images/parent-2.jpg";
import parent3 from "../../../assets/images/parent-3.jpg";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      Name: "Hannah Schmitt",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, ",
      Date: "May 8, 2020",
      img: parent1,
    },
    {
      Name: "Dr Saki",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, ",
      Date: "May 23, 2023",
      img: parent2,
    },
    {
      Name: "Sarah Mohamed",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, ",
      Date: "July 13, 2022",
      img: parent3,
    },
    {
        Name: "Sarah Mohamed",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, ",
        Date: "July 13, 2022",
        img: parent3,
      },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    } else if (newIndex === items.length) {
        newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <section>
      <div className="container flex flex-col gap-8 items-center justify-center">
        <h1 className="text-center font-semibold text-xl text-primaryColor">
          what our students parent say
        </h1>
        <div className="carausel w-[100%] lg:w-1/2 md:w-2/3" >
          <div
            className="inner"
            style={{ transform: `translate(-${activeIndex * 100}%)` }}
          >
            {items.map((item) => (
              <CarauselItems item={item} />
            ))}
          </div>
          <div className="carausel-buttons">
            <button
              onClick={() => updateIndex(activeIndex - 1)}
              className="arrows-btn bg-primaryColor"
            >
              <i class="ri-arrow-left-s-line"></i>
            </button>
            <div className="indicators ">
              {items.map((item, index) => {
                return (
                  <button onClick={() => updateIndex(index)} className="text-secondaryColor">
                    {index === activeIndex ? (
                    <i class="ri-checkbox-blank-circle-fill"></i>
                    ) : (
                    <i class="ri-checkbox-blank-circle-line"></i>
                    )}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => updateIndex(activeIndex + 1)}
              className="arrows-btn bg-primaryColor"
            >
              <i class="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
