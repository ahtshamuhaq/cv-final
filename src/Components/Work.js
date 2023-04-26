// import React, { useState } from "react";
// import "../../src/App.css";
// const Work = () => {
//   const [inputList, setinputList] = useState([
//     { Role: "", Company: "", Year: "" },
//   ]);

//   const handleinputchange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[index][name] = value;
//     setinputList(list);
//   };

//   const handleremove = (index) => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setinputList(list);
//   };

//   const handleaddclick = () => {
//     setinputList([...inputList, { Role: "", Company: "", Year: "" }]);
//   };
//   return (
//     <div className="content">
//       {inputList.map((x, i) => (
//         <div className="  w-[100%] ">
//           <div className="  bg-[#333333]">
//             <h1 className=" text-[15px] mb-8   font-extrabold pt-6 ">
//               Work Experience
//             </h1>

//             <div className="  mt-10">
//               <div className=" form-floating">
//                 <input
//                   type="text"
//                   name="Role"
//                   className="  bg-[#333333]  w-[90%] text-[12px]  p-2 inp form-control  text-white focus:bg-[#333333]"
//                   value={inputList[i].Role}
//                   placeholder="Your designation"
//                   onChange={(e) => handleinputchange(e, i)}
//                 />
//                 <label htmlFor="">Role</label>
//               </div>
//             </div>
//             <br />
//             <div className="form-group form-floating  ">
//               <input
//                 type="text"
//                 name="Year"
//                 className="  bg-[#333333] w-[90%] text-[12px]   p-2 inp form-control  text-white focus:bg-[#333333]"
//                 value={inputList[i].Year}
//                 placeholder="Date"
//                 onChange={(e) => handleinputchange(e, i)}
//               />
//               <label htmlFor="">Time spent</label>
//             </div>
//             <br />
//             <div className="form-group form-floating">
//               <input
//                 type="text"
//                 name="Company"
//                 className="  bg-[#333333] w-[90%] text-[12px]   p-2 inp  form-control  text-white focus:bg-[#333333]"
//                 value={inputList[i].Company}
//                 placeholder="Company Name"
//                 onChange={(e) => handleinputchange(e, i)}
//               />
//               <label htmlFor="">Company</label>
//             </div>
//           </div>

//           {/* <div className="w-[65%] bord ord">
//             <h1
//               className=" text-[15px]
//               ml-[5%] text-[#2BABE2] pb-4   "
//             >
//               Work Experience
//             </h1>

//             <div>
//               <h1 className="  font-extrabold   hh ml-[8%]  break-words text-[12px]  text-black mt-14  mb-8">
//                 {inputList[i].Role.length === 0
//                   ? "Designation:-"
//                   : inputList[i].Role}
//               </h1>
//               <span className="    text-[12px]      hh ml-[9%]  break-words text-black mt-14 ">
//                 {inputList[i].Year.length === 0 ? "Year" : inputList[i].Year}
//               </span>
//               <span className="    text-[12px]       hh ml-4  break-words text-[#2BABE2] mt-14 ">
//                 {inputList[i].Company.length === 0
//                   ? "Company Name:-"
//                   : inputList[i].Company}
//               </span>
//               <span className="text-black text-[12px] ">Town</span>
//               <br />
//               <ol
//                 className="text-black  ml-[12%] text-[12px] "
//                 style={{ listStyleType: "disc" }}
//               >
//                 <li className="mt-4">Details Of Jobs done</li>
//                 <li className="mt-4">Tasks And Achievements</li>
//               </ol>
//             </div>
//           </div> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Work;
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
          <div className=" w-[30%]  bg-[#333333]">
            <h1 className=" text-[25px] font-extrabold pt-12 ">
              Work Experience
            </h1>

            <div className="  mt-10">
              <div className=" form-floating">
                <input
                  type="text"
                  name="Role"
                  className="  bg-[#333333]  w-[90%] p-2 inp form-control  text-white focus:bg-[#333333]"
                  value={inputList[i].Role}
                  placeholder="Your designation"
                  onChange={(e) => handleinputchange(e, i)}
                />
                <label htmlFor="">Role</label>
              </div>
            </div>
            <br />
            <div className="form-group form-floating  ">
              <input
                type="date"
                name="Year"
                className="  bg-[#333333] w-[90%]  p-2 inp form-control  text-white focus:bg-[#333333]"
                value={inputList[i].Year}
                placeholder="Date"
                onChange={(e) => handleinputchange(e, i)}
              />
              <label htmlFor="">Time spent</label>
            </div>
            <br />
            <div className="form-group form-floating">
              <input
                type="text"
                name="Company"
                className="  bg-[#333333] w-[90%]  p-2 inp  form-control  text-white focus:bg-[#333333]"
                value={inputList[i].Company}
                placeholder="Company Name"
                onChange={(e) => handleinputchange(e, i)}
              />
              <label htmlFor="">Company</label>
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
                  AddMore
                </button>
              )}
            </div>
          </div>

          <div className="w-[65%] mt-[-200px] bord ord">
            <h1
              className=" text-[25px]  
              ml-[5%] text-[#2BABE2] mb-8   "
            >
              Work Experience
            </h1>

            <div>
              <h1 className="  font-extrabold   ml-[8%]  break-words text-[15px ] text-black  mb-8">
                {inputList[i].Role.length === 0
                  ? "Designation:-"
                  : inputList[i].Role}
              </h1>
              <span className="    text-[15px ]     hh ml-[9%]  break-words text-black mb-8 ">
                {inputList[i].Year.length === 0 ? "Year" : inputList[i].Year}
              </span>
              <span className="    text-[15px ]      hh ml-4  break-words text-[#2BABE2] mb-8">
                {inputList[i].Company.length === 0
                  ? "Company Name:-"
                  : inputList[i].Company}
              </span>
              <span className="text-black text-[15px]">Town</span>
              <br />
              <ol
                className="text-black  ml-[12%] text-xl"
                style={{ listStyleType: "disc" }}
              >
                <li className="mt-4">Details Of Jobs done</li>
                <li className="mt-4">Tasks And Achievements</li>
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
