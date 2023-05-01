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
    },
  ]);
  const [details, setDetails] = useState([{ specialization: "" }]);
  const [workDetails, setWorkDetails] = useState([{ specialization: "" }]);
  const [eduach, setEduach] = useState([{ acheivments: "" }]);
  const [workach, setWorkach] = useState([{ acheivments: "" }]);

  const [work, setWork] = useState([
    { Role: "", Year: "", Company: "", Town: "" },
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
            details={details}
            setDetails={setDetails}
            work={work}
            setWork={setWork}
            workDetails={workDetails}
            setWorkDetails={setWorkDetails}
            eduach={eduach}
            setEduach={setEduach}
            workach={workach}
            setWorkach={setWorkach}
          />
        </div>
        <div className="w-[70%] bg-white px-[55px] py-9">
          <CV
            firstName={firstName}
            lastName={lastName}
            designation={designation}
            street={street}
            education={education}
            details={details}
            phone={phone}
            email={email}
            work={work}
            workDetails={workDetails}
            eduach={eduach}
            workach={workach}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
