import React, { useState } from "react";
import { Container } from "react-bootstrap";
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
    <Container className="content">
      <div className="row">
        <div className="col-sm-12">
          {inputList.map((x, i) => (
            <div className="flex mb-3">
              <div className="mt-5 w-[45%]">
                <div className="flex col-md-4  mt-10">
                  <div className=" form-floating">
                    <input
                      type="text"
                      name="Role"
                      className="bg-zinc-600 p-2 inp form-control"
                      value={inputList[i].Role}
                      placeholder="Your designation"
                      onChange={(e) => handleinputchange(e, i)}
                    />
                    <label htmlFor="">Role</label>
                  </div>
                </div>{" "}
                <br />
                <div className="form-group form-floating col-md-4">
                  <input
                    type="text"
                    name="Company"
                    className="bg-zinc-600 p-2 inp  form-control"
                    value={inputList[i].Company}
                    placeholder="Company Name"
                    onChange={(e) => handleinputchange(e, i)}
                  />
                  <label htmlFor="">Company</label>
                </div>
                <br />
                <div className="form-group form-floating  col-md-4">
                  <input
                    type="text"
                    name="Year"
                    className="bg-zinc-600 p-2 inp form-control"
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
                      className="bg-blue-500  ml-10 mb-5 mt-4  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={handleaddclick}
                    >
                      Add More
                    </button>
                  )}
                </div>
              </div>
              <div className="w-[10%S] ml-[5%] mt-5 text-black bg-black h-[48vh]">
                h
              </div>
              <div className="w-[45%]">
                <div>
                  <h1 className="bg-zinc-600 p-3 text-center hh break-words ml-[25%] w-1/2 mt-14 ">
                    {inputList[i].Role.length === 0
                      ? "Designation"
                      : inputList[i].Role}
                  </h1>
                  <h1 className="bg-zinc-600 p-3 text-center hh break-words ml-[25%] w-1/2 mt-10 ">
                    {inputList[i].Company.length === 0
                      ? "Company Name"
                      : inputList[i].Company}
                  </h1>
                </div>
                <h1 className="bg-zinc-600 p-3 text-center hh break-words ml-[25%] w-1/2 mt-10 ">
                  {inputList[i].Year.length === 0
                    ? "Experience"
                    : inputList[i].Year}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Work;
