import React from "react";
import "../../src/App.css";

const Contactcv = ({ street, email, phone }) => {
  return (
    <div className="w-[100%] mt-16 mb-6">
      <div className="  bord ord   ">
        <h1 className=" text-[16px]  font-black  leading-4  text-[#2BABE2]    mb-8">
          Contact Details
        </h1>
        <div>
          <div className="  rep">
            <h1 className="      hh  text-[15px ]  text-black break-words mb-8 ">
              {street.length === 0 ? "Street Number " : street}
            </h1>
            <h1 className="break-words text-[15px ]   hh  text-black mb-8">
              {phone.length === 0 ? "Phone Number " : phone}
            </h1>
          </div>

          <h1 className=" break-words  text-[15px ]   hh   text-black">
            {email.length === 0 ? "Email Address " : email}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contactcv;
