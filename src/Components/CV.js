import React from "react";

import Introcv from "./Introcv";
import Contactcv from "./Contactcv";
import Educationcv from "./Educationcv";
import Workcv from "./Workcv";

const CV = ({
  firstName,
  lastName,
  designation,
  street,
  email,
  phone,
  education,
  work,
}) => {
  return (
    <div className="cvs">
      <Introcv
        firstName={firstName}
        lastName={lastName}
        designation={designation}
      />
      <Contactcv street={street} phone={phone} email={email} />
      <div>
        {education.map((x, index) => (
          <>
            <div className="w-[70%]">
              <Educationcv education={education} index={index} />
            </div>
          </>
        ))}
      </div>
      <div className="mb-24">
        {work.map((x, index) => (
          <>
            <div className="w-[70%]">
              <Workcv work={work} index={index} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CV;
