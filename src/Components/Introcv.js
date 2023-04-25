import React from "react";
import "../../src/App.css";

const Introcv = ({ firstName, lastName, designation }) => {
  return (
    <div className=" w-[100%] mt-[10%]">
      <div className="  bord">
        <div className="flex rep ">
          <h1 className="  text-black  font-bold  hh ml-[5%] mt-6 text-[16px]  break-words   mr-3">
            {firstName.length === 0 ? "FirstName" : firstName}
          </h1>
          <h1 className="  text-[16px] font-bold text-black  hh mt-6 break-words   ">
            {lastName.length === 0 ? "LastName" : lastName}
          </h1>
        </div>
        <h1 className="   text-[17px]     hh ml-[5%] mt-12 text-[#2BABE2]  break-words ">
          {designation.length === 0 ? "Designation" : designation}
        </h1>
      </div>
    </div>
  );
};

export default Introcv;
