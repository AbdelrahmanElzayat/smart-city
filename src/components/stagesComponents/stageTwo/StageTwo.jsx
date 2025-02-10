import { motion } from "framer-motion";
import React from "react";
const StageTwo = ({ title, heading, list, image }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }} className="ControlRoom">
      <div className="container">
        <div className="flex items-center gap-[50px] xl:gap-[100px] flex-col lg:flex-row">
          <div className="controlContent basis-1/2 flex flex-col gap-5 lg:gap-9">
            <div className="controlHeading flex flex-col lg:gap-3">
              <span className="text-sm lg:text-lg font-normal lg:font-bold leading-7 text-right text-textMain">
                {title}
              </span>
              <h2 className="font-bold lg:font-extrabold text-2xl lg:text-4xl text-right text-textMain lg:leading-[45px]">
                {heading}
              </h2>
            </div>
            <motion.ul
              initial={{ opacity: 0, gap: "25px" }}
              whileInView={{
                opacity: 1,
                gap: "8px",
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }} className="flex flex-col gap-2">
              {list?.map((item, i) => (
                <li
                  key={i}
                  className="relative flex items-center gap-3 text-base lg:text-lg font-normal leading-6 text-right text-textMain"
                >
                  <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>
          <div className="COntrolImg w-full lg:basis-1/2  rounded-3xl overflow-hidden relative shadow-video max-h-[400px] lg:h-[500px] lg:max-w-[500px]">
            <img
              src={image}
              alt="controlRoom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StageTwo;
