import React from "react";
import camera from "../../../assets/images/camera.webp";
import camera1 from "../../../assets/images/camera1.webp";
import camera2 from "../../../assets/images/camera2.webp";
import camera3 from "../../../assets/images/camera3.webp";
import camera4 from "../../../assets/images/camera4.webp";
import camera5 from "../../../assets/images/camera5.webp";
import camera6 from "../../../assets/images/camera6.webp";
import { motion } from "framer-motion";
const Camera = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:py-10"
    >
      <div className="container">
        <div className="flex items-center gap-[25px] xl:gap-[100px] flex-col-reverse xl:flex-row py-10 lg:py-0">
          <div className="networkImg w-full basis-1/2 rounded-3xl overflow-hidden relative shadow-video h-[400px] lg:h-[700px] flex">
            <img
              src={camera}
              alt="camera"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="networkContent basis-1/2">
            <div className="networkHeading flex flex-col gap-3">
              <span className="text-sm lg:text-lg font-normal lg:font-bold leading-7 text-right text-textMain">
                الكاميرات و الاشارات
              </span>
              <h2 className="font-bold lg:font-extrabold text-2xl lg:text-4xl text-right text-textMain lg:leading-[45px]">
                ⁠كاميرات الطرق والاشارات
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
                كاميرات ذكية مخصصة لمراقبة حركة المرور بدقة عالية، مزودة بقدرات
                التعرف على لوحات السيارات وتحليل بيانات المرور واكتشاف الحوادث،
                مما يساهم في تحسين انسيابية الحركة وضمان سلامة الطرق
              </motion.p>
            </div>
            <div className="networkList grid grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={camera1} alt="" className="w-full object-contain" />
                </div>
                <h3>كاميرات المراقبة و ملحقاتها</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={camera2} alt="" className="w-full object-contain" />
                </div>
                <h3>توصيلات وأجهزة الربط</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={camera3} alt="" className="w-full object-contain" />
                </div>
                <h3>Hybrid SAN HikVision</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={camera4} alt="" className="w-full object-contain" />
                </div>
                <h3>
                  تخزين <br />
                  HikVision
                </h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={camera5} alt="" className="w-full object-contain" />
                </div>
                <h3>
                  نظام كاميرات المراقبة <br />
                  HikCentral Lite
                </h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={camera6} alt="" className="w-full object-contain" />
                </div>
                <h3>
                  شاشات مركز التحكم واجهزته <br />
                  HikVision
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Camera;
