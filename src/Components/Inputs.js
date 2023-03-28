import React from "react";
import "../../src/App.css";

const Inputs = (props) => {
  return (
    <div>
      <input className="bg-zinc-600 p-2 " type="text" {...props} />
      {/* {console.log(props)} */}
    </div>
  );
};

export default Inputs;
