import React from "react";
import "../../src/App.css";
const Workacheivecv = ({ workach, index }) => {
  return (
    <div className="content w-[100% ">
      <div className="w-[65%]">
        <div>
          <ol
            className="text-black ml-8 text-[16px] mb-3 font-medium leading-4"
            style={{ listStyleType: "disc" }}
          >
            <li>acheivements: {workach[index].acheivements}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Workacheivecv;
