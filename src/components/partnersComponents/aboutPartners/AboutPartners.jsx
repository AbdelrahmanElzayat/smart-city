import React from "react";
import aboutPartners from "../../../assets/images/aboutPartners.webp";
import { motion } from "framer-motion";
const AboutPartners = ({ title, description }) => {
  return (
    <section className="AboutPart py-16 relative">
      <div className="container">
        <div className="flex items-center gap-[25px] xl:gap-[100px] flex-col xl:flex-row">
          <div className="AboutPart_content flex flex-col items-start gap-9 basis-1/2">
            <motion.h2
              initial={{ opacity: 0, lineHeight: "100px" }}
              whileInView={{
                opacity: 1,
                lineHeight: "60px",
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-[24px] md:text-[32px] lg:text-[44px] xl:text-[50px] font-bold leading-7 xl:leading-[55px] text-right xl:w-[60%]"
              style={{ textShadow: "10px 10px 10px rgba(0, 0, 0, 0.29)" }}
            >
              {title}
            </motion.h2>
            <div className="AboutPart_content_text rounded-2xl bg-[#EBEBEB] p-5 xl:w-[85%]">
              <motion.p
                initial={{ opacity: 0, lineHeight: "40px" }}
                whileInView={{
                  opacity: 1,
                  lineHeight: "25px",
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                exit={{
                  opacity: 1,
                  lineHeight: "25px",
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                className="text-base lg:text-lg font-normal leading-7 text-right"
              >
                {description}
              </motion.p>
            </div>
          </div>
          <div className="AboutPart_image basis-1/2 rounded-3xl overflow-hidden max-h-[300px] flex items-center justify-center relative">
            <img
              src={aboutPartners}
              alt="project-part"
              className="max-w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPartners;
