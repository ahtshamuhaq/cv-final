import React from "react";
import "../../src/App.css";
const Education = ({ education, setEducation, index }) => {
  console.log(index);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newVals = [...education];
    newVals[index][name] = value;
    setEducation(newVals);
  };

  console.log(education[index], index);

  return (
    <div className="content w-[100%]">
      <div className="  w-[100%] ">
        <div className="    bg-[#333333] bard">
          <h1 className=" text-[15px] mb-8   font-extrabold pt-6  ">
            Education Details
          </h1>
          <div className="flex justify-start">
            <div className=" form-floating mt-4">
              <input
                type="text"
                value={education[index].degree}
                name="Degree"
                className="  bg-[#333333]  text-[12px]   p-2 inp form-control   text-white focus:bg-[#333333] "
                placeholder="Your Degree"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Degree</label>
            </div>{" "}
            <div className="form-group form-floating mt-4 ml-3">
              <input
                type="date"
                name="Year"
                className="  bg-[#333333]  text-[12px]   p-2 inp form-control  text-white focus:bg-[#333333] "
                value={education[index].year}
                placeholder="Date"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Date</label>
            </div>
          </div>
          <br />
          <div className="flex justify-start">
            <div className="form-group form-floating ">
              <input
                type="text"
                name="Institute"
                className="  bg-[#333333]   text-[12px]   p-2 inp form-control  text-white focus:bg-[#333333] "
                value={education[index].institute}
                placeholder="Institute Name"
                onChange={(e) => handleInputChange(e, index)}
              />
              <label htmlFor="floatingInput">Institute Name</label>
            </div>
            <br />
            <div className="form-group form-floating ml-3">
              <input
                type="text"
                name="Town"
                className="  bg-[#333333]   text-[12px]   p-2 inp form-control  text-white focus:bg-[#333333] "
                value={education[index].town}
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

export default Education;
