import React, { useState } from "react";
import "./App.css";

import Form from "./Components/Form";
import CV from "./Components/CV";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [education, setEducation] = useState([
    {
      Degree: "",
      Institute: "",
      Year: "",
      Town: "",
      Specialization: [""],
    },
  ]);

  const [work, setWork] = useState([
    { Role: "", Year: "", Company: "", Town: "", Specialization: [""] },
  ]);

  return (
    <div className="bg-[#E4E4E4] ">
      <div className=" h-[100%] flex w-[100%]  ">
        <div className="w-[30%] bg-[#333333] p-3  ">
          <Form
            setFirstName={setFirstName}
            firstName={firstName}
            setLastName={setLastName}
            lastName={lastName}
            designation={designation}
            setDesignation={setDesignation}
            street={street}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            setStreet={setStreet}
            education={education}
            setEducation={setEducation}
            work={work}
            setWork={setWork}
          />
        </div>
        <div className="w-[70%] bg-white px-[55px] py-9">
          <CV
            firstName={firstName}
            lastName={lastName}
            designation={designation}
            street={street}
            education={education}
            phone={phone}
            email={email}
            work={work}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
