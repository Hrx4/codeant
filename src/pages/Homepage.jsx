import React from "react";
import Sidebar from "../components/Sidebar";
import Mainpart from "../components/Mainpart";

const Homepage = () => {
  return (
    <div className=" h-dvh flex flex-col md:flex-row w-full  ">
      <Sidebar />
      <div className=" w-full p-3 min-h-[93%] md:h-full pt-14 md:pt-3">
        <Mainpart />
      </div>
    </div>
  );
};

export default Homepage;
