import React from "react";
import op1 from "../../../assets/images/op1.png";
import op2 from "../../../assets/images/op2.png";
import op3 from "../../../assets/images/op3.png";
import op4 from "../../../assets/images/op4.png";
import OperationsCard from "./OperationsCard/OperationsCard";
const Operations = () => {
  const data = [
    {
      image: op1,
      title: "عنوان تجريبـى",
      description:
        "لوريم إيبسوم دولار سيت أميت، كونسيكتيتورأديبيسيسينغ إيليت سوم دولار سيت أميت، كونسي ادولورا",
    },
    {
      image: op2,
      title: "عنوان تجريبـى",
      description:
        "لوريم إيبسوم دولار سيت أميت، كونسيكتيتورأديبيسيسينغ إيليت سوم دولار سيت أميت، كونسي ادولورا",
    },
    {
      image: op3,
      title: "عنوان تجريبـى",
      description:
        "لوريم إيبسوم دولار سيت أميت، كونسيكتيتورأديبيسيسينغ إيليت سوم دولار سيت أميت، كونسي ادولورا",
    },
    {
      image: op4,
      title: "عنوان تجريبـى",
      description:
        "لوريم إيبسوم دولار سيت أميت، كونسيكتيتورأديبيسيسينغ إيليت سوم دولار سيت أميت، كونسي ادولورا",
    },
  ];
  return (
    <div className="Operations">
      <div className="container">
        <div className="headerOperations">
          <span className="text-base md:text-lg font-bold leading-[28px] text-right">
            العمليــات
          </span>
          <h2 className="font-extrabold leading-7 md:leading-[45px] text-[24px] md:text-[35px] text-right lg:w-[25%]">
            عنوان تجريبـى عن ما نقدمــه عـن عمليـات
          </h2>
        </div>
        <div className="cardList grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 my-7">
          {data?.map((item,i) => (
            <OperationsCard item={item} key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Operations;
