import React from "react";

const OperationsCard = ({ item }) => {
  return (
    <div className="OperationsCard flex flex-col items-center justify-center gap-3 p-2 border border-[#CECECE] rounded-2xl">
      <div className="imgCard rounded-2xl overflow-hidden relative w-full">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[#D3D3C8] opacity-50"></div> */}
        <img src={item?.image} alt="cardImg" className="w-full" />
      </div>
      <div className="CardContent text-center flex flex-col justify-center items-center gap-2">
        <h3 className="font-bold text-sm leading-[30px] text-center">{item?.title}</h3>
        <p className="font-extrabold text-xs leading-[15px] text-center mb-3">{item?.description}</p>
      </div>
    </div>
  );
};

export default OperationsCard;
