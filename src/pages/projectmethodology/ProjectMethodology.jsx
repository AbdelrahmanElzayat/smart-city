import React, { useEffect } from "react";
import Methedology from "../../components/MethedologyComponents/Methedology/Methedology";
import VideoMethedology from "../../components/MethedologyComponents/videoMethdology/VideoMethedology";
import CompanyMethodology from "../../components/MethedologyComponents/companyMethodology/CompanyMethodology";
import Advantages from "../../components/MethedologyComponents/Advantages/Advantages";
import { motion } from "framer-motion";

const ProjectMethodology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}>
      <title>منهجية الشركة في ادارة المشروع</title>
      <Methedology
        title="منهجية إدارة الشركة للمشروع"
        description={
          "تلتزم شركتنا BACCO بالمرونة والكفاءة في تنفيذ المشاريع عبر الجمع بين منهجية Scrum كإطار عمل مرن، مع بعض عناصر المنهجيات التقليدية مثل Waterfall وذلك بحكم حجم المشروع الضخم المتنوع بين جميع القطاعات من الزراعي الى الانشاءات الى التقني وحتى البرمجي فشركة BACCO لديها الخبرة الواسعة للتعامل مع المشاريع من النوع المماثل لمشروع تشغيل وعمليات التشغيل للمدن الذكية  تلتزم شركتنا بحيث تكون منهجية مختلطة لضمان تحقيق أهداف المشروع بجودة عالية وفي الوقت المحدد، خاصة للمشاريع التي تتطلب وضوحًا في المتطلبات مع الحفاظ على المرونة في التكيف مع التغييرات، كما ان المشروع مقسم لأربعة مراحل رئيسية"
        }
      />
      <VideoMethedology />
      <CompanyMethodology />
      <Advantages />
    </motion.div>
  );
};

export default ProjectMethodology;
