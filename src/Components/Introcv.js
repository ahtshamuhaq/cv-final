import React from "react";
import "../../src/App.css";

const Introcv = ({ firstName, lastName, designation }) => {
  return (
    <div className=" w-[100%] mt-[2%]">
      <div className="  bord">
        <div className="flex  ">
          <h1 className="  text-black  font-black  hh mt-6 text-[16px]  break-words leading-[20px]  mr-3">
            {firstName.length === 0 ? "FirstName" : firstName}
          </h1>
          <h1 className="  text-[16px] font-black text-black leading-[20px]  hh mt-6 break-words   ">
            {lastName.length === 0 ? "LastName" : lastName}
          </h1>
        </div>
        <h1 className="   text-[17px]   font-bold  hh mt-2 text-[#2BABE2] leading-[20px]  break-words ">
          {designation.length === 0 ? "Designation" : designation}
        </h1>
      </div>
    </div>
  );
};

export default Introcv;
