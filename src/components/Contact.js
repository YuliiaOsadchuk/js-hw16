import React from "react";

import femaleIcon from "../img/female.png";
import maleIcon from "../img/male.png";
import unknownIcon from "../img/question-mark.png";

import "./Contact.css";

const genderIcon = {
  female: femaleIcon,
  male: maleIcon,
  unknown: unknownIcon,
};

const Contact = ({ firstName, lastName, phone, gender }) => (
  <div className="contact">
    <img src={genderIcon[gender]} alt="gender icon"></img>
    <div className="contact-info">
      <div className="contact-name">
        <span className="first-name">{firstName}</span>
        <span>{lastName}</span>
      </div>
      <span className="phone-number">{phone}</span>
    </div>
  </div>
);

export default Contact;
