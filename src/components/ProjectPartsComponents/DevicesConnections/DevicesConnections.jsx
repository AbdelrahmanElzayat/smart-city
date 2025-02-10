import React from "react";
import network from "../../../assets/images/network.webp";
import network1 from "../../../assets/images/network1.webp";
import network2 from "../../../assets/images/network2.webp";
import network3 from "../../../assets/images/network3.webp";
import network4 from "../../../assets/images/network4.webp";
import { motion } from "framer-motion";
const DevicesConnections = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex items-center gap-[25px] xl:gap-[100px] flex-col xl:flex-row py-10 lg:py-0">
          <div className="networkContent basis-1/2">
            <div className="networkHeading flex flex-col gap-3">
              <span className="text-sm lg:text-lg font-normal lg:font-bold leading-7 text-right text-textMain">
                اجهزة الربط
              </span>
              <h2 className="font-bold lg:font-extrabold text-2xl lg:text-4xl text-right text-textMain lg:leading-[45px]">
                اجهزة الربط ستار و ميجا ميش
              </h2>
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
                className="text-sm lg:text-lg font-normal lg:font-bold lg:leading-7 text-right text-textMain"
              >
                التغطية الشبكية من Luceor مشروع الشبكة يعتمد على استخدام أحدث
                المنتجات والتقنيات لتحقيق اتصال موثوق وكفاءة عالية. فيما يلي
                أبرز المنتجات المستخدمة في الشبكة ضمن المشروع:
              </motion.p>
            </div>
            <div className="networkList grid grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img
                    src={network1}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
                <h3>جهاز ربط ستار ميش</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img
                    src={network2}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
                <h3>جهاز ربط ستار ميش 90 درجة</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img
                    src={network3}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
                <h3>جهاز ربط ستار ميش بلس</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img
                    src={network4}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
                <h3>جهاز ربط ميجا ميش برو</h3>
              </div>
            </div>
          </div>
          <div className="networkImg w-full max-h-[400px] flex basis-1/2 rounded-3xl overflow-hidden relative shadow-video">
            <img src={network} alt="network" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DevicesConnections;
