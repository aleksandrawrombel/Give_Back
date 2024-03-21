import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import decoration from '../assets/heroDecoration.svg';
import supabase from './supabase';

const LogIn = () => {
  interface LogInData {
    email: string;
    password: string;
  }

  //validate login form data

  const [logInData, setLogInData] = useState<LogInData>({
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLogInData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isCorrect = true;

    if (logInData.email === '') {
      setEmailError('Podany email jest nieprawidłowy!');
      isCorrect = false;
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/.test(logInData.email)) {
      setEmailError('Podany email jest nieprawidłowy!');
      isCorrect = false;
    } else {
      setEmailError('');
    }

    if (logInData.password === '') {
      setPasswordError('Podane hasło jest za krótkie!');
      isCorrect = false;
    } else if (logInData.password.length < 6) {
      setPasswordError('Podane hasło jest za krótkie!');
      isCorrect = false;
    } else {
      setPasswordError('');
    }

    if (isCorrect) {
      await handleLogInUser(logInData.email, logInData.password);
    }
  };

  //login user using supabase

  const handleLogInUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        throw error;
      } else {
        window.location.href = 'http://localhost:5173/';
      }
    } catch (error) {
      setPasswordError('Hasło jest nieprawidłowe!');
      console.log(error);
    }
  };

  return (
    <>
      <header className="landing_page_container log_in_header">
        <div className="header_nav">
          <nav>
            <ul className="nav_registration">
              <li>
                <Link to="/logowanie">Zaloguj</Link>
              </li>
              <li>
                <Link to="/rejestracja">Załóż konto</Link>
              </li>
            </ul>
            
            <ul className="nav_menu">
              <li>
              <Link className="nav_link" to="/#nav_registration">
                Start
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/#home_simple_steps">
                O co chodzi?
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/#about_us">
                O nas
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/#who_we_help">
                Fundacja i organizacje
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/#home_contact">
                Kontakt
              </Link>
            </li>
          </ul>
          </nav>
        </div>
      </header>
      <section className="log_in">
        <h1>Zaloguj się</h1>
        <img src={decoration} alt="text decoration" className="log_in_decoration" />
        <form className="log_in_form" onSubmit={handleSubmit} noValidate>
          <div className="log_in_form_inputs">
            <label className="log_in_email_label">Email</label>
            <input
              className="log_in_email"
              type="text"
              name="email"
              value={logInData.email}
              required
              onChange={handleInputChange}
              style={{ borderColor: emailError ? 'tomato' : 'black' }}
            ></input>
            {emailError && <span className="validation_error log_in_error">{emailError}</span>}
            <label className="log_in_password_label">Hasło</label>
            <input
              className="log_in_password"
              type="password"
              name="password"
              value={logInData.password}
              required
              onChange={handleInputChange}
              style={{ borderColor: passwordError ? 'tomato' : 'black' }}
            ></input>
            {passwordError && <span className="validation_error log_in_error">{passwordError}</span>}
          </div>
          <div className="log_in_buttons">
            <button>
              <Link to="/rejestracja" className="register_link">
                Załóż konto
              </Link>
            </button>
            <button>Zaloguj się</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default LogIn;
