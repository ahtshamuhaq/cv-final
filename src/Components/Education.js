import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Inputs from "./Inputs";

const Education = (props) => {
  const [inputList, setinputList] = useState([
    { Role: "", Institute: "", Year: "" },
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
    setinputList([...inputList, { Role: "", Institute: "", Year: "" }]);
  };
  return (
    <Container className="content">
      <div className="row">
        <div className="col-sm-12">
          {inputList.map((x, i) => (
            <div className="flex mb-3">
              <div className="mt-5 w-[45%]">
                <div className="flex col-md-4  mt-4">
                  <Inputs
                    type="text"
                    name="Role"
                    className="bg-zinc-600 p-2  ml-10 "
                    value={inputList[i].Role}
                    placeholder="Your designation"
                    onChange={(e) => handleinputchange(e, i)}
                  />
                </div>{" "}
                <br />
                <div className="form-group col-md-4">
                  <Inputs
                    type="text"
                    name="Institute"
                    className="bg-zinc-600 p-2  ml-10 "
                    value={inputList[i].Institute}
                    placeholder="Enter Institute Name"
                    onChange={(e) => handleinputchange(e, i)}
                  />
                </div>
                <br />
                <div className="form-group col-md-4">
                  <Inputs
                    type="text"
                    name="Year"
                    className="bg-zinc-600 p-2 ml-10 "
                    value={inputList[i].Year}
                    placeholder="Date"
                    onChange={(e) => handleinputchange(e, i)}
                  />
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
                      className="bg-blue-500  ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={handleaddclick}
                    >
                      Add More
                    </button>
                  )}
                </div>
              </div>
              <div className="w-[10%S] ml-[5%] bg-black h-[35vh]">h</div>
              <div className="w-[45%]">
                <div>
                  <h1 className="bg-zinc-600 p-2  text-center ml-[25%] w-1/2 mt-4 ">
                    {inputList[i].Role.length === 0
                      ? "Enter your Designation"
                      : inputList[i].Role}
                  </h1>
                  <h1 className="bg-zinc-600 p-2 text-center  ml-[25%] w-1/2 mt-4 ">
                    {inputList[i].Institute.length === 0
                      ? "Enter your Institute Name"
                      : inputList[i].Institute}
                  </h1>
                </div>
                <h1 className="bg-zinc-600 p-2 text-center  ml-[25%] w-1/2 mt-4 ">
                  {inputList[i].Year.length === 0
                    ? "Enter you Date of Graduation"
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

export default Education;
