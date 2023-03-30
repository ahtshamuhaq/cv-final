import React, { useState } from "react";
import "../../src/App.css";

const Contact = () => {
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex justify-between">
      <div className="mt-5 w-[45%]">
        <h1 className=" text-3xl mb-2   mt-2">Contact Details</h1>

        <div className=" form-floating mb-3">
          <input
            type="text"
            className="bg-zinc-600 form-control p-2 inp mt-2 w-1/2 "
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
            className="bg-zinc-600 p-2 inp w-1/2 mt-2 form-control"
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
            className="bg-zinc-600 p-2 inp w-1/2 mt-2 form-control "
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">EMAIL</label>
        </div>
      </div>
      <div className=" w-[905px] bord ord  ">
        <h1 className=" text-[40px] mb-8    mt-2">Contact Details</h1>
        <div className="ml-[25%]">
          <div className="flex flex-col  rep">
            <h1 className="bg-zinc-600  p-3 hh break-words mb-5  w-1/2 text-center">
              {street.length === 0 ? "Street Number" : street}
            </h1>
            <h1 className=" p-3 bg-zinc-600 break-words text-center hh w-1/2">
              {phone.length === 0 ? "Phone Number" : phone}
            </h1>
          </div>
          <br />
          <h1 className="bg-zinc-600 p-3 text-center break-words  mt-8 hh w-1/2">
            {email.length === 0 ? "Email Address" : email}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
