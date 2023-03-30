import React, { useState } from "react";
import "../../src/App.css";

const Intro = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  return (
    <div className="flex justify-between">
      <div className="mt-5 w-[45%]">
        <div className=" form-floating mb-3">
          <input
            type="text"
            className="bg-zinc-600 p-2 inp w-1/2 form-control mr-6 mt-2"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="floatingInput">FirstName </label>
        </div>
        <br />
        <div className=" form-floating mb-3">
          <input
            type="text"
            className="bg-zinc-600 w-1/2 p-2 text-black inp form-control"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="floatingInput">LastName</label>
        </div>
        <div className=" form-floating mb-3">
          <input
            type="text"
            className="bg-zinc-600 p-2 w-1/2 inp mt-2 form-control"
            placeholder="DESIGNATION"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
          <label htmlFor="floatingInput">Designation</label>
        </div>
        <br />
      </div>
      <div className="w-[10%S] text-black bg-black h-[48vh]">h</div>
      <div className="mt-5 w-[45%]">
        <div className="flex rep">
          <h1 className="bg-zinc-600 hh p-3 break-words text-center ml-[5%] w-1/3 mr-3">
            {firstName.length === 0 ? "FirstName" : firstName}
          </h1>
          <h1 className="bg-zinc-600 hh break-words text-center p-3 ml-[5%] w-1/3 ">
            {lastName.length === 0 ? "LastName" : lastName}
          </h1>
        </div>
        <h1 className="bg-zinc-600 p-3 hh text-center break-words ml-[25%] w-1/2 mt-4 ">
          {designation.length === 0 ? "Designation" : designation}
        </h1>
      </div>
    </div>
  );
};

export default Intro;
