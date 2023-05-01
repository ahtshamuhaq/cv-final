import React from "react";
import "../../src/App.css";
const Workdescv = ({ workDetails, index }) => {
  return (
    <div className="content w-[100% ">
      <div className="w-[65%]">
        <div>
          <ol
            className="text-black ml-8 text-[16px]  font-medium leading-4"
            style={{ listStyleType: "disc" }}
          >
            <li className="mb-3 mt-3">
              {workDetails[index].specialization.length === 0
                ? "specialization"
                : workDetails[index].specialization}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Workdescv;
