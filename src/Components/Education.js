// import React, { useState } from "react";
// import "../../src/App.css";
// const Education = ({ education, setEducation }) => {
//   const handleChange = (event) => {
//     setEducation([{ degree: event.target.value, year: event.target.value }]);
//   };
//   return (
//     <div className="content w-[100%]">
//       {/* {dataObject.map((x, i) => ( */}
//       <div className="  w-[100%] ">
//         <div className="    bg-[#333333] bard">
//           <h1 className=" text-[15px] mb-8   font-extrabold pt-6  ">
//             Education Details
//           </h1>
//           <div className=" form-floating mt-4">
//             <input
//               type="text"
//               name="Degree"
//               className="  bg-[#333333] w-[90%] text-[12px]   p-2 inp form-control   text-white focus:bg-[#333333] "
//               // value={x}
//               placeholder="Your Degree"
//               // onChange={(e) => handleinputchange(e, i)}
//               onChange={handleChange}
//             />
//             {console.log()}
//             <label htmlFor="floatingInput">Degree</label>
//           </div>{" "}
//           <br />
//           <div className="form-group form-floating ">
//             <input
//               type="text"
//               name="Year"
//               className="  bg-[#333333] w-[90%] text-[12px]   p-2 inp form-control  text-white focus:bg-[#333333] "
//               // value={dataObject[i].Year}
//               placeholder="Date"
//               onChange={handleChange}
//             />
//             <label htmlFor="floatingInput">Date</label>
//           </div>
//           <br />
//           <div className="form-group form-floating ">
//             <input
//               type="text"
//               name="Institute"
//               className="  bg-[#333333] w-[90%] text-[12px]   p-2 inp form-control  text-white focus:bg-[#333333] "
//               // value={dataObject[i].Institute}
//               placeholder="Institute Name"
//               // onChange={(e) => handleinputchange(e, i)}
//             />
//             <label htmlFor="floatingInput">Institute Name</label>
//           </div>
//         </div>
//       </div>
//       {/* ))} */}
//     </div>
//   );
// };

// export default Education;
import React, { useState } from "react";
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
    <div className="content w-[100%]">
      {inputList.map((x, i) => (
        <div className="flex w-[100%] ">
          <div className=" w-[30%]   bg-[#333333] bard">
            <h1 className=" text-[25px] font-extrabold pb-10 pt-12     ">
              Education Details
            </h1>
            <div className=" form-floating mt-4">
              <input
                type="text"
                name="Degree"
                className="  bg-[#333333] w-[90%]  p-2 inp form-control   text-white focus:bg-[#333333] "
                value={inputList[i].Role}
                placeholder="Your Degree"
                onChange={(e) => handleinputchange(e, i)}
              />
              <label htmlFor="floatingInput">Degree</label>
            </div>{" "}
            <br />
            <div className="form-group form-floating ">
              <input
                type="date"
                name="Year"
                className="  bg-[#333333] w-[90%]  p-2 inp form-control  text-white focus:bg-[#333333] "
                value={inputList[i].Year}
                placeholder="Date"
                onChange={(e) => handleinputchange(e, i)}
              />
              <label htmlFor="floatingInput">Date</label>
            </div>
            <br />
            <div className="form-group form-floating ">
              <input
                type="text"
                name="Institute"
                className="  bg-[#333333] w-[90%]  p-2 inp form-control  text-white focus:bg-[#333333] "
                value={inputList[i].Institute}
                placeholder="Institute Name"
                onChange={(e) => handleinputchange(e, i)}
              />
              <label htmlFor="floatingInput">Institute Name</label>
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
                  className="bg-blue-500 mt-2 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleaddclick}
                >
                  AddMore
                </button>
              )}
            </div>
          </div>

          <div className="w-[65%] bord ord">
            <h1 className=" text-[25px]  ml-[5%] text-[#2BABE2] pb-4   pt-12  ">
              Education Details
            </h1>

            <div>
              <h1 className="   mt-4 break-words text-[15px ] font-extrabold   text-black  hh ml-[7%] mb-4  ">
                {inputList[i].Degree.length === 0
                  ? "Degree:-"
                  : inputList[i].Degree}
              </h1>
              <span className="         hh  ml-[7%] text-[15px ] break-words   text-black   ">
                {inputList[i].Year.length === 0
                  ? "Graduation Date"
                  : inputList[i].Year}
              </span>
              <span className="         hh  break-words ml-2 text-[15px ]  text-[#2BABE2]   mt-16 ">
                {inputList[i].Institute.length === 0
                  ? "Institute Name:-"
                  : inputList[i].Institute}{" "}
              </span>
              <span className="text-black ">Town</span>
              <br />
              <ol
                className="text-black  ml-[12%] text-xl"
                style={{ listStyleType: "disc" }}
              >
                <li className="mt-4">Specialization</li>
                <li className="mt-4">Achievements</li>
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
