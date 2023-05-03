import React from "react";
import "../../src/App.css";
const Work = ({ work, setWork, index, setStillWorking, stillWorking }) => {
  console.log(index);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newVals = [...work];
    newVals[index][name] = value;
    setWork(newVals);
  };
  const handlesInputChange = (event, y) => {
    const { value } = event.target;
    const newVals = [...work];
    newVals[index].Specialization[y] = value;
    setWork(newVals);
  };
  const addSpecial = (index) => {
    const newEducation = [...work];
    newEducation[index].Specialization.push("");
    setWork(newEducation);
  };

  const removeSpecial = (educationInd, specialInd) => {
    const newEducation = [...work];
    newEducation[educationInd].Specialization.splice(specialInd, 1);
    setWork(newEducation);
  };
  const handleRemoveWork = (index) => {
    const list = [...work];
    list.splice(index, 1);
    setWork(list);
  };
  const handleStillWorkingChange = (event) => {
    setStillWorking(event.target.checked);
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="bg-gray">
          <div className="flex justify-between w-11/12">
            <h1 className="text-[15px] mb-8 font-extrabold pt-6">
              Work Details
            </h1>
            <div className="mb-8 pt-8">
              {work.length !== 1 && (
                <button
                  className="text-white font-bold"
                  onClick={() => handleRemoveWork(index)}
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
                  }
                </button>
              )}
            </div>
          </div>
          <div className="form-floating w-11/12">
            <input
              type="text"
              value={work[index].role}
              name="Role"
              className="bg-gray text-[12px] p-2 form-control text-white focus:bg-gray"
              placeholder="Your Role"
              onChange={(e) => handleInputChange(e, index)}
            />
            <label htmlFor="floatingInput">Role</label>
          </div>{" "}
          <div className="flex justify-start mt-4 w-11/12">
            <div className="form-group form-floating w-1/2 ">
              <input
                type="date"
                name="Joining"
                className="bg-gray text-[12px] p-2 form-control text-white focus:bg-gray"
                value={work[index].Joining}
                placeholder="Time period"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Joining Date</label>
            </div>
            <div
              className={`form-group abd form-floating ml-3 w-1/2 ${
                stillWorking ? "hidden" : ""
              }`}
            >
              <input
                type="date"
                name="Leaving"
                className="bg-gray text-[12px] p-2 form-control text-white focus:bg-gray"
                value={work[index].Leaving}
                placeholder="Time period"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Leaving Date</label>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <label htmlFor="floatingInput">Still Working</label>
            <input
              type="checkbox"
              placeholder="Time period"
              className="ml-3"
              onChange={handleStillWorkingChange}
            />
          </div>
          <div className="flex justify-start w-11/12">
            <div className="form-group form-floating w-1/2">
              <input
                type="text"
                name="Company"
                className="bg-gray text-[12px] p-2 form-control text-white focus:bg-gray"
                value={work[index].institute}
                placeholder="Company Name"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Company Name</label>
            </div>
            <br />
            <div className="form-group form-floating w-1/2 ml-3 ">
              <input
                type="text"
                name="Town"
                className="bg-gray text-[12px] p-2 form-control text-white focus:bg-gray"
                value={work[index].town}
                placeholder="Town Name"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Town Name</label>
            </div>
          </div>
          <div>
            {work[index].Specialization.map((special, specialInd) => (
              <div className=" w-full flex ">
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
                <div className="bg-gray w-fit flex justify-end">
                  {work[index].Specialization.length !== 1 && (
                    <button
                      className="mt-2 ml-6 text-white font-bold"
                      onClick={() => removeSpecial(index, specialInd)}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                  )}
                  {work[index].Specialization.length - 1 === specialInd && (
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

export default Work;
