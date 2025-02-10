import React, { useState } from "react";
import smartCity from "../../../assets/images/smartCity.webp";
import lines from "../../../assets/images/lines.webp";
import quote from "../../../assets/icons/quote.svg";
import play from "../../../assets/icons/play.svg";
// import whatsapp from "../../../assets/icons/whatsapp.svg";
// import youtube from "../../../assets/icons/youtube.svg";
// import twitter from "../../../assets/icons/twitter.svg";
import ModalSuccess from "./ModalSuccess";
import { motion } from "framer-motion";
const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="Hero min-h-[calc(100vh-80px)] py-10">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center">
          <div className="heroContent lg:basis-[40%]">
            <div className="heroContentText flex flex-col gap-4">
              <h1
                className="text-textSecondary text-[32px] md:text-[42px] lg:text-[60px] font-bold leading-10 lg:leading-[70px] uppercase text-write"
                style={{ textShadow: "10px 10px 10px rgba(0, 0, 0, 0.29)" }}
              >
                المدن الذكية
              </h1>
              <motion.p
                initial={{ opacity: 0, lineHeight: "40px" }}
                whileInView={{
                  opacity: 1,
                  lineHeight: "25px",
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                className="text-textMain text-xs md:text-base font-light leading-5 md:leading-[24px] text-right lg:w-[75%]"
              >
                تطوير مدينة الباحة إلى مدينة ذكية رائدة في المملكة العربية
                السعودية من خلال تبني تقنيات مبتكرة تُحاكي أبرز التجارب
                العالمية، بما يحقق الاستدامة، يعزز جودة الحياة، ويرفع كفاءة
                العمليات التشغيلية
              </motion.p>
            </div>
            {/* <div className="followUs flex items-center gap-4 my-7">
              <span className="text-sm font-normal text-textMain text-right">
                تابعنا على
              </span>
              <ul className="flex items-center gap-4">
                <li>
                  <a
                    href="##"
                    className="bg-[#7D7D7D] w-[24px] md:w-[40px] h-[24px] md:h-[40px] rounded-full flex items-center justify-center"
                  >
                    <img
                      src={whatsapp}
                      alt="whatssapp"
                      className="w-[16px] h-[16px] md:w-auto md:h-auto"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="##"
                    className="bg-[#7D7D7D] w-[24px] md:w-[40px] h-[24px] md:h-[40px] rounded-full flex items-center justify-center"
                  >
                    <img
                      src={youtube}
                      alt="youtube"
                      className="w-[16px] h-[16px] md:w-auto md:h-auto"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="##"
                    className="bg-[#7D7D7D] w-[24px] md:w-[40px] h-[24px] md:h-[40px] rounded-full flex items-center justify-center"
                  >
                    <img
                      src={twitter}
                      alt="twitter"
                      className="w-[16px] h-[16px] md:w-auto md:h-auto"
                    />
                  </a>
                </li>
              </ul>
            </div> */}
            <img
              src={quote}
              alt="quote"
              className="w-[24px] md:w-[50px] h-[24px] md:h-[50px] my-4 lg:my-7"
            />
            <p className="text-[16px] md:text-[23px] font-light text-textMain leading-5 md:leading-[37px] text-right lg:w-1/2">
              نحن ملتزمون بمستقبل افضل للمملكة العربية السعودية
            </p>
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-4 rounded-lg border border-[#BCBCBC] w-fit py-3 px-4 my-4 text-textMain font-bold uppercase"
            >
              <img src={play} alt="play" /> نظرة إلى المستقبل
            </button>
            <ModalSuccess
              open={open}
              setOpen={setOpen}
              data={
                "تتطلع المرحلة الثانية من مشروع الباحة إلى تحويلها لمدينة ذكية رائدة، مستلهمةً من تجارب عالمية مثل نيويورك في إدارة النفايات، أمستردام في الإضاءة الذكية، وسنغافورة في إدارة المياه، وذلك عبر تبنّي تقنيات الاستدامة والابتكار في مجالات إدارة النفايات بالطاقة الشمسية، والإضاءة الذكية التفاعلية، والمرور الرقمي، وأنظمة الأمن المعزّزة بالذكاء الاصطناعي. وتهدف الخطة إلى رفع كفاءة العمليات التشغيلية، وتحسين جودة الحياة، وتقليل التكاليف بنسبة 30%، وزيادة رضا السكان إلى 80%، وتعزيز كفاءة الطاقة بنحو 50%، وصولاً إلى الحياد الكربوني بحلول عام"
              }
            />
          </div>
          <div className="heroImg lg:basis-[60%] relative">
            <img
              src={lines}
              alt="smart-city-img"
              className="object-cover w-full absolute -bottom-10"
            />
            <img
              src={smartCity}
              alt="smart-city-img"
              className="object-cover w-full relative z-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
