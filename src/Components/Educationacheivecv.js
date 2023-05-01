import React from "react";
import "../../src/App.css";
const Educationacheivecv = ({ eduach, index }) => {
  return (
    <div className="content  ">
      <div className="w-[65%]">
        <div>
          <ol
            className="text-black ml-8 text-[16px] mb-3 font-medium leading-4"
            style={{ listStyleType: "disc" }}
          >
            <li>acheivements: {eduach[index].acheivements}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Educationacheivecv;
