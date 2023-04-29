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
      {/* {education.map((x, i) => ( */}
      <div className="  w-[100%] ">
        <div className="    bg-[#333333] bard">
          <h1 className=" text-[15px] mb-8   font-extrabold pt-6  ">
            Work Details
          </h1>
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
          <div className="form-group form-floating ">
            <input
              type="text"
              name="Year"
              className="  bg-[#333333] w-[90%] text-[12px]   p-2 inp form-control  text-white focus:bg-[#333333] "
              value={work[index].year}
              placeholder="Time period"
              onChange={(e) => handleInputChange(e, index)}
              // onChange={handleYearChange}
            />
            <label htmlFor="floatingInput">Time Period</label>
          </div>
          <br />
          <div className="form-group form-floating ">
            <input
              type="text"
              name="Company"
              className="  bg-[#333333] w-[90%] text-[12px]   p-2 inp form-control  text-white focus:bg-[#333333] "
              value={work[index].institute}
              placeholder="Company Name"
              onChange={(e) => handleInputChange(e, index)}
              // onChange={handleInstituteChange}
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
              // onChange={handleInstituteChange}
            />
            <label htmlFor="floatingInput">Town Name</label>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Work;

// 2nd way
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

//   return (
//     <div className="content">
//       {inputList.map((x, i) => (
//         <div className="flex w-[100%] ">
//           <div className=" w-[30%]  bg-[#333333]">
//             <h1 className=" text-[25px] font-extrabold pt-12 ">
//               Work Experience
//             </h1>

//             <div className="  mt-10">
//               <div className=" form-floating">
//                 <input
//                   type="text"
//                   name="Role"
//                   className="  bg-[#333333]  w-[90%] p-2 inp form-control  text-white focus:bg-[#333333]"
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
//                 type="date"
//                 name="Year"
//                 className="  bg-[#333333] w-[90%]  p-2 inp form-control  text-white focus:bg-[#333333]"
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
//                 className="  bg-[#333333] w-[90%]  p-2 inp  form-control  text-white focus:bg-[#333333]"
//                 value={inputList[i].Company}
//                 placeholder="Company Name"
//                 onChange={(e) => handleinputchange(e, i)}
//               />
//               <label htmlFor="">Company</label>
//             </div>
//           </div>

//           <div className="w-[65%] bord orde">
//             <h1
//               className=" text-[25px]
//               ml-[5%] text-[#2BABE2] mb-8   "
//             >
//               Work Experience
//             </h1>

//             <div>
//               <h1 className="  font-extrabold   ml-[8%]  break-words text-[15px ] text-black  mb-8">
//                 {inputList[i].Role.length === 0
//                   ? "Designation "
//                   : inputList[i].Role}
//               </h1>
//               <span className="    text-[15px ]     hh ml-[9%]  break-words text-black mb-8 ">
//                 {inputList[i].Year.length === 0 ? "Year" : inputList[i].Year}
//               </span>
//               <span className="    text-[15px ]      hh ml-4  break-words text-[#2BABE2] mb-8">
//                 {inputList[i].Company.length === 0
//                   ? "Company Name "
//                   : inputList[i].Company}
//               </span>
//               <span className="text-black text-[15px]">Town</span>
//               <br />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Work;
