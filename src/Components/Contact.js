import React from "react";
import "../../src/App.css";

const Contact = ({ street, setStreet, phone, setPhone, email, setEmail }) => {
  return (
    <div className="w-full">
      <div className="bg-gray">
        <h1 className="text-[15px] mb-8 font-extrabold pt-6">
          Contact Details
        </h1>

        <div className="form-floating w-11/12">
          <input
            type="text"
            className="bg-gray form-control text-white focus:bg-gray p-2 w-full text-[12px]"
            id="floatingInput"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor="floatingInput"> Street#</label>
        </div>
        <br />
        <div className="flex justify-start w-11/12">
          <div className="form-floating w-1/2 ">
            <input
              type="Number"
              className=" bg-gray p-2 text-[12px] mt-1 form-control text-white focus:bg-gray "
              id="floatingInput"
              placeholder="Phone no"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="floatingInput">Phone#</label>
          </div>
          <br />

          <div className=" form-floating w-1/2 ml-3">
            <input
              type="email"
              className=" bg-gray p-2 text-[12px] mt-1 form-control text-white focus:bg-gray  "
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
