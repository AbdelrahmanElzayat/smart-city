import React from "react";
import irregation from "../../../assets/images/irregation.webp";
import irr1 from "../../../assets/images/irr1.webp";
import irr2 from "../../../assets/images/irr2.webp";
import irr3 from "../../../assets/images/irr3.webp";
import irr4 from "../../../assets/images/irr4.webp";
import irr5 from "../../../assets/images/irr5.webp";
import irr6 from "../../../assets/images/irr6.webp";
import irr7 from "../../../assets/images/irr7.webp";
import irr8 from "../../../assets/images/irr8.webp";
import { motion } from "framer-motion";

const Irrigation = () => {
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
                أنظمة الرى
              </span>
              <h2 className="font-bold lg:font-extrabold text-2xl lg:text-4xl text-right text-textMain lg:leading-[45px]">
                نظام الري الذكي
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
                نظام الري الذكي من IRRIOT يعتمد على تقنيات إنترنت الأشياء وأجهزة
                استشعار متطورة لقياس رطوبة التربة ودرجة الحرارة. يتيح إدارة
                دقيقة لعملية الري، مما يقلل استهلاك المياه بنسبة تصل إلى 25% مع
                تحسين كفاءة الري في المناطق الخضرا
              </motion.p>
            </div>
            <div className="networkList grid grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={irr1} alt="" className="w-full object-contain" />
                </div>
                <h3>جهاز تحكم رئيسي للري</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={irr2} alt="" className="w-full object-contain" />
                </div>
                <h3>جهاز تحكم عن بعد للري</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={irr3} alt="" className="w-full object-contain" />
                </div>
                <h3>
                  لوحة توصيل <br /> IRRIOT
                </h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={irr4} alt="" className="w-full object-contain" />
                </div>
                <h3>
                  مكبر إشارة <br />
                  IRRIOT
                </h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={irr5} alt="" className="w-full object-contain" />
                </div>
                <h3>مستشعر رطوبة التربة ودرجة الحرارة الحجمية</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={irr6} alt="" className="w-full object-contain" />
                </div>
                <h3>
                  مقياس أمطار
                  <br />
                  Rain Gauge
                  <br />
                  RG800
                </h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={irr7} alt="" className="w-full object-contain" />
                </div>
                <h3>
                  مقياس ضغط
                  <br />
                  IRRIOT
                </h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={irr8} alt="" className="w-full object-contain" />
                </div>
                <h3>
                  محابس متعددة
                  <br />
                  IRRIOT
                </h3>
              </div>
            </div>
          </div>

          <div className="networkImg w-full basis-1/2 rounded-3xl overflow-hidden relative shadow-video max-h-[400px] flex lg:max-h-[700px]">
            <img
              src={irregation}
              alt="camera"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Irrigation;
