import React from "react";
import companyMethodology from "../../../assets/images/bgMetho.webp";
import bgMetho from "../../../assets/images/bgMetho.png";
import { motion } from "framer-motion";
const CompanyMethodology = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="CompanyMethodology bg-cover bg-center lg:max-h-[500px] flex justify-center items-center py-5 my-8 lg:my-20"
      style={{ backgroundImage: `url(${bgMetho})` }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[80px] items-center">
          <div className="contentAbout lg:basis-[60%] flex flex-col gap-7 text-white">
            <div className="contentAbout-text">
              <span className="text-base md:text-lg font-bold leading-[28px]">
                منهجية الشركة
              </span>
              <motion.h2
                initial={{ opacity: 0, lineHeight: "60px" }}
                whileInView={{
                  opacity: 1,
                  lineHeight: "35px",
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="font-extrabold leading-7 md:leading-[45px] text-[24px] md:text-[35px] text-right lg:w-[70%]"
              >
                كيفية منهجية الشركة للإدارة المرنة والإدارة التقليدية
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, lineHeight: "40px" }}
              whileInView={{
                opacity: 1,
                lineHeight: "25px",
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              exit={{
                opacity: 1,
                lineHeight: "25px",
                transition: { delay: 0.2, duration: 0.5 },
              }}
              className="text-lg font-normal leading-7"
            >
              ستقوم الشركة بإدارة المنصة الالكترونية لإدارة وتشغيل المدن الذكية
              وأيضا الدعم و التشغيل للمنصات و مركز القيادة وعمليات التشغيل للمدن
              الذكية عن طريق منهجية
            </motion.p>
            <ul className="flex flex-col gap-2">
              <li className="relative flex items-center gap-3 text-lg font-normal leading-6 text-right ">
                <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                أدوار سكروم
              </li>
              <li className="relative flex items-center gap-3 text-lg font-normal leading-6 text-right ">
                <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                أدوات سكروم
              </li>
              <li className="relative flex items-center gap-3 text-lg font-normal leading-6 text-right ">
                <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                اجتماعات سكروم
              </li>
            </ul>
          </div>
          <div className="CompanyMethodology_img lg:max-w-[500px] lg:h-[650px] overflow-hidden rounded-3xl ">
            <img
              src={companyMethodology}
              alt="companyMethodology"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyMethodology;
