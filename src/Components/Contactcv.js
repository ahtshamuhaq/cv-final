import React from "react";
import "../../src/App.css";

const Contactcv = ({ street, email, phone }) => {
  return (
    <div className="w-[100%] mt-16">
      {/* <div className="w-[30%] bg-[#333333]">
        <h1 className=" text-[15px] font-extrabold mb-2   mt-2">
          Contact Details
        </h1>

        <div className=" form-floating mb-3">
          <input
            type="text"
            className=" bg-[#333333] form-control  text-white focus:bg-[#333333] p-2 inp mt-2 w-1/3 text-[15px ]  "
            id="floatingInput"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor="floatingInput"> Street#</label>
        </div>
        <br />
        <div className=" form-floating mb-3">
          <input
            type="Number"
            className=" bg-[#333333] p-2 inp w-1/3 text-[15px ]  mt-2 form-control  text-white focus:bg-[#333333]"
            id="floatingInput"
            placeholder="Phone no"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="floatingInput">Phone#</label>
        </div>
        <br />
        <div className=" form-floating mb-3">
          <input
            type="email"
            className=" bg-[#333333] p-2 inp w-1/3 text-[15px ]  mt-2 form-control  text-white focus:bg-[#333333] "
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">EMAIL</label>
        </div>
      </div> */}
      <div className="  bord ord   ">
        <h1 className=" text-[25px]  ml-[5%] text-[#2BABE2]    mb-4">
          Contact Details
        </h1>
        <div>
          <div className="  rep">
            <h1 className="    p-3   hh ml-[5%] text-[15px ]  text-black break-words mb-4 ">
              {street.length === 0 ? "Street Number:-" : street}
            </h1>
            <h1 className="break-words p-3 text-[15px ]   hh ml-[5%] text-black mb-4">
              {phone.length === 0 ? "Phone Number:-" : phone}
            </h1>
          </div>
          <br />
          <h1 className=" break-words  mb-4 text-[15px ]  p-3  hh ml-[5%]  text-black">
            {email.length === 0 ? "Email Address:-" : email}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contactcv;
