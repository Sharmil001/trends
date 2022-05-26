import React, { useEffect, useState } from "react";
import "./contactUs.css";
import emailjs from "emailjs-com";

const initialForm = {
  name: "",
  email: "",
  message: "",
};
const ContactUs = () => {
  const [formState, setFormState] = useState(initialForm);
  const [buttonMessage, setButtonMessage] = useState("Send Message.");
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formState;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "TRENDS — CONTACT US";
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const service_id = "service_ucqn9kb";
    const template_id = "template_vdpzagj";
    const userId = "user_Ve5NzbhqaKfrS64JkQLwR";
    try {
      console.log("formState", formState);
      await emailjs.send(service_id, template_id, formState, userId);
      setFormState(initialForm);
      setLoading(false);
      setButtonMessage("Success!!");
    } catch (err) {
      setLoading(false);
      setButtonMessage("Error, Try again.");
    }
  };

  return (
    <div className="main-contact-us">
      <h1 className="contact-us-header">CONTACT US</h1>
      <form className="contact-us-form" onSubmit={onSubmit}>
        <div className="name-email">
          <div className="name">
            <label className="input-label" htmlFor="name">
              NAME
            </label>
            <input
              name="name"
              className="name-input"
              type="text"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className="email">
            <label className="input-label" htmlFor="name">
              EMAIL
            </label>
            <input
              name="email"
              type="email"
              id="email-input"
              className="email-input"
              value={email}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="message">
          <label className="input-label" htmlFor="name">
            MESSAGE
          </label>
          <textarea
            name="message"
            type="text"
            className="message-textarea"
            value={message}
            onChange={onChange}
            required
          />
        </div>
        <div className="submit-button">
          <button type="submit" className="btn-send">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
