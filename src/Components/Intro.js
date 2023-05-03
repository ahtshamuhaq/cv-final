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
        <h1 className=" text-[15px] mb-8   font-extrabold pt-6 ">
          My Information
        </h1>
        <div className="flex justify-start w-[100%]">
          <div className=" form-floating w-[45%]">
            <input
              type="text"
              className=" bg-[#333333] p-1 h-2 inp   text-[12px]  mt-1 form-control  text-white focus:bg-[#333333] "
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="floatingInput">FirstName </label>
          </div>
          <div className=" form-floating w-[43%] ml-3">
            <input
              type="text"
              className=" bg-[#333333] p-2 inp  text-[12px]  mt-1  form-control  text-white focus:bg-[#333333] "
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="floatingInput">LastName</label>
          </div>
        </div>

        <div className=" form-floating  ">
          <input
            type="text"
            className=" bg-[#333333] p-2 inp w-[90%] text-[12px]  ml-2 mt-4 form-control  text-white focus:bg-[#333333] "
            placeholder="DESIGNATION"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
          <label htmlFor="floatingInput">Designation</label>
        </div>

        <br />
      </div>
    </div>
  );
};

export default Intro;
