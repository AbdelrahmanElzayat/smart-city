import React from "react";
import network from "../../../assets/images/network.png";
import network1 from "../../../assets/images/network1.png";
import network2 from "../../../assets/images/network2.png";
import network3 from "../../../assets/images/network3.png";
import network4 from "../../../assets/images/network4.png";
const DevicesConnections = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center gap-[25px] lg:gap-[100px]">
          <div className="networkContent basis-1/2">
            <div className="networkHeading flex flex-col gap-3">
              <span className="text-lg font-bold leading-7 text-right text-textMain">
                غرف التحكم
              </span>
              <h2 className="font-extrabold text-4xl text-right text-textMain leading-[45px]">
                المنصة وغرفة التحكم
              </h2>
              <p className="text-sm font-light text-right leading-5">
                لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت،
                سيددو إيوسيمود تيمبور سوم دولار سيت أميت، كونسيكتيتور
              </p>
            </div>
            <div className="networkList grid grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img
                    src={network1}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
                <h3>جهاز ربط ستار ميش</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img
                    src={network2}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
                <h3>جهاز ربط ستار ميش 90 درجة</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img
                    src={network3}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
                <h3>جهاز ربط ستار ميش بلس</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img
                    src={network4}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
                <h3>جهاز ربط ميجا ميش برو</h3>
              </div>
            </div>
          </div>
          <div className="networkImg basis-1/2 rounded-3xl overflow-hidden relative shadow-video">
            <img src={network} alt="network" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevicesConnections;
