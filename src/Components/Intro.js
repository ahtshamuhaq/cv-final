import React, { useState } from "react";
import Inputs from "./Inputs";
import "../../src/App.css";

const Intro = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  return (
    <div className="flex justify-between">
      <div className="mt-5 w-[45%]">
        <Inputs
          type="text"
          className="bg-zinc-600 p-2 inp ml-10 mr-6 mt-2"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <Inputs
          type="text"
          className="bg-zinc-600 p-2 inp ml-10"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />{" "}
        <br />
        <Inputs
          type="text"
          className="bg-zinc-600 p-2 inp mt-2 ml-10"
          placeholder="DESIGNATION"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
      </div>
      <div className="w-[10%S] bg-black h-[35vh]">h</div>
      <div className="mt-5 w-[45%]">
        <div className="flex rep">
          <h1 className="bg-zinc-600 hh p-2 text-center ml-[5%] w-1/3 mr-3">
            {firstName.length === 0 ? "FirstName" : firstName}
          </h1>
          <h1 className="bg-zinc-600 hh  text-center p-2  ml-[5%] w-1/3 ">
            {lastName.length === 0 ? "LastName" : lastName}
          </h1>
        </div>
        <h1 className="bg-zinc-600 p-2 hh text-center  ml-[25%] w-1/2 mt-4 ">
          {designation.length === 0 ? "Designation" : designation}
        </h1>
      </div>
    </div>
  );
};

export default Intro;
