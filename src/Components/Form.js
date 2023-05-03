import React from "react";
import Intro from "./Intro";
import Contact from "./Contact";
import Education from "./Education";
import Work from "./Work";

const Form = ({
  setFirstName,
  firstName,
  setLastName,
  lastName,
  designation,
  setDesignation,
  street,
  setStreet,
  phone,
  setPhone,
  email,
  setEmail,
  education,
  setEducation,
  stillWorking,
  setStillWorking,

  work,
  setWork,
}) => {
  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        Degree: "",
        Institute: "",
        Year: "",
        Town: "",
        Specialization: [""],
      },
    ]);
  };

  const handleAddWork = () => {
    setWork([
      ...work,
      {
        Role: "",
        Joining: "",
        Leaving: "",
        Company: "",
        Town: "",
        Specialization: [""],
      },
    ]);
  };

  return (
    <div className="forms">
      <Intro
        firstName={firstName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        lastName={lastName}
        designation={designation}
        setDesignation={setDesignation}
      />
      <Contact
        street={street}
        setStreet={setStreet}
        setEmail={setEmail}
        email={email}
        phone={phone}
        setPhone={setPhone}
      />
      <div>
        {education.map((x, index) => (
          <>
            <Education
              education={education}
              setEducation={setEducation}
              index={index}
            />

            <div className="col-md-2  bg-[#333333] w-[100%] pt-2">
              {education.length - 1 === index && (
                <button
                  className="bg-blue-500 mt-2 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleAddEducation}
                >
                  Add more{" "}
                </button>
              )}
            </div>
          </>
        ))}
      </div>
      <div className="mb-16">
        {work.map((x, index) => (
          <>
            <Work
              work={work}
              setWork={setWork}
              index={index}
              stillWorking={stillWorking}
              setStillWorking={setStillWorking}
            />

            <div className="col-md-2  bg-[#333333] w-[100%] pt-2 ">
              {work.length - 1 === index && (
                <button
                  className="bg-blue-500 mt-2 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleAddWork}
                >
                  AddMore
                </button>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Form;
