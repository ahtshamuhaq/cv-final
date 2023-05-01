import React from "react";
import "../../src/App.css";
const Work = ({ work, setWork, index }) => {
  console.log(index);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newVals = [...work];
    newVals[index][name] = value;
    setWork(newVals);
  };

  return (
    <div className="content w-[100%]">
      <div className="  w-[100%] ">
        <div className="    bg-[#333333] bard">
          <h1 className=" text-[15px] mb-8   font-extrabold pt-6  ">
            Work Details
          </h1>
          <div className="flex justify-start">
            <div className=" form-floating mt-4">
              <input
                type="text"
                value={work[index].role}
                name="Role"
                className="  bg-[#333333] w-[90%] text-[12px]   p-2 inp form-control   text-white focus:bg-[#333333] "
                placeholder="Your Role"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Role</label>
            </div>{" "}
            <br />
            <div className="form-group form-floating mt-4 ">
              <input
                type="date"
                name="Year"
                className="  bg-[#333333] w-[90%] text-[12px]   p-2 inp form-control  text-white focus:bg-[#333333] "
                value={work[index].year}
                placeholder="Time period"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Time Period</label>
            </div>
          </div>
          <br />
          <div className="flex justify-start">
            <div className="form-group form-floating ">
              <input
                type="text"
                name="Company"
                className="  bg-[#333333] w-[90%] text-[12px]   p-2 inp form-control  text-white focus:bg-[#333333] "
                value={work[index].institute}
                placeholder="Company Name"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Company Name</label>
            </div>
            <br />
            <div className="form-group form-floating ">
              <input
                type="text"
                name="Town"
                className="  bg-[#333333] w-[90%] text-[12px]   p-2 inp form-control  text-white focus:bg-[#333333] "
                value={work[index].town}
                placeholder="Town Name"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Town Name</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
