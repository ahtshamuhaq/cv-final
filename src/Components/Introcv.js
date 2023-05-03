import React from "react";
import "../../src/App.css";

const Introcv = ({ firstName, lastName, designation }) => {
  return (
    <div className="w-full mt-[2%]">
      <div>
        <div className="flex">
          <h1 className="text-black font-black mt-6 text-[16px] break-words leading-[20px] mr-3">
            {firstName.length === 0 ? "FirstName" : firstName}
          </h1>
          <h1 className="text-[16px] font-black text-black leading-[20px] mt-6 break-words">
            {lastName.length === 0 ? "LastName" : lastName}
          </h1>
        </div>
        <h1 className="text-[17px] font-bold hh mt-2 text-blue leading-[20px] break-words">
          {designation.length === 0 ? "Designation" : designation}
        </h1>
      </div>
    </div>
  );
};

export default Introcv;
