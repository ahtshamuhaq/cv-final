import React from "react";

import Introcv from "./Introcv";
import Contactcv from "./Contactcv";

const CV = ({ firstName, lastName, designation, street, email, phone }) => {
  return (
    <div>
      <Introcv
        firstName={firstName}
        lastName={lastName}
        designation={designation}
      />
      <Contactcv street={street} phone={phone} email={email} />
    </div>
  );
};

export default CV;
