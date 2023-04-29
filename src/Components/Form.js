import React from "react";
import Intro from "./Intro";
import Contact from "./Contact";
import Education from "./Education";
import Description from "./Description";
import Work from "./Work";
import Workdes from "./Workdes";

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
  details,
  setDetails,
  work,
  setWork,
  workDetails,
  setWorkDetails,
}) => {
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

            {details.map((x, index) => (
              <>
                <Description
                  details={details}
                  setDetails={setDetails}
                  index={index}
                />
                <div className="col-md-2  bg-[#333333] w-[100%] flex justify-end">
                  {details.length - 1 === index && (
                    <button
                      className="bg-blue-500 mt-4  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={handleaddedclick}
                    >
                      AddMore
                    </button>
                  )}
                  {details.length !== 1 && (
                    <button
                      className="bg-blue-500 mt-4  ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => handleremoved(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </>
            ))}
            <div className="col-md-2  bg-[#333333] w-[100%] pt-4">
              {education.length !== 1 && (
                <button
                  className="bg-blue-500 mt-4  ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleremove(index)}
                >
                  Remove
                </button>
              )}
              {education.length - 1 === index && (
                <button
                  className="bg-blue-500 mt-2 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleaddclick}
                >
                  AddMore
                </button>
              )}
            </div>
          </>
        ))}
      </div>
      <div>
        {work.map((x, index) => (
          <>
            <Work work={work} setWork={setWork} index={index} />

            {workDetails.map((x, index) => (
              <>
                <Workdes
                  workDetails={workDetails}
                  setWorkDetails={setWorkDetails}
                  index={index}
                />
                <div className="col-md-2  bg-[#333333] w-[100%] flex justify-end">
                  {workDetails.length - 1 === index && (
                    <button
                      className="bg-blue-500 mt-4  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={handleaddedclick}
                    >
                      AddMore
                    </button>
                  )}
                  {workDetails.length !== 1 && (
                    <button
                      className="bg-blue-500 mt-4  ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => handleremoved(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </>
            ))}
            <div className="col-md-2  bg-[#333333] w-[100%] pt-4">
              {work.length !== 1 && (
                <button
                  className="bg-blue-500 mt-4  ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleremove(index)}
                >
                  Remove
                </button>
              )}
              {work.length - 1 === index && (
                <button
                  className="bg-blue-500 mt-2 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleaddclick}
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
