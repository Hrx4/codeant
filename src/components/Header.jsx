import React from "react";

const Header = () => {
  return (
    <div className=" border w-full px-3 h-[200px] flex flex-col justify-around">
      <div className=" w-full md:flex justify-between items-center">
        <div>
          <div className=" font-semibold text-2xl">Repositories</div>
          <div className=" font-normal text-xs text-[rgba(65,70,81,1)]">33 total repositiories</div>
        </div>
        <div className="flex gap-2 mt-1 mb-1">
          <div className=" border rounded-lg p-2 h-10 flex items-center gap-2"><Refresh/>Refresh All</div>
          <div className=" border rounded-lg h-10 p-2 flex items-center gap-2 bg-blue-500 text-white"> <Add/>Add Repository</div>
        </div>
      </div>
      <input type="text" placeholder={`Search Repositories`} className=" border mb-1 rounded-lg h-11 w-[336px] p-2 font-normal text-sm" />
      {/* <div className=" border rounded-lg h-11 w-[336px] p-2 font-normal text-sm flex items-center">
      Search Repositories
      </div> */}
    </div>
  );
};

const Refresh = ()=>(
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
)

const Add = ()=>(
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

)

export default Header;
