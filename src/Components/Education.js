import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../../src/App.css";

const Education = (props) => {
  const [inputList, setinputList] = useState([
    { Degree: "", Institute: "", Year: "" },
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
    setinputList([...inputList, { Degree: "", Institute: "", Year: "" }]);
  };
  return (
    <Container className="content">
      <div className="row">
        <div className="col-sm-12">
          {inputList.map((x, i) => (
            <div className="flex mb-3">
              <div className="mt-5 w-[45%]">
                <div className=" col-md-4 form-floating mt-4">
                  <input
                    type="text"
                    name="Degree"
                    className="bg-zinc-600 p-2 inp form-control "
                    value={inputList[i].Role}
                    placeholder="Your Degree"
                    onChange={(e) => handleinputchange(e, i)}
                  />
                  <label htmlFor="floatingInput">Degree</label>
                </div>{" "}
                <br />
                <div className="form-group form-floating col-md-4">
                  <input
                    type="text"
                    name="Institute"
                    className="bg-zinc-600 p-2 inp form-control "
                    value={inputList[i].Institute}
                    placeholder="Institute Name"
                    onChange={(e) => handleinputchange(e, i)}
                  />
                  <label htmlFor="floatingInput">Institute Name</label>
                </div>
                <br />
                <div className="form-group form-floating col-md-4">
                  <input
                    type="text"
                    name="Year"
                    className="bg-zinc-600 p-2 inp form-control "
                    value={inputList[i].Year}
                    placeholder="Date"
                    onChange={(e) => handleinputchange(e, i)}
                  />
                  <label htmlFor="floatingInput">Date</label>
                </div>
                <div className="col-md-2 mt-4">
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
                      className="bg-blue-500 mt-4 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={handleaddclick}
                    >
                      Add More
                    </button>
                  )}
                </div>
              </div>
              <div className="w-[10%S] ml-[5%] mt-4 text-black bg-black h-[48vh]">
                h
              </div>
              <div className="w-[45%]">
                <div>
                  <h1 className="bg-zinc-600 p-3 mt-10 break-words text-center ml-[25%] hh w-1/2  ">
                    {inputList[i].Degree.length === 0
                      ? "Degree"
                      : inputList[i].Degree}
                  </h1>
                  <h1 className="bg-zinc-600 p-3 text-center hh break-words ml-[25%] w-1/2 mt-10 ">
                    {inputList[i].Institute.length === 0
                      ? "Institute Name"
                      : inputList[i].Institute}
                  </h1>
                </div>
                <h1 className="bg-zinc-600 p-3 text-center hh break-words ml-[25%] w-1/2 mt-10 ">
                  {inputList[i].Year.length === 0
                    ? " Graduation Date"
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
