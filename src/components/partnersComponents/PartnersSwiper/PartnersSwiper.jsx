import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules"; // استيراد الـ Autoplay
import "swiper/css";
import logo1 from "../../../assets/images/logo1.webp";
import logo2 from "../../../assets/images/logo2.webp";
import logo3 from "../../../assets/images/logo3.webp";
import logo4 from "../../../assets/images/logo4.webp";
import { motion } from "framer-motion";
const PartnersSwiper = () => {
  const logos = [logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4];
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <Swiper
          draggable={true}
          autoplay={{
            delay: 0, // عشان يتحرك من غير توقف
            disableOnInteraction: false, // يكمل الحركة حتى لو حصل تفاعل
            pauseOnMouseEnter: false, // يستمر في الحركة حتى لو الماوس دخل على اللوجوهات
          }}
          speed={2000} // سرعة الحركة - أسرع يعني يتحرك بسرعة أكبر
          loop={true} // يعيد اللوجوهات من الأول بعد ما يخلص
          freeMode={true} // يخلي الحركة حرة ومستمرة
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            300: {
              slidesPerView: 4, // عدد اللوجوهات للشاشات الصغيرة جداً (موبايل)
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 4, // للشاشات الموبايل المتوسطة
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 6, // للشاشات التابلت
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6, // للشاشات الكبيرة مثل اللابتوب والديسكتوب
              spaceBetween: 20,
            },
          }}
          className="mt-6 lg:mt-8"
          dir="ltr"
        >
          {logos?.map((logo, i) =>
            logo ? (
              <SwiperSlide key={i}>
                <img
                  src={logo}
                  alt={`brand-logo-${i}`}
                  // width={100}
                  // height={100}
                  style={{
                    width: "200px",
                    maxHeight: "100px",
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default PartnersSwiper;
