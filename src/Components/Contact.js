import React, { useState } from "react";
import "../../src/App.css";

const Contact = ({ street, setStreet, phone, setPhone, email, setEmail }) => {
  return (
    <div className="  w-[100%] ">
      <div className=" bg-[#333333]">
        <h1 className=" text-[25px] pb-12 font-extrabold pt-6 ">
          Contact Details
        </h1>

        <div className=" form-floating ">
          <input
            type="text"
            className=" bg-[#333333] form-control  text-white focus:bg-[#333333] p-2 inp  w-[90%] text-[12px]  "
            id="floatingInput"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor="floatingInput"> Street#</label>
        </div>
        <br />
        <div className=" form-floating ">
          <input
            type="Number"
            className=" bg-[#333333] p-2 inp w-[90%] text-[12px]  mt-1 form-control  text-white focus:bg-[#333333]"
            id="floatingInput"
            placeholder="Phone no"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="floatingInput">Phone#</label>
        </div>
        <br />

        <div className=" form-floating">
          <input
            type="email"
            className=" bg-[#333333] p-2 inp w-[90%] text-[12px]  mt-1 form-control  text-white focus:bg-[#333333] "
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">EMAIL</label>
        </div>
      </div>
      {/* <div className=" w-[65%] bord ord   ">
        <h1 className=" text-[12px]  ml-[5%] text-[#2BABE2]    pb-4">
          Contact Details
        </h1>
        <div>
          <div className="  rep">
            <h1 className="    p-3   hh ml-[5%] text-[12px]  text-black break-words mb-5  ">
              {street.length === 0 ? "Street Number:-" : street}
            </h1>
            <h1 className="break-words  p-3 text-[12px]   hh ml-[5%] text-black ">
              {phone.length === 0 ? "Phone Number:-" : phone}
            </h1>
          </div>
          <br />
          <h1 className=" break-words  mt-4 text-[12px]  p-3  hh ml-[5%]  text-black">
            {email.length === 0 ? "Email Address:-" : email}
          </h1>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
