import React, { useState } from "react";
import Inputs from "./Inputs";
import "../../src/App.css";

const Contact = () => {
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex justify-between">
      <div className="mt-5 w-[45%]">
        <Inputs
          type="text"
          className="bg-zinc-600 p-2 inp mt-2 ml-10"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <br />
        <Inputs
          type="text"
          className="bg-zinc-600 p-2 inp mt-2 ml-10"
          placeholder="Phone no"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <Inputs
          type="text"
          className="bg-zinc-600 p-2 inp mt-2 ml-10 "
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-[10%S] bg-black h-[35vh]">h</div>
      <div className="mt-5 w-[45%]">
        <div className="flex rep">
          <h1 className="bg-zinc-600 p-2 hh w-1/2 text-center">
            {street.length === 0 ? "Street Number" : street}
          </h1>
          <h1 className="ml-12 bg-zinc-600 text-center p-2 hh w-1/2">
            {phone.length === 0 ? "Phone Number" : phone}
          </h1>
        </div>
        <br />
        <h1 className="bg-zinc-600 p-2 text-center ml-[25%] hh w-1/2">
          {email.length === 0 ? "Email Address" : email}
        </h1>
      </div>
    </div>
  );
};

export default Contact;
