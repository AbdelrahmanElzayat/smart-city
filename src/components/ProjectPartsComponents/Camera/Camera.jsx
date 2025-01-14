import React from "react";
import camera from "../../../assets/images/camera.png";
import camera1 from "../../../assets/images/camera1.png";
import camera2 from "../../../assets/images/camera2.png";
import camera3 from "../../../assets/images/camera3.png";
import camera4 from "../../../assets/images/camera4.png";
import camera5 from "../../../assets/images/camera5.png";
import camera6 from "../../../assets/images/camera6.png";
const Camera = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center gap-[25px] lg:gap-[100px]">
          <div className="networkImg basis-1/2 rounded-3xl overflow-hidden relative shadow-video max-h-[700px]">
            <img src={camera} alt="camera" className="w-full object-cover" />
          </div>
          <div className="networkContent basis-1/2">
            <div className="networkHeading flex flex-col gap-3">
              <span className="text-lg font-bold leading-7 text-right text-textMain">
                الكاميرات و الاشارات
              </span>
              <h2 className="font-extrabold text-4xl text-right text-textMain leading-[45px]">
                ⁠كاميرات الطرق والاشارات
              </h2>
              <p className="text-sm font-light text-right leading-5">
                لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت،
                سيددو إيوسيمود تيمبور سوم دولار سيت أميت، كونسيكتيتور
              </p>
            </div>
            <div className="networkList grid grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={camera1} alt="" className="w-full object-contain" />
                </div>
                <h3>كاميرات المراقبة و ملحقاتها</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={camera2} alt="" className="w-full object-contain" />
                </div>
                <h3>توصيلات وأجهزة الربط</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={camera3} alt="" className="w-full object-contain" />
                </div>
                <h3>Hybrid SAN HikVision</h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={camera4} alt="" className="w-full object-contain" />
                </div>
                <h3>
                  تخزين <br />
                  HikVision
                </h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={camera5} alt="" className="w-full object-contain" />
                </div>
                <h3>
                  نظام كاميرات المراقبة <br />
                  HikCentral Lite
                </h3>
              </div>
              <div className="networkCard p-3 flex flex-col gap-2 items-start">
                <div className="networkImg h-[107px] rounded-2xl border border-[#DCDCDC] p-5 overflow-hidden flex justify-center items-center">
                  <img src={camera6} alt="" className="w-full object-contain" />
                </div>
                <h3>
                  شاشات مركز التحكم واجهزته <br />
                  HikVision
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Camera;
