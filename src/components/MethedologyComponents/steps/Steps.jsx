import { motion } from "framer-motion";
import React from "react";

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: "مرحلة التصميم والتخطيط",
      description:
        "تهدف إلى وضع خطة شاملة للمشروع تشمل تصميمات الأنظمة والبنية التحتية وتحديد المتطلبات والموارد اللازمة، مع التأكد من توافقها مع  معايير الجودة وتلبية احتياجات المشروع​منهجية الشركة ادارة المراحل انشاء المشروع.",
    },
    {
      id: 2,
      title: "مرحلة التنفيذ والتشييد: ",
      description:
        "يتم خلالها تنفيذ الأعمال المخططة، بما في ذلك إنشاء البنية التحتية وتركيب الأنظمة والمعدات وتشغيل الشبكات، مع الالتزام بالجدول الزمني وضمان جودة التنفيذ​منهجية الشركة ادارة الم…​مراحل انشاء المشروع.",
    },
    {
      id: 3,
      title: "مرحلة الاختبار والنشر والتجريب:",
      description:
        "تشمل اختبار الأنظمة والمعدات لضمان جاهزيتها للعمل وفق المتطلبات، معالجة الأخطاء المحتملة، وتحليل الأداء لتوفير أفضل النتائج قبل الإطلاق​مراحل انشاء المشروع.",
    },
    {
      id: 4,
      title: "مرحلة التشغيل والتطوير: ",
      description:
        "تهدف إلى تشغيل الأنظمة وإدارتها بشكل يومي مع تقديم التحديثات والتطويرات بناءً على الملاحظات والاحتياجات، لضمان كفاءة التشغيل واستدامة المشروع​مراحل انشاء المشروع​خطة استجابة المخاطر.",
    },
  ];
  return (
    <>
      <div className="relative lg:basis-1/2 w-full h-[500px] hidden xl:block">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, duration: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="card1 absolute top-0 left-[30%]"
        >
          <div className="cardBody relative bg-[#A07A2D] w-[250px] h-[250px] rounded-2xl flex flex-col items-start justify-center gap-4 px-5">
            <h4 className="text-right font-bold text-white leading-5 lg:w-1/2">
              مرحلة التصميم والتخطيط:
            </h4>
            <p className="text-white font-normal text-xs leading-4 text-right">
              تهدف إلى وضع خطة شاملة للمشروع تشمل تصميمات الأنظمة والبنية
              التحتية وتحديد المتطلبات والموارد اللازمة، مع التأكد من توافقها مع
              معايير الجودة وتلبية احتياجات المشروع​منهجية الشركة ادارة
              الم…​مراحل انشاء المشروع.
            </p>
            <div className="one absolute top-0 -left-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="64"
                viewBox="0 0 30 64"
                fill="none"
              >
                <path
                  d="M15.4776 13.2448H15.2798L3.11511 19.0325L0.66272 7.84882L17.5375 -0.000488281H29.8984V63.7709H15.4776V13.2448Z"
                  fill="#A07A2D"
                />
              </svg>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, duration: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="card2 absolute -right-16 top-[30%]"
        >
          <div className="cardBody relative bg-[#6C4D0D] w-[250px] h-[250px] rounded-2xl flex flex-col items-start justify-center gap-4 px-5">
            <h4 className="text-right font-bold text-white leading-5 lg:w-1/2">
              مرحلة التنفيذ والتشييد:
            </h4>
            <p className="text-white font-normal text-xs leading-4 text-right">
              يتم خلالها تنفيذ الأعمال المخططة، بما في ذلك إنشاء البنية التحتية
              وتركيب الأنظمة والمعدات وتشغيل الشبكات، مع الالتزام بالجدول الزمني
              وضمان جودة التنفيذ​منهجية الشركة ادارة الم…​مراحل انشاء المشروع.
            </p>
            <div className="one absolute -top-[28%] right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="65"
                viewBox="0 0 46 65"
                fill="none"
              >
                <path
                  d="M0.645752 64.8979V55.873L8.88696 48.4155C22.8191 35.9553 29.5881 28.7947 29.7861 21.3364C29.7861 16.1389 26.6458 12.0173 19.2871 12.0173C13.7922 12.0173 8.98608 14.7653 5.6499 17.3165L1.4314 6.6214C6.2395 2.98993 13.6953 0.0479736 22.3284 0.0479736C36.7512 0.0479736 44.6975 8.48517 44.6975 20.0629C44.6975 30.7556 36.947 39.2912 27.7244 47.533L21.8376 52.438V52.6359H45.8748V64.8979H0.645752Z"
                  fill="#6C4D0D"
                />
              </svg>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, duration: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="card3 absolute -bottom-[30%] right-[15%]"
        >
          <div className="cardBody relative bg-[#483207] w-[250px] h-[250px] rounded-2xl flex flex-col items-start justify-center gap-4 px-5">
            <h4 className="text-right font-bold text-white leading-5 lg:w-1/2">
              مرحلة الاختبار والنشر والتجريب:
            </h4>
            <p className="text-white font-normal text-xs leading-4 text-right">
              تشمل اختبار الأنظمة والمعدات لضمان جاهزيتها للعمل وفق المتطلبات،
              معالجة الأخطاء المحتملة، وتحليل الأداء لتوفير أفضل النتائج قبل
              الإطلاق​مراحل انشاء المشروع.
            </p>
            <div className="one absolute bottom-0 -right-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="67"
                viewBox="0 0 46 67"
                fill="none"
              >
                <path
                  d="M4.01758 51.1775C6.66724 52.5505 12.7498 55.1011 18.8323 55.1011C26.583 55.1011 30.5066 51.3733 30.5066 46.5652C30.5066 40.2866 24.228 37.4412 17.655 37.4412H11.5723V26.7463H17.3601C22.3643 26.6494 28.7417 24.7854 28.7417 19.3894C28.7417 15.5627 25.6016 12.7173 19.323 12.7173C14.123 12.7173 8.62817 14.9731 5.98047 16.5442L2.9375 5.7522C6.76416 3.29883 14.4177 0.944092 22.6592 0.944092C36.2964 0.944092 43.8511 8.10693 43.8511 16.8391C43.8511 23.6082 40.0242 28.905 32.1746 31.6516V31.8494C39.8262 33.2227 46.0078 39.0105 46.0078 47.3506C46.0078 58.6331 36.1003 66.8743 19.9106 66.8743C11.6694 66.8743 4.70435 64.7156 0.976562 62.3611L4.01758 51.1775Z"
                  fill="#483207"
                />
              </svg>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, duration: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="card4 absolute bottom-0 left-7"
        >
          <div className="cardBody relative bg-[#2A1D03] w-[250px] h-[250px] rounded-2xl flex flex-col items-start justify-center gap-4 px-5">
            <h4 className="text-right font-bold text-white leading-5 lg:w-1/2">
              مرحلة التشغيل والتطوير:
            </h4>
            <p className="text-white font-normal text-xs leading-4 text-right">
              تهدف إلى تشغيل الأنظمة وإدارتها بشكل يومي مع تقديم التحديثات
              والتطويرات بناءً على الملاحظات والاحتياجات، لضمان كفاءة التشغيل
              واستدامة المشروع​مراحل انشاء المشروع​خطة استجابة المخاطر.
            </p>
            <div className="one absolute -bottom-20 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="65"
                viewBox="0 0 51 65"
                fill="none"
              >
                <path
                  d="M28.2559 38.3557V24.2275C28.2559 20.4009 28.4528 16.4771 28.746 12.3555H28.3544C26.2942 16.4771 24.6259 20.2051 22.4673 24.2275L13.9324 38.1597V38.3557H28.2559ZM28.2559 64.7476V49.5393H0V39.8257L24.135 0.976074H42.3838V38.3557H50.036V49.5393H42.3838V64.7476H28.2559Z"
                  fill="#2A1D03"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="xl:hidden flex flex-wrap justify-center items-center gap-6 p-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-[#735131] text-white rounded-lg p-6 w-full xl:w-64 shadow-lg"
          >
            <div className="absolute top-2 left-2 text-4xl text-[#B38E60] font-bold">
              {step.id}
            </div>
            <h2 className="text-lg font-bold mb-2">{step.title}</h2>
            <p className="text-sm text-[#E6E6E6]">{step.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Steps;
