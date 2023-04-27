import React from "react";
import "../../src/App.css";
const Educationcv = ({ education }) => {
  return (
    <div className="content w-[100%]">
      {education.map((items, index) => (
        <div className="w-[100%] ">
          <div className=" bord ord">
            <h1 className=" text-[12px]   ml-[5%] text-[#2BABE2] pb-4   mt-2  ">
              Education Details
            </h1>

            <div>
              <span
                className="   mt-10 break-words  font-extrabold  text-[12px]  text-black  hh ml-[7%] mb-4  "
                key={index}
              >
                {/* {degree[i].Degree ? "Degree " : degree[i].Degree} */}
                {console.log("the following items are", items)}
                {items.degree}
              </span>
              <span
                className="         hh  ml-[7%]  break-words  text-[12px]  text-black   "
                key={index}
              >
                {items.Year}
              </span>
              {/* <span className="         hh  break-words ml-2  text-[12px]  text-[#2BABE2]   mt-16 ">
                {inputList[i].Institute.length === 0
                  ? "Institute Name "
                  : inputList[i].Institute}{" "}
              </span> */}
              <span className="text-black text-[12px] ">Town</span>
              <br />
              <ol
                className="text-black  ml-[12%] text-2xl"
                style={{ listStyleType: "disc" }}
              >
                <li className="mt-4 text-[12px] ">Specialization</li>
                <li className="mt-4 text-[12px] ">Achievements</li>
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Educationcv;
