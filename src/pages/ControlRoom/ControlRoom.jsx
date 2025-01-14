import React from "react";
import AboutPart from "../../components/ProjectPartsComponents/aboutPart/AboutPart";
import ControlRoom from "../../components/ProjectPartsComponents/ControlRoom/ControlRoom";
import roomImg from "../../assets/images/ReportRoom.png";
import secondstep from "../../assets/images/secondstep.png";
import stepThree from "../../assets/images/stepThree.png";
import stepfour from "../../assets/images/stepfour.png";
import stepfive from "../../assets/images/stepfive.png";
import ScreenControl from "../../components/ProjectPartsComponents/screenControl/ScreenControl";
import SmartLight from "../../components/ProjectPartsComponents/smartLight/SmartLight";
const ControlRoomPage = () => {
  return (
    <div>
      <AboutPart
        title={"المنصة و غرفة التحكم"}
        description="لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت، سيددو إيوسيمود تيمبور سوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت، سيددو إيوسيمود ت دولوريولف إنكيديدنت أوت لابوري إت دولوري ماجنا أليكوا. أوت إنيم أد مينيم فينيام وري إت دولوري مار أليكوا. أوت إنيم أد مينيم فينيام"
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
    </div>
  );
};

export default ControlRoomPage;
