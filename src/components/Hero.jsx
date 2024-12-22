import React from "react";
import antImg from "../assets/Subtract.png";
import logo from "../assets/antLogo.png";
import circle from "../assets/circle.png";
const Hero = () => {
  return (
    <div className=" h-full w-full justify-center items-center hidden md:flex">
      <img
        src={antImg}
        alt="hero"
        className=" h-1/3  bottom-0 left-0 absolute"
      />
      <div className=" h-[322px] w-[474px] ">
        <div className=" h-[170px] w-[447px] rounded-2xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
          <div className=" w-full h-2/5 border-b font-bold text-base flex gap-2 items-center pl-6">
            <img src={logo} alt="logo" className="h-8 w-7" />
            AI to Detect & Autofix Bad Code
          </div>
          <div className=" flex items-center justify-around h-3/5">
            <div>
              <div className=" font-bold text-lg">30+</div>
              <div className=" font-normal text-sm">Language Support</div>
            </div>
            <div>
              <div className=" font-bold text-lg">10K+</div>
              <div className=" font-normal text-sm">Developers</div>
            </div>
            <div>
              <div className=" font-bold text-lg">100K+</div>
              <div className=" font-normal text-sm">Hours Saved</div>
            </div>
          </div>
        </div>
        <div className=" h-[164px] w-[270px] rounded-2xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] ml-auto bottom-3 relative bg-white">
          <div className=" flex items-center h-1/2 justify-around">
            <img src={circle} alt="circle" />
            <div className=" flex flex-col items-center">
            
              <div className=" text-blue-600 font-bold text-sm flex items-center"> <Arrow/>14%</div>
              <div className=" font-normal text-xs">This week</div>
            </div>
          </div>
          <div className=" h-1/2 w-1/2 flex flex-col justify-center items-center ">
            <div className=" font-bold text-sm">Issues Fixed</div>
            <div className=" font-bold text-3xl">500K+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Arrow = ()=> (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
</svg>

)

export default Hero;
