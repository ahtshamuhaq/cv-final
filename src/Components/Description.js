import React, { useState } from "react";
import "../../src/App.css";
const Description = (props) => {
  const [details, setDetails] = useState([{ specialization: "" }]);

  const handlechange = (e, index) => {
    const { name, value } = e.target;
    const list = [...details];
    list[index][name] = value;
    setDetails(list);
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
    <div className=" w-[100%]">
      {details.map((x, i) => (
        <div className="flex w-[100%] ">
          <div className=" w-[30%]   bg-[#333333] bard">
            <div className="form-group form-floating ">
              <input
                type="text"
                name="specialization"
                className="  bg-[#333333] w-[90%]  p-2 inp form-control  text-white focus:bg-[#333333] "
                value={details[i].specialization}
                placeholder="Details"
                onChange={(e) => handlechange(e, i)}
              />
              <label htmlFor="floatingInput">Details</label>
            </div>
            <div className="col-md-2 mt-4">
              {details.length !== 1 && (
                <button
                  className="bg-blue-500 bts ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleremoved(i)}
                >
                  Remove
                </button>
              )}
              {details.length - 1 === i && (
                <button
                  className="bg-blue-500 bts
                    mt-2 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleaddedclick}
                >
                  AddMore
                </button>
              )}
            </div>
          </div>

          <div className="w-[65%] mt-[-200px]">
            <div>
              <ol
                className="text-black  ml-[12%] text-xl"
                style={{ listStyleType: "disc" }}
              >
                <li>{details[i].specialization}</li>
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
