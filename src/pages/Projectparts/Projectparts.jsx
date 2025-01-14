import React from "react";
import AboutPart from "../../components/ProjectPartsComponents/aboutPart/AboutPart";
import ControlRoom from "../../components/ProjectPartsComponents/ControlRoom/ControlRoom";
import DevicesConnections from "../../components/ProjectPartsComponents/DevicesConnections/DevicesConnections";
import Camera from "../../components/ProjectPartsComponents/Camera/Camera";
import Irrigation from "../../components/ProjectPartsComponents/irrigation/Irrigation";
import SmartLight from "../../components/ProjectPartsComponents/smartLight/SmartLight";
import ScreenControl from "../../components/ProjectPartsComponents/screenControl/ScreenControl";
import Garden from "../../components/ProjectPartsComponents/garden/Garden";
import controlRoom from "../../assets/images/controlRoom.png";
import controlScreen from "../../assets/images/screen.png";
import light from "../../assets/images/light.png";

const Projectparts = () => {
  return (
    <div className="Projectparts">
      <AboutPart
        title="اجزاء المشروع"
        description="لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت، سيددو إيوسيمود تيمبور سوم دولار سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت، سيددو إيوسيمود ت دولوريولف إنكيديدنت أوت لابوري إت دولوري ماجنا أليكوا. أوت إنيم أد مينيم فينيام وري إت دولوري مار أليكوا. أوت إنيم أد مينيم فينيام"
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
        image={controlScreen}
      />
      <Garden />
    </div>
  );
};

export default Projectparts;
