import React from "react";
import "../../src/App.css";
const Workcv = ({ work, index }) => {
  return (
    <div className="content w-[100%]">
      <div className="w-[100%] mt-8 ">
        <div className=" bord ord">
          <h1 className=" text-[15px] font-black   text-[#2BABE2]    mt-2  ">
            Work Details
          </h1>
          {console.log("here in CV index is ", index)}

          <div>
            <h1 className="    mt-4 break-words  font-extrabold  text-[12px]  text-black  hh mb-2 ml-2   ">
              {work[index].Role.length === 0 ? "Role" : work[index].Role}
            </h1>
            <span className="          hh  ml-2 mt-2  break-words  text-[12px]  text-black   ">
              {work[index].Year.length === 0 ? "Time Period" : work[index].Year}
            </span>
            <span className="          hh  break-words ml-2  text-[12px]  text-[#2BABE2]   mt-16 ">
              {work[index].Company.length === 0
                ? "Company Name"
                : work[index].Company}
            </span>
            <span className="text-black ml-2 text-[12px] ">
              {work[index].Town.length === 0 ? "Town" : work[index].Town}
            </span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workcv;
