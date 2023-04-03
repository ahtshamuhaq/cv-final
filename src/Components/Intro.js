import React, { useState } from "react";
import "../../src/App.css";

const Intro = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [age, setAge] = useState("");
  return (
    <div className="flex justify-between">
      <div className=" w-[35%] bg-[#333333]">
        <h1 className=" text-[40px]  pt-12  pb-12">My Information</h1>
        <div className=" form-floating">
          <input
            type="text"
            className=" bg-[#333333]  text-white  p-2 inp w-1/2 form-control mr-6 mt-2 focus:bg-[#333333] outline-0"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="floatingInput">FirstName </label>
        </div>
        <br />
        <div className=" form-floating ">
          <input
            type="text"
            className=" bg-[#333333]  text-white w-1/2 p-2  inp form-control focus:bg-[#333333]"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="floatingInput">LastName</label>
        </div>
        <div className=" form-floating  ">
          <input
            type="text"
            className=" bg-[#333333] p-2 w-1/2  text-white inp mt-2 form-control focus:bg-[#333333]"
            placeholder="DESIGNATION"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
          <label htmlFor="floatingInput">Designation</label>
        </div>
        <div className=" form-floating  ">
          <input
            type="text"
            className=" bg-[#333333] p-2 w-1/2  text-white inp mt-2 form-control focus:bg-[#333333]"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="floatingInput">Age</label>
        </div>
        <br />
      </div>
      <div className="w-[730px] bord">
        <h1 className=" text-[40px]  text-center text-[#F2CA46]  mt-24 pb-4  ">
          My Information
        </h1>

        <div className="flex rep ">
          <h1 className="      hh ml-[5%] mt-6 text-2xl  break-words   mr-3">
            {firstName.length === 0 ? "FirstName" : firstName}
          </h1>
          <h1 className="  text-2xl    hh ml-[5%] mt-6 break-words   ">
            {lastName.length === 0 ? "LastName" : lastName}
          </h1>
        </div>
        <h1 className="   text-2xl     hh ml-[5%] mt-12 text-teal-400  break-words ">
          {designation.length === 0 ? "Designation:-" : designation}
        </h1>
        <h1 className="   text-2xl     hh ml-[5%]  mt-8 break-words text-pink-900 ">
          {age.length === 0 ? "Age:-" : age}
        </h1>
      </div>
    </div>
  );
};

export default Intro;
