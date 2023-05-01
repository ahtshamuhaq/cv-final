import React from "react";
import Intro from "./Intro";
import Contact from "./Contact";
import Education from "./Education";
import Description from "./Description";
import Work from "./Work";
import Workdes from "./Workdes";
import Educationacheive from "./Educationacheive";
import Workacheive from "./Workacheive";

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
  eduach,
  setEduach,
  workach,
  setWorkach,
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
  const handlesremove = (index) => {
    const list = [...work];
    list.splice(index, 1);
    setWork(list);
  };
  const handlesaddclick = () => {
    setWork([...work, { Role: "", Year: "", Company: "", Town: "" }]);
  };
  const handleremoved = (index) => {
    const list = [...details];
    list.splice(index, 1);
    setDetails(list);
  };
  const handleaddedclick = () => {
    setDetails([...details, { specialization: "" }]);
  };
  const handlesremoved = (index) => {
    const list = [...workDetails];
    list.splice(index, 1);
    setWorkDetails(list);
  };
  const handlesaddedclick = () => {
    setWorkDetails([...workDetails, { specialization: "" }]);
  };
  const handlesaremoved = (index) => {
    const list = [...eduach];
    list.splice(index, 1);
    setEduach(list);
  };
  const handlesaaddedclick = () => {
    setEduach([...eduach, { acheivments: "" }]);
  };
  const handlesaaremoved = (index) => {
    const list = [...workach];
    list.splice(index, 1);
    setWorkach(list);
  };
  const handlesaaaddedclick = () => {
    setWorkach([...workach, { acheivments: "" }]);
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

            {details.map((x, index) => (
              <div className="flex justify-start">
                <Description
                  details={details}
                  setDetails={setDetails}
                  index={index}
                />
                <div className=" bg-[#333333]  flex ">
                  {details.length - 1 === index && (
                    <button
                      className=" mt-4   text-white font-bold "
                      onClick={handleaddedclick}
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  )}
                  {details.length !== 1 && (
                    <button
                      className=" mt-4  ml-6 text-white font-bold"
                      onClick={() => handleremoved(index)}
                    >
                      <i class="fa fa-minus"></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
            {eduach.map((x, index) => (
              <div className="flex justify-start">
                <Educationacheive
                  eduach={eduach}
                  setEduach={setEduach}
                  index={index}
                />
                <div className="col-md-2  bg-[#333333]  flex ">
                  {eduach.length - 1 === index && (
                    <button
                      className="mt-4   text-white font-bold"
                      onClick={handlesaaddedclick}
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  )}
                  {eduach.length !== 1 && (
                    <button
                      className="mt-4  ml-6 text-white font-bold"
                      onClick={() => handlesaremoved(index)}
                    >
                      <i class="fa fa-minus"></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="col-md-2  bg-[#333333] w-[100%] pt-4">
              {education.length !== 1 && (
                <button
                  className="bg-blue-500 mt-4  ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleremove(index)}
                >
                  Remove{" "}
                </button>
              )}
              {education.length - 1 === index && (
                <button
                  className="bg-blue-500 mt-2 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleaddclick}
                >
                  Add more{" "}
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
              <div className="flex justify-start">
                <Workdes
                  workDetails={workDetails}
                  setWorkDetails={setWorkDetails}
                  index={index}
                />
                <div className="col-md-2  bg-[#333333]  flex">
                  {workDetails.length - 1 === index && (
                    <button
                      className="mt-4   text-white font-boldl"
                      onClick={handlesaddedclick}
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  )}
                  {workDetails.length !== 1 && (
                    <button
                      className="mt-4 ml-6  text-white font-bold"
                      onClick={() => handlesremoved(index)}
                    >
                      <i class="fa fa-minus"></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
            {workach.map((x, index) => (
              <div className="flex justify-start">
                <Workacheive
                  workach={workach}
                  setWorkach={setWorkach}
                  index={index}
                />
                <div className="col-md-2  bg-[#333333] flex ">
                  {workach.length - 1 === index && (
                    <button
                      className="mt-4   text-white font-bold"
                      onClick={handlesaaaddedclick}
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  )}
                  {workach.length !== 1 && (
                    <button
                      className="mt-4 ml-6  text-white font-bold"
                      onClick={() => handlesaaremoved(index)}
                    >
                      <i class="fa fa-minus"></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="col-md-2  bg-[#333333] w-[100%] pt-4">
              {work.length !== 1 && (
                <button
                  className="bg-blue-500 mt-4  ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handlesremove(index)}
                >
                  Remove
                </button>
              )}
              {work.length - 1 === index && (
                <button
                  className="bg-blue-500 mt-2 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handlesaddclick}
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
