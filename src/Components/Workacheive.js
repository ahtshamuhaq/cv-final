import React from "react";
import "../../src/App.css";
const Workacheive = ({ workach, setWorkach, index }) => {
  const handlechange = (e, index) => {
    const { name, value } = e.target;
    const list = [...workach];
    list[index][name] = value;
    setWorkach(list);
  };
  return (
    <div className="  bg-[#333333] bard pt-6">
      <div className="form-group form-floating mt-3">
        <input
          type="text"
          name="acheivements"
          className="  bg-[#333333] w-[70%]  p-2 inp form-control  text-white focus:bg-[#333333] "
          value={workach[index].acheivements}
          placeholder="acheivements"
          onChange={(e) => handlechange(e, index)}
        />
        <label htmlFor="floatingInput">acheivements</label>
      </div>
    </div>
  );
};

export default Workacheive;
