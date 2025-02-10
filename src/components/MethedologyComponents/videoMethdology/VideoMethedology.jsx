import React, { useRef, useState } from "react";
import videoPoster from "../../../assets/images/aboutVideo.webp";
import videoTest from "../../../assets/images/videoTest.mp4";
import { motion } from "framer-motion";

const VideoMethedology = () => {
  const videoRef = useRef(null); // مرجع للفيديو للتحكم فيه
  const [isPlaying, setIsPlaying] = useState(false); // حالة لتحديد ما إذا كان الفيديو قيد التشغيل

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  const handleVideoEnd = () => {
    setIsPlaying(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="AboutVideo lg:mt-20 py-5 lg:py-10"
    >
      <div className="container">
        <div className="flex flex-wrap justify-between gap-6 lg:gap-[100px]">
          {/* قسم الفيديو */}
          <div className="videoAbout border border-[#707070] rounded-[24px] overflow-hidden relative shadow-video lg:basis-[40%] h-[400px] w-full">
            <video
              ref={videoRef}
              src={videoTest} // ضع مسار الفيديو هنا
              className="w-full h-full object-cover"
              poster={videoPoster} // صورة عند إيقاف الفيديو
              onEnded={handleVideoEnd}
            />
            {/* زر التشغيل */}
            {!isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#C8A04F] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#A4823D]"
              >
                ▶
              </button>
            )}
          </div>

          {/* قسم النص */}
          <div className="contentAbout lg:basis-[40%] flex flex-col gap-7">
            <div className="contentAbout-text">
              <span className="text-base md:text-lg font-bold leading-[28px]">
                منهجية الشركة
              </span>
              <motion.h2
                initial={{ opacity: 0, lineHeight: "60px" }}
                whileInView={{
                  opacity: 1,
                  lineHeight: "35px",
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="font-extrabold leading-7 md:leading-[45px] text-[24px] md:text-[35px] text-right lg:w-[70%]"
              >
                كيفية منهجية الشركة للإدارة المرنة والإدارة التقليدية
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, lineHeight: "60px" }}
              whileInView={{
                opacity: 1,
                lineHeight: "35px",
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              exit={{
                opacity: 1,
                lineHeight: "35px",
                transition: { delay: 0.2, duration: 0.5 },
              }}
              className="text-sm md:text-lg font-normal leading-7"
            >
              ستقوم الشركة بإدارة المنصة الالكترونية لإدارة وتشغيل المدن الذكية
              وأيضا الدعم و التشغيل للمنصات و مركز القيادة وعمليات التشغيل للمدن
              الذكية عن طريق منهجية
            </motion.p>
            <ul className="flex flex-col gap-2">
              <li className="relative flex items-center gap-3 text-lg font-normal leading-6 text-right text-textMain">
                <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                أدوار سكروم
              </li>
              <li className="relative flex items-center gap-3 text-lg font-normal leading-6 text-right text-textMain">
                <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                أدوات سكروم
              </li>
              <li className="relative flex items-center gap-3 text-lg font-normal leading-6 text-right text-textMain">
                <span className="relative block w-2 h-2 bg-[#C8A04F] rounded-full"></span>
                اجتماعات سكروم
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoMethedology;
