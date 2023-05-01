import React from "react";
import "../../src/App.css";

const Contact = ({ street, setStreet, phone, setPhone, email, setEmail }) => {
  return (
    <div className="  w-[100%] ">
      <div className=" bg-[#333333]">
        <h1 className=" text-[15px] mb-8   font-extrabold pt-6  ">
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
        <div className="flex justify-start">
          <div className=" form-floating ">
            <input
              type="Number"
              className=" bg-[#333333] p-2 inp  text-[12px]  mt-1 form-control  text-white focus:bg-[#333333]"
              id="floatingInput"
              placeholder="Phone no"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="floatingInput">Phone#</label>
          </div>
          <br />

          <div className=" form-floating ml-3">
            <input
              type="email"
              className=" bg-[#333333] p-2 inp  text-[12px]   mt-1 form-control  text-white focus:bg-[#333333] "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">EMAIL</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
