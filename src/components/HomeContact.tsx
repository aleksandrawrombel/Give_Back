import React from 'react';

import contactFormBackground from '../assets/contactFormBackground.png';
import decoration from '../assets/heroDecoration.svg';

const HomeContact = () => {
  return (
    <section className="home_contact">
      <div className="home_contact_image">
        <img src={contactFormBackground} alt="pile of clothing" />
      </div>
      <div className="form_section">
        <p>Skontaktuj się z nami</p>
        <img src={decoration} alt="text decoration" className="form_decoration" />
        <form className="contact_form">
          <div className="name_email_form">
            <div className="name_form">
              <label>Wpisz swoje imię</label>
              <input placeholder='Krzysztof'></input>
            </div>
            <div className="email_form">
              <label>Wpisz swój email</label>
              <input placeholder='abc@xyz.pl'></input>
            </div>
          </div>
          <div className="message_form">
          <label>Wpisz swoją wiadomość</label>
          <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'></textarea>
          </div>
          <button className="button_form">Wyślij</button>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
