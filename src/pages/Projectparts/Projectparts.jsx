import React, { useEffect } from "react";
import AboutPart from "../../components/ProjectPartsComponents/aboutPart/AboutPart";
import ControlRoom from "../../components/ProjectPartsComponents/ControlRoom/ControlRoom";
import DevicesConnections from "../../components/ProjectPartsComponents/DevicesConnections/DevicesConnections";
import Camera from "../../components/ProjectPartsComponents/Camera/Camera";
import Irrigation from "../../components/ProjectPartsComponents/irrigation/Irrigation";
import SmartLight from "../../components/ProjectPartsComponents/smartLight/SmartLight";
import ScreenControl from "../../components/ProjectPartsComponents/screenControl/ScreenControl";
import Garden from "../../components/ProjectPartsComponents/garden/Garden";
import controlRoom from "../../assets/images/controlRoom.webp";
import controlScreen from "../../assets/images/screen.webp";
import light from "../../assets/images/light.webp";
import { motion } from "framer-motion";

const Projectparts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="Projectparts"
    >
      <title>المدن الذكية | اجزاء المشروع</title>
      <meta
        name="description"
        content="يتم تشغيل وتطوير مركز القيادة والتحكم من خلال أنظمة متقدمة تشمل الإضاءة الذكية، الري الآلي، أنظمة المرور الذكية، وشبكات الاتصال المتقدمة.
 تم اختيار الانظمة الذكية بعناية لضمان تكاملها ودعم عمليات تحليل البيانات وتحسين الخدمات  ومكانية تطويرها في المستقبل"
      />

      <AboutPart
        title="اجزاء المشروع"
        description="يتم تشغيل وتطوير مركز القيادة والتحكم من خلال أنظمة متقدمة تشمل الإضاءة الذكية، الري الآلي، أنظمة المرور الذكية، وشبكات الاتصال المتقدمة.
 تم اختيار الانظمة الذكية بعناية لضمان تكاملها ودعم عمليات تحليل البيانات وتحسين الخدمات  ومكانية تطويرها في المستقبل"
      />
      <ControlRoom
        title="غرف التحكم"
        heading="المنصة وغرفة التحكم"
        list={[
          "نظام إدارة بلاغات الخدمات والمرافق​كراسة الشروط والمواصفات",
          "نظام التقارير ومؤشرات الأداء والتعلم الذاتي ولوحات المعلومات​ كراسة الشروط والمواصفات",
        ]}
        image={controlRoom}
      />
      <DevicesConnections />
      <Camera />
      <Irrigation />
      <SmartLight
        title="انظمة الانارة"
        heading="الانارة الذكية"
        list={[
          "تقارير الأداء ومؤشرات التعلم الذاتي​كراسة الشروط والمواصفات",
          "الإحصائيات التفصيلية عن المرافق والبلاغات​كراسة الشروط والمواصفات",
          "لوحات المعلومات التفاعلية",
        ]}
        description="نظام الإنارة الذكية من Schréder يعتمد على تقنية التحكم عن بُعد ، مع مستشعرات مدمجة لتحسين كفاءة الإضاءة. يتميز بخاصية التعتيم التلقائي وفق الظروف المحيطة، مما يقلل استهلاك الطاقة ويوفر تجربة إضاءة متطورة"
        image={light}
      />
      <ScreenControl
        title="الشاشات و الانظمة"
        heading="شاشات غرفة التحكم"
        list={[
          "تعيين فرق الصيانة: استخدام المنصة المتكاملة لتطبيقات المدن الذكية وإدارة فرق العمل​ كراسة الشروط والمواصفات",
          "إدارة المهام: الربط مع نظام الرقابة على صيانة وتشغيل المرافق​ كراسة الشروط والمواصفات",
          "مراقبة الأداء عبر التقارير الدورية​ كراسة الشروط والمواصفات",
        ]}
        description="شاشات العرض من Hikvision تتميز بجودة عرض فائقة بدقة 4K، مع تصميم نحيف للحواف لتحقيق تجربة عرض سلسة. تدعم التشغيل المستمر على مدار الساعة وتوفر أوضاع متعددة للتطبيقات مثل المراقبة والمؤتمرات، مما يجعلها مثالية لمراكز القيادة والتحكم"
        image={controlScreen}
      />
      <Garden />
    </motion.div>
  );
};

export default Projectparts;
