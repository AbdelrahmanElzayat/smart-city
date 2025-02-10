import React from "react";
import op1 from "../../../assets/images/op1.webp";
import op2 from "../../../assets/images/op2.webp";
import op3 from "../../../assets/images/op3.webp";
import op4 from "../../../assets/images/op4.webp";
import { motion } from "framer-motion";
const Advantages = () => {
  return (
    <div className="Advantages">
      <div className="container">
        <div className="controlHeading flex flex-col gap-3">
          <span className="text-lg font-bold leading-7 text-right text-textMain">
            مميــزات الشركة
          </span>
          <motion.h2
            initial={{ opacity: 0, lineHeight: "60px" }}
            whileInView={{
              opacity: 1,
              lineHeight: "35px",
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="font-extrabold text-right text-textMain leading-7 lg:leading-[45px] xl:w-[30%] text-[24px] md:text-[32px] lg:text-4xl"
          >
            المزايا التي تقدمها BACCO في المنهجية المختلطة
          </motion.h2>
        </div>
      </div>
      <div className="advantagesPolygons bg-[#EBE8D8] w-full my-16 flex justify-center items-center py-5">
        <div className="container">
          <div className="relative grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className="polygonCard flex justify-center items-center flex-col gap-3"
            >
              <span className="text-lg font-bold text-center">المرونة</span>
              <div
                className="imgPolygon max-w-[250px] min-h-[200px] max-h-[250px] overflow-hidden rounded-2xl border-2 border-white shadow-custom"
                // style={{
                //   clipPath:
                //     "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                // }}
              >
                <img src={op1} alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm font-normal leading-7 text-center ">
                التعامل مع المتغيرات في المشاريع التقنية
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="polygonCard flex justify-center items-center flex-col gap-3"
            >
              <span className="text-lg font-bold text-center">
                تحقيق التكامل
              </span>
              <div
                className="imgPolygon max-w-[250px] min-h-[200px] max-h-[250px] overflow-hidden rounded-2xl border-2 border-white shadow-custom"
                // style={{
                //   clipPath:
                //     "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                // }}
              >
                <img src={op2} alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm font-normal leading-7 text-center ">
                ربط العمليات التقنية بالبنية التحتية بسلاسة
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="polygonCard flex justify-center items-center flex-col gap-3"
            >
              <span className="text-lg font-bold text-center">
                التخطيط الصارم
              </span>
              <div
                className="imgPolygon max-w-[250px] min-h-[200px] max-h-[250px] overflow-hidden rounded-2xl border-2 border-white shadow-custom"
                // style={{
                //   clipPath:
                //     "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                // }}
              >
                <img src={op3} alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm font-normal leading-7 text-center ">
                ضمان إنجاز مراحل الإنشاء والبنية التحتية بكفاءة
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="polygonCard flex justify-center items-center flex-col gap-3"
            >
              <span className="text-lg font-bold text-center">
                التخطيط الصارم
              </span>
              <div
                className="imgPolygon max-w-[250px] min-h-[200px] max-h-[250px] overflow-hidden rounded-2xl border-2 border-white shadow-custom"
                // style={{
                //   clipPath:
                //     "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                // }}
              >
                <img src={op4} alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm font-normal leading-7 text-center ">
                ضمان إنجاز مراحل الإنشاء والبنية التحتية بكفاءة
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
