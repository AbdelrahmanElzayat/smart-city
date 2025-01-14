import React from "react";
import irregation from "../../../assets/images/irregation.png";
import irr1 from "../../../assets/images/irr1.png";
import irr2 from "../../../assets/images/irr2.png";
import irr3 from "../../../assets/images/irr3.png";
import irr4 from "../../../assets/images/irr4.png";
import irr5 from "../../../assets/images/irr5.png";
import irr6 from "../../../assets/images/irr6.png";
import irr7 from "../../../assets/images/irr7.png";
import irr8 from "../../../assets/images/irr8.png";

const Irrigation = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center gap-[25px] lg:gap-[100px]">
          <div className="networkContent basis-1/2">
            <div className="networkHeading flex flex-col gap-3">
              <span className="text-lg font-bold leading-7 text-right text-textMain">
                أنظمة الرى
              </span>
              <h2 className="font-extrabold text-4xl text-right text-textMain leading-[45px]">
                نظام الري الذكي
              </h2>
              <p className="text-sm font-light text-right leading-5">
                لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت،
                سيددو إيوسيمود تيمبور سوم دولار سيت أميت، كونسيكتيتور
              </p>
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
          <div className="networkImg basis-1/2 rounded-3xl overflow-hidden relative shadow-video max-h-[700px]">
            <img
              src={irregation}
              alt="camera"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Irrigation;
