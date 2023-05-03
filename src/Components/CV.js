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
  stillWorking,
}) => {
  return (
    <div className="cv h-full">
      <Introcv
        firstName={firstName}
        lastName={lastName}
        designation={designation}
      />
      <Contactcv street={street} phone={phone} email={email} />
      <div>
        {education.map((x, index) => (
          <>
            <div>
              <Educationcv education={education} index={index} />
            </div>
          </>
        ))}
      </div>
      <div className="mb-24">
        {work.map((x, index) => (
          <>
            <div>
              <Workcv work={work} index={index} stillWorking={stillWorking} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CV;
