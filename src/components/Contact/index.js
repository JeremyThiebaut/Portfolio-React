import React from "react";
import "./style.scss";
import backPictures from "../../img/work1.jpg";
import phone from "../../img/phone.png";
import enveloppe from "../../img/enveloppe.png";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

const Contact = ({ onInputChange, onFormSubmit, messageInput }) => {
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onInputChange({
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit();
  };

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
          <form className="contact-right_form" onSubmit={handleSubmit}>
            <h2 className="contact-right_title">Envoyez-nous un email</h2>
            <table className="contact-right_table">
              <tbody>
                <tr>
                  <td className="contact-right_td-title" colSpan="2">
                    Entrer votre Nom/Prénom *
                  </td>
                </tr>
                <tr>
                  <td className="contact-right_td">
                    <input
                      className="contact-right_input"
                      name="firstName"
                      type="text"
                      placeholder="Nom"
                      onChange={handleInputChange}
                      value={messageInput.firstName}
                    />
                  </td>
                  <td className="contact-right_td">
                    <input
                      className="contact-right_input"
                      name="lastName"
                      type="text"
                      placeholder="Prénom"
                      onChange={handleInputChange}
                      value={messageInput.lastName}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="contact-right_table">
              <tbody>
                <tr>
                  <td className="contact-right_td-title">
                    Entrer votre adresse email *
                  </td>
                </tr>
                <tr>
                  <td className="contact-right_td">
                    <input
                      className="contact-right_input"
                      name="mail"
                      type="email"
                      placeholder="Ex: exemple@email.com"
                      onChange={handleInputChange}
                      value={messageInput.mail}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="contact-right_table">
              <tbody>
                <tr>
                  <td className="contact-right_td-title">
                    Entrer votre numéro de téléphone *
                  </td>
                </tr>
                <tr>
                  <td className="contact-right_td">
                    <input
                      className="contact-right_input"
                      type="number"
                      placeholder="+33 6 00 00 00 00"
                      name="phone"
                      onChange={handleInputChange}
                      value={messageInput.phone}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="contact-right_table">
              <tbody>
                <tr>
                  <td className="contact-right_td-title">Message *</td>
                </tr>
                <tr>
                  <td className="contact-right_td">
                    <textarea
                      className="contact-right_input"
                      type="text"
                      placeholder="Ecrivez votre message"
                      name="message"
                      rows="5"
                      onChange={handleInputChange}
                      value={messageInput.message}
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="contact-right_choice">
              <NavLink className="contact-right_back" to="/">
                Retour a l'accueil
              </NavLink>
              <input
                className="contact-right_send"
                type="submit"
                value="Envoyer le mail"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  message: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
  }),
};

export default Contact;
