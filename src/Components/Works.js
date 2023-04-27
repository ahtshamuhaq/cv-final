import React, { useState } from "react";
import Work from "./Work";
import Descriptiontwo from "./Descriptiontwo";

const Full = () => {
  const [userNames, setUserNames] = useState([""]);
  const handleremove = (index) => {
    const list = [...userNames];
    list.splice(index, 1);
    setUserNames(list);
  };
  const handleaddclick = () => {
    setUserNames([...userNames, {}]);
  };

  return (
    <div>
      {userNames.map((x, i) => (
        <div>
          <div className="h-[100%]  w-[100%]">
            <Work />
            <Descriptiontwo />
          </div>
          <div className="col-md-2  bg-[#333333] w-[30%]">
            {userNames.length !== 1 && (
              <button
                className="bg-blue-500  ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handleremove(i)}
              >
                Remove
              </button>
            )}
            {userNames.length - 1 === i && (
              <button
                className="bg-blue-500 mt-2 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleaddclick}
              >
                AddMore
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Full;
