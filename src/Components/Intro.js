import React from "react";
import "../../src/App.css";

const Intro = ({
  setFirstName,
  firstName,
  lastName,
  setLastName,
  setDesignation,
  designation,
}) => {
  return (
    <div className="  w-[100%]">
      <div className="  bg-[#333333]">
        <h1 className=" text-[25px]  pt-12 font-extrabold pb-12">
          My Information
        </h1>
        <div className=" form-floating">
          <input
            type="text"
            className=" bg-[#333333] p-2 inp w-[90%] text-[12px]  mt-1 form-control  text-white focus:bg-[#333333] "
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="floatingInput">FirstName </label>
        </div>
        <div className=" form-floating ">
          <input
            type="text"
            className=" bg-[#333333] p-2 inp w-[90%] text-[12px]  mt-4 form-control  text-white focus:bg-[#333333] "
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="floatingInput">LastName</label>
        </div>
        <div className=" form-floating  ">
          <input
            type="text"
            className=" bg-[#333333] p-2 inp w-[90%] text-[12px]  mt-4 form-control  text-white focus:bg-[#333333] "
            placeholder="DESIGNATION"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
          <label htmlFor="floatingInput">Designation</label>
        </div>

        <br />
      </div>
      {/* <div className="w-[65%] h-[30vh] bord">
        <div className="flex rep ">
          <h1 className="  text-black  font-bold  hh ml-[5%] mt-6 text-[16px]  break-words   mr-3">
            {firstName.length === 0 ? "FirstName" : firstName}
          </h1>
          <h1 className="  text-[16px] font-bold text-black  hh mt-6 break-words   ">
            {lastName.length === 0 ? "LastName" : lastName}
          </h1>
        </div>
        <h1 className="   text-[17px]     hh ml-[5%] mt-12 text-[#2BABE2]  break-words ">
          {designation.length === 0 ? "Designation:-" : designation}
        </h1>
        <p className="  hq ml-[5%] mt-12 text-black break-words ">
          {introduction.length === 0 ? "Write About Yourself" : introduction}
        </p>
      </div> */}
    </div>
  );
};

export default Intro;
