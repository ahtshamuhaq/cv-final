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
  const [stillWorking, setStillWorking] = useState(false);
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
    {
      Role: "",
      Joining: "",
      Leaving: "",
      Company: "",
      Town: "",
      Specialization: [""],
    },
  ]);

  return (
    <div className="bg-[#E4E4E4] ">
      <div className=" h-full flex w-full  ">
        <div className="w-[461px] bg-gray  p-3  ">
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
            stillWorking={stillWorking}
            setStillWorking={setStillWorking}
          />
        </div>
        <div className="bg-white w-full px-[55px] py-9">
          <CV
            firstName={firstName}
            lastName={lastName}
            designation={designation}
            street={street}
            education={education}
            phone={phone}
            email={email}
            work={work}
            stillWorking={stillWorking}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
