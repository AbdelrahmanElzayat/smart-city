import React from "react";
const ScreenControl = ({ title, heading, list, image }) => {
  return (
    <section className="ControlRoom">
      <div className="container">
        <div className="flex items-center gap-[25px] lg:gap-[100px]">
          <div className="controlContent basis-1/2 flex flex-col gap-9">
            <div className="controlHeading flex flex-col gap-3">
              <span className="text-lg font-bold leading-7 text-right text-textMain">
                {title}
              </span>
              <h2 className="font-extrabold text-4xl text-right text-textMain leading-[45px]">
                {heading}
              </h2>
            </div>
            <ul className="flex flex-col gap-2">
              {list?.map((item, i) => (
                <li
                  key={i}
                  className="relative flex items-center gap-3 text-[15px] font-light leading-6 text-right text-textMain"
                >
                  <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="COntrolImg basis-1/2  rounded-3xl overflow-hidden relative shadow-video h-[370px] flex justify-center items-center">
            <img
              src={image}
              alt="controlRoom"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenControl;
