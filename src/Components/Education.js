import React from "react";
import "../../src/App.css";
const Education = ({ education, setEducation, index }) => {
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newVals = [...education];
    newVals[index][name] = value;
    setEducation(newVals);
  };
  const handlesInputChange = (event, y) => {
    const { value } = event.target;
    const newVals = [...education];
    newVals[index].Specialization[y] = value;
    setEducation(newVals);
  };
  const addSpecial = (index) => {
    const newEducation = [...education];
    newEducation[index].Specialization.push("");
    setEducation(newEducation);
  };

  const removeSpecial = (educationInd, specialInd) => {
    const newEducation = [...education];
    newEducation[educationInd].Specialization.splice(specialInd, 1);
    setEducation(newEducation);
  };
  const handleRemoveEducation = (index) => {
    const list = [...education];
    list.splice(index, 1);
    setEducation(list);
  };
  return (
    <div className=" w-full">
      <div className="  w-full ">
        <div className=" bg-gray">
          <div className="flex justify-between w-11/12">
            <h1 className=" text-[15px] mb-8 font-extrabold pt-8">
              Education Details
            </h1>
            <div className="mb-8 pt-8 ">
              {education.length !== 1 && (
                <button
                  className=" text-white font-bold"
                  onClick={() => handleRemoveEducation(index)}
                >
                  {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  }{" "}
                </button>
              )}
            </div>
          </div>
          <div className="flex justify-start w-11/12">
            <div className="form-floating w-1/2 ">
              <input
                type="text"
                value={education[index].degree}
                name="Degree"
                className="bg-gray text-[12px] p-2 form-control text-white focus:bg-gray"
                placeholder="Your Degree"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Degree</label>
            </div>{" "}
            <div className="form-group form-floating w-1/2 ml-3">
              <input
                type="date"
                name="Year"
                className="bg-gray text-[12px] p-2 inp form-control text-white focus:bg-gray"
                value={education[index].year}
                placeholder="Date"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Date of graduation</label>
            </div>
          </div>
          <br />
          <div className="flex justify-start w-11/12">
            <div className="form-group form-floating w-1/2">
              <input
                type="text"
                name="Institute"
                className="bg-gray text-[12px] p-2 form-control text-white focus:bg-gray"
                value={education[index].institute}
                placeholder="Institute Name"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Institute Name</label>
            </div>
            <br />
            <div className="form-group form-floating w-1/2 ml-3">
              <input
                type="text"
                name="Town"
                className="bg-gray text-[12px] p-2 form-control text-white focus:bg-gray"
                value={education[index].town}
                placeholder="Town Name"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Town Name</label>
            </div>
          </div>
          <div>
            {education[index].Specialization.map((special, specialInd) => (
              <div className="flex w-11/12">
                <div
                  className="form-group form-floating w-2/3 mt-4"
                  key={specialInd}
                >
                  <input
                    type="text"
                    name="Specialization"
                    className="bg-gray text-[12px] p-2 form-control text-white focus:bg-gray"
                    value={special}
                    placeholder="Town Name"
                    onChange={(e) => handlesInputChange(e, specialInd)}
                  />
                  <br />
                  <label htmlFor="floatingInput">specialization</label>
                </div>
                <div className=" bg-gray w-fit flex justify-end">
                  {education[index].Specialization.length !== 1 && (
                    <button
                      className="mt-2 ml-6 text-white font-bold"
                      onClick={() => removeSpecial(index, specialInd)}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                  )}
                  {education[index].Specialization.length - 1 ===
                    specialInd && (
                    <button
                      className="mt-2 ml-6 text-white font-bold"
                      onClick={() => addSpecial(index)}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
