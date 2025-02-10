import React, { useEffect } from "react";
import AboutPart from "../../components/ProjectPartsComponents/aboutPart/AboutPart";
import ControlRoom from "../../components/ProjectPartsComponents/ControlRoom/ControlRoom";
import roomImg from "../../assets/images/ReportRoom.webp";
import secondstep from "../../assets/images/secondstep.webp";
import stepThree from "../../assets/images/stepThree.webp";
import stepfour from "../../assets/images/stepfour.webp";
import stepfive from "../../assets/images/stepfive.webp";
import ScreenControl from "../../components/ProjectPartsComponents/screenControl/ScreenControl";
import SmartLight from "../../components/ProjectPartsComponents/smartLight/SmartLight";
import { motion } from "framer-motion";
const ControlRoomPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <title>المدن الذكية | المنصة وغرفة التحكم</title>
      <AboutPart
        title={"المنصة و غرفة التحكم"}
        description="تمثل المنصة الإلكترونية وغرفة التحكم جوهر مشروع المدينة الذكية، حيث تتيح المنصة نظامًا متكاملاً لإدارة وتشغيل مختلف الأنظمة الذكية بفعالية. توفر المنصة واجهة مبتكرة لمراقبة البيانات وتحليلها في الوقت الفعلي، مع دمج تقنيات إنترنت الأشياء لتقديم خدمات ذكية مثل إدارة الإنارة، الري، والنفايات. كما تدعم بروتوكولات أمان متقدمة لضمان حماية البيانات واستقرار العمليات. تُعد غرفة التحكم مركز القيادة والتحكم، مجهزة بشاشات عرض كبيرة وأنظمة مراقبة وتحليل متطورة، لتنسيق العمليات وضمان استجابة سريعة للمواقف الطارئة. يتيح هذا التكامل بين المنصة وغرفة التحكم تحسين كفاءة التشغيل وتعزيز جودة الحياة في المدين"
      />
      <ControlRoom
        title="المرحلــة الأولــى"
        heading="لوحة التحكم ومتابعة البلاغات"
        list={[
          "نظام إدارة بلاغات الخدمات والمرافق​كراسة الشروط والمواصفات",
          "نظام التقارير ومؤشرات الأداء والتعلم الذاتي ولوحات المعلومات​ كراسة الشروط والمواصفات",
        ]}
        image={roomImg}
      />
      <ScreenControl
        title="المرحلــة الثانيــة"
        heading="لوحة الإدارة"
        list={[
          "تسجيل وتعيين موظفي العمليات والمشرفين: تخصيص موظفين وفق جدول مواصفات العمالة وإدارة السجلات​ كراسة الشروط والمواصفات",
          "إدارة فرق العمل والمهام: وفق منهجية تقسيم المهام وإعداد السجلات​كراسة الشروط و المواصفات",
        ]}
        image={secondstep}
      />
      <SmartLight
        title="المرحلــة الثالثة"
        heading="صفحة جميع البلاغات"
        list={[
          "عرض البلاغات حسب الحالة  (قيد التنفيذ/مغلقة/متأخرة)",
          "الربط مع نظام إدارة بلاغات الخدمات لمتابعة التحديثات​ كراسة الشروط و المواصفات",
        ]}
        image={stepThree}
      />
      <ScreenControl
        image={stepfour}
        title="المرحلــة الرابعة"
        heading="فرق الصيانة والمقاولين"
        list={[
          "تعيين فرق الصيانة: استخدام المنصة المتكاملة لتطبيقات المدن الذكية وإدارة فرق العمل​ كراسة الشروط والمواصفات",
          "إدارة المهام: الربط مع نظام الرقابة على صيانة وتشغيل المرافق​ كراسة الشروط والمواصفات",
          "مراقبة الأداء عبر التقارير الدورية​ كراسة الشروط والمواصفات",
        ]}
      />
      <SmartLight
        title="المرحلــة الخامسة"
        heading="الإحصائيات والتقارير"
        list={[
          "تقارير الأداء ومؤشرات التعلم الذاتي​كراسة الشروط والمواصفات",
          "الإحصائيات التفصيلية عن المرافق والبلاغات​كراسة الشروط والمواصفات",
          "لوحات المعلومات التفاعلية",
        ]}
        image={stepfive}
      />
    </motion.div>
  );
};

export default ControlRoomPage;
