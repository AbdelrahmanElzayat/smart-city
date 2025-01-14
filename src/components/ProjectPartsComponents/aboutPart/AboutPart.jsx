import React from "react";
import aboutPart from "../../../assets/images/aboutPart.png";
const AboutPart = () => {
  return (
    <section className="AboutPart py-16 relative">
      <div className="container">
        <div className="flex items-center gap-[25px] lg:gap-[100px]">
          <div className="AboutPart_content flex flex-col items-start gap-9 basis-1/2">
            <h2
              className="text-[50px] font-bold leading-[55px] text-right"
              style={{ textShadow: "10px 10px 10px rgba(0, 0, 0, 0.29)" }}
            >
              اجزاء المشروع
            </h2>
            <div className="AboutPart_content_text rounded-2xl bg-[#EBEBEB] p-5">
              <p className="text-sm font-light leading-5 text-right">
                لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت،
                سيددو إيوسيمود تيمبور سوم دولار سيت أميت، كونسيكتيتور
                أديبيسيسينغ إيليت، سيددو إيوسيمود ت دولوريولف إنكيديدنت أوت
                لابوري إت دولوري ماجنا أليكوا. أوت إنيم أد مينيم فينيام وري إت
                دولوري مار أليكوا. أوت إنيم أد مينيم فينيام
              </p>
            </div>
          </div>
          <div className="AboutPart_image basis-1/2 rounded-3xl overflow-hidden relative">
            <div className="absolute bottom-0 left-0 w-full h-[80%] bg-custom-gradient-img opacity-50"></div>
            <img
              src={aboutPart}
              alt="project-part"
              className="max-w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPart;
