import React from "react";
import "../../src/App.css";
const Description = ({ details, setDetails, index }) => {
  const handlechange = (e, index) => {
    const { name, value } = e.target;
    const list = [...details];
    list[index][name] = value;
    setDetails(list);
  };
  return (
    <div className="  bg-[#333333] bard pt-6">
      <div className="form-group form-floating ">
        <input
          type="text"
          name="specialization"
          className="  bg-[#333333] w-[90%]  p-2 inp form-control  text-white focus:bg-[#333333] "
          value={details[index].specialization}
          placeholder="Details"
          onChange={(e) => handlechange(e, index)}
        />
        <label htmlFor="floatingInput">Specialization</label>
      </div>
      <div className="form-group form-floating mt-3">
        <input
          type="text"
          name="acheivements"
          className="  bg-[#333333] w-[90%]  p-2 inp form-control  text-white focus:bg-[#333333] "
          value={details[index].acheivements}
          placeholder="acheivements"
          onChange={(e) => handlechange(e, index)}
        />
        <label htmlFor="floatingInput">acheivements</label>
      </div>
    </div>
  );
};

export default Description;
