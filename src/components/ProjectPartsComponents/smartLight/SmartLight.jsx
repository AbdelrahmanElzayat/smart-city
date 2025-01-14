import React from "react";
import controlRoom from "../../../assets/images/light.png";
const SmartLight = () => {
  return (
    <section className="ControlRoom">
      <div className="container">
        <div className="flex items-center gap-[25px] lg:gap-[100px]">
          <div className="COntrolImg basis-1/2  rounded-3xl overflow-hidden relative shadow-video h-[370px] flex justify-center items-center">
            <img
              src={controlRoom}
              alt="controlRoom"
              className="w-full object-cover"
            />
          </div>
          <div className="controlContent basis-1/2 flex flex-col gap-9">
            <div className="controlHeading flex flex-col gap-3">
              <span className="text-lg font-bold leading-7 text-right text-textMain">
                انظمة الانارة
              </span>
              <h2 className="font-extrabold text-4xl text-right text-textMain leading-[45px]">
                الانارة الذكية
              </h2>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="relative flex items-center gap-3 text-[15px] font-light leading-6 text-right text-textMain">
                <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                تقارير الأداء ومؤشرات التعلم الذاتي​كراسة الشروط والمواصفات
              </li>
              <li className="relative flex items-center gap-3 text-[15px] font-light leading-6 text-right text-textMain">
                <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                الإحصائيات التفصيلية عن المرافق والبلاغات​كراسة الشروط
                والمواصفات
              </li>
              <li className="relative flex items-center gap-3 text-[15px] font-light leading-6 text-right text-textMain">
                <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                لوحات المعلومات التفاعلية
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartLight;
