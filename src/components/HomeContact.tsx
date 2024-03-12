import React, { ChangeEvent, FormEvent, useState } from 'react';

import contactFormBackground from '../assets/contactFormBackground.png';
import decoration from '../assets/heroDecoration.svg';

const HomeContact = () => {
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name === '') {
      setNameError('Podane imię jest nieprawidłowe!');
      console.log(nameError);
    } else if (!/^\S+$/.test(formData.name)) {
      setNameError('Imię powinno składać się z jednego słowa!');
      console.log(nameError);
    } else {
      setNameError('');
    }
    if (formData.email === '') {
      setEmailError('Podany email jest nieprawidłowy!');
      console.log(emailError);
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/.test(formData.email)) {
      setEmailError('Podany email jest nieprawidłowy!');
      console.log(emailError);
    } else {
      setEmailError('');
    }
    if (formData.message === '') {
      setMessageError('Wiadomość musi mieć conajmniej 120 znaków!');
      console.log(messageError);
    } else if (formData.message.length < 120) {
      setMessageError('Wiadomość musi mieć conajmniej 120 znaków!');
      console.log(messageError);
    } else {
      setMessageError('');
    }

    console.log(formData);
  };

  return (
    <section className="home_contact">
      <div className="home_contact_image">
        <img src={contactFormBackground} alt="pile of clothing" />
      </div>
      <div className="form_section">
        <p>Skontaktuj się z nami</p>
        <img src={decoration} alt="text decoration" className="form_decoration" />
        <form className="contact_form" onSubmit={handleSubmit} noValidate>
          <div className="name_email_form">
            <div className="name_form">
              <label>Wpisz swoje imię</label>
              <input
                placeholder="Krzysztof"
                type="text"
                name="name"
                value={formData.name}
                required
                onChange={handleInputChange}
                style={{ borderColor: nameError ? 'tomato' : 'black' }}
              ></input>
              {nameError && <span className="validation_error">{nameError}</span>}
            </div>
            <div className="email_form">
              <label>Wpisz swój email</label>
              <input
                placeholder="abc@xyz.pl"
                type="text"
                name="email"
                value={formData.email}
                required
                onChange={handleInputChange}
                style={{ borderColor: emailError ? 'tomato' : 'black' }}
              ></input>
              {emailError && <span className="validation_error">{emailError}</span>}
            </div>
          </div>
          <div className="message_form">
            <label>Wpisz swoją wiadomość</label>
            <textarea
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              name="message"
              value={formData.message}
              required
              onChange={handleInputChange}
              style={{ borderColor: messageError ? 'tomato' : 'black' }}
            ></textarea>
            {messageError && <span className="validation_error">{messageError}</span>}
          </div>
          <button className="button_form" type="submit">
            Wyślij
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
