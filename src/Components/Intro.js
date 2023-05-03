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
    <div className="w-full">
      <div className="bg-gray">
        <h1 className="text-[15px] mb-8 font-extrabold pt-6">My Information</h1>
        <div className="flex justify-start w-11/12 ">
          <div className="form-floating w-1/2]">
            <input
              type="text"
              className="bg-gray p-1 h-2 text-[12px] mt-1 form-control text-white focus:bg-gray"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="floatingInput">FirstName </label>
          </div>
          <div className=" form-floating w-1/2 ml-3">
            <input
              type="text"
              className="bg-gray p-2 text-[12px]  mt-1 form-control text-white focus:bg-gray"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="floatingInput">LastName</label>
          </div>
        </div>

        <div className="form-floating w-11/12">
          <input
            type="text"
            className="bg-gray p-2  text-[12px]  mt-4 form-control text-white focus:bg-gray"
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
