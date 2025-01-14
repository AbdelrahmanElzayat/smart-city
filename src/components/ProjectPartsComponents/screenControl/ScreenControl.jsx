import React from "react";
import controlRoom from "../../../assets/images/screen.png";
const ScreenControl = () => {
  return (
    <section className="ControlRoom">
      <div className="container">
        <div className="flex items-center gap-[25px] lg:gap-[100px]">
          <div className="controlContent basis-1/2 flex flex-col gap-9">
            <div className="controlHeading flex flex-col gap-3">
              <span className="text-lg font-bold leading-7 text-right text-textMain">
                الشاشات و الانظمة
              </span>
              <h2 className="font-extrabold text-4xl text-right text-textMain leading-[45px]">
                شاشات غرفة التحكم
              </h2>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="relative flex items-center gap-3 text-[15px] font-light leading-6 text-right text-textMain">
                <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                تعيين فرق الصيانة: استخدام المنصة المتكاملة لتطبيقات المدن
                الذكية وإدارة فرق العمل​ كراسة الشروط والمواصفات
              </li>
              <li className="relative flex items-center gap-3 text-[15px] font-light leading-6 text-right text-textMain">
                <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                إدارة المهام: الربط مع نظام الرقابة على صيانة وتشغيل المرافق​
                كراسة الشروط والمواصفات
              </li>
              <li className="relative flex items-center gap-3 text-[15px] font-light leading-6 text-right text-textMain">
                <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                مراقبة الأداء عبر التقارير الدورية​ كراسة الشروط والمواصفات
              </li>
            </ul>
          </div>
          <div className="COntrolImg basis-1/2  rounded-3xl overflow-hidden relative shadow-video h-[370px] flex justify-center items-center">
            <img
              src={controlRoom}
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
