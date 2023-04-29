import React from "react";
import "../../src/App.css";
const Workcv = ({ work, index }) => {
  return (
    <div className="content w-[100%]">
      {/* {education.map((items, index, i, k) => ( */}
      <div className="w-[100%] ">
        <div className=" bord ord">
          <h1 className=" text-[12px]   ml-[5%] text-[#2BABE2] pb-4   mt-2  ">
            Work Details
          </h1>
          {console.log("here in CV index is ", index)}

          <div>
            <span
              className="    mt-10 break-words  font-extrabold  text-[12px]  text-black  hh ml-[7%] mb-4  "
              // key={index}
            >
              {work[index].Role.length === 0 ? "Role" : work[index].Role}
              {/* {console.log("in cv degree is", education[index].degree, index)} */}
              {/* {initialDAta.degree} */}
            </span>
            <span
              className="          hh  ml-2 mt-2  break-words  text-[12px]  text-black   "
              // key={index}
            >
              {work[index].Year.length === 0 ? "Time Period" : work[index].Year}
              {/* {console.log("in cv date is", education[index].year, index)} */}
            </span>
            <span
              className="          hh  break-words ml-2  text-[12px]  text-[#2BABE2]   mt-16 "
              // key={index}/
            >
              {work[index].Company.length === 0
                ? "Company Name"
                : work[index].Company}
              {/* {console.log(
                "in cv institute is",
                education[index].institute,
                index
              )} */}

              {/* {items.institute} */}
            </span>
            <span className="text-black ml-2 text-[12px] ">
              {work[index].Town.length === 0 ? "Town" : work[index].Town}
            </span>
            <br />
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Workcv;
