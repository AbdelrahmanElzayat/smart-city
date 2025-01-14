import React, { useRef } from "react";
import videoPoster from "../../../assets/images/aboutVideo.png";
const AboutVideo = () => {
  const videoRef = useRef(null); // مرجع للفيديو للتحكم فيه
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="AboutVideo py-10">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between lg:gap-[100px]">
          {/* قسم الفيديو */}
          <div className="videoAbout border border-[#707070] rounded-[24px] overflow-hidden relative shadow-video lg:basis-[40%]">
            <video
              ref={videoRef}
              src="path_to_your_video.mp4" // ضع مسار الفيديو هنا
              className="w-full h-auto"
              poster={videoPoster} // صورة عند إيقاف الفيديو
            />
            {/* زر التشغيل */}
            <button
              onClick={handlePlayPause}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#C8A04F] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#A4823D]"
            >
              ▶
            </button>
          </div>

          {/* قسم النص */}
          <div className="contentAbout lg:basis-[40%] flex flex-col gap-7">
            <div className="contentAbout-text">
              <span className="text-base md:text-lg font-bold leading-[28px]">
                عنــوان تجريبـى
              </span>
              <h2 className="font-extrabold leading-7 md:leading-[45px] text-[24px] md:text-[35px] text-right lg:w-[70%]">
                هنا سيكــون عنوان تجريبـى عن ما نقدمــه عـن الباحــة
              </h2>
            </div>
            <p className="text-[15px] font-light leading-5">
              لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت سوم
              دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت، سيددو إنكيديدنت أوت
              لابوري إت دولوري ماجنا أليكوا. أوت إنيم أد مينيم أليكوا. أوت إنيم
              أد مينيم فينيام
              <br />
              <br />
              لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت سوم
              دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت، سيددو إنكيديدنت أوت
              لابوري إت دولوري ماجنا أليكوا. أوت إنيم أد مينيم أليكوا. أوت إنيم
              أد مينيم فينيام
              <br />
              <br />
              لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت سوم
              دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت، سيددو إنكيديدنت أوت
              لابوري إت دولوري ماجنا أليكوا. أوت إنيم أد مينيم أليكوا. أوت إنيم
              أد مينيم فينيام
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;
