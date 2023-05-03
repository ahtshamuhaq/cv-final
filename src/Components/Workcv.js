import React from "react";
import "../../src/App.css";
const Workcv = ({ work, index, stillWorking }) => {
  return (
    <div className="w-full">
      <div className="w-full mt-8 ">
        <div>
          <h1 className="text-[15px] font-black text-blue mt-2">
            Work Details
          </h1>
          {console.log("here in CV index is ", index)}

          <div>
            <h1 className="mt-4 break-words font-extrabold text-[18px] text-black mb-2 ml-2">
              {work[index].Role.length === 0 ? "Role" : work[index].Role}
            </h1>
            <span className="ml-2 mt-2 break-words text-[18px] text-black">
              {work[index].Joining.length === 0
                ? "Joining Date"
                : work[index].Joining}
            </span>
            <span
              className={`ml-2 mt-2 break-words text-[18px] text-black ${
                stillWorking ? "hidden" : ""
              }`}
            >
              ----
            </span>
            <span
              className={`ml-2 mt-2 break-words text-[18px] text-black ${
                stillWorking ? "" : "hidden"
              }`}
            >
              (Still Working here)
            </span>
            <span
              className={`ml-2 mt-2 break-words text-[18px] text-black ${
                stillWorking ? "hidden" : ""
              }`}
            >
              {work[index].Leaving.length === 0
                ? "Leaving Date"
                : work[index].Leaving}
            </span>
            <span className="break-words ml-2 text-[18px] text-blue mt-16">
              {work[index].Company.length === 0
                ? "Company Name"
                : work[index].Company}
            </span>
            <span className="text-black ml-2 text-[18px]">
              {work[index].Town.length === 0 ? "Town" : work[index].Town}
            </span>
            <br />
            {work[index].Specialization.map((special, index) => (
              <div>
                <ol className="text-black ml-8 text-[16px] font-medium leading-4 list-disc">
                  <li className="mb-3 mt-3">
                    {special.length === 0
                      ? "specialization/Acheivements"
                      : special}
                  </li>
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workcv;
