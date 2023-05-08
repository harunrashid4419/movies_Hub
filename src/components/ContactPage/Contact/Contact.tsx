import React from "react";
import "./Contact.css";
import ContactBanner from "../ContactBanner/ContactBanner";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <div className="container">
        <div className="main-contact">
          <div className="flex-column">
            <AiOutlineMail />
            <h1>Mail Us</h1>
            <p>
              <span>movies.hub@gmail.com</span> Interactively grow backend ideas
              for cross-platform models.
            </p>
          </div>
          <div className="flex-column">
            <AiOutlinePhone />
            <h1>Call Us</h1>
            <p>
              <span>+880745454554</span> Distinctively exploit optimal
              alignments for intuitive bandwidth.
            </p>
          </div>
          <div className="flex-column">
            <BiCurrentLocation />
            <h1>Location</h1>
            <p>Road 52, Mirpur, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
