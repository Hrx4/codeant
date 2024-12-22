import React from "react";
import db from "../assets/database.png";
const ListItem = ({title , status , language , database , day}) => {
  return (
    <div className=" h-[108px] border-b p-6 flex flex-col gap-3  hover:bg-gray-100 cursor-pointer">
      <div className=" flex gap-2 items-center">
        <div className=" font-medium text-xl">{title}</div>
        <div className=" border-blue-400 text-blue-400 border rounded-3xl w-14 h-6 text-center  p-1 font-normal text-xs bg-blue-200">
          {status}
        </div>
      </div>
      <div className=" flex gap-10">
        <div className=" font-normal text-[16px] flex items-center gap-2">
          <div className=" bg-blue-500 rounded-full h-2 w-2"></div>
          {language}
        </div>
        <div className=" font-normal text-[16px] flex items-center gap-2">
        <img src={db} alt="db" className=" h-3 w-3" />
        {database}</div>
        <div className=" font-normal text-[16px]">{day}</div>
      </div>
    </div>
  );
};

export default ListItem;
