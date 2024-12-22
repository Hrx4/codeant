import React, { useState } from "react";
import Hero from "../components/Hero";
import logo from "../assets/antLogo.png";
import Saas from "../components/Saas";
import SelfHosted from "../components/SelfHosted";
const Signin = () => {
  const [option, setOption] = useState(true);
  return (
    <div className=" h-dvh w-full flex">
      <div className=" h-full w-1/2 hidden md:flex ">
        <Hero />
      </div>
      <div className=" h-full md:w-1/2 w-full  flex justify-center items-center flex-col gap-4 ">
        <div className="  w-[90%] h-2/3 border rounded-xl">
          <div className=" h-2/5 flex flex-col items-center justify-evenly">
            <div className=" flex items-center gap-2">
              <img src={logo} alt="logo" className=" h-10" />
              <div className=" font-normal text-2xl">CodeAnt AI</div>
            </div>
            <div className=" font-semibold text-3xl">Welcome to CodeAnt AI</div>
            <div className=" w-[95%] h-[60px]  flex items-center border rounded-xl">
              <div
                className={` h-full w-1/2 justify-center items-center flex  cursor-pointer ${
                  option ? " bg-blue-500 rounded-xl text-white" : ""
                }`}
                onClick={() => setOption(true)}
              >
                SAAS
              </div>
              <div
                className={` h-full w-1/2 justify-center items-center flex cursor-pointer ${
                  !option ? " bg-blue-500 rounded-xl text-white" : ""
                }`}
                onClick={() => setOption(false)}
              >
                Self Hosted
              </div>
            </div>
          </div>

          {option ? <Saas /> : <SelfHosted />}
          {/* <Saas/> */}
        </div>
        <div>
          By signing up you agree to the{" "}
          <span className=" font-bold">Privacy Policy.</span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
