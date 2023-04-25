import React from "react";
import Intro from "./Intro";
import Contact from "./Contact";

const Form = ({
  setFirstName,
  firstName,
  setLastName,
  lastName,
  designation,
  setDesignation,
  street,
  setStreet,
  phone,
  setPhone,
  email,
  setEmail,
}) => {
  return (
    <div>
      <Intro
        firstName={firstName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        lastName={lastName}
        designation={designation}
        setDesignation={setDesignation}
      />
      <Contact
        street={street}
        setStreet={setStreet}
        setEmail={setEmail}
        email={email}
        phone={phone}
        setPhone={setPhone}
      />
    </div>
  );
};

export default Form;
