import React from "react";
import "../../src/App.css";
const Descriptioncv = ({ details, index }) => {
  return (
    <div className="content w-[100% ">
      <div className="w-[65%]">
        <div>
          <ol
            className="text-black  ml-[19%] text-xl"
            style={{ listStyleType: "disc" }}
          >
            <li className="mb-3 mt-3">
              {details[index].specialization.length === 0
                ? "specialization"
                : details[index].specialization}
            </li>
            <li>acheivements: {details[index].acheivements}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Descriptioncv;
