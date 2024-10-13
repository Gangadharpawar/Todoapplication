import React from "react";
import "../css/Contact.css";
function Contact() {
  return (
    <div>
      <form method="POST">
        <div className="contact-us">Contact us</div>
        <div className="wraper">
          <div className="input-wrapper">
            <label>Name</label>
            <input type="text" id="username" name="username" />
            <span className="error" id="nameerror"></span>
          </div>
          <div className="input-wrapper">
            <label>Number</label>
            <input type="number" id="usermobile" name="usermobile" />
            <span className="error" id="mobilerror"></span>
          </div>
          <div className="input-wrapper">
            <label>Email</label>
            <input type="email" id="useremail" name="useremail" />
            <span className="error" id="emailerror"></span>
          </div>
          <div className="input-wrapper">
            <label>Gender</label>
            <input
              type="radio"
              id="usergender"
              name="usergender"
              value="Male"
              checked
            />
            Male
            <input
              type="radio"
              id="usergender"
              name="usergender"
              value="Female"
            />
            Female
            <span className="error" id="gendererror"></span>
          </div>
          <div className="submit-btn">
            <input type="button" id="submitbtn" value="SUBMIT" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
