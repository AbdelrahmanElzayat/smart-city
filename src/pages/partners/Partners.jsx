import React, { useEffect } from "react";
import AboutPartners from "../../components/partnersComponents/aboutPartners/AboutPartners";
import PartnersSwiper from "../../components/partnersComponents/PartnersSwiper/PartnersSwiper";
import { motion } from "framer-motion";

const Partners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}>
      <title>المدن الذكية | شركاؤنا</title>
      <AboutPartners
        title="شركاؤنا"
        description={
          "تنتهج BACCO استراتيجية دقيقة في اختيار الشركاء بالاعتماد على خبرتهم في التقنيات الهندسية والرقمية، مع التركيز على المعايير العالمية في الجودة والابتكار. وبذلك تضمن الشركة تقديم منظومة متكاملة من الحلول التكنولوجية، تُلبي احتياجات المشروع وترتقي بمستوى الخدمات المقدمة للمدينة الذكية والمستفيدين منها."
        }
      />
      <PartnersSwiper />
    </motion.div>
  );
};

export default Partners;
