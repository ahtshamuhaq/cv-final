import React from "react";
import "../../src/App.css";
const Educationcv = ({ education, index }) => {
  return (
    <div className="content w-[100%] ">
      <div className="w-[100%] ">
        <div className=" bord ord">
          <h1 className=" text-[15px] font-black   text-[#2BABE2]    mt-2  ">
            Education Details
          </h1>
          {console.log("here in CV index is ", index)}

          <div>
            <h1 className="    mt-4 break-words  font-extrabold  text-[12px]  text-black  hh mb-2 ml-2   ">
              {education[index].Degree.length === 0
                ? "Degree"
                : education[index].Degree}
            </h1>
            <span className="          hh  ml-2 break-words  text-[12px]  text-black   ">
              {education[index].Year.length === 0
                ? "Graduation Date"
                : education[index].Year}
            </span>
            <span className="          hh  break-words ml-2  text-[12px]  text-[#2BABE2]   ">
              {education[index].Institute.length === 0
                ? "Institute Name"
                : education[index].Institute}
            </span>
            <span className="text-black ml-2 text-[12px] ">
              {education[index].Town.length === 0
                ? "Town"
                : education[index].Town}
            </span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educationcv;
