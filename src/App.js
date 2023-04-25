import React, { useState } from "react";
import "./App.css";

import Form from "./Components/Form";
import CV from "./Components/CV";
import Educationcv from "./Components/Educationcv";
import Workcv from "./Components/Workcv";
import Education from "./Components/Education";
import Work from "./Components/Work";

function App() {
  const initialDAta = [{ Degree: "", Institute: "", Year: "" }];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState(initialDAta);
  const [inputLists, setinputLists] = useState([
    { Role: "", Company: "", Year: "" },
  ]);

  const handleremove = (index) => {
    const list = [...education];
    list.splice(index, 1);
    setEducation(list);
  };
  const handleaddclick = () => {
    setEducation([...education, { initialDAta }]);
  };

  const handleaddingclick = () => {
    setinputLists([...inputLists, { Role: "", Company: "", Year: "" }]);
  };
  const handleremoving = (index) => {
    const list = [...inputLists];
    list.splice(index, 1);
    setinputLists(list);
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
          />
        </div>
        <div className="w-[70%]">
          <CV
            firstName={firstName}
            lastName={lastName}
            designation={designation}
            street={street}
            phone={phone}
            email={email}
          />
        </div>
      </div>

      <div>
        {/* {education.map((x, i) => (
          <div>
            <div className="h-[100%] flex w-[100%]">
              <div className="w-[30%]">
                <Education education={education} setEducation={setEducation} />

                {console.log("education:", education)}
              </div>
              <div className="w-[70%]">
                <Educationcv education={education} />
              </div>
            </div>
            <div className="col-md-2  bg-[#333333] w-[30%]">
              {education.length !== 1 && (
                <button
                  className="bg-blue-500  ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleremove(i)}
                >
                  Remove
                </button>
              )}
              {education.length - 1 === i && (
                <button
                  className="bg-blue-500 mt-2 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleaddclick}
                >
                  AddMore
                </button>
              )}
            </div>
          </div>
        ))} */}
        <Education />
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
                  className="bg-blue-500 mt-2 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleaddingclick}
                >
                  AddMore
                </button>
              )}
            </div>
          </div>
        ))}
      </div> */}
      <Work />
    </div>
  );
}

export default App;
