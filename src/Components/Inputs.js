import React from "react";

const Inputs = (props) => {
  return (
    <div>
      <input className="bg-zinc-600 p-2 " type="text" {...props} />
      {/* {console.log(props)} */}
    </div>
  );
};

export default Inputs;
