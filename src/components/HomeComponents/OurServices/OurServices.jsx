import React, { useState } from "react";
import tower from "../../../assets/images/tower.webp";
import { motion } from "framer-motion";

const OurServices = () => {
  const [activeService, setActiveService] = useState(0); // الحالة لتتبع الزر النشط

  // البيانات الخاصة بكل خدمة
  const services = [
    {
      title: "منصة التحكم",
      description:
        "يتم إنشاء منصة بمعايير عالمية تتكامل مع جميع الأنظمة الذكية، مع دعم التطورات المستقبلية لضمان التكامل والاستدامة.",
    },
    {
      title: "الشبكات",
      description:
        "شبكات WiMesh من Lucieor تم تصميمها لتوفير اتصال عالي الأداء للأجهزة الذكية، مع ميزة التبديل التلقائي بين الاتصال اللاسلكي والـ LTE لضمان استمرارية الخدمة",
    },
    {
      title: "الإنارة",
      description:
        "نظام الانارة الذكية من Schreder يتيح إضاءة ذكية تعتمد على مستشعرات متقدمة لتعديل الإضاءة حسب الظروف البيئية وحركة المرور، مع توفير تحديثات دورية عبر الشبكات",
    },
    {
      title: "كاميرات الطرق",
      description:
        "كاميرات Hikvision عالية الدقة تتيح مراقبة شاملة ومتكاملة للطرق مع تقنيات تحليل الفيديو الذكي للكشف عن الحوادث وإدارة حركة المرور",
    },
    {
      title: "كاميرات قياس الرضا",
      description:
        "تستخدم أنظمة Hikvision لتحليل مشاعر المستخدمين وقياس مستويات الرضا بناءً على التعابير الوجهية والأنماط السلوكية",
    },
    {
      title: "نظام الري الذكي",
      description:
        "نظام الري الذكي من IRRIOT يعتمد على مستشعرات متقدمة لتحليل مستوى الرطوبة وتوقعات الطقس لضمان ري فعّال ومستدام للمساحات الخضراء",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="OurServices my-4 lg:my-10"
    >
      <div className="container h-full">
        <div className="rounded-[38px] bg-custom-gradient p-9 h-full flex flex-col lg:flex-row items-start relative lg:max-h-[600px]">
          <div className="content lg:basis-[50%] flex flex-col gap-7">
            <div className="contentHeader flex flex-col items-start">
              {/* <span className="text-base md:text-lg font-bold leading-[28px] text-right">
                عنــوان تجريبـى
              </span> */}
              <motion.h2
                initial={{ opacity: 0, lineHeight: "60px" }}
                whileInView={{
                  opacity: 1,
                  lineHeight: "37px",
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="font-extrabold leading-7 md:leading-[45px] text-[24px] md:text-[35px] text-right lg:w-[60%]"
              >
                التقنيات الذكية المستخدمة في مشروع المدينة الذكية
              </motion.h2>
            </div>
            <div className="services flex flex-col gap-5">
              <div className="servicesBtns flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
                {services.map((service, index) => (
                  <button
                    key={index}
                    className={`rounded-[23px] px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm lg:text-base font-bold text-center transition-all duration-300 ${
                      activeService === index
                        ? "bg-gradient-to-t from-[#FBEAE3] to-[#C8A04F] shadow-lg"
                        : "bg-gradient-to-t from-[#FBEAE3] to-[#8E929D] font-light hover:scale-105"
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
              <div className="serviceContent">
                <motion.p
                  initial={{ opacity: 0, lineHeight: "60px" }}
                  whileInView={{
                    opacity: 1,
                    lineHeight: "25px",
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-sm md:text-lg font-normal leading-5 md:leading-7 text-right lg:w-[100%]"
                >
                  {services[activeService].description}
                </motion.p>
              </div>
            </div>
          </div>
          <div className="servicesImg relative lg:-left-10 lg:-top-36">
            <img src={tower} alt="tower" className="w-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurServices;
