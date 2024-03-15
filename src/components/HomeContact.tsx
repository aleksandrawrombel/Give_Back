import React, { ChangeEvent, FormEvent, useState } from 'react';

import supabase from './supabase';

import contactFormBackground from '../assets/contactFormBackground.png';
import decoration from '../assets/heroDecoration.svg';

const HomeContact = () => {
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  //validate form data

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isCorrect = true;

    if (formData.name === '') {
      setNameError('Podane imię jest nieprawidłowe!');
      isCorrect = false;
    } else if (!/^\S+$/.test(formData.name)) {
      setNameError('Imię powinno składać się z jednego słowa!');
      isCorrect = false;
    } else {
      setNameError('');
    }
    if (formData.email === '') {
      setEmailError('Podany email jest nieprawidłowy!');
      isCorrect = false;
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/.test(formData.email)) {
      setEmailError('Podany email jest nieprawidłowy!');
      isCorrect = false;
    } else {
      setEmailError('');
    }
    if (formData.message === '') {
      setMessageError('Wiadomość musi mieć conajmniej 120 znaków!');
      isCorrect = false;
    } else if (formData.message.length < 120) {
      setMessageError('Wiadomość musi mieć conajmniej 120 znaków!');
      isCorrect = false;
    } else {
      setMessageError('');
    }

    if (isCorrect) {
      await insertFormData();
    }
  };

  //insert form data to supabase

  const [successMessage, setSuccessMessage] = useState('');

  async function insertFormData() {
    try {
      const { data } = await supabase
        .from('ContactUs')
        .insert({ name: formData.name, email: formData.email, body: formData.message });

      setSuccessMessage('Wiadomość została wysłana! Wkrótce się skontaktujemy!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="home_contact" id="home_contact">
      <div className="home_contact_image">
        <img src={contactFormBackground} alt="pile of clothing" />
      </div>
      <div className="form_section">
        <p>Skontaktuj się z nami</p>
        <img src={decoration} alt="text decoration" className="form_decoration" />
        {successMessage && <span className="success_message">{successMessage}</span>}
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
