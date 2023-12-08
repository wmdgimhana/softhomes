import React, { useState } from "react";
import "./ContactForm.scss";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setmessage] = useState("");

  return (
    <motion.div
      className="contactForm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section">
        {/* name */}
        <div className="input">
          <span>First Name</span>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>

        {/* last name */}
        <div className="input">
          <span>Last Name</span>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>
      <div className="section">
        {/* email */}
        <div className="input">
          <span>Email</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        {/* Telephone */}
        <div className="input">
          <span>Telephone</span>
          <input
            type="tel"
            onChange={(e) => setPhoneNo(e.target.value)}
            value={phoneNo}
          />
        </div>
      </div>
      <div className="section bottom">
        {/* message */}
        <div className="input">
          <span>Message</span>
          <textarea
            name="message"
            id="msg"
            cols="30"
            rows="10"
            onChange={(e) => setmessage(e.target.value)}
            value={message}
          ></textarea>
        </div>

        <button>Submit</button>
      </div>
    </motion.div>
  );
};

export default ContactForm;
