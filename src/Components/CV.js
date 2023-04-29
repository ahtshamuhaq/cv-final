import React from "react";

import Introcv from "./Introcv";
import Contactcv from "./Contactcv";
import Educationcv from "./Educationcv";
import Descriptioncv from "./Descriptioncv";
import Work from "./Work";
import Workdescv from "./Workdescv";
import Workcv from "./Workcv";

const CV = ({
  firstName,
  lastName,
  designation,
  street,
  email,
  phone,
  education,
  details,
  work,
  workDetails,
}) => {
  return (
    <div>
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
            {details.map((x, index) => (
              <>
                <div className="w-[70%]">
                  <Descriptioncv details={details} index={index} />
                </div>
              </>
            ))}
          </>
        ))}
      </div>
      <div>
        {work.map((x, index) => (
          <>
            <div className="w-[70%]">
              <Workcv work={work} index={index} />
            </div>
            {workDetails.map((x, index) => (
              <>
                <div className="w-[70%]">
                  <Workdescv workDetails={workDetails} index={index} />
                </div>
              </>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default CV;
