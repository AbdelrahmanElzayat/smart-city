import React, { useState } from "react";
import tower from "../../../assets/images/tower.png";

const OurServices = () => {
  const [activeService, setActiveService] = useState(0); // الحالة لتتبع الزر النشط

  // البيانات الخاصة بكل خدمة
  const services = [
    {
      title: "الخدمة 1",
      description:
        "هذا هو المحتوى الخاص بالخدمة الأولى. يمكنك إضافة المزيد من التفاصيل هنا.",
    },
    {
      title: "الخدمة 2",
      description:
        "هذا هو المحتوى الخاص بالخدمة الثانية. يمكنك تخصيص النصوص كما تريد.",
    },
    {
      title: "الخدمة 3",
      description: "هذا هو المحتوى الخاص بالخدمة الثالثة. النص هنا مجرد مثال.",
    },
    {
      title: "الخدمة 4",
      description:
        "هذا هو المحتوى الخاص بالخدمة الرابعة. قم بتعديله حسب الحاجة.",
    },
    {
      title: "الخدمة 5",
      description:
        "هذا هو المحتوى الخاص بالخدمة الخامسة. يمكنك تخصيص النصوص بسهولة.",
    },
  ];

  return (
    <div className="OurServices my-10">
      <div className="container h-full">
        <div className="rounded-[38px] bg-custom-gradient p-9 h-full flex flex-col lg:flex-row items-start relative lg:max-h-[600px]">
          <div className="content lg:basis-[50%] flex flex-col gap-7">
            <div className="contentHeader flex flex-col items-start">
              <span className="text-base md:text-lg font-bold leading-[28px] text-right">
                عنــوان تجريبـى
              </span>
              <h2 className="font-extrabold leading-7 md:leading-[45px] text-[24px] md:text-[35px] text-right lg:w-[60%]">
                هنا سيكــون عنوان تجريبـى عن ما نقدمــه من خدمـات
              </h2>
            </div>
            <div className="services flex flex-col gap-5">
              <div className="servicesBtns flex items-center flex-wrap gap-1 lg:gap-3">
                {services.map((service, index) => (
                  <button
                    key={index}
                    className={`rounded-[23px] px-5 py-3 text-xs font-bold text-center ${
                      activeService === index
                        ? "bg-gradient-to-t from-[#FBEAE3] to-[#C8A04F]"
                        : "bg-gradient-to-t from-[#FBEAE3] to-[#8E929D] font-light"
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
              <div className="serviceContent">
                <p className="text-sm font-light leading-5 text-right lg:w-[50%]">
                  {services[activeService].description}
                </p>
              </div>
            </div>
          </div>
          <div className="servicesImg relative lg:-left-10 lg:-top-36">
            <img src={tower} alt="tower" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
