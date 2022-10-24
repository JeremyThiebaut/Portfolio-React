import React from "react";
import "./style.scss";
import backPictures from "../../img/work1.jpg";
import phone from "../../img/phone.png";
import enveloppe from "../../img/enveloppe.png";

import PropTypes from "prop-types";

const Contact = ({ onInputChange, onMessageSend, message }) => {
  return (
    <div className="contact">
      <div className="contact-left">
        <img className="contact-left-pictures" src={backPictures} alt="" />
        <div className="contact-left-container">
          <div className="contact-left-title">
            <div className="contact-left-phone">
              <div className="contact-left-logo">
                <img
                  className="contact-left-logophone"
                  src={phone}
                  alt="logo de téléphone"
                />
                <p className="contact-left-textPhone">Nous appeler :</p>
              </div>
              <a
                className="contact-left-phoneNumber"
                href="tel:+33 6 58 92 66 48"
              >
                +33 6 58 92 66 48
              </a>
            </div>
            <div className="contact-left-mail">
              <div className="contact-left-logo">
                <img
                  className="contact-left-logophone"
                  src={enveloppe}
                  alt="logo de téléphone"
                />
                <p className="contact-left-textPhone">Notre adresse mail :</p>
              </div>
              <a
                className="contact-left-phoneNumber"
                href="mailto:contact@jtdev.fr"
              >
                contact@jtdev.fr
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <div className="contact-right-container">
          <form
            className="message-form"
            onSubmit={(evt) => {
              evt.preventDefault();
              onMessageSend();
            }}
          >
            <input
              className="message-form_input"
              type="text"
              onChange={(evt) => {
                onInputChange(evt.target.value);
              }}
              value={message}
              placeholder="Nom"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onMessageSend: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Contact;
