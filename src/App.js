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
  const [details, setDetails] = useState([
    { specialization: "", acheivments: "" },
  ]);
  const [workDetails, setWorkDetails] = useState([
    { specialization: "", acheivments: "" },
  ]);

  const [work, setWork] = useState([
    { Role: "", Year: "", Company: "", Town: "" },
  ]);
  const handleremove = (index) => {
    const list = [...education];
    list.splice(index, 1);
    setEducation(list);
  };
  const handleaddclick = () => {
    setEducation([
      ...education,
      { Degree: "", Institute: "", Year: "", Town: "" },
    ]);
  };
  const handleremoved = (index) => {
    const list = [...details];
    list.splice(index, 1);
    setDetails(list);
  };
  const handleaddedclick = () => {
    setDetails([...details, { specialization: "", acheivments: "" }]);
  };
  return (
    <div>
      <div className=" h-[100%] flex w-[100%] ">
        <div className="w-[30%]">
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
          />
        </div>
        <div className="w-[70%]">
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
          />
        </div>
      </div>

      {/* <div>
        {inputLists.map((x, i) => (
          <div>
            <div className="h-[100%] flex w-[100%]">
              <div className="w-[30%]">
                <Work inputLists={inputLists[i]} />
              </div>
              <div className="w-[70%]">
                <Workcv inputLists={inputLists[i]} />
              </div>
            </div>
            <div className="col-md-2  bg-[#333333] w-[30%]">
              {inputLists.length !== 1 && (
                <button
                  className="bg-blue-500  ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleremoving(i)}
                >
                  Remove
                </button>
              )}
              {inputLists.length - 1 === i && (
                <button
                  className="bg-blue-500 mt-2 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-"
                  onClick={handleaddingclick}
                >
                  AddMore
                </button>
              )}
            </div>
          </div>
        ))}
      </div> */}
      {/* <Works /> */}
    </div>
  );
}

export default App;
