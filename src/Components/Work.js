import React, { useState } from "react";
import "../../src/App.css";
const Work = () => {
  const [inputList, setinputList] = useState([
    { Role: "", Company: "", Year: "" },
  ]);

  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inputList, { Role: "", Company: "", Year: "" }]);
  };
  return (
    <div className="content">
      {inputList.map((x, i) => (
        <div className="flex w-[100%] ">
          <div className=" w-[35%]  bg-[#333333]">
            <h1 className=" text-[40px] mb-8    mt-2  ">Work Experience</h1>

            <div className="flex   mt-10">
              <div className=" form-floating">
                <input
                  type="text"
                  name="Role"
                  className="  bg-[#333333]  w-[191px] p-2 inp form-control  text-white focus:bg-[#333333]"
                  value={inputList[i].Role}
                  placeholder="Your designation"
                  onChange={(e) => handleinputchange(e, i)}
                />
                <label htmlFor="">Role</label>
              </div>
            </div>
            <br />
            <div className="form-group form-floating">
              <input
                type="text"
                name="Company"
                className="  bg-[#333333] w-1/2  p-2 inp  form-control  text-white focus:bg-[#333333]"
                value={inputList[i].Company}
                placeholder="Company Name"
                onChange={(e) => handleinputchange(e, i)}
              />
              <label htmlFor="">Company</label>
            </div>
            <br />
            <div className="form-group form-floating  ">
              <input
                type="text"
                name="Year"
                className="  bg-[#333333] w-1/2  p-2 inp form-control  text-white focus:bg-[#333333]"
                value={inputList[i].Year}
                placeholder="Date"
                onChange={(e) => handleinputchange(e, i)}
              />
              <label htmlFor="">Time spent</label>
            </div>
            <div className="form-group col-md-2 mt-4">
              {inputList.length !== 1 && (
                <button
                  className="bg-blue-500  ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleremove(i)}
                >
                  Remove
                </button>
              )}
              {inputList.length - 1 === i && (
                <button
                  className="bg-blue-500  ml-10 mb-5 mt-2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleaddclick}
                >
                  AddMore
                </button>
              )}
            </div>
          </div>

          <div className="w-[65%] bord ord">
            <h1
              className=" text-[40px]  
              ml-[5%] text-teal-400  pb-4 pt-12  "
            >
              Work Experience
            </h1>

            <div>
              <h1 className="  font-extrabold   hh ml-[8%]  break-words text-2xl text-black mt-14 ">
                {inputList[i].Role.length === 0
                  ? "Designation:-"
                  : inputList[i].Role}
              </h1>
              <h1 className="    text-2xl      hh ml-[8%]  break-words text-black mt-14 ">
                {inputList[i].Company.length === 0
                  ? "Company Name:-"
                  : inputList[i].Company}
              </h1>
            </div>
            <h1 className="    text-2xl     hh ml-[8%]  break-words text-black mt-14 ">
              {inputList[i].Year.length === 0
                ? "Experience:-"
                : inputList[i].Year}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
