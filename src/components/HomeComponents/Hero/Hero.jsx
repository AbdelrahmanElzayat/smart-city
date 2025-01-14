import React from "react";
import smartCity from "../../../assets/images/smartCity.png";
import lines from "../../../assets/images/lines.png";
import whatsapp from "../../../assets/icons/whatsapp.svg";
import youtube from "../../../assets/icons/youtube.svg";
import twitter from "../../../assets/icons/twitter.svg";
import quote from "../../../assets/icons/quote.svg";
import play from "../../../assets/icons/play.svg";
import { Link } from "react-router-dom";
const Hero = () => {
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
              <p className="text-textMain text-xs md:text-base font-light leading-5 md:leading-[24px] text-right lg:w-[75%]">
                لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت سوم
                دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت، سيددو أليكوا. أوت
                إنيم أد مينيم فينيام
              </p>
            </div>
            <div className="followUs flex items-center gap-4 my-7">
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
            </div>
            <img src={quote} alt="quote" className="w-[24px] md:w-[50px] h-[24px] md:h-[50px] my-4 lg:my-7" />
            <p className="text-[16px] md:text-[23px] font-light text-textMain leading-5 md:leading-[37px] text-right lg:w-1/2">
              نحن ملتزمون بمستقبل افضل للمملكة العربية السعودية
            </p>
            <Link
              to={"/"}
              className="flex items-center gap-4 rounded-lg border border-[#BCBCBC] w-fit py-3 px-4 my-4 text-textMain font-bold uppercase"
            >
              <img src={play} alt="play" /> اكتشف طريقة العمـل
            </Link>
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
